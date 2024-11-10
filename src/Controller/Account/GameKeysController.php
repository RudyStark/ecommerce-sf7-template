<?php

namespace App\Controller\Account;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/account/game-keys')]
class GameKeysController extends AbstractController
{
    #[Route('/', name: 'app_account_game_keys')]
    public function index(): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }

        return $this->render('account/index.html.twig', [
            'current_route' => 'app_account_game_keys'
        ]);
    }
}
