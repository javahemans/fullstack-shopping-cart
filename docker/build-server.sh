#!/bin/bash

docker build --file docker/server.Dockerfile --rm --tag mshopping-server:latest .

echo \"To run: docker run --detach -p 8888:8888 --name mshopping-server mshopping-server:latest\"
echo \"For ssh into the container: docker exec -it <container_id> sh\"