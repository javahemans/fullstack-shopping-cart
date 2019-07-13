#!/bin/bash

docker build --file docker/database.Dockerfile --rm --tag mshopping-database:latest .

echo \"To run: docker run --detach -p 27017:27017 --name mshopping mshopping-database:latest\"
echo \"To test run: mongo --host localhost --port 49158\"
echo \"To see the logs: docker logs <container_id>\"
echo \"For going into the container: docker exec -it <container_id> sh"
