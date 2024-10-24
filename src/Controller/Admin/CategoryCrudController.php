<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CategoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Category')
            ->setEntityLabelInPlural('Categories')
            ->setSearchFields(['id', 'name', 'slug'])
            ->setDefaultSort(['id' => 'DESC'])
            ->setPageTitle('index', 'Category List')
            ->setHelp('index', '<b>Legend:</b> <span style="color: green;">Green = Main Category</span>, <span style="color: blue;">Blue = Subcategory</span>');
    }


    public function configureFields(string $pageName): iterable
    {
        $required = true;

        if ($pageName == 'edit') {
            $required = false;
        }

        return [
            TextField::new('name', 'Category Name')
                ->setLabel('Name')
                ->setHelp('The name of the category')
                ->formatValue(function ($value, $entity) {
                    if ($entity->getParent()) {
                        return sprintf('<span style="color: blue;">%s</span>', $value); // Sous-catégorie en bleu
                    } else {
                        return sprintf('<span style="color: green;">%s</span>', $value); // Catégorie parent en vert
                    }
                })
                ->renderAsHtml(),
            SlugField::new('slug')->setTargetFieldName('name')->setLabel('Slug')->setHelp('The slug is used in the URL to identify the category'),
            ImageField::new('icon')->setLabel('Icon')->setHelp('Icon svg')->setUploadDir('public/uploads/category/icon')->setBasePath('uploads/category/icon')->setUploadedFileNamePattern('[year]-[month]-[day]-[contenthash].[extension]')->setRequired($required),
            AssociationField::new('parent')->setLabel('Main Category')->setHelp('The main category of this category (don\'t select anything if this is a main category)')->HideOnIndex(),
            AssociationField::new('children')->setLabel('Subcategories')->setHelp('The subcategories of this category')->hideOnForm(),
        ];
    }
}
