<?php

namespace App\Controller;

use App\Repository\OrderRepository;
use App\Services\CartService;
use App\Services\GameKeyService;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Checkout\Session;
use Stripe\Stripe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Psr\Log\LoggerInterface;

#[Route('/order/payment')]
class PaymentController extends AbstractController
{
    public function __construct(
        private GameKeyService $gameKeyService,
        private LoggerInterface $logger
    ) {}

    #[Route('/{id_order}', name: 'app_payment')]
    public function index($id_order, OrderRepository $orderRepository, EntityManagerInterface $entityManager): Response
    {
        Stripe::setApiKey($_ENV['STRIPE_SECRET_KEY']);

        $order = $orderRepository->findOneBy([
            'id' => $id_order,
            'user' => $this->getUser()
        ]);

        if (!$order) {
            $this->addFlash('warning', 'You are not allowed to access this order.');
            return $this->redirectToRoute('app_order');
        }

        $products_for_stripe = [];

        foreach ($order->getOrderDetails() as $product) {
            $products_for_stripe[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'unit_amount' => (int) ($product->getProductPriceWt() * 100),
                    'product_data' => [
                        'name' => $product->getProductName(),
                        'images' => [
                            $_ENV['DOMAIN'].'/uploads/products/'.$product->getProductPicture()
                        ]
                    ]
                ],
                'quantity' => $product->getProductQuantity(),
            ];
        }

        if ($order->getCarrierPrice() > 0) {
            $products_for_stripe[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'unit_amount' => (int) ($order->getCarrierPrice() * 100),
                    'product_data' => [
                        'name' => 'Carrier : '.$order->getCarrierName(),
                    ]
                ],
                'quantity' => 1,
            ];
        }

        try {
            $checkout_session = Session::create([
                'customer_email' => $this->getUser()->getEmail(),
                'line_items' => $products_for_stripe,
                'mode' => 'payment',
                'success_url' => $_ENV['DOMAIN'] . '/order/payment/success/{CHECKOUT_SESSION_ID}',
                'cancel_url' => $_ENV['DOMAIN'] . '/order/payment/cancelled',
            ]);

            $order->setStripeSessionId($checkout_session->id);
            $entityManager->flush();

            return new RedirectResponse($checkout_session->url);

        } catch (\Exception $e) {
            $this->logger->error('Payment initialization error: ' . $e->getMessage(), [
                'order_id' => $order->getId(),
                'user_id' => $this->getUser()->getId()
            ]);
            $this->addFlash('error', 'An error occurred during payment initialization.');
            return $this->redirectToRoute('app_order');
        }
    }

    #[Route('/success/{stripe_session_id}', name: 'app_payment_success')]
    public function success($stripe_session_id, OrderRepository $orderRepository, EntityManagerInterface $entityManager, CartService $cartService): Response
    {
        $order = $orderRepository->findCompleteOrder($stripe_session_id, $this->getUser());

        if (!$order) {
            $this->addFlash('warning', 'You are not allowed to access this order.');
            return $this->redirectToRoute('app_home');
        }

        if($order->getState() == '1') {
            try {
                // Changer l'état de la commande
                $order->setState('2');

                // Récupérer toutes les clés de jeu de la commande
                $gameKeys = [];
                foreach ($order->getOrderDetails() as $orderDetail) {
                    if ($orderDetail->getGameKey()) {
                        $gameKeys[] = $orderDetail->getGameKey();
                    }
                }

                // Marquer les clés comme vendues
                if (!empty($gameKeys)) {
                    $this->gameKeyService->assignKeysToOrder($gameKeys);
                }

                $cartService->remove();
                $entityManager->flush();

            } catch (\Exception $e) {
                $this->logger->error('Error processing successful payment: ' . $e->getMessage(), [
                    'order_id' => $order->getId(),
                    'stripe_session' => $stripe_session_id
                ]);
            }
        }

        return $this->render('payment/success.html.twig', [
            'order' => $order,
            'hasDigitalProducts' => ($order->getCarrierName() === 'Email')
        ]);
    }

    #[Route('/cancelled', name: 'app_payment_cancelled')]
    public function cancelled(OrderRepository $orderRepository, EntityManagerInterface $entityManager): Response
    {
        // Récupérer la dernière commande non payée
        $order = $orderRepository->findOneBy([
            'user' => $this->getUser(),
            'state' => '1'  // État initial
        ]);

        if ($order) {
            try {
                // Libérer toutes les clés réservées
                foreach ($order->getOrderDetails() as $orderDetail) {
                    if ($orderDetail->getGameKey()) {
                        $gameKey = $orderDetail->getGameKey();
                        $gameKey->setStatus('AVAILABLE');
                        $gameKey->setReservedAt(null);
                        $orderDetail->setGameKey(null);
                    }
                }

                $entityManager->remove($order);
                $entityManager->flush();

            } catch (\Exception $e) {
                $this->logger->error('Error cancelling order: ' . $e->getMessage(), [
                    'order_id' => $order->getId()
                ]);
            }
        }

        $this->addFlash('warning', 'Your payment was cancelled.');
        return $this->redirectToRoute('app_cart');
    }
}
