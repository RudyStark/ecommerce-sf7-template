<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;

class PasswordUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('actualPassword', PasswordType::class, [
                'label' => 'Actual password',
                'attr' => [
                    'placeholder' => 'Enter your actual password',
                ],
                'mapped' => false,
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'constraints' => [
                    new Length([
                        'min' => 4,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        'max' => 30,
                    ]),
                ],
                'first_options' => [
                    'label' => 'New Password',
                    'hash_property_path' => 'password',
                    'attr' => [
                        'placeholder' => 'Enter your new password',
                    ],
                ],
                'second_options' => [
                    'label' => 'Repeat Password',
                    'attr' => [
                        'placeholder' => 'Repeat your new password',
                    ],
                ],
                'mapped' => false,
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Update password',
                'attr' => [
                    'class' => 'btn btn-success',
                ],
            ])
            // Add a listener to check if the actual password is valid
            ->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) {
                $form = $event->getForm();
                // Get the user from the form
                $user = $form->getConfig()->getOptions()['data'];
                // Get the password hasher from the form
                $passwordHasher = $form->getConfig()->getOptions()['passwordHasher'];
                // Check if the actual password is valid
                $isValid = $passwordHasher->isPasswordValid($user, $form->get('actualPassword')->getData());

                if (!$isValid) {
                    $form->get('actualPassword')->addError(new FormError('The actual password is not valid'));
                }



            })
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'passwordHasher' => null
        ]);
    }
}
