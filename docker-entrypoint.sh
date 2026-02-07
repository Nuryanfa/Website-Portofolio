#!/bin/bash
set -e

# Run migrations (force is needed for production)
php artisan migrate --force

# Start Apache in foreground
apache2-foreground
