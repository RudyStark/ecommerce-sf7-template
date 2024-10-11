<?php

namespace App\Controller;

use App\Repository\OrderRepository;
use App\Services\CartService;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Checkout\Session;
use Stripe\Stripe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;

#[Route('/order/payment')]
class PaymentController extends AbstractController
{
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

        $checkout_session = Session::create([
            'customer_email' => $this->getUser()->getEmail(),
            'line_items' => $products_for_stripe,
            'mode' => 'payment',
            'success_url' => $_ENV['DOMAIN'] . '/order/payment/success/{CHECKOUT_SESSION_ID}',
            'cancel_url' => $_ENV['DOMAIN'] . '/cart/cancelled',
        ]);

        $order->setStripeSessionId($checkout_session->id);
        $entityManager->flush();

        // Rediriger vers l'URL de paiement Stripe
        return new RedirectResponse($checkout_session->url);
    }

    #[Route('/success/{stripe_session_id}', name: 'app_payment_success')]
    public function success($stripe_session_id, OrderRepository $orderRepository, EntityManagerInterface $entityManager, CartService $cartService): Response
    {
        $order = $orderRepository->findOneBy([
            'stripe_session_id' => $stripe_session_id,
            'user' => $this->getUser()
        ]);

        if (!$order) {
            $this->addFlash('warning', 'You are not allowed to access this order.');
            return $this->redirectToRoute('app_home');
        }

        if($order->getState() == '1') {
            $order->setState('2');
            $cartService->remove();
            $entityManager->flush();
        }

        return $this->render('payment/success.html.twig', [
            'order' => $order
        ]);
    }
}
