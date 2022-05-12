# checkout 
git pull -f
# rebuild and start
docker-compose --env-file .env.prod up -d --build
# delete useless containers & images
docker container prune -f --filter "until=24h"
docker image prune -a -f --filter "until=24h"