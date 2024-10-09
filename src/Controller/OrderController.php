<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\OrderDetail;
use App\Form\OrderType;
use App\Services\CartService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\UX\Turbo\TurboBundle;

#[Route('/order')]
class OrderController extends AbstractController
{
    #[Route('/delivery', name: 'app_order')]
    public function index(): Response
    {
        if ($this->getUser()) {
            $addresses = $this->getUser()->getAddresses();

            if (count($addresses) === 0) {
                $this->addFlash('warning', 'You must add an address before you can place an order.');
                return $this->redirectToRoute('app_account_address_form');
            }
        } else {
            $addresses = null;
        }

        $form = $this->createForm(OrderType::class, null, [
            'addresses' => $addresses,
            'action' => $this->generateUrl('app_order_summary'),
        ]);

        return $this->render('order/index.html.twig', [
            'deliveryForm' => $form->createView()
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

        $form = $this->createForm(OrderType::class, null , [
            'addresses' => $this->getUser()->getAddresses(),
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // Create Address Chain
            $addressObject = $form->get('addresses')->getData();
            $address = $addressObject->getFirstname() . ' ' . $addressObject->getLastname(). '<br>';
            $address .= $addressObject->getAddress() . '<br>';
            $address .= $addressObject->getPostal() . ' ' . $addressObject->getCity() . '<br>';
            $address .= $addressObject->getCountry() . '<br>';
            $address .= $addressObject->getPhone();

            // Create Order
            $order = new Order();
            $order->setUser($this->getUser());
            $order->setCreatedAt(new \DateTime());
            $order->setState('1');
            $order->setCarrierName($form->get('carriers')->getData()->getName());
            $order->setCarrierPrice($form->get('carriers')->getData()->getPrice());
            $order->setDelivery($address);

            foreach ($cart as $product) {
                $orderDetail = new OrderDetail();
                $orderDetail->setProductName($product['object']->getName());
                $orderDetail->setProductPicture($product['object']->getPicture());
                $orderDetail->setProductPrice($product['object']->getPrice());
                $orderDetail->setProductVat($product['object']->getTva());
                $orderDetail->setProductQuantity($product['quantity']);
                $order->addOrderDetail($orderDetail);
            }

            $entityManager->persist($order);
            $entityManager->flush();

        }

        return $this->render('order/summary.html.twig', [
            'choices' => $form->getData()
        ]);
    }
}
