# Makefile for E-DGRMO Website Docker operations

# Variables
IMAGE_NAME = e-dgrmo-website
CONTAINER_NAME = e-dgrmo-app

# Default target
.PHONY: help
help:
	@echo "E-DGRMO Website Docker Management"
	@echo ""
	@echo "Usage:"
	@echo "  make build              Build the Docker image"
	@echo "  make run-dev            Run the development environment"
	@echo "  make run-prod           Run the production environment"
	@echo "  make stop-dev           Stop the development environment"
	@echo "  make stop-prod          Stop the production environment"
	@echo "  make clean              Remove Docker containers and images"
	@echo "  make help               Show this help message"

# Build the Docker image
.PHONY: build
build:
	docker build -t $(IMAGE_NAME) .

# Run development environment
.PHONY: run-dev
run-dev:
	docker-compose up -d

# Run production environment
.PHONY: run-prod
run-prod:
	docker-compose -f docker-compose.prod.yml up -d

# Stop development environment
.PHONY: stop-dev
stop-dev:
	docker-compose down

# Stop production environment
.PHONY: stop-prod
stop-prod:
	docker-compose -f docker-compose.prod.yml down

# Clean up Docker containers and images
.PHONY: clean
clean:
	docker-compose down --volumes
	docker-compose -f docker-compose.prod.yml down --volumes
	docker rmi $(IMAGE_NAME) || true
	docker volume prune -f

# Test Docker setup
.PHONY: test-docker
test-docker:
	./test-docker.sh