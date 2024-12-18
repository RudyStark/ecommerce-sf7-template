<?php

namespace App\Entity;

use App\Repository\OrderDetailRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrderDetailRepository::class)]
class OrderDetail
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'orderDetails')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Order $myOrder = null;

    #[ORM\Column(length: 255)]
    private ?string $productName = null;

    #[ORM\Column(length: 255)]
    private ?string $productPicture = null;

    #[ORM\Column]
    private ?int $productQuantity = null;

    #[ORM\Column]
    private ?float $productPrice = null;

    #[ORM\Column]
    private ?float $productVat = null;

    #[ORM\Column(length: 255)]
    private ?string $platformType = null;

    #[ORM\OneToOne(mappedBy: 'orderDetail', cascade: ['persist', 'remove'])]
    private ?GameKey $gameKey = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMyOrder(): ?Order
    {
        return $this->myOrder;
    }

    public function setMyOrder(?Order $myOrder): static
    {
        $this->myOrder = $myOrder;

        return $this;
    }

    public function getProductName(): ?string
    {
        return $this->productName;
    }

    public function setProductName(string $productName): static
    {
        $this->productName = $productName;

        return $this;
    }

    public function getProductPicture(): ?string
    {
        return $this->productPicture;
    }

    public function setProductPicture(string $productPicture): static
    {
        $this->productPicture = $productPicture;

        return $this;
    }

    public function getPlatformType(): ?string
    {
        return $this->platformType;
    }

    public function setPlatformType(string $platformType): static
    {
        $this->platformType = $platformType;

        return $this;
    }

    public function getProductQuantity(): ?int
    {
        return $this->productQuantity;
    }

    public function setProductQuantity(int $productQuantity): static
    {
        $this->productQuantity = $productQuantity;

        return $this;
    }

    public function getProductPriceWt(): ?float
    {
        $coeff = 1 + ($this->productVat / 100);
        return $coeff * $this->productPrice;
    }

    public function getProductPrice(): ?float
    {
        return $this->productPrice;
    }

    public function setProductPrice(float $productPrice): static
    {
        $this->productPrice = $productPrice;

        return $this;
    }

    public function getProductVat(): ?float
    {
        return $this->productVat;
    }

    public function setProductVat(float $productVat): static
    {
        $this->productVat = $productVat;

        return $this;
    }

    public function getGameKey(): ?GameKey
    {
        return $this->gameKey;
    }

    public function setGameKey(?GameKey $gameKey): static
    {
        // unset the owning side of the relation if necessary
        if ($gameKey === null && $this->gameKey !== null) {
            $this->gameKey->setOrderDetail(null);
        }

        // set the owning side of the relation if necessary
        if ($gameKey !== null && $gameKey->getOrderDetail() !== $this) {
            $gameKey->setOrderDetail($this);
        }

        $this->gameKey = $gameKey;

        return $this;
    }
}
