<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Panel;
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
            // Bloc Game Information
            FormField::addPanel('Game Information'),
            TextField::new('name')->setLabel('Name'),
            BooleanField::new('isHomepage')->setLabel('Show on homepage')->setHelp('Check this box to show the product on the homepage'),
            SlugField::new('slug')->setTargetFieldName('name')->setLabel('Slug')->setHelp('The slug is used in the URL to identify the product'),
            TextField::new('studioLabel')->setLabel('Studio Label')->setHelp('The label of the studio'),
            ImageField::new('studioPicture')
                ->setLabel('Studio Picture')
                ->setHelp('The picture of the studio')
                ->setUploadDir('public/uploads/products/studios')
                ->setBasePath('uploads/products/studios')
                ->setUploadedFileNamePattern('[year]-[month]-[day]-[contenthash].[extension]')
                ->setRequired($required),
            TextEditorField::new('description')->setLabel('Description')->setHelp('The description of the product'),
            BooleanField::new('digital')->setLabel('Digital')->setHelp('If the product is digital'),

            // Bloc System Requirements
            FormField::addPanel('System Requirements'),
            TextField::new('Storage')->setLabel('Storage')->setHelp('Size of the game'),
            TextField::new('online')->setLabel('Online')->setHelp('If the game requires an internet connection'),
            ImageField::new('picture')
                ->setLabel('Image')
                ->setHelp('Image should be 600x600px')
                ->setUploadDir('public/uploads/products')
                ->setBasePath('uploads/products')
                ->setUploadedFileNamePattern('[year]-[month]-[day]-[contenthash].[extension]')
                ->setRequired($required),

            // Bloc Pricing Information
            FormField::addPanel('Pricing Information'),
            NumberField::new('price')->setLabel('Price excluding VAT')->setHelp('The price of the product excluding VAT and without currency symbol'),
            ChoiceField::new('tva')->setLabel('VAT')->setChoices([
                '0%' => '0',
                '5.5%' => '5.5',
                '10%' => '10',
                '20%' => '20',
            ])->setHelp('The VAT rate of the product'),

            // Bloc Category Information
            FormField::addPanel('Category Information'),
            AssociationField::new('parentCategory')
                ->setLabel('Main Category')
                ->setHelp('The main category of this product')
                ->setQueryBuilder(function ($queryBuilder) {
                    return $queryBuilder->andWhere('entity.parent IS NULL');
                }),
            AssociationField::new('subCategory')
                ->setLabel('Subcategory')
                ->setHelp('The subcategory of this product')
                ->setQueryBuilder(function ($queryBuilder) {
                    return $queryBuilder->andWhere('entity.parent IS NOT NULL');
                }),
        ];
    }
}
