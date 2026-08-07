install:
	corepack enable && pnpm install

dev:
	pnpm dev

up:
	docker compose -f infrastructure/docker/docker-compose.yml up -d --build

down:
	docker compose -f infrastructure/docker/docker-compose.yml down -v
