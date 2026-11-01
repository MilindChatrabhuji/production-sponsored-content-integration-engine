/**
 * Lead Attribution Event Router
 * Ingests click-through and download conversion events at the serverless edge with D1 persistence.
 */

export interface AttributionEventPayload {
  eventId: string;
  campaignId: string;
  sponsorId: string;
  eventType: 'link_click' | 'whitepaper_download' | 'sdk_install_event';
  userDomain?: string;
  timestampIso: string;
}

export class LeadAttributionEventRouter {
  public validateEvent(payload: any): { valid: boolean; event?: AttributionEventPayload; error?: string } {
    if (!payload || !payload.campaignId || !payload.eventType) {
      return { valid: false, error: 'Missing required campaignId or eventType' };
    }

    const event: AttributionEventPayload = {
      eventId: payload.eventId || `attr-${Date.now().toString(36)}`,
      campaignId: payload.campaignId,
      sponsorId: payload.sponsorId || 'sp-default',
      eventType: payload.eventType,
      userDomain: payload.userDomain || 'newsroom.example.com',
      timestampIso: payload.timestampIso || new Date().toISOString()
    };

    return { valid: true, event };
  }

  public generateD1InsertQuery(event: AttributionEventPayload): { sql: string; params: (string | number)[] } {
    const sql = `
      INSERT INTO campaign_telemetry_events (id, campaign_id, sponsor_id, event_type, user_domain, recorded_at)
      VALUES (?, ?, ?, ?, ?, ?);
    `;
    const params = [event.eventId, event.campaignId, event.sponsorId, event.eventType, event.userDomain || '', event.timestampIso];
    return { sql, params };
  }
}
