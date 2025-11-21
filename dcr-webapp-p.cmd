call loadenv.bat

docker tag webmold-webapp:latest ghcr.io/borodaev/webmold-webapp:latest

echo %GITHUB_TOKEN% | docker login ghcr.io -u %GITHUB_USER% --password-stdin

docker push ghcr.io/borodaev/webmold-webapp:latest