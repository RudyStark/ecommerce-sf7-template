<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'children')]
    private ?self $parent = null;

    #[ORM\OneToMany(targetEntity: self::class, mappedBy: 'parent', cascade: ['remove'], orphanRemoval: true)]
    private Collection $children;

    #[ORM\OneToMany(targetEntity: Product::class, mappedBy: 'parentCategory', cascade: ['remove'], orphanRemoval: true)]
    private Collection $parentProducts;

    #[ORM\OneToMany(targetEntity: Product::class, mappedBy: 'subCategory', cascade: ['remove'], orphanRemoval: true)]
    private Collection $subCategoryProducts;

    /**
     * @var Collection<int, Product>
     */
    #[ORM\ManyToMany(targetEntity: Product::class, mappedBy: 'genres')]
    private Collection $productGenres;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $icon = null;

    public function __construct()
    {
        $this->children = new ArrayCollection();
        $this->parentProducts = new ArrayCollection();
        $this->subCategoryProducts = new ArrayCollection();
        $this->productGenres = new ArrayCollection();
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

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): static
    {
        $this->parent = $parent;
        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getChildren(): Collection
    {
        return $this->children;
    }

    public function addChild(self $child): static
    {
        if (!$this->children->contains($child)) {
            $this->children->add($child);
            $child->setParent($this);
        }
        return $this;
    }

    public function removeChild(self $child): static
    {
        if ($this->children->removeElement($child)) {
            if ($child->getParent() === $this) {
                $child->setParent(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getParentProducts(): Collection
    {
        return $this->parentProducts;
    }

    public function addParentProduct(Product $product): static
    {
        if (!$this->parentProducts->contains($product)) {
            $this->parentProducts->add($product);
            $product->setParentCategory($this);
        }
        return $this;
    }

    public function removeParentProduct(Product $product): static
    {
        if ($this->parentProducts->removeElement($product)) {
            if ($product->getParentCategory() === $this) {
                $product->setParentCategory(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getSubCategoryProducts(): Collection
    {
        return $this->subCategoryProducts;
    }

    public function addSubCategoryProduct(Product $product): static
    {
        if (!$this->subCategoryProducts->contains($product)) {
            $this->subCategoryProducts->add($product);
            $product->setSubCategory($this);
        }
        return $this;
    }

    public function removeSubCategoryProduct(Product $product): static
    {
        if ($this->subCategoryProducts->removeElement($product)) {
            if ($product->getSubCategory() === $this) {
                $product->setSubCategory(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getProductGenres(): Collection
    {
        return $this->productGenres;
    }

    public function addProductGenre(Product $product): static
    {
        if (!$this->productGenres->contains($product)) {
            $this->productGenres->add($product);
            $product->addGenre($this);
        }
        return $this;
    }

    public function removeProductGenre(Product $product): static
    {
        if ($this->productGenres->removeElement($product)) {
            $product->removeGenre($this);
        }
        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getAllProducts(): Collection
    {
        return new ArrayCollection(
            array_merge(
                $this->parentProducts->toArray(),
                $this->subCategoryProducts->toArray(),
                $this->productGenres->toArray()
            )
        );
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(?string $icon): static
    {
        $this->icon = $icon;
        return $this;
    }

    public function __toString(): string
    {
        return $this->name;
    }
}
