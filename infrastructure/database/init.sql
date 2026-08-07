CREATE EXTENSION IF NOT EXISTS timescaledb;
-- Prisma creates application tables. Convert readings to hypertable after migration:
-- SELECT create_hypertable('SensorReading', 'recordedAt', if_not_exists => TRUE, migrate_data => TRUE);
CREATE TABLE IF NOT EXISTS telemetry_dead_letter (
  id BIGSERIAL PRIMARY KEY, topic TEXT NOT NULL, payload JSONB NOT NULL, error TEXT NOT NULL, received_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
