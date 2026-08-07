# Security baseline
- Per-device credentials and topic-level MQTT authorization.
- TLS for all external traffic; mTLS for sensitive internal links.
- OIDC/OAuth2 authentication, RBAC/ABAC authorization, tenant scoping.
- Input validation at every boundary and signed firmware/device identity.
- Secrets in managed secret storage, key rotation, encrypted backups.
- Immutable audit logs for administrative, agronomic, and financial actions.
- Rate limiting, WAF, dependency scanning, image signing, SBOM, SAST/DAST.
- AI safeguards: model versioning, drift monitoring, human approval for high-impact actions.
