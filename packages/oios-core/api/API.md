# OIOS HTTP API

Start locally with `npm run api:dev`; the server listens on port 8787 by default. Set `PORT` to change the port. Endpoints:

- `GET /health`: service status and canonical primitive contract.
- `GET /api/workflows`: workflows held by this process.
- `POST /api/workflows`: JSON workflow creation, schema-validated before domain creation. Returns 201, 400 on schema rejection, or 409 on duplicate identity.
- `GET /api/workflows/:id`: returns a workflow or 404.

The service is currently a local, process-memory implementation. It has no authentication or durable storage and must not be exposed as a production service without those controls. API integration tests use Supertest and Vitest.
