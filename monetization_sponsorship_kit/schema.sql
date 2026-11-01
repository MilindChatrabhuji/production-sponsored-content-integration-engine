-- Cloudflare D1 Sponsorship Invoicing Schema
CREATE TABLE IF NOT EXISTS sponsorship_retainer_invoices (
  id TEXT PRIMARY KEY,
  sponsor_name TEXT NOT NULL,
  sponsor_email TEXT NOT NULL,
  tier_name TEXT NOT NULL,
  amount REAL NOT NULL,
  currency TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unpaid',
  payment_method TEXT NOT NULL,
  issued_at TEXT NOT NULL,
  paid_at TEXT
);
