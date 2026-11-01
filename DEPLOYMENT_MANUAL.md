# Deployment & Operations Manual - Edge Sponsor Gateway

## Prerequisites
* Node.js v18+ or v20+
* Cloudflare account with Workers & D1 enabled ($0.00 free tier)
* Wrangler CLI installed (`npx wrangler`)

## Step 1: Initialize Cloudflare D1 Database
```bash
cd engine/edge_sponsor_gateway
npx wrangler d1 create production-sponsor-db
```
Copy the generated `database_id` into `wrangler.toml`.

## Step 2: Apply Database Schema
```bash
npx wrangler d1 execute production-sponsor-db --file=schema.sql
```

## Step 3: Deploy Worker to Global Edge
```bash
npx wrangler deploy
```

## Step 4: Sponsor Reporting Integration
* Sponsor real-time dashboard endpoint: `GET https://<your-worker>.workers.dev/api/sponsor/dashboard?token=<token>`.
* Ingest conversion attribution events via `POST https://<your-worker>.workers.dev/api/attribution/event`.
