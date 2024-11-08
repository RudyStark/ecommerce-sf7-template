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

# Trouver et stocker le chemin PHP dans une variable d'environnement
ENV PHP_PATH=/usr/local/bin/php

# Création du script pour la commande cron avec le chemin complet de PHP
RUN echo '#!/bin/sh' > /usr/local/bin/clean-expired-keys.sh && \
    echo 'echo "[$(date)] Starting clean-expired-keys script" >> /var/log/cron.log 2>&1' >> /usr/local/bin/clean-expired-keys.sh && \
    echo "cd /var/www/html && $PHP_PATH bin/console app:clean-expired-keys --env=prod --no-debug >> /var/log/cron.log 2>&1" >> /usr/local/bin/clean-expired-keys.sh && \
    echo 'echo "[$(date)] Finished clean-expired-keys script" >> /var/log/cron.log 2>&1' >> /usr/local/bin/clean-expired-keys.sh && \
    chmod +x /usr/local/bin/clean-expired-keys.sh

# Configuration du cron
RUN echo '*/15 * * * * root /usr/local/bin/clean-expired-keys.sh' > /etc/cron.d/symfony-cron && \
    echo "" >> /etc/cron.d/symfony-cron && \
    chmod 0644 /etc/cron.d/symfony-cron && \
    crontab /etc/cron.d/symfony-cron

# Configuration de Supervisor
COPY docker/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Définition du répertoire de travail
WORKDIR /var/www/html

# Copie du script d'entrée
COPY docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Pour debugging, afficher le contenu du script
RUN cat /usr/local/bin/clean-expired-keys.sh

# Exposition du port PHP-FPM
EXPOSE 9000

# Point d'entrée
ENTRYPOINT ["docker-entrypoint.sh"]
