<?php

namespace App\Controller;

use App\Form\OrderType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class OrderController extends AbstractController
{
    #[Route('/order/delivery', name: 'app_order')]
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
        ]);

        return $this->render('order/index.html.twig', [
            'deliveryForm' => $form->createView(),
        ]);
    }
}
