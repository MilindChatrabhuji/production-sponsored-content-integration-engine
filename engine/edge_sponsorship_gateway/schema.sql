-- Cloudflare D1 Database Schema
-- Production Sponsored Educational Content & Ethical Brand Integration Engine

CREATE TABLE IF NOT EXISTS sponsors (
  id TEXT PRIMARY KEY,
  brand_name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  tier TEXT NOT NULL CHECK(tier IN ('single_integration', 'multi_channel_campaign', 'enterprise_brand_retainer')),
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS campaigns (
  id TEXT PRIMARY KEY,
  sponsor_id TEXT NOT NULL,
  campaign_title TEXT NOT NULL,
  target_product TEXT NOT NULL,
  budget_usd REAL NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  FOREIGN KEY (sponsor_id) REFERENCES sponsors(id)
);

CREATE TABLE IF NOT EXISTS campaign_telemetry_events (
  id TEXT PRIMARY KEY,
  campaign_id TEXT NOT NULL,
  sponsor_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  user_domain TEXT NOT NULL,
  recorded_at TEXT NOT NULL,
  FOREIGN KEY (campaign_id) REFERENCES campaigns(id)
);

CREATE INDEX IF NOT EXISTS idx_campaigns_sponsor ON campaigns(sponsor_id);
CREATE INDEX IF NOT EXISTS idx_telemetry_campaign ON campaign_telemetry_events(campaign_id);
