# ADR-0002: PostgreSQL + TimescaleDB
Status: Accepted

Use PostgreSQL for master and transactional data, with TimescaleDB hypertables for telemetry. This avoids operating two databases in the MVP while supporting time-window queries, retention policies, and continuous aggregates.
