<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20241110101432 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add createdAt field to User entity';
    }

    public function up(Schema $schema): void
    {
        // Ajouter d'abord la colonne en permettant les valeurs NULL
        $this->addSql('ALTER TABLE user ADD created_at DATETIME NULL');

        // Mettre à jour les enregistrements existants avec la date actuelle
        $this->addSql('UPDATE user SET created_at = NOW() WHERE created_at IS NULL');

        // Rendre la colonne NOT NULL après avoir mis à jour les données
        $this->addSql('ALTER TABLE user MODIFY created_at DATETIME NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE user DROP created_at');
    }
}
