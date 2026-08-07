<<<<<<< HEAD
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
=======
# 🌱 Smart Farm Platform

An AI-Native Smart Farm Platform that helps farmers monitor, analyze, and automate agricultural operations using IoT, Artificial Intelligence, and Cloud technologies.

The platform combines real-time sensor monitoring, weather forecasting, AI recommendations, automation rules, analytics dashboards, and farm management into a single modern web application.

## ✨ Key Features

- 🔐 Authentication & Role Management
- 🌾 Farm, Zone & Crop Management
- 📡 IoT Device Management
- 🌡️ Real-time Sensor Monitoring
- 💧 Smart Irrigation
- ☀️ Weather Integration
- 🤖 AI Crop Recommendation
- 📈 Farm Analytics Dashboard
- ⚡ Automation Rules
- 🔔 Notifications & Alerts
- 📊 Historical Data Visualization
- 📦 Harvest Management
- 💰 Cost & Revenue Tracking
- 🧠 AI Decision Support
- 📱 Responsive Web Application

---

## 🏗 Architecture

The project follows a modern AI-Native architecture consisting of:

- Next.js Frontend
- NestJS Backend API
- FastAPI AI Service
- PostgreSQL Database
- Redis Cache
- MQTT IoT Gateway
- Docker Containers
- Monorepo with Turborepo
- PNPM Workspace

---

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- Zustand

### Backend

- NestJS
- Prisma ORM
- PostgreSQL
- Redis
- JWT Authentication

### AI

- Python
- FastAPI
- OpenAI Compatible APIs
- Machine Learning
- Recommendation Engine

### IoT

- MQTT
- Sensor Gateway
- Device Management

### DevOps

- Docker
- Docker Compose
- GitHub Actions
- Turborepo
- PNPM Workspace

---

## Project Structure
>>>>>>> cd532b54119a81f7dc7c044088a78e720c03aec3
