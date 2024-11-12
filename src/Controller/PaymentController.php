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
        private LoggerInterface $logger,
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Initialize Stripe payment session for an order
     */
    #[Route('/{id_order}', name: 'app_payment')]
    public function index($id_order, OrderRepository $orderRepository): Response
    {
        Stripe::setApiKey($_ENV['STRIPE_SECRET_KEY']);

        // Find the order for the current user
        $order = $orderRepository->findOneBy([
            'id' => $id_order,
            'user' => $this->getUser()
        ]);

        if (!$order) {
            $this->addFlash('warning', 'You are not allowed to access this order.');
            return $this->redirectToRoute('app_order');
        }

        // Prepare products for Stripe
        $products_for_stripe = [];

        // Add each order detail as a line item
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

        // Add shipping cost if applicable
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
            // Create Stripe checkout session
            $checkout_session = Session::create([
                'customer_email' => $this->getUser()->getEmail(),
                'line_items' => $products_for_stripe,
                'mode' => 'payment',
                'success_url' => $_ENV['DOMAIN'] . '/order/payment/success/{CHECKOUT_SESSION_ID}',
                'cancel_url' => $_ENV['DOMAIN'] . '/order/payment/cancelled',
            ]);

            $order->setStripeSessionId($checkout_session->id);
            $this->entityManager->flush();

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

    /**
     * Handle successful payment and assign game keys
     */
    #[Route('/success/{stripe_session_id}', name: 'app_payment_success')]
    public function success($stripe_session_id, OrderRepository $orderRepository, CartService $cartService): Response
    {
        // Find the order using Stripe session ID
        $order = $orderRepository->findCompleteOrder($stripe_session_id, $this->getUser());

        if (!$order) {
            $this->addFlash('warning', 'You are not allowed to access this order.');
            return $this->redirectToRoute('app_home');
        }

        // Process only pending orders
        if ($order->getState() == '1') {
            try {
                // Process each order detail
                foreach ($order->getOrderDetails() as $orderDetail) {
                    // Only process digital products
                    if ($order->getCarrierName() === 'Email') {
                        try {
                            // Get and assign a game key
                            $key = $this->gameKeyService->getAvailableKeyForOrder(
                                $orderDetail,
                                $this->getUser()
                            );

                            // Mark the key as sold
                            $key->setStatus('SOLD');
                            $key->setSoldAt(new \DateTimeImmutable());
                            $key->setReservedFor(null);

                            // Assign key to order detail
                            $orderDetail->setGameKey($key);
                        } catch (\Exception $e) {
                            $this->logger->error('Error assigning game key: ' . $e->getMessage(), [
                                'order_id' => $order->getId(),
                                'product_name' => $orderDetail->getProductName()
                            ]);
                            throw $e;
                        }
                    }
                }

                // Complete the order
                $order->setState('2');
                $cartService->remove();
                $this->entityManager->flush();

                // Ajouter un message flash de succès
                if ($order->getCarrierName() === 'Email') {
                    $this->addFlash('success', 'Thank you for your purchase! Your game keys are now available in your game library.');
                } else {
                    $this->addFlash('success', 'Thank you for your purchase! We will process your order shortly.');
                }

            } catch (\Exception $e) {
                $this->logger->error('Error processing successful payment: ' . $e->getMessage(), [
                    'order_id' => $order->getId(),
                    'stripe_session' => $stripe_session_id
                ]);
                $this->addFlash('error', 'An error occurred while processing your order.');
                return $this->redirectToRoute('app_account');
            }
        }

        return $this->render('payment/success.html.twig', [
            'order' => $order,
            'hasDigitalProducts' => ($order->getCarrierName() === 'Email')
        ]);
    }

    /**
     * Handle cancelled payment
     */
    #[Route('/cancelled', name: 'app_payment_cancelled')]
    public function cancelled(): Response
    {
        $this->addFlash('warning', 'Your payment was cancelled.');
        return $this->redirectToRoute('app_cart', ['reason' => 'cancelled']);
    }
}
