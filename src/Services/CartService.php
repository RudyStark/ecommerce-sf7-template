<?php

namespace App\Services;

use Symfony\Component\HttpFoundation\RequestStack;

class CartService
{
    public function __construct(
        private RequestStack $requestStack
    ) {}

    public function add($product)
    {
        $cart = $this->requestStack->getSession()->get('cart', []);

        if ($product->isDigital()) {
            $availableKeys = $product->getAvailableGameKeys()->count();
            dump('Available Keys for ' . $product->getName() . ': ' . $availableKeys);

            $cart = $this->requestStack->getSession()->get('cart', []);
            $currentQuantity = isset($cart[$product->getId()]) ? $cart[$product->getId()]['quantity'] : 0;
            dump('Current Quantity in Cart: ' . $currentQuantity);

            if ($availableKeys < ($currentQuantity + 1)) {
                throw new \Exception('This product is currently out of stock');
            }
        }

        if (isset($cart[$product->getId()])) {
            $cart[$product->getId()]['quantity']++;
        } else {
            $cart[$product->getId()] = [
                'object' => $product,
                'quantity' => 1,
            ];
        }

        $this->requestStack->getSession()->set('cart', $cart);
    }

    public function decrease($id)
    {
        $cart = $this->requestStack->getSession()->get('cart', []);

        if (isset($cart[$id])) {
            if ($cart[$id]['quantity'] > 1) {
                $cart[$id]['quantity']--;
            } else {
                unset($cart[$id]);
            }
        }

        $this->requestStack->getSession()->set('cart', $cart);
    }

    public function remove()
    {
        $this->requestStack->getSession()->remove('cart');
    }

    public function removeItem($id)
    {
        $cart = $this->requestStack->getSession()->get('cart', []);

        if (isset($cart[$id])) {
            unset($cart[$id]);
        }

        $this->requestStack->getSession()->set('cart', $cart);
    }

    public function getCart(): array
    {
        return $this->requestStack->getSession()->get('cart', []);
    }

    public function getTotalQuantity(): int
    {
        $cart = $this->getCart();
        return array_reduce($cart, function ($total, $product) {
            return $total + $product['quantity'];
        }, 0);
    }

    public function getTotalWithoutTaxes(): float
    {
        $cart = $this->getCart();
        $total = 0;

        foreach ($cart as $product) {
            $total += $product['object']->getPrice() * $product['quantity'];
        }

        return $total;
    }

    public function getTotalWithTaxes(): float
    {
        $cart = $this->getCart();
        $total = 0;

        foreach ($cart as $product) {
            $total += $product['object']->getPriceWt() * $product['quantity'];
        }

        return $total;
    }
}
