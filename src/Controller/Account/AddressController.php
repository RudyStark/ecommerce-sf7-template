<?php

namespace App\Controller\Account;

use App\Entity\Address;
use App\Form\AddressUserType;
use App\Repository\AddressRepository;
use App\Services\CartService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/account/addresses')]
class AddressController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/', name: 'app_account_addresses')]
    public function index(): Response
    {
        return $this->render('account/index.html.twig', [
            'current_route' => 'app_account_addresses',
        ]);
    }

    #[Route('/add/{id}', name: 'app_account_address_form', defaults: ['id' => null])]
    public function form(Request $request, $id, AddressRepository $addressRepository, CartService $cartService): Response
    {
        if ($id) {
            // Check if the address exists and belongs to the user
            $address = $addressRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);

            if (!$address) {
                $this->addFlash('danger', 'Address not found!');

                return $this->redirectToRoute('app_account_addresses');
            }
        } else {
            $address = new Address();
            $address->setUser($this->getUser());
        }

        $form = $this->createForm(AddressUserType::class, $address);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($address);
            $this->entityManager->flush();

            $this->addFlash('success', 'Your address has been added successfully!');

            if ($cartService->getTotalQuantity() > 0) {
                return $this->redirectToRoute('app_order');
            }

            return $this->redirectToRoute('app_account_addresses');
        }

        return $this->render('account/address/form.html.twig', [
            'addressForm' => $form->createView(),
        ]);
    }

    #[Route('/delete/{id}', name: 'app_account_address_delete')]
    public function delete($id, AddressRepository $addressRepository): Response
    {
        $address = $addressRepository->findOneBy(['id' => $id, 'user' => $this->getUser()]);

        if (!$address) {
            $this->addFlash('danger', 'Address not found!');

            return $this->redirectToRoute('app_account_addresses');
        }

        $this->entityManager->remove($address);
        $this->entityManager->flush();

        $this->addFlash('success', 'Your address has been deleted successfully!');

        return $this->redirectToRoute('app_account_addresses');
    }

}
