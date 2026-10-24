# Security Policy

## Scope

Strange Studio is an early-stage prototype. Do not assume it is suitable for production workloads or sensitive data.

## Reporting a vulnerability

Please do not publish exploitable details in a public issue. If GitHub private vulnerability reporting is enabled for this repository, use that feature. Otherwise, contact the repository owner privately through GitHub to arrange a responsible disclosure.

Do not include live credentials, tokens, personal data, or real customer information in a report.

## Security expectations

- Never commit secrets or real environment files.
- Keep provider credentials on a trusted server-side boundary, not in frontend bundles.
- Validate and authorize external tool calls on the server.
- Treat model output, retrieved documents, tool results, and event payloads as untrusted input.
- Apply least privilege to connectors and CI permissions.
- Redact sensitive information from logs and inspector panels.
- Define retention and deletion behavior before storing user knowledge or event history.
- Test authentication, authorization, input validation, and delivery-gate bypasses before production use.

## Current limitation

The current prototype uses local demonstration fixtures and has no production authentication, persistent backend, live agent runtime, or connected tool gateway. These absences are not a security certification; production deployment requires a dedicated threat model and review.
