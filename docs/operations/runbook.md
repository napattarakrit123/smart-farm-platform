# Operations Runbook
1. Check `/api/health` and `/health` on AI service.
2. Check MQTT broker connections and dead-letter telemetry.
3. Check PostgreSQL disk, connection count, slow queries, and hypertable retention.
4. Check Redis queue depth, failed jobs, and retry storms.
5. Check Prometheus targets and Grafana alerts.
6. During incidents, preserve logs, disable unsafe automation, and switch irrigation recommendations to manual approval.
