kubectl delete deployments --all
docker buildx build --platform linux/amd64 -t sandeshhd/pet-health-care-api:latest . --load
docker push sandeshhd/pet-health-care-api
kubectl apply -f deployment.yaml