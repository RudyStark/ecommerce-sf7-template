<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('User')
            ->setEntityLabelInPlural('Users')
            ->setSearchFields(['id', 'title', 'description'])
            ->setDefaultSort(['id' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::class::new('firstname')->setLabel('First Name'),
            TextField::class::new('lastname')->setLabel('Last Name'),
            DateField::new('lastLoginAt')->setLabel('Last Login At')->onlyOnIndex(),
            ChoiceField::new('roles')
                ->setLabel('Roles')
                ->setChoices([
                'ROLE_USER' => 'ROLE_USER',
                'ROLE_ADMIN' => 'ROLE_ADMIN',
                ])
                ->allowMultipleChoices()
                ->setHelp('Choose the roles for this user'),
            TextField::class::new('email')->setLabel('Email')->onlyOnIndex()
        ];
    }
}
