<?php

namespace App\Repository;

use App\Entity\GameKey;
use App\Entity\OrderDetail;
use App\Entity\Product;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<GameKey>
 */
class GameKeyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GameKey::class);
    }

    /**
     * Find all game keys that have been reserved for more than 15 minutes
     */
    public function findExpiredReservations(\DateTimeInterface $expirationTime): array
    {
        return $this->createQueryBuilder('g')
            ->where('g.status = :status')
            ->andWhere('g.reservedAt < :time')
            ->setParameter('status', 'RESERVED')
            ->setParameter('time', $expirationTime)
            ->getQuery()
            ->getResult();
    }

    /**
     * Clean expired reservations directly in database
     */
    public function cleanExpiredReservationsDirectly(\DateTimeInterface $expirationTime): void
    {
        $entityManager = $this->getEntityManager();
        $qb = $entityManager->createQueryBuilder();

        $qb->update('App\Entity\GameKey', 'g')
            ->set('g.status', $qb->expr()->literal('AVAILABLE'))
            ->set('g.reservedAt', 'NULL')
            ->set('g.reservedFor', 'NULL')
            ->where('g.status = :status')
            ->andWhere('g.reservedAt < :time')
            ->setParameter('status', 'RESERVED')
            ->setParameter('time', $expirationTime);

        $qb->getQuery()->execute();
    }

    /**
     * Find available keys for a product and type
     */
    public function findAvailableKeysByProductAndType(Product $product, string $type): array
    {
        return $this->createQueryBuilder('g')
            ->where('g.product = :product')
            ->andWhere('g.status = :status')
            ->andWhere('g.type = :type')
            ->setParameter('product', $product)
            ->setParameter('status', 'AVAILABLE')
            ->setParameter('type', $type)
            ->orderBy('g.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Count available keys for a product
     */
    public function countAvailableKeysByProduct(Product $product): int
    {
        return $this->createQueryBuilder('g')
            ->select('COUNT(g.id)')
            ->where('g.product = :product')
            ->andWhere('g.status = :status')
            ->setParameter('product', $product)
            ->setParameter('status', 'AVAILABLE')
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * Find sold keys within a date range
     */
    public function findSoldKeysByDateRange(\DateTime $start, \DateTime $end): array
    {
        return $this->createQueryBuilder('g')
            ->where('g.status = :status')
            ->andWhere('g.soldAt BETWEEN :start AND :end')
            ->setParameter('status', 'SOLD')
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->getQuery()
            ->getResult();
    }

    public function findReservedKeyForUser(Product $product, User $user): ?GameKey
    {
        return $this->createQueryBuilder('g')
            ->where('g.product = :product')
            ->andWhere('g.status = :status')
            ->andWhere('g.reservedFor = :user')
            ->setParameter('product', $product)
            ->setParameter('status', 'RESERVED')
            ->setParameter('user', $user)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findOneAvailableKey(Product $product, string $type): ?GameKey
    {
        return $this->createQueryBuilder('g')
            ->where('g.product = :product')
            ->andWhere('g.status = :status')
            ->andWhere('g.type = :type')
            ->setParameter('product', $product)
            ->setParameter('status', 'AVAILABLE')
            ->setParameter('type', $type)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findAvailableKeyForOrderDetail(OrderDetail $orderDetail): ?GameKey
    {
        // On doit d'abord récupérer le type basé sur le product_id de la clé
        $availableKey = $this->createQueryBuilder('g')
            ->where('g.status = :status')
            ->andWhere('g.product_id = :productId')
            ->setParameter('status', 'AVAILABLE')
            ->setParameter('productId', $orderDetail->getProduct()->getId())
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        return $availableKey;
    }
}
