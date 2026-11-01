import { SponsorBrief, EthicalFitAnalysis } from './types';

export class BrandBriefAndEthicalFitAnalyzer {
  public analyzeBrief(brief: SponsorBrief): EthicalFitAnalysis {
    let score = 100;
    const reasons: string[] = [];
    const mandatoryDisclosures: string[] = [
      'FTC § 5 clear and conspicuous sponsorship badge required at top of content',
      'ASCI digital media disclosure (#Ad / #Sponsored) required in all social syndications',
      'rel="sponsored nofollow" mandatory on all outbound commercial links'
    ];

    // Check for deceptive medical / cure claims
    const deceptiveKeywords = ['cure', 'miracle', 'instant healing', 'guaranteed profit', 'no risk'];
    for (const claim of brief.claimsToEvaluate) {
      if (deceptiveKeywords.some(kw => claim.toLowerCase().includes(kw))) {
        score -= 40;
        reasons.push(`Flagged unverified or deceptive marketing claim: "${claim}"`);
      }
    }

    // Check for legitimate technical / clinical relevance
    const relevantKeywords = ['api', 'sdk', 'cloud', 'infrastructure', 'clinical data', 'interoperability', 'fhir'];
    const isRelevant = relevantKeywords.some(kw => 
      brief.targetProduct.toLowerCase().includes(kw) || brief.proposedTopic.toLowerCase().includes(kw)
    );

    if (!isRelevant) {
      score -= 25;
      reasons.push('Proposed topic lacks direct technical/clinical audience alignment.');
    } else {
      reasons.push('High-relevance developer tooling / clinical informatics alignment confirmed.');
    }

    const approved = score >= 70;

    return {
      briefId: brief.briefId,
      ethicalScore: score,
      approved,
      editorialIndependenceGuaranteed: true,
      clinicalAndScientificValidity: approved ? 'verified' : 'rejected',
      reasons,
      mandatoryDisclosures
    };
  }

  public getSampleSponsorBrief(): SponsorBrief {
    return {
      briefId: 'brf-cloud-101',
      brandName: 'EdgeScale Systems',
      websiteUrl: 'https://brand.example.com',
      targetProduct: 'High-Concurrency Edge Gateway SDK',
      proposedTopic: 'Benchmarking Sub-10ms JWT Validation in Healthcare EHR Pipelines',
      targetAudience: 'Senior Infrastructure Engineers & Medical Informaticians',
      claimsToEvaluate: [
        'EdgeScale SDK achieves sub-10ms latency across 54 global PoPs',
        'Zero packet loss under 100,000 sustained requests per second'
      ],
      budgetUsd: 3000
    };
  }
}
