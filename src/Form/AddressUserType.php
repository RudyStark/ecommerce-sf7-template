<?php

namespace App\Form;

use App\Entity\Address;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Title',
                'required' => true,
                'attr' => ['placeholder' => 'Home, Work, ...']
            ])
            ->add('firstname', TextType::class, [
                'label' => 'Firstname',
                'required' => true,
                'attr' => ['placeholder' => 'Your firstname']
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Lastname',
                'required' => true,
                'attr' => ['placeholder' => 'Your lastname']
            ])
            ->add('address', TextType::class, [
                'label' => 'Address',
                'required' => true,
                'attr' => ['placeholder' => 'Your address']
            ])
            ->add('postal', TextType::class, [
                'label' => 'Postal code',
                'required' => true,
                'attr' => ['placeholder' => 'Your postal code']
            ])
            ->add('city', TextType::class, [
                'label' => 'City',
                'required' => true,
                'attr' => ['placeholder' => 'Your city']
            ])
            ->add('country', CountryType::class, [
                'label' => 'Country',
                'required' => true,
                'attr' => ['placeholder' => 'Your country']
            ])
            ->add('phone', textType::class, [
                'label' => 'Phone',
                'required' => true,
                'attr' => ['placeholder' => 'Your phone number']
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Save Address',
                'attr' => ['class' => 'btn btn-success']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Address::class,
        ]);
    }
}
