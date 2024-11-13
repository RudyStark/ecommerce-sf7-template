# Utilise l'image officielle PHP 8.2 avec FPM
FROM php:8.2-fpm

# Installation des dépendances du système
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
    cron \
    vim \
    supervisor

# Configuration et installation de GD
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install -j$(nproc) gd

# Installation des extensions PHP nécessaires
RUN docker-php-ext-install \
    intl \
    pdo_mysql \
    zip \
    opcache

# Installation de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installation de Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Création des dossiers nécessaires
RUN mkdir -p /var/log/supervisor /var/run /var/log/cron
RUN touch /var/log/cron.log
RUN chmod 0777 /var/log/cron.log
RUN chmod 0777 /var/log/supervisor

# Configuration du cron
COPY docker/cron/symfony-crontab /etc/cron.d/symfony-cron
RUN chmod 0644 /etc/cron.d/symfony-cron
RUN crontab /etc/cron.d/symfony-cron

# Configuration de Supervisor
COPY docker/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Définition du répertoire de travail
WORKDIR /var/www/html

# Copie du script d'entrée
COPY docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Exposition du port PHP-FPM
EXPOSE 9000

# Point d'entrée
ENTRYPOINT ["docker-entrypoint.sh"]
