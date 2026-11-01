/**
 * Production Sponsored Educational Content & Ethical Brand Integration Engine - Core Types
 * Category D: Content, Media & Audience (Product 80)
 * Standards: Modern Evidence-Based Clinical Informatics & FTC § 5 / ASCI Guidelines
 */

export type SponsorshipTier = 'single_integration' | 'multi_channel_campaign' | 'enterprise_brand_retainer';

export interface SponsorBrief {
  briefId: string;
  brandName: string;
  websiteUrl: string;
  targetProduct: string;
  proposedTopic: string;
  targetAudience: string;
  claimsToEvaluate: string[];
  budgetUsd: number;
}

export interface EthicalFitAnalysis {
  briefId: string;
  ethicalScore: number; // 0 to 100
  approved: boolean;
  editorialIndependenceGuaranteed: boolean;
  clinicalAndScientificValidity: 'verified' | 'requires_revision' | 'rejected';
  reasons: string[];
  mandatoryDisclosures: string[];
}

export interface SponsoredTutorialModule {
  moduleId: string;
  title: string;
  sponsorName: string;
  educationalObjective: string;
  tutorialMarkdown: string;
  codeSnippetExample: string;
  ftcBadgeMarkup: string;
  callToAction: {
    ctaText: string;
    targetUrl: string;
    relAttribute: 'sponsored nofollow';
  };
}

export interface StatutoryDisclosureResult {
  ftcCompliant: boolean;
  asciCompliant: boolean;
  injectedBannerHtml: string;
  nofollowEnforced: boolean;
  cleanMarkdownBody: string;
}

export interface CampaignRoiTelemetry {
  campaignId: string;
  sponsorName: string;
  totalImpressions: number;
  engagedReads: number;
  completionRatePercent: number;
  clickThroughCount: number;
  ctrPercent: number;
  attributedDownloads: number;
}
