<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $picture = null;

    #[ORM\Column]
    private ?float $price = null;

    #[ORM\Column]
    private ?float $tva = null;

    #[ORM\ManyToOne(inversedBy: 'parentProducts')]
    private ?Category $parentCategory = null;

    #[ORM\ManyToOne(inversedBy: 'subCategoryProducts')]
    private ?Category $subCategory = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isHomepage = null;

    #[ORM\Column(length: 255)]
    private ?string $studioPicture = null;

    #[ORM\Column(length: 255)]
    private ?string $studioLabel = null;

    /**
     * @var Collection<int, FeatureProduct>
     */
    #[ORM\ManyToMany(targetEntity: FeatureProduct::class, inversedBy: 'products')]
    private Collection $feature;

    #[ORM\Column(length: 255)]
    private ?string $Storage = null;

    #[ORM\Column(length: 255)]
    private ?string $Online = null;

    #[ORM\Column(nullable: true)]
    private ?bool $digital = null;

    public function __construct()
    {
        $this->feature = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): static
    {
        $this->picture = $picture;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getPriceWt()
    {
        $coef = 1 + ($this->tva / 100);

        return $coef * $this->price;
    }

    public function getTva(): ?float
    {
        return $this->tva;
    }

    public function setTva(float $tva): static
    {
        $this->tva = $tva;

        return $this;
    }

    public function getParentCategory(): ?Category
    {
        return $this->parentCategory;
    }

    public function setParentCategory(?Category $parentCategory): static
    {
        $this->parentCategory = $parentCategory;

        return $this;
    }

    public function getSubCategory(): ?Category
    {
        return $this->subCategory;
    }

    public function setSubCategory(?Category $subCategory): static
    {
        $this->subCategory = $subCategory;

        return $this;
    }

    public function isHomepage(): ?bool
    {
        return $this->isHomepage;
    }

    public function setIsHomepage(?bool $isHomepage): static
    {
        $this->isHomepage = $isHomepage;

        return $this;
    }

    public function getStudioPicture(): ?string
    {
        return $this->studioPicture;
    }

    public function setStudioPicture(string $studioPicture): static
    {
        $this->studioPicture = $studioPicture;

        return $this;
    }

    public function getStudioLabel(): ?string
    {
        return $this->studioLabel;
    }

    public function setStudioLabel(string $studioLabel): static
    {
        $this->studioLabel = $studioLabel;

        return $this;
    }

    /**
     * @return Collection<int, FeatureProduct>
     */
    public function getFeature(): Collection
    {
        return $this->feature;
    }

    public function addFeature(FeatureProduct $feature): static
    {
        if (!$this->feature->contains($feature)) {
            $this->feature->add($feature);
        }

        return $this;
    }

    public function removeFeature(FeatureProduct $feature): static
    {
        $this->feature->removeElement($feature);

        return $this;
    }

    public function getStorage(): ?string
    {
        return $this->Storage;
    }

    public function setStorage(string $Storage): static
    {
        $this->Storage = $Storage;

        return $this;
    }

    public function getOnline(): ?string
    {
        return $this->Online;
    }

    public function setOnline(string $Online): static
    {
        $this->Online = $Online;

        return $this;
    }

    public function isDigital(): ?bool
    {
        return $this->digital;
    }

    public function setDigital(?bool $digital): static
    {
        $this->digital = $digital;

        return $this;
    }
}
