../clean.sh
docker rmi test-frontend
docker build -t test-frontend .
docker run --name test-frontend -dit -p 4200:4200 test-frontend