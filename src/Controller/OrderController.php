<?php

namespace App\Controller;

use App\Entity\Carrier;
use App\Entity\Order;
use App\Entity\OrderDetail;
use App\Form\OrderType;
use App\Services\CartService;
use App\Services\GameKeyService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/order')]
class OrderController extends AbstractController
{
    public function __construct(
        private GameKeyService $gameKeyService
    ) {}

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
                // Vérifier la disponibilité des clés
                if (!$item['object']->hasAvailableKeys()) {
                    $this->addFlash('error', 'Not enough game keys available for ' . $item['object']->getName());
                    return $this->redirectToRoute('app_cart');
                }
            } else {
                $hasPhysical = true;
            }
        }

        // Si uniquement produits digitaux
        if ($hasDigital && !$hasPhysical) {
            try {
                // Réserver les clés
                $reservedKeys = [];
                foreach ($cart as $item) {
                    if ($item['object']->isDigital()) {
                        try {
                            $key = $this->gameKeyService->getOrReserveKey($item['object'], $this->getUser());
                            $reservedKeys[$item['object']->getId()] = [$key];
                        } catch (\Exception $e) {
                            throw $e;
                        }
                    }
                }

                $totalWt = 0;
                foreach ($cart as $item) {
                    $totalWt += $item['object']->getPriceWt() * $item['quantity'];
                }

                $carrier = $entityManager->getRepository(Carrier::class)->findOneBy(['name' => 'Email']);

                // Créer la commande
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

                    if ($product['object']->isDigital()) {
                        $key = $reservedKeys[$product['object']->getId()][0];
                        $orderDetail->setGameKey($key);
                    }

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

            } catch (\Exception $e) {
                $this->addFlash('error', $e->getMessage());
                return $this->redirectToRoute('app_cart');
            }
        }

        // Pour les produits physiques
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
                // Vérifier la disponibilité des clés
                if (!$item['object']->hasAvailableKeys()) {
                    $this->addFlash('error', 'Not enough game keys available for ' . $item['object']->getName());
                    return $this->redirectToRoute('app_cart');
                }
            } else {
                $hasPhysical = true;
            }
        }

        try {
            $reservedKeys = [];
            foreach ($cart as $item) {
                if ($item['object']->isDigital()) {
                    try {
                        $key = $this->gameKeyService->getOrReserveKey($item['object'], $this->getUser());
                        $reservedKeys[$item['object']->getId()] = [$key];
                    } catch (\Exception $e) {
                        throw $e;
                    }
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
                $order = new Order();
                $order->setUser($this->getUser());
                $order->setCreatedAt(new \DateTime());
                $order->setState('1');

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

                    if ($product['object']->isDigital()) {
                        $key = $reservedKeys[$product['object']->getId()][0];
                        $orderDetail->setGameKey($key);
                    }

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

        } catch (\Exception $e) {
            $this->addFlash('error', $e->getMessage());
            return $this->redirectToRoute('app_order');
        }

        return $this->redirectToRoute('app_order');
    }
}
