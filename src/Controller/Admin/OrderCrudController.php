<?php

namespace App\Controller\Admin;

use App\Entity\Order;
use App\Entity\OrderHistory;
use App\Services\MailService;
use App\Services\OrderStateService;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Request;

class OrderCrudController extends AbstractCrudController
{
    private $em;
    private $mailService;

    public function __construct(EntityManagerInterface $entityManager, MailService $mailService)
    {
        $this->em = $entityManager;
        $this->mailService = $mailService;

    }
    public static function getEntityFqcn(): string
    {
        return Order::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Order')
            ->setEntityLabelInPlural('Orders')
            ->setSearchFields(['id', 'name'])
            ->setDefaultSort(['id' => 'DESC']);
    }

    public function configureActions(Actions $actions): Actions
    {
        $show = Action::new('show', 'Show')->linkToCrudAction('show');
        return $actions
            ->remove(Crud::PAGE_INDEX, 'new')
            ->remove(Crud::PAGE_INDEX, 'edit')
            ->remove(Crud::PAGE_INDEX, 'delete')
            ->add(Crud::PAGE_INDEX, $show);
    }

    public function changeState($order, $state)
    {
        $order->setState($state);

        $admin = $this->getUser()->getFirstname() . ' ' . $this->getUser()->getLastname();
        // Create a new OrderHistory entry
        $orderHistory = new OrderHistory();
        $orderHistory->setStatusChange(OrderStateService::STATES[$state]['label']);
        $orderHistory->setChangedBy($admin);
        $orderHistory->setChangedAt(new \DateTime());
        $orderHistory->setOrderReference($order);

        $this->em->persist($orderHistory);

        $this->em->flush();

        // if state is superior to 2, send an email to the user
        if ($state > 2) {
            $vars = [
                'firstname' => $order->getUser()->getFirstname(),
                'lastname' => $order->getUser()->getLastname(),
                'id_order' => $order->getId(),
            ];
            $this->mailService->send(
                $order->getUser()->getEmail(),
                $order->getUser()->getFirstname() . ' ' . $order->getUser()->getLastname(),
                OrderStateService::STATES[$state]['email_subject'],
                OrderStateService::STATES[$state]['email_template'],
                $vars
            );
        }
    }

    public function show(AdminContext $context, AdminUrlGenerator $adminUrlGenerator, Request $request)
    {
        $order = $context->getEntity()->getInstance();

        $url = $adminUrlGenerator
            ->setController(self::class)
            ->setAction('show')
            ->setEntityId($order->getId())
            ->generateUrl();

        // Check if the form has been submitted and if the state has been changed
        if ($request->isMethod('POST') && $request->request->get('state')) {
            $this->changeState($order, $request->request->get('state'));
            $this->addFlash('success', 'Order state updated successfully.');

            return $this->redirect($url);
        }

        return $this->render('admin/pages/order/order_show.html.twig', [
            'order' => $order,
            'current_url' => $url,
        ]);
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            DateField::new('createdAt')->setLabel('Date'),
            NumberField::new('state')->setLabel('Status')->setTemplatePath('admin/order_state.html.twig'),
            AssociationField::new('user')->setLabel('Customer'),
            TextField::new('carrierName')->setLabel('Carrier'),
            NumberField::new('totalVat')->setLabel('Total VAT'),
            NumberField::new('totalWt')->setLabel('Total (incl. tax)'),
        ];
    }
}
