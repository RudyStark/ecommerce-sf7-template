<?php

namespace App\Command;

use App\Services\GameKeyService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:clean-expired-keys',
    description: 'Clean expired game key reservations.',
)]
class CleanExpiredGameKeysCommand extends Command
{
    public function __construct(
        private GameKeyService $gameKeyService
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->gameKeyService->cleanExpiredReservations();
        $output->writeln('Expired game key reservations have been cleaned.');

        return Command::SUCCESS;
    }
}
