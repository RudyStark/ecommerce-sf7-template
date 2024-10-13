<?php

namespace App\Controller\Account;

use App\Form\PasswordUserType;
use App\Form\RecoveryPasswordFormType;
use App\Form\ResetPasswordFormType;
use App\Repository\UserRepository;
use App\Services\MailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class PasswordController extends AbstractController
{
    private $entityManager;
    private $mailService;

    public function __construct(EntityManagerInterface $entityManager, MailService $mailService)
    {
        $this->entityManager = $entityManager;
        $this->mailService = $mailService;
    }

    #[Route('/account/change-password', name: 'app_account_change_password')]
    public function index(Request $request, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = $this->getUser();

        // Create a form to change the password
        $form = $this->createForm(PasswordUserType::class, $user, [
            'passwordHasher' => $passwordHasher,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->addFlash('success', 'Your password has been updated successfully!');
            $this->entityManager->flush();

            return $this->redirectToRoute('app_account');
        }

        return $this->render('account/password/index.html.twig', [
            'changePasswordForm' => $form->createView(),
        ]);
    }

    #[Route('/recovery-password', name: 'app_account_recovery_password')]
    public function forgotPassword(Request $request, UserRepository $userRepository): Response
    {
        $form = $this->createForm(RecoveryPasswordFormType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $email = $form->get('email')->getData();
            $user = $userRepository->findOneByEmail($email);

            $this->addFlash('success', 'We have sent you an email to reset your password!');

            if ($user) {

                $token = bin2hex(random_bytes(15));
                $user->setToken($token);

                $date = new \DateTime();
                $date->modify('+10 minutes');
                $user->setTokenExpireAt($date);

                $this->entityManager->flush();

                $vars = [
                    'firstname' => $user->getFirstname(),
                    'lastname' => $user->getLastname(),
                    'link' => $this->generateUrl('app_account_password_reset', ['token' => $token], UrlGeneratorInterface::ABSOLUTE_URL),
                    'shop_name' => 'SF7 E-commerce',
                ];
                $this->mailService->send(
                    $user->getEmail(),
                    $user->getFirstname() . ' ' . $user->getLastname(),
                    'Recovery password',
                    'mail/password/recovery-password.html.twig',
                    $vars
                );
            }
            return $this->redirectToRoute('app_home');
        }


        return $this->render('account/password/recovery-password.html.twig', [
            'recoveryPasswordForm' => $form->createView(),
        ]);
    }

    #[Route('/recovery-password/reset/{token}', name: 'app_account_password_reset')]
    public function resetPassword(Request $request, UserRepository $userRepository, string $token): Response
    {
        if (!$token) {
            $this->addFlash('danger', 'The token is invalid');
            return $this->redirectToRoute('app_account_recovery_password');
        }

        $user = $userRepository->findOneByToken($token);

        $now = new \DateTime();
        if (!$user || $now > $user->getTokenExpireAt()) {
            $this->addFlash('danger', 'The token is expired');
            return $this->redirectToRoute('app_account_recovery_password');
        }


        $form = $this->createForm(ResetPasswordFormType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setToken(null);
            $user->setTokenExpireAt(null);
            $this->addFlash('success', 'Your password has been updated successfully!');
            $this->entityManager->flush();

            return $this->redirectToRoute('app_login');
        }

        return $this->render('account/password/reset-password.html.twig', [
            'resetPasswordForm' => $form->createView(),
        ]);
    }
}
