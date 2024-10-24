<?php

namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Category>
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Category::class);
    }

    /**
     * Find a category by its slug
     * @param $slug
     * @return Category|null
     */
    public function findOneBySlug($slug): ?Category
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.slug = :val')
            ->setParameter('val', $slug)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    /**
     * Récupérer les catégories parent avec leurs sous-catégories.
     *
     * @return Category[]
     */
    public function findParentCategoriesWithChildren(): array
    {
        return $this->createQueryBuilder('c')
            ->leftJoin('c.children', 'children')
            ->addSelect('children')
            ->where('c.parent IS NULL')
            ->getQuery()
            ->getResult();
    }
}
