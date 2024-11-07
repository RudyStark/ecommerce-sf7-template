#!/bin/sh
set -e

# Démarrer le service cron
service cron start

# Démarrer PHP-FPM
php-fpm
