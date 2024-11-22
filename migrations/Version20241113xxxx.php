<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20241113xxxx extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add product_genres table for multiple genres per product';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE product_genres (product_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_CA97A4B24584665A (product_id), INDEX IDX_CA97A4B212469DE2 (category_id), PRIMARY KEY(product_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE product_genres ADD CONSTRAINT FK_CA97A4B24584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_genres ADD CONSTRAINT FK_CA97A4B212469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE product_genres');
    }
}
