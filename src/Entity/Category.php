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

    #[ORM\OneToMany(targetEntity: self::class, mappedBy: 'parent')]
    private Collection $children;

    /**
     * @var Collection<int, Product>
     */
    #[ORM\OneToMany(targetEntity: Product::class, mappedBy: 'parentCategory')]
    private Collection $parentProducts;

    /**
     * @var Collection<int, Product>
     */
    #[ORM\OneToMany(targetEntity: Product::class, mappedBy: 'subCategory')]
    private Collection $subCategoryProducts;

    public function __construct()
    {
        $this->children = new ArrayCollection();
        $this->parentProducts = new ArrayCollection();
        $this->subCategoryProducts = new ArrayCollection();
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
            // unset the owning side of the relation if necessary
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
            // set the owning side to null (unless already changed)
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
            // set the owning side to null (unless already changed)
            if ($product->getSubCategory() === $this) {
                $product->setSubCategory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getAllProducts(): Collection
    {
        // Fusionner les produits des catégories parent et sous-catégories
        return new ArrayCollection(
            array_merge($this->parentProducts->toArray(), $this->subCategoryProducts->toArray())
        );
    }

    public function __toString(): string
    {
        return $this->name;
    }
}
