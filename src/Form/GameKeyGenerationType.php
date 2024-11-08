<?php

namespace App\Form;

use App\Entity\GameKey;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class GameKeyGenerationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('gameKey', TextType::class, [
                'label' => 'Game Key',
                'constraints' => [
                    new NotBlank(),
                    new Regex([
                        'pattern' => '/^([A-Z0-9]{5}-){4}[A-Z0-9]{5}$|^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/',
                        'message' => 'Please enter a valid game key format (XXXXX-XXXXX-XXXXX-XXXXX-XXXXX for Microsoft or XXXX-XXXX-XXXX for PlayStation)'
                    ])
                ]
            ])
            ->add('type', ChoiceType::class, [
                'choices' => [
                    'PlayStation' => 'PLAYSTATION',
                    'Microsoft' => 'MICROSOFT'
                ],
                'constraints' => [
                    new NotBlank()
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => GameKey::class,
        ]);
    }
}
