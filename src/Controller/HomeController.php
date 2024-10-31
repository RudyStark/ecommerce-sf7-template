<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\CompanyValuesRepository;
use App\Repository\HeaderRepository;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(HeaderRepository $headerRepository, ProductRepository $productRepository, CompanyValuesRepository $companyValuesRepository, CategoryRepository $categoryRepository): Response
    {
        return $this->render('home/index.html.twig', [
            'headers' => $headerRepository->findAll(),
            'companyValues' => $companyValuesRepository->findAll(),
            'productsInHomepage' => $productRepository->findByIsHomepage(true),
        ]);
    }

    #[Route('/api/categories/{id}/subcategories', name: 'api_subcategories')]
    public function getSubCategories(Category $parentCategory, Request $request): Response
    {
        $page = $request->query->getInt('page', 1);
        $offset = ($page - 1) * 6;

        $subCategories = array_slice(
            $parentCategory->getChildren()->toArray(),
            $offset,
            6
        );

        return $this->render('home/partials/_subcategories.html.twig', [
            'subCategories' => $subCategories
        ]);
    }
}
