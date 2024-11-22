<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
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
        $required = $pageName === 'edit' ? false : true;

        yield FormField::addPanel('Game Information');
        yield TextField::new('name')->setLabel('Name');
        yield BooleanField::new('isHomepage')->setLabel('Show on homepage')->setHelp('Check this box to show the product on the homepage');
        yield SlugField::new('slug')->setTargetFieldName('name')->setLabel('Slug')->setHelp('The slug is used in the URL to identify the product');
        yield TextField::new('studioLabel')->setLabel('Studio Label')->setHelp('The label of the studio');

        yield AssociationField::new('feature')
            ->setFormTypeOptions([
                'by_reference' => false,
                'multiple' => true,
            ]);

        yield ImageField::new('studioPicture')
            ->setLabel('Studio Picture')
            ->setHelp('The picture of the studio')
            ->setUploadDir('public/uploads/products/studios')
            ->setBasePath('uploads/products/studios')
            ->setUploadedFileNamePattern('[year]-[month]-[day]-[contenthash].[extension]')
            ->setRequired($required);

        yield TextEditorField::new('description')->setLabel('Description')->setHelp('The description of the product');
        yield BooleanField::new('digital')->setLabel('Digital')->setHelp('If the product is digital');

        yield FormField::addPanel('Platform & Genre Information');
        yield AssociationField::new('parentCategory')
            ->setLabel('Main Category')
            ->setHelp('The main category of this product')
            ->setQueryBuilder(function ($queryBuilder) {
                return $queryBuilder->andWhere('entity.parent IS NULL');
            });

        yield AssociationField::new('subCategory')
            ->setLabel('Platform')
            ->setHelp('Select the platform (PlayStation 5 or Xbox Series X|S)')
            ->setQueryBuilder(function ($queryBuilder) {
                return $queryBuilder
                    ->join('entity.parent', 'p')
                    ->andWhere('p.name = :platformCategory')
                    ->setParameter('platformCategory', 'Platforms');
            });

        yield AssociationField::new('genres')
            ->setLabel('Genres')
            ->setHelp('Select one or more genres')
            ->setFormTypeOptions([
                'multiple' => true,
                'by_reference' => false,
            ])
            ->setQueryBuilder(function ($queryBuilder) {
                return $queryBuilder
                    ->join('entity.parent', 'p')
                    ->andWhere('p.name = :genreCategory')
                    ->setParameter('genreCategory', 'Genres');
            });

        yield FormField::addPanel('System Requirements');
        yield TextField::new('Storage')->setLabel('Storage')->setHelp('Size of the game');
        yield TextField::new('online')->setLabel('Online')->setHelp('If the game requires an internet connection');
        yield ImageField::new('picture')
            ->setLabel('Image')
            ->setHelp('Image should be 600x600px')
            ->setUploadDir('public/uploads/products')
            ->setBasePath('uploads/products')
            ->setUploadedFileNamePattern('[year]-[month]-[day]-[contenthash].[extension]')
            ->setRequired($required);

        yield FormField::addPanel('Pricing Information');
        yield NumberField::new('price')->setLabel('Price excluding VAT')->setHelp('The price of the product excluding VAT and without currency symbol');
        yield ChoiceField::new('tva')->setLabel('VAT')->setChoices([
            '0%' => '0',
            '5.5%' => '5.5',
            '10%' => '10',
            '20%' => '20',
        ])->setHelp('The VAT rate of the product');

        if ($pageName === 'index') {
            yield TextField::new('gameKey')
                ->setHelp('Generated automatically for digital products');
        }
    }
}
