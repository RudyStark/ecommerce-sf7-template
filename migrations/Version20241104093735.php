<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241104093735 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE product_feature_product (product_id INT NOT NULL, feature_product_id INT NOT NULL, INDEX IDX_D0D69A394584665A (product_id), INDEX IDX_D0D69A395B338BF2 (feature_product_id), PRIMARY KEY(product_id, feature_product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE product_feature_product ADD CONSTRAINT FK_D0D69A394584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_feature_product ADD CONSTRAINT FK_D0D69A395B338BF2 FOREIGN KEY (feature_product_id) REFERENCES feature_product (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product_feature_product DROP FOREIGN KEY FK_D0D69A394584665A');
        $this->addSql('ALTER TABLE product_feature_product DROP FOREIGN KEY FK_D0D69A395B338BF2');
        $this->addSql('DROP TABLE product_feature_product');
    }
}
