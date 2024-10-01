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
    unzip

# Installer les extensions PHP nécessaires
RUN docker-php-ext-install intl pdo_mysql gd zip

# Installe Composer (gestionnaire de dépendances PHP)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installe Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Copie la configuration PHP personnalisée si nécessaire
#COPY php.ini /usr/local/etc/php/php.ini

# Définit le répertoire de travail
WORKDIR /var/www/html

# Lancer PHP-FPM au démarrage du conteneur
CMD ["php-fpm"]
