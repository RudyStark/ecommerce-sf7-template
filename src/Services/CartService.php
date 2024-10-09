<?php

namespace App\Services;

use Symfony\Component\HttpFoundation\RequestStack;

class CartService
{
    public function __construct(private RequestStack $requestStack)
    {
    }

    /**
     * function add product to cart
     * @param $product
     * @return void
     */
    public function add($product)
    {
        $cart = $this->requestStack->getSession()->get('cart', []);

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

    /**
     * function decrease product quantity
     * @param $id
     * @return void
     */
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

    /**
     * function clear cart
     * @return void
     */
    public function remove()
    {
        $this->requestStack->getSession()->remove('cart');
    }

    /**
     * function remove item from cart
     * @param $id
     * @return void
     */
    public function removeItem($id)
    {
        $cart = $this->requestStack->getSession()->get('cart', []);

        if (isset($cart[$id])) {
            unset($cart[$id]);
        }

        $this->requestStack->getSession()->set('cart', $cart);
    }

    /**
     * function get cart
     * @return array
     */
    public function getCart(): array
    {
        return $this->requestStack->getSession()->get('cart', []);
    }

    /**
     * function get total quantity
     * @return int
     */
    public function getTotalQuantity(): int
    {
        $cart = $this->getCart();
        return array_reduce($cart, function ($total, $product) {
            return $total + $product['quantity'];
        }, 0);
    }

    /**
     * function get total with taxes
     * @return float
     */
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
            $total += $product['object']->getPrice() * $product['quantity'];
        }

        return $total * 1.2;
    }
}
