# ADR-0001: Start with a modular monolith
Status: Accepted

We use one NestJS business API while keeping AI, jobs, and IoT ingestion separate. This reduces distributed-system overhead during MVP development while preserving clear domain boundaries and an extraction path to microservices.
