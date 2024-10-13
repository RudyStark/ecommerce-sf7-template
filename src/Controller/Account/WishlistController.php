<?php

namespace App\Controller\Account;

use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/account/wishlist')]
class WishlistController extends AbstractController
{
    #[Route('/', name: 'app_account_wishlist')]
    public function index(): Response
    {
        return $this->render('account/index.html.twig', [
            'current_route' => 'app_account_wishlist',
        ]);
    }

    #[Route('/add/{id}', name: 'app_account_wishlist_add')]
    public function add(int $id, ProductRepository $productRepository, EntityManagerInterface $entityManager, Request $request): Response
    {
        $product = $productRepository->findOneById($id);

        if ($product) {
            $this->getUser()->addWishlist($product);
            $entityManager->flush();
        }

        $this->addFlash('success', 'Product added to wishlist');

        return $this->redirect($request->headers->get('referer'));
    }

    #[Route('/remove/{id}', name: 'app_account_wishlist_remove')]
    public function remove(int $id, ProductRepository $productRepository, EntityManagerInterface $entityManager, Request $request): Response
    {
        $product = $productRepository->findOneById($id);

        // Check if the product exists in the wishlist of the user
        if ($product && $this->getUser()->getWishlists()->contains($product)) {
            $this->getUser()->removeWishlist($product);
            $entityManager->flush();

            $this->addFlash('success', 'Product removed from wishlist');
        } else {
            $this->addFlash('danger', 'Product not found in your wishlist');
        }

        return $this->redirect($request->headers->get('referer'));
    }
}
