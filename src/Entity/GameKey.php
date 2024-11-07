<?php

namespace App\Entity;

use App\Repository\GameKeyRepository;
use Doctrine\DBAL\Types\Types;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GameKeyRepository::class)]
#[ORM\HasLifecycleCallbacks]
class GameKey
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Regex(
        pattern: '/^([A-Z0-9]{5}-){4}[A-Z0-9]{5}$|^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/',
        message: 'The key format is invalid. Please use XXXXX-XXXXX-XXXXX-XXXXX-XXXXX for Microsoft or XXXX-XXXX-XXXX for PlayStation.'
    )]
    private ?string $gameKey = null;

    #[ORM\Column(length: 50)]
    private ?string $status = null;

    #[ORM\Column(length: 20)]
    private ?string $type = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $reservedAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $soldAt = null;

    #[ORM\ManyToOne]
    private ?User $reservedFor = null;

    #[ORM\ManyToOne(cascade: ['persist'], inversedBy: 'gameKeys')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Product $product = null;

    #[ORM\OneToOne(inversedBy: 'gameKey', cascade: ['persist', 'remove'])]
    private ?OrderDetail $orderDetail = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGameKey(): ?string
    {
        return $this->gameKey;
    }

    public function setGameKey(string $gameKey): static
    {
        $this->gameKey = $gameKey;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    #[ORM\PrePersist]
    public function setCreatedAt(): void
    {
        $this->createdAt = new \DateTime();
    }

    public function getReservedAt(): ?\DateTimeInterface
    {
        return $this->reservedAt;
    }

    public function setReservedAt(?\DateTimeInterface $reservedAt): static
    {
        $this->reservedAt = $reservedAt;

        return $this;
    }

    public function getSoldAt(): ?\DateTimeInterface
    {
        return $this->soldAt;
    }

    public function setSoldAt(?\DateTimeInterface $soldAt): static
    {
        $this->soldAt = $soldAt;

        return $this;
    }

    public function getReservedFor(): ?User
    {
        return $this->reservedFor;
    }

    public function setReservedFor(?User $reservedFor): static
    {
        $this->reservedFor = $reservedFor;
        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): static
    {
        $this->product = $product;

        return $this;
    }

    public function getOrderDetail(): ?OrderDetail
    {
        return $this->orderDetail;
    }

    public function setOrderDetail(?OrderDetail $orderDetail): static
    {
        $this->orderDetail = $orderDetail;

        return $this;
    }
}
