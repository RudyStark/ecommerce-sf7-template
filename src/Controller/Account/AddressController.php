<?php

namespace App\Controller\Account;

use App\Entity\Address;
use App\Form\AddressUserType;
use App\Repository\AddressRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/account/addresses')]
class AddressController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    #[Route('/add', name: 'app_account_address_add', methods: ['POST'])]
    public function add(Request $request): Response
    {
        $address = new Address();
        $address->setUser($this->getUser());

        $form = $this->createForm(AddressUserType::class, $address);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($address);
            $this->entityManager->flush();

            $this->addFlash('success', 'Address added successfully!');

            return new JsonResponse([
                'success' => true,
                'message' => 'Address added successfully'
            ]);
        }

        return new JsonResponse([
            'success' => false,
            'errors' => $this->getFormErrors($form)
        ], Response::HTTP_BAD_REQUEST);
    }

    #[Route('/edit/{id}', name: 'app_account_address_edit', methods: ['POST'])]
    public function edit(Request $request, int $id, AddressRepository $addressRepository): Response
    {
        $address = $addressRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);

        if (!$address) {
            return new JsonResponse([
                'success' => false,
                'message' => 'Address not found'
            ], Response::HTTP_NOT_FOUND);
        }

        $form = $this->createForm(AddressUserType::class, $address);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return new JsonResponse([
                'success' => true,
                'message' => 'Address updated successfully'
            ]);
        }

        return new JsonResponse([
            'success' => false,
            'errors' => $this->getFormErrors($form)
        ], Response::HTTP_BAD_REQUEST);
    }

    #[Route('/delete/{id}', name: 'app_account_address_delete')]
    public function delete(int $id, AddressRepository $addressRepository): Response
    {
        $address = $addressRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);

        if (!$address) {
            $this->addFlash('error', 'Address not found');
            return $this->redirectToRoute('app_account_settings', ['tab' => 'addresses']);
        }

        $this->entityManager->remove($address);
        $this->entityManager->flush();

        $this->addFlash('success', 'Address deleted successfully');
        return $this->redirectToRoute('app_account_settings', ['tab' => 'addresses']);
    }

    private function getFormErrors($form): array
    {
        $errors = [];
        foreach ($form->getErrors(true) as $error) {
            $errors[] = $error->getMessage();
        }
        return $errors;
    }
}
