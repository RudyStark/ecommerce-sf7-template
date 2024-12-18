<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241021202732 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE order_history (id INT AUTO_INCREMENT NOT NULL, order_reference_id INT NOT NULL, status_change VARCHAR(255) NOT NULL, changed_by VARCHAR(255) NOT NULL, changed_at DATETIME NOT NULL, INDEX IDX_D1C0D90012854AC3 (order_reference_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE order_history ADD CONSTRAINT FK_D1C0D90012854AC3 FOREIGN KEY (order_reference_id) REFERENCES `order` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE order_history DROP FOREIGN KEY FK_D1C0D90012854AC3');
        $this->addSql('DROP TABLE order_history');
    }
}
