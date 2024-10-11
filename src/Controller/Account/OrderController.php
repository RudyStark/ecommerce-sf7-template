<?php

namespace App\Controller\Account;

use App\Repository\OrderRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/account/order')]
class OrderController extends AbstractController
{
    #[Route('/{id_order}', name: 'app_account_order')]
    public function index($id_order, OrderRepository $orderRepository): Response
    {
        $orders = $orderRepository->findOneBy([
            'id' => $id_order,
            'user' => $this->getUser(),
        ]);

        if (!$orders) {
            return $this->redirectToRoute('app_account');
        }

        return $this->render('account/index.html.twig', [
            'current_route' => 'app_account_order',
            'order' => $orders,
        ]);
    }
}
