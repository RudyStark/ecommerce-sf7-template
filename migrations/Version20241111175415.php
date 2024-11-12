<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241111175415 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add platform_type to order_detail table';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE order_detail ADD platform_type VARCHAR(255) DEFAULT NULL');

        // Mettre à jour les enregistrements existants basés sur les relations produit si nécessaire
        $this->addSql('
            UPDATE order_detail od 
            INNER JOIN game_key gk ON gk.order_detail_id = od.id 
            SET od.platform_type = gk.type 
            WHERE gk.type IS NOT NULL
        ');

        // Maintenant on peut rendre le champ NOT NULL
        $this->addSql('ALTER TABLE order_detail MODIFY platform_type VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE order_detail DROP platform_type');
    }
}
