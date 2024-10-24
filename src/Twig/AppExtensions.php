<?php

namespace App\Twig;

use App\Repository\CategoryRepository;
use App\Services\CartService;
use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;
use Twig\TwigFilter;

class AppExtensions extends AbstractExtension implements GlobalsInterface
{
    private $categoryRepository;
    private $cart;

    public function __construct(CategoryRepository $categoryRepository, CartService $cart)
    {
        $this->categoryRepository = $categoryRepository;
        $this->cart = $cart;
    }
    public function getFilters(): array
    {
        return [
            new TwigFilter('price', [$this, 'formatPrice']),
        ];
    }

    public function formatPrice($number)
    {
        return '$' . number_format($number, 2, '.', ',');
    }

    public function getGlobals(): array
    {
        // Pull all parent categories
        $parentCategories = $this->categoryRepository->findBy(['parent' => null]);

        return [
            'parentCategories' => $parentCategories,
            'fullCartQuantity' => $this->cart->getTotalQuantity(),
            'cart' => $this->cart->getCart(),
            'totalWt' => $this->cart->getTotalWithTaxes(),
            'categories' => $this->categoryRepository->findParentCategoriesWithChildren(),

        ];
    }
}
