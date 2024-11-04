<?php

namespace App\EventListener;

use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Event\PrePersistEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Doctrine\ORM\Events;
use Psr\Log\LoggerInterface;

#[AsEntityListener(event: Events::prePersist, method: 'prePersist', entity: Product::class)]
#[AsEntityListener(event: Events::preUpdate, method: 'preUpdate', entity: Product::class)]
class ProductGameKeyGenerator
{
    public function __construct(
        private LoggerInterface $logger
    ) {
    }

    public function prePersist(Product $product, PrePersistEventArgs $event): void
    {
        $this->logger->info('ProductGameKeyGenerator::prePersist called');
        $this->handleGameKeyGeneration($product);
    }

    public function preUpdate(Product $product, PreUpdateEventArgs $event): void
    {
        $this->logger->info('ProductGameKeyGenerator::preUpdate called');
        $this->handleGameKeyGeneration($product);
    }

    private function handleGameKeyGeneration(Product $product): void
    {
        if ($product->isDigital() && !$product->getGameKey()) {
            $this->generateAndSetGameKey($product);
        }
    }

    private function generateAndSetGameKey(Product $product): void
    {
        $subCategoryName = $product->getSubCategory()?->getName();
        $this->logger->info('Generating key for subcategory', ['subCategory' => $subCategoryName]);

        $format = match ($subCategoryName) {
            'PlayStation 5' => [
                'length' => 12,
                'groups' => [4, 4, 4]  // Format XXXX-XXXX-XXXX
            ],
            'Xbox Series X|S' => [
                'length' => 25,
                'groups' => [5, 5, 5, 5, 5]  // Format XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
            ],
            default => null
        };

        if ($format === null) {
            $this->logger->warning('Invalid subcategory for key generation');
            return;
        }

        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $gameKey = '';

        // Generate a random key
        for ($i = 0; $i < $format['length']; $i++) {
            $gameKey .= $characters[random_int(0, strlen($characters) - 1)];
        }

        // Format the key
        $position = 0;
        $parts = [];
        foreach ($format['groups'] as $groupLength) {
            $parts[] = substr($gameKey, $position, $groupLength);
            $position += $groupLength;
        }

        $formattedKey = implode('-', $parts);
        $product->setGameKey($formattedKey);

        $this->logger->info('Game key generated successfully', ['key' => $formattedKey]);
    }
}
