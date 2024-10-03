<?php

namespace App\Controller;

use App\Services\CartService;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Turbo\TurboBundle;

class CartController extends AbstractController
{
    #[Route('/cart', name: 'app_cart')]
    public function index(CartService $cart): Response
    {
        return $this->render('cart/index.html.twig', [
            'cart' => $cart->getCart(),
            'totalWithTaxes' => $cart->getTotalWithTaxes(),
        ]);
    }

    #[Route('/cart/add/{id}', name: 'app_cart_add')]
    public function add($id, CartService $cartService, ProductRepository $productRepository, Request $request): Response
    {
        $product = $productRepository->findOneById($id);

        // Use the CartService to add the product to the cart
        $cartService->add($product);

        // Get the total quantity of items in the cart
        $cartQty = $cartService->getTotalQuantity();

        // Check if the request is for a Turbo stream
        if (TurboBundle::STREAM_FORMAT === $request->getPreferredFormat()) {
            return $this->render('cart/_cart_toast.html.twig', [
                'product' => $product,
                'cartQty' => $cartQty,
            ], new Response('', 200, ['content-type' => TurboBundle::STREAM_MEDIA_TYPE]));
        }

        // Redirect to the cart page if the request is not for a Turbo stream
        return $this->redirect($request->headers->get('referer'));
    }

    #[Route('/cart/decrease/{id}', name: 'app_cart_decrease')]
    public function decrease($id, CartService $cartService, Request $request): Response
    {
        // Utiliser CartService pour diminuer la quantité
        $cartService->decrease($id);

        return $this->redirect($request->headers->get('referer'));
    }

    #[Route('/cart/clear', name: 'app_cart_clear')]
    public function clear(CartService $cartService): Response
    {
        $cartService->remove();

        return $this->redirectToRoute('app_cart');
    }
}
