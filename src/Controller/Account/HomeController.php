<?php

namespace App\Controller\Account;

use App\Repository\OrderRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/account')]
class HomeController extends AbstractController
{
    #[Route('/', name: 'app_account')]
    public function index(OrderRepository $orderRepository): Response
    {
        $orders = $orderRepository->findBy([
            'user' => $this->getUser(),
            'state' => [2, 3, 4, 5]
        ]);

        return $this->render('account/index.html.twig', [
            'current_route' => 'app_account',
            'orders' => $orders
        ]);
    }
}
