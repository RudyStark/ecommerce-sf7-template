<?php

namespace App\Controller\Admin;

use App\Entity\FeatureProduct;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class FeatureProductCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return FeatureProduct::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $required = true;

        if ($pageName == 'edit') {
            $required = false;
        }

        return [
            TextField::new('label'),
            ChoiceField::new('iconPicture')
                ->setChoices([
                    'Genres' => [
                        '🎮 Action' => 'bi bi-person-walking',
                        '🎲 Adventure' => 'bi bi-controller',
                        '🏆 Sports' => 'bi bi-trophy',
                        '🧩 Puzzle' => 'bi bi-puzzle',
                        '⚔️ RPG' => 'bi bi-people',
                        '🏎️ Racing' => 'bi bi-car-front',
                        '🎯 FPS' => 'bi bi-gun',
                        '🏰 Strategy' => 'bi bi-building',
                    ],
                    'Technical Features' => [
                        '📺 4K' => 'bi bi-badge-4k',
                        '🥽 VR' => 'bi bi-badge-vr',
                        '⚡ 60 FPS' => 'bi bi-speedometer2',
                        '🎮 HDR' => 'bi bi-display',
                    ],
                    'Game Modes' => [
                        '👤 Single Player' => 'bi bi-person',
                        '👥 Multiplayer' => 'bi bi-people-fill',
                        '🌐 Online' => 'bi bi-globe',
                    ],
                    'Features' => [
                        '🌍 Multi-Language' => 'bi bi-translate',
                        '🏆 Achievements' => 'bi bi-hand-thumbs-up',
                    ],
                    'Content' => [
                        '🎁 DLC' => 'bi bi-gift',
                        '⭐ Exclusive Content' => 'bi bi-stars',
                        '🎮 Collector Edition' => 'bi bi-box-seam',
                        '🎨 Skins' => 'bi bi-palette',
                    ],
                    'Release' => [
                        '📅 Release Date' => 'bi bi-calendar3',
                        '📦 Pre-Order' => 'bi bi-box',
                    ],
                ])
                ->renderAsNativeWidget()
                ->setColumns(6)
        ];
    }
}
