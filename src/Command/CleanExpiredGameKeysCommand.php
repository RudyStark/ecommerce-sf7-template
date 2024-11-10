<?php

namespace App\Command;

use App\Services\GameKeyService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Psr\Log\LoggerInterface;

#[AsCommand(
    name: 'app:clean-expired-keys',
    description: 'Clean expired game key reservations'
)]
class CleanExpiredGameKeysCommand extends Command
{
    public function __construct(
        private GameKeyService $gameKeyService,
        private LoggerInterface $logger
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->setDescription('Clean expired game key reservations that are older than 15 minutes');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        try {
            $output->writeln('['.date('Y-m-d H:i:s').'] Starting cleanup of expired keys...');
            
            $this->gameKeyService->cleanExpiredReservations();
            
            $output->writeln('['.date('Y-m-d H:i:s').'] Cleanup completed successfully.');
            $this->logger->info('Expired game keys cleanup completed successfully');
            
            return Command::SUCCESS;
        } catch (\Exception $e) {
            $message = '['.date('Y-m-d H:i:s').'] Error during cleanup: ' . $e->getMessage();
            $output->writeln($message);
            $this->logger->error($message);
            
            return Command::FAILURE;
        }
    }
}
