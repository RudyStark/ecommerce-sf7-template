<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ProductCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Product::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Product')
            ->setEntityLabelInPlural('Products')
            ->setSearchFields(['id', 'name', 'slug'])
            ->setDefaultSort(['id' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        $required = true;

        if ($pageName == 'edit') {
            $required = false;
        }

        return [
            TextField::new('name')->setLabel('Name'),
            SlugField::new('slug')->setTargetFieldName('name')->setLabel('Slug')->setHelp('The slug is used in the URL to identify the product'),
            TextEditorField::new('description')->setLabel('Description')->setHelp('The description of the product'),
            ImageField::new('picture')->setLabel('Image')->setHelp('Image should be 600x600px')->setUploadDir('public/uploads/products')->setBasePath('uploads/products')->setUploadedFileNamePattern('[year]-[month]-[day]-[contenthash].[extension]')->setRequired($required),
            NumberField::new('price')->setLabel('Price excluding VAT')->setHelp('The price of the product excluding VAT and without currency symbol'),
            ChoiceField::new('tva')->setLabel('VAT')->setChoices([
                '0%' => '0',
                '5.5%' => '5.5',
                '10%' => '10',
                '20%' => '20',
            ])->setHelp('The VAT rate of the product'),

            // Filter only main categories (those that don't have a parent)
            AssociationField::new('parentCategory')
                ->setLabel('Main Category')
                ->setHelp('The main category of this product')
                ->setQueryBuilder(function ($queryBuilder) {
                    return $queryBuilder->andWhere('entity.parent IS NULL');
                }),

            // Filter only subcategories (those that have a parent)
            AssociationField::new('subCategory')
                ->setLabel('Subcategory')
                ->setHelp('The subcategory of this product')
                ->setQueryBuilder(function ($queryBuilder) {
                    return $queryBuilder->andWhere('entity.parent IS NOT NULL');
                }),
        ];
    }
}
