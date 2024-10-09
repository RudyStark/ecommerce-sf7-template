<?php

namespace App\Form;

use App\Entity\Address;
use App\Entity\Carrier;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OrderType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Section pour les adresses de livraison
        if (!empty($options['addresses'])) {
            $builder
                ->add('addresses', EntityType::class, [
                    'class' => Address::class,
                    'multiple' => false,
                    'expanded' => true,
                    'label' => 'Choose an address',
                    'required' => true,
                    'choices' => $options['addresses'],
                    'choice_label' => function (Address $address) {
                        return sprintf(
                            "<strong>%s</strong><br>%s %s<br>%s<br>%s %s<br>%s<br>%s",
                            $address->getTitle(),
                            $address->getFirstname(),
                            $address->getLastname(),
                            $address->getAddress(),
                            $address->getPostal(),
                            $address->getCity(),
                            $address->getCountry(),
                            $address->getPhone()
                        );
                    },
                    'label_html' => true,
                    'label_attr' => ['class' => 'form-check-label'],
                ]);
        }
        $builder
            ->add('carriers', EntityType::class, [
                'class' => Carrier::class,
                'multiple' => false,
                'expanded' => true,
                'label' => 'Choose a delivery method',
                'required' => true,
                'choice_label' => function (Carrier $carrier) {
                    return sprintf(
                        "%s - %s$ <small class='text-muted'>(%s)</small>",
                        $carrier->getName(),
                        number_format($carrier->getPrice(), 2),
                        $carrier->getDescription()
                    );
                },
                'label_html' => true,
                'label_attr' => ['class' => 'form-check-label'],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Confirm',
                'attr' => ['class' => 'btn btn-success'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'addresses' => null,
        ]);
    }
}
