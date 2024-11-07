<?php

namespace App\Services;

use App\Entity\GameKey;
use App\Entity\Product;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

class GameKeyService
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Get an existing reserved key for the user or reserve a new one
     */
    public function getOrReserveKey(Product $product, User $user): GameKey
    {
        // D'abord, on cherche si l'utilisateur a déjà une clé réservée
        $existingKey = $this->entityManager
            ->getRepository(GameKey::class)
            ->findReservedKeyForUser($product, $user);

        if ($existingKey) {
            return $existingKey;
        }

        // Si non, on en réserve une nouvelle
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
     * Clean expired reservations every 15 minutes
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
