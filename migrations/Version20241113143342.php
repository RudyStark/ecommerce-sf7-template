<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241113143342 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE product_genres (product_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_CA97A4B24584665A (product_id), INDEX IDX_CA97A4B212469DE2 (category_id), PRIMARY KEY(product_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE product_genres ADD CONSTRAINT FK_CA97A4B24584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_genres ADD CONSTRAINT FK_CA97A4B212469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_detail CHANGE platform_type platform_type VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product_genres DROP FOREIGN KEY FK_CA97A4B24584665A');
        $this->addSql('ALTER TABLE product_genres DROP FOREIGN KEY FK_CA97A4B212469DE2');
        $this->addSql('DROP TABLE product_genres');
        $this->addSql('ALTER TABLE order_detail CHANGE platform_type platform_type VARCHAR(255) DEFAULT NULL');
    }
}
