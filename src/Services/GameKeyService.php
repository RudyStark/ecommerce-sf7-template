<?php

namespace App\Services;

use App\Entity\GameKey;
use App\Entity\Product;
use App\Entity\User;
use App\Entity\OrderDetail;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

class GameKeyService
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private LoggerInterface $logger
    ) {}

    /**
     * Get a game key for an order detail
     */
    public function getAvailableKeyForOrder(OrderDetail $orderDetail, User $user): GameKey
    {
        $this->logger->info('Looking for game key for order detail', [
            'order_detail_id' => $orderDetail->getId(),
            'platform_type' => $orderDetail->getPlatformType()
        ]);

        // Determine the type based on the platform
        $type = $orderDetail->getPlatformType() === 'PlayStation 5' ? 'PLAYSTATION' : 'MICROSOFT';

        // Get the product by name from repository
        $product = $this->entityManager
            ->getRepository(Product::class)
            ->findOneBy(['name' => $orderDetail->getProductName()]);

        if (!$product) {
            throw new \Exception('Product not found: ' . $orderDetail->getProductName());
        }

        // Find an available key with the correct type
        $availableKey = $this->entityManager
            ->getRepository(GameKey::class)
            ->findOneAvailableKey($product, $type);

        if (!$availableKey) {
            $this->logger->error('No available key found', [
                'platform_type' => $orderDetail->getPlatformType(),
                'product_name' => $orderDetail->getProductName()
            ]);
            throw new \Exception('No keys available for ' . $orderDetail->getProductName());
        }

        return $availableKey;
    }

    /**
     * Get an existing reserved key for the user or reserve a new one
     */
    public function getOrReserveKey(Product $product, User $user): GameKey
    {
        $existingKey = $this->entityManager
            ->getRepository(GameKey::class)
            ->findReservedKeyForUser($product, $user);

        if ($existingKey) {
            return $existingKey;
        }

        $type = $product->getSubCategory()->getName() === 'PlayStation 5' ? 'PLAYSTATION' : 'MICROSOFT';

        $availableKey = $this->entityManager
            ->getRepository(GameKey::class)
            ->findOneAvailableKey($product, $type);

        if (!$availableKey) {
            throw new \Exception('No keys available for this product');
        }

        $availableKey->setStatus('RESERVED');
        $availableKey->setReservedAt(new \DateTimeImmutable());
        $availableKey->setReservedFor($user);

        $this->entityManager->flush();
        return $availableKey;
    }

    /**
     * Clean expired reservations
     */
    public function cleanExpiredReservations(): void
    {
        $fifteenMinutesAgo = new \DateTimeImmutable('-15 minutes');
        $this->entityManager
            ->getRepository(GameKey::class)
            ->cleanExpiredReservationsDirectly($fifteenMinutesAgo);
    }

    /**
     * Mark keys as sold when order is paid
     */
    public function assignKeysToOrder(array $gameKeys): void
    {
        foreach ($gameKeys as $key) {
            $key->setStatus('SOLD');
            $key->setSoldAt(new \DateTimeImmutable());
            $key->setReservedFor(null);
        }

        $this->entityManager->flush();
    }
}
