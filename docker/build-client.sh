#!/bin/bash

docker build --file docker/client.Dockerfile --rm --squash --network=host --tag mshopping-client:latest .

echo Run using \"docker run --detach --rm -p 8080:80 --name mshopping mshopping-client:latest\"