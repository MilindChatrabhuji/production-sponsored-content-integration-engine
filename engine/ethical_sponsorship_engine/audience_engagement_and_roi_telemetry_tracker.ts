import { CampaignRoiTelemetry } from './types';

export class AudienceEngagementAndRoiTelemetryTracker {
  public generateRoiReport(
    campaignId: string,
    sponsorName: string,
    totalImpressions: number,
    engagedReads: number,
    clicks: number,
    downloads: number
  ): CampaignRoiTelemetry {
    const completionRatePercent = totalImpressions > 0 
      ? Number(((engagedReads / totalImpressions) * 100).toFixed(1)) 
      : 0;

    const ctrPercent = totalImpressions > 0 
      ? Number(((clicks / totalImpressions) * 100).toFixed(2)) 
      : 0;

    return {
      campaignId,
      sponsorName,
      totalImpressions,
      engagedReads,
      completionRatePercent,
      clickThroughCount: clicks,
      ctrPercent,
      attributedDownloads: downloads
    };
  }
}
