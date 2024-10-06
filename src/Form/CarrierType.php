<?php

namespace App\Form;

use App\Entity\Carrier;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CarrierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('carriers', EntityType::class, [
                'class' => Carrier::class,
                'multiple' => false,
                'expanded' => true,
                'label' => 'Choose your',
                'required' => true,
                'choices' => $options['carriers'],
                'choice_label' => function(Carrier $carrier) {
                    return sprintf(
                        "<strong>%s</strong><br>%s %s<br>%s<br>%s %s<br>%s<br>%s",
                    );
                },
                'label_html' => true,  // Permet de rendre le HTML dans les labels
                'label_attr' => ['class' => 'form-check-label'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'carriers' => null,
        ]);
    }
}
