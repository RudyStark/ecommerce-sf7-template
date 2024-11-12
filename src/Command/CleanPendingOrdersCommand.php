<?php

namespace App\Command;

use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Psr\Log\LoggerInterface;

#[AsCommand(
    name: 'app:clean-pending-orders',
    description: 'Clean pending orders older than 3 hours'
)]
class CleanPendingOrdersCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private LoggerInterface $logger
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        try {
            $output->writeln('['.date('Y-m-d H:i:s').'] Starting cleanup of pending orders...');

            // Calculer la date limite (3 heures avant maintenant)
            $threeHoursAgo = new \DateTime('-3 hours');

            // Récupérer les commandes en attente de plus de 3 heures
            $pendingOrders = $this->entityManager
                ->getRepository('App\Entity\Order')
                ->createQueryBuilder('o')
                ->where('o.state = :state')
                ->andWhere('o.createdAt < :limitDate')
                ->setParameter('state', '1')  // État "en attente"
                ->setParameter('limitDate', $threeHoursAgo)
                ->getQuery()
                ->getResult();

            $count = count($pendingOrders);
            if ($count > 0) {
                foreach ($pendingOrders as $order) {
                    // On libère les clés de jeu réservées si c'est une commande digitale
                    if ($order->getCarrierName() === 'Email') {
                        foreach ($order->getOrderDetails() as $detail) {
                            $gameKey = $detail->getGameKey();
                            if ($gameKey) {
                                $gameKey->setStatus('AVAILABLE');
                                $gameKey->setReservedAt(null);
                                $gameKey->setReservedFor(null);
                            }
                        }
                    }

                    // On marque la commande comme annulée (état 6)
                    $order->setState('6');
                }

                $this->entityManager->flush();

                $message = sprintf('[%s] Successfully cancelled %d pending orders.', date('Y-m-d H:i:s'), $count);
                $output->writeln($message);
                $this->logger->info($message);
            } else {
                $output->writeln('['.date('Y-m-d H:i:s').'] No pending orders to clean.');
            }

            return Command::SUCCESS;

        } catch (\Exception $e) {
            $message = '['.date('Y-m-d H:i:s').'] Error during cleanup: ' . $e->getMessage();
            $output->writeln($message);
            $this->logger->error($message);

            return Command::FAILURE;
        }
    }
}
