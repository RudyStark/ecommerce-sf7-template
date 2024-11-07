# Utilise l'image officielle PHP 8.2 avec FPM
FROM php:8.2-fpm

# Installe les dépendances nécessaires
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libicu-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libzip-dev \
    zip \
    unzip \
    cron

# Installer les extensions PHP nécessaires
RUN docker-php-ext-install intl pdo_mysql gd zip

# Installe Composer (gestionnaire de dépendances PHP)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installe Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Configuration du Cron
COPY docker/cron/crontab /etc/cron.d/symfony-cron
RUN chmod 0644 /etc/cron.d/symfony-cron
RUN touch /var/log/cron.log
RUN chmod 0666 /var/log/cron.log
RUN crontab /etc/cron.d/symfony-cron

# Définit le répertoire de travail
WORKDIR /var/www/html

# Script de démarrage pour lancer PHP-FPM et Cron
COPY docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Utilise le script comme point d'entrée
ENTRYPOINT ["docker-entrypoint.sh"]
