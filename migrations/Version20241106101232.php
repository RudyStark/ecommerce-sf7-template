<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241106101232 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE game_key (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, order_detail_id INT DEFAULT NULL, game_key VARCHAR(255) NOT NULL, status VARCHAR(50) NOT NULL, created_at DATETIME NOT NULL, reserved_at DATETIME DEFAULT NULL, sold_at DATETIME DEFAULT NULL, INDEX IDX_91CAB86C4584665A (product_id), UNIQUE INDEX UNIQ_91CAB86C64577843 (order_detail_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE game_key ADD CONSTRAINT FK_91CAB86C4584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE game_key ADD CONSTRAINT FK_91CAB86C64577843 FOREIGN KEY (order_detail_id) REFERENCES order_detail (id)');
        $this->addSql('ALTER TABLE order_detail DROP product_game_key');
        $this->addSql('ALTER TABLE product DROP game_key');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE game_key DROP FOREIGN KEY FK_91CAB86C4584665A');
        $this->addSql('ALTER TABLE game_key DROP FOREIGN KEY FK_91CAB86C64577843');
        $this->addSql('DROP TABLE game_key');
        $this->addSql('ALTER TABLE order_detail ADD product_game_key VARCHAR(50) DEFAULT NULL');
        $this->addSql('ALTER TABLE product ADD game_key VARCHAR(50) DEFAULT NULL');
    }
}
