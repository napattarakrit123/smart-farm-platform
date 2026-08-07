# Architecture Overview

## Style
- Modular monolith in NestJS for core farm/business domains.
- Independent Python inference service for model lifecycle flexibility.
- MQTT ingestion service for device isolation and back-pressure.
- BullMQ workers for long-running jobs and retry semantics.
- PostgreSQL/TimescaleDB for transactional + time-series workloads.

## Main flow
Sensor → MQTT Broker → IoT Gateway → TimescaleDB → API/Worker → AI Service → Recommendation/Alert → Web Dashboard.

## Domain modules to add next
Identity, tenants, farms, plots, crop cycles, devices, telemetry, irrigation, crop health, weather, yield forecast, harvest, inventory, sales, finance, notifications, audit, and reporting.
