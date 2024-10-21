<?php

namespace App\Controller\Admin;

use App\Entity\CompanyValues;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CompanyValuesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return CompanyValues::class;
    }


    public function configureFields(string $pageName): iterable
    {
            $required = true;

        if ($pageName == 'edit') {
            $required = false;
        }

        return [
            TextField::new('title', 'Company Values Title'),
            TextareaField::new('content', 'Company Values Content'),
            ImageField::new('picture')
                ->setLabel('Company Values Image')
                ->setHelp('Choose a picture for the company values')
                ->setUploadDir('public/uploads/company_values')
                ->setBasePath('uploads/company_values')
                ->setUploadedFileNamePattern('[year]-[month]-[day]-[contenthash].[extension]')
                ->setRequired($required)
        ];
    }
}
