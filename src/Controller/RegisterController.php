<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterUserType;
use App\Services\MailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RegisterController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function index(Request $request, EntityManagerInterface $entityManager, Security $security, MailService $mailService): Response
    {
        $user = new User();
        $form = $this->createForm(RegisterUserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('success', 'Your account has been created successfully!');

            // Création du contenu de l'email via un template Twig
            $vars = [
                'firstname' => $user->getFirstname(),
                'lastname' => $user->getLastname(),
            ];
            $mailService->send(
                $user->getEmail(),
                $user->getFirstname() . ' ' . $user->getLastname(),
                'Account Created',
                'mail/welcome.html.twig',
                $vars
            );

            // auto login after registration
            return $security->login($user, 'form_login', 'main');
        }

        return $this->render('register/index.html.twig', [
            'registerForm' => $form->createView(),
        ]);
    }
}
