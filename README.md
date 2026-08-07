# Smart Farm Platform

Production-oriented MVP monorepo for crop planning, IoT ingestion, irrigation recommendations, crop-health alerts, yield forecasting, harvest management, sales, and business analytics.

## Services
- `apps/web`: Next.js dashboard
- `apps/api`: NestJS REST API
- `apps/ai-service`: FastAPI inference service
- `apps/worker`: BullMQ background jobs
- `apps/scheduler`: cron-based recurring jobs
- `apps/iot-gateway`: MQTT ingestion and validation

## Quick start
```bash
cp .env.example .env
pnpm install
pnpm docker:up
pnpm dev
```

Open:
- Web: http://localhost:3000
- API: http://localhost:3001/api/health
- AI: http://localhost:8000/health
- Grafana: http://localhost:3002 (admin/admin)
- Prometheus: http://localhost:9090

## Architecture
The MVP uses a modular monolith for the business API, independently deployable AI/IoT/worker processes, event-driven integration through Redis/BullMQ, PostgreSQL + TimescaleDB for transactional and time-series data, MQTT for sensors, and Prometheus/Grafana for observability.
