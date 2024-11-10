<?php

namespace App\Controller\Account;

use App\Entity\Address;
use App\Form\AddressUserType;
use App\Form\PasswordUserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/account/settings')]
class SettingsController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    #[Route('/', name: 'app_account_settings')]
    public function index(Request $request, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->redirectToRoute('app_login');
        }

        // Create change password form
        $changePasswordForm = $this->createForm(PasswordUserType::class, $user, [
            'passwordHasher' => $passwordHasher,
        ]);

        // Create address form for the modal
        $address = new Address();
        $address->setUser($user);
        $addressForm = $this->createForm(AddressUserType::class, $address, [
            'action' => $this->generateUrl('app_account_address_add')
        ]);

        $changePasswordForm->handleRequest($request);

        if ($changePasswordForm->isSubmitted()) {
            if ($changePasswordForm->isValid()) {
                try {
                    // Get and verify new password
                    $newPassword = $changePasswordForm->get('plainPassword')->getData();

                    if (!$newPassword) {
                        throw new \Exception('New password cannot be empty');
                    }

                    // Hash and set new password
                    $newHashedPassword = $passwordHasher->hashPassword($user, $newPassword);
                    $user->setPassword($newHashedPassword);

                    $this->entityManager->flush();
                    $this->addFlash('success', 'Your password has been updated successfully!');

                    return $this->redirectToRoute('app_account_settings', [
                        '_fragment' => 'security'
                    ]);
                } catch (\Exception $e) {
                    // Log l'erreur pour le débogage
                    error_log('Password update error: ' . $e->getMessage());
                    $this->addFlash('error', 'An error occurred while updating your password: ' . $e->getMessage());
                }
            } else {
                // Log les erreurs de formulaire
                foreach ($changePasswordForm->getErrors(true) as $error) {
                    error_log('Form error: ' . $error->getMessage());
                    $this->addFlash('error', $error->getMessage());
                }
            }
        }

        $activeTab = $request->query->get('tab', 'account');

        return $this->render('account/index.html.twig', [
            'changePasswordForm' => $changePasswordForm->createView(),
            'addressForm' => $addressForm->createView(),
            'activeTab' => $activeTab,
            'current_route' => 'app_account_settings'
        ]);
    }
}
