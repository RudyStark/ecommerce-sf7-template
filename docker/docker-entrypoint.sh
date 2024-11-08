#!/bin/sh
set -e

# Vérifier les permissions
touch /var/log/cron.log
chmod 0666 /var/log/cron.log

# Créer les dossiers pour supervisor
mkdir -p /var/log/supervisor
chmod 0777 /var/log/supervisor

# Démarrer supervisor qui gérera à la fois cron et php-fpm
exec /usr/bin/supervisord -n -c /etc/supervisor/conf.d/supervisord.conf
