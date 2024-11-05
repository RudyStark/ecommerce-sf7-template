<?php

namespace App\Controller;

use App\Entity\Carrier;
use App\Entity\Order;
use App\Entity\OrderDetail;
use App\Form\OrderType;
use App\Services\CartService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/order')]
class OrderController extends AbstractController
{
    #[Route('/delivery', name: 'app_order')]
    public function index(CartService $cartService, EntityManagerInterface $entityManager): Response
    {
        if (!$this->getUser()) {
            $this->addFlash('warning', 'You must be logged in to place an order.');
            return $this->redirectToRoute('app_login');
        }

        $cart = $cartService->getCart();
        $hasDigital = false;
        $hasPhysical = false;

        foreach ($cart as $item) {
            if ($item['object']->isDigital()) {
                $hasDigital = true;
            } else {
                $hasPhysical = true;
            }
        }

        // Si uniquement produits digitaux, créer la commande directement
        if ($hasDigital && !$hasPhysical) {
            $totalWt = 0;
            foreach ($cart as $item) {
                $totalWt += $item['object']->getPriceWt() * $item['quantity'];
            }

            $carrier = $entityManager->getRepository(Carrier::class)->findOneBy(['name' => 'Email']);

            $order = new Order();
            $order->setUser($this->getUser());
            $order->setCreatedAt(new \DateTime());
            $order->setState('1');
            $order->setCarrierName($carrier->getName());
            $order->setCarrierPrice($carrier->getPrice());
            $order->setDelivery($this->getUser()->getEmail());

            foreach ($cart as $product) {
                $orderDetail = new OrderDetail();
                $orderDetail->setProductName($product['object']->getName());
                $orderDetail->setProductPicture($product['object']->getPicture());
                $orderDetail->setProductPrice($product['object']->getPrice());
                $orderDetail->setProductVat($product['object']->getTva());
                $orderDetail->setProductQuantity($product['quantity']);
                $orderDetail->setProductGameKey($product['object']->getGameKey());
                $order->addOrderDetail($orderDetail);
            }

            $entityManager->persist($order);
            $entityManager->flush();

            return $this->render('order/summary.html.twig', [
                'cart' => $cart,
                'order' => $order,
                'totalWt' => $totalWt,
                'choices' => [
                    'carriers' => $carrier
                ]
            ]);
        }

        // Sinon, afficher le formulaire normal
        $addresses = $this->getUser()->getAddresses();
        if (count($addresses) === 0 && $hasPhysical) {
            $this->addFlash('warning', 'You must add an address before you can place an order.');
            return $this->redirectToRoute('app_account_address_form');
        }

        $form = $this->createForm(OrderType::class, null, [
            'addresses' => $addresses
        ]);

        return $this->render('order/index.html.twig', [
            'deliveryForm' => $form->createView(),
            'cart' => $cart
        ]);
    }

    #[Route('/summary', name: 'app_order_summary')]
    public function add(Request $request, CartService $cartService, EntityManagerInterface $entityManager): Response
    {
        if($request->getMethod() != 'POST') {
            $this->addFlash('warning', 'You must validate the form before you can place an order.');
            return $this->redirectToRoute('app_cart');
        }

        $cart = $cartService->getCart();
        $hasDigital = false;
        $hasPhysical = false;

        foreach ($cart as $item) {
            if ($item['object']->isDigital()) {
                $hasDigital = true;
            } else {
                $hasPhysical = true;
            }
        }

        $totalWt = 0;
        foreach ($cart as $item) {
            $totalWt += $item['object']->getPriceWt() * $item['quantity'];
        }

        $form = $this->createForm(OrderType::class, null, [
            'addresses' => $hasPhysical ? $this->getUser()->getAddresses() : null,
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Create Order
            $order = new Order();
            $order->setUser($this->getUser());
            $order->setCreatedAt(new \DateTime());
            $order->setState('1');

            // Set delivery information
            if ($hasPhysical) {
                $addressObject = $form->get('addresses')->getData();
                $address = $addressObject->getFirstname() . ' ' . $addressObject->getLastname(). '<br>';
                $address .= $addressObject->getAddress() . '<br>';
                $address .= $addressObject->getPostal() . ' ' . $addressObject->getCity() . '<br>';
                $address .= $addressObject->getCountry() . '<br>';
                $address .= $addressObject->getPhone();

                $carrier = $form->get('carriers')->getData();
                $order->setCarrierName($carrier->getName());
                $order->setCarrierPrice($carrier->getPrice());
                $order->setDelivery($address);
            } else {
                $carrier = $form->get('carriers')->getData();
                $order->setCarrierName($carrier->getName());
                $order->setCarrierPrice($carrier->getPrice());
                $order->setDelivery($this->getUser()->getEmail());
            }

            foreach ($cart as $product) {
                $orderDetail = new OrderDetail();
                $orderDetail->setProductName($product['object']->getName());
                $orderDetail->setProductPicture($product['object']->getPicture());
                $orderDetail->setProductPrice($product['object']->getPrice());
                $orderDetail->setProductVat($product['object']->getTva());
                $orderDetail->setProductQuantity($product['quantity']);
                $orderDetail->setProductGameKey($product['object']->getGameKey());
                $order->addOrderDetail($orderDetail);
            }

            $entityManager->persist($order);
            $entityManager->flush();

            return $this->render('order/summary.html.twig', [
                'cart' => $cart,
                'order' => $order,
                'totalWt' => $totalWt,
                'choices' => [
                    'addresses' => $hasPhysical ? $form->get('addresses')->getData() : null,
                    'carriers' => $form->get('carriers')->getData()
                ]
            ]);
        }

        // Si le formulaire n'est pas valide, redirection vers la page delivery
        return $this->redirectToRoute('app_order');
    }
}
