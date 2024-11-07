<?php

namespace App\Controller\Admin;

use App\Entity\GameKey;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class GameKeyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return GameKey::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Game Key')
            ->setEntityLabelInPlural('Game Keys')
            ->setDefaultSort(['createdAt' => 'DESC'])
            ->setPageTitle('index', 'Manage Game Keys')
            ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('product')
                ->setFormTypeOption('query_builder', function ($repository) {
                    return $repository->createQueryBuilder('p')
                        ->where('p.digital = true');
                })
                ->setFormTypeOptions([
                    'choice_label' => function($product) {
                        return sprintf('%s (%s)',
                            $product->getName(),
                            $product->getSubCategory() ? $product->getSubCategory()->getName() : 'No Platform'
                        );
                    }
                ]),
            ChoiceField::new('type', 'Platform Type')
                ->setChoices([
                    'Microsoft Store Key' => 'MICROSOFT',
                    'PlayStation Network Key' => 'PLAYSTATION'
                ])
                ->renderAsBadges([
                    'MICROSOFT' => 'success',
                    'PLAYSTATION' => 'primary'
                ]),
            TextField::new('gameKey', 'CD Key')
                ->setHelp('Format for Microsoft: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')
                ->setHelp('Format for PlayStation: XXXX-XXXX-XXXX'),
            ChoiceField::new('status')
                ->setChoices([
                    'Available' => 'AVAILABLE',
                    'Reserved' => 'RESERVED',
                    'Sold' => 'SOLD'
                ])
                ->renderAsBadges([
                    'AVAILABLE' => 'success',
                    'RESERVED' => 'warning',
                    'SOLD' => 'danger'
                ]),
            DateField::new('createdAt')->hideOnForm(),
            DateField::new('reservedAt')->hideOnForm(),
            DateField::new('soldAt')->hideOnForm(),
            AssociationField::new('orderDetail')->hideOnForm()
        ];
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setLabel('Add New Key');
            })
            ;
    }
}
