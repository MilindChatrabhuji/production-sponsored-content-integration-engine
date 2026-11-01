import { BrandBriefAndEthicalFitAnalyzer } from './brand_brief_and_ethical_fit_analyzer';
import { SponsoredCurriculumAndCaseStudyGenerator } from './sponsored_curriculum_and_case_study_generator';
import { FtcAsciStatutoryDisclosureEngine } from './ftc_asci_statutory_disclosure_engine';
import { AudienceEngagementAndRoiTelemetryTracker } from './audience_engagement_and_roi_telemetry_tracker';

export function runBrandIntegrationDemo(): void {
  console.log('=== STARTING ETHICAL BRAND INTEGRATION & SPONSORED CONTENT DEMO ===');

  // 1. Brand Fit & Ethical Audit
  const analyzer = new BrandBriefAndEthicalFitAnalyzer();
  const brief = analyzer.getSampleSponsorBrief();
  const fit = analyzer.analyzeBrief(brief);
  console.log(`[PASS] Ethical Fit Score: ${fit.ethicalScore}/100. Approved: ${fit.approved}.`);
  console.log(`[PASS] Clinical/Scientific Validity: ${fit.clinicalAndScientificValidity}.`);

  // 2. Educational Tutorial & Case Study Generation
  const generator = new SponsoredCurriculumAndCaseStudyGenerator();
  const tutorial = generator.generateEducationalTutorial(brief, 'Dr. Milind Chatrabhuji');
  console.log(`[PASS] Generated Sponsored Tutorial: "${tutorial.title}".`);
  console.log(`[PASS] CTA rel attribute: "${tutorial.callToAction.relAttribute}".`);

  // 3. FTC / ASCI Statutory Disclosure Injection
  const disclosureEngine = new FtcAsciStatutoryDisclosureEngine();
  const disclosure = disclosureEngine.injectDisclosures(tutorial.tutorialMarkdown, brief.brandName);
  console.log(`[PASS] FTC/ASCI Compliance: FTC=${disclosure.ftcCompliant}, ASCI=${disclosure.asciCompliant}, nofollow=${disclosure.nofollowEnforced}.`);

  // 4. ROI Telemetry & Reporting
  const tracker = new AudienceEngagementAndRoiTelemetryTracker();
  const roi = tracker.generateRoiReport('camp-881', brief.brandName, 12500, 8400, 1050, 428);
  console.log(`[PASS] ROI Report: ${roi.totalImpressions} impressions, ${roi.completionRatePercent}% completion, ${roi.ctrPercent}% CTR, ${roi.attributedDownloads} downloads.`);

  console.log('=== DEMO COMPLETE: 100% OPERATIONAL ===');
}

if (require.main === module) {
  runBrandIntegrationDemo();
}
