<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241107093013 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE game_key ADD reserved_for_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE game_key ADD CONSTRAINT FK_91CAB86C9190173B FOREIGN KEY (reserved_for_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_91CAB86C9190173B ON game_key (reserved_for_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE game_key DROP FOREIGN KEY FK_91CAB86C9190173B');
        $this->addSql('DROP INDEX IDX_91CAB86C9190173B ON game_key');
        $this->addSql('ALTER TABLE game_key DROP reserved_for_id');
    }
}
