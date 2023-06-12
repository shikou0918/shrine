docker compose exec web composer install
wait

docker compose exec web php artisan key:generate
wait

docker compose exec web php artisan config:clear &
docker compose exec web php artisan route:clear &
docker compose exec web php artisan view:clear &
docker compose exec web php artisan cache:clear
wait
