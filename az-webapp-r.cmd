call loadenv.bat
set AZ_APP_NAME=webmold
set CONTAINER_NAME=webmold-webapp
set TAG=latest
az webapp config container set --name %AZ_APP_NAME% --resource-group %AZ_RESOURCE_GROUP% --container-image-name ghcr.io/%GITHUB_USER%/%CONTAINER_NAME%:%TAG% --container-registry-url https://ghcr.io --container-registry-user %GITHUB_USER% --container-registry-password %GITHUB_TOKEN%