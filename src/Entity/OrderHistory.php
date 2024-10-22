<?php

namespace App\Entity;

use App\Repository\OrderHistoryRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrderHistoryRepository::class)]
class OrderHistory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $statusChange = null;

    #[ORM\Column(length: 255)]
    private ?string $changedBy = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $changedAt = null;

    #[ORM\ManyToOne(inversedBy: 'orderHistories')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Order $orderReference = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatusChange(): ?string
    {
        return $this->statusChange;
    }

    public function setStatusChange(string $statusChange): static
    {
        $this->statusChange = $statusChange;

        return $this;
    }

    public function getChangedBy(): ?string
    {
        return $this->changedBy;
    }

    public function setChangedBy(string $changedBy): static
    {
        $this->changedBy = $changedBy;

        return $this;
    }

    public function getChangedAt(): ?\DateTimeInterface
    {
        return $this->changedAt;
    }

    public function setChangedAt(\DateTimeInterface $changedAt): static
    {
        $this->changedAt = $changedAt;

        return $this;
    }

    public function getOrderReference(): ?Order
    {
        return $this->orderReference;
    }

    public function setOrderReference(?Order $orderReference): static
    {
        $this->orderReference = $orderReference;

        return $this;
    }
}
