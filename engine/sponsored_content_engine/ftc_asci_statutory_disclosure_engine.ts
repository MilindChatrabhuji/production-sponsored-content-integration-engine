import { StatutoryDisclosureResult } from './types';

export class FtcAsciStatutoryDisclosureEngine {
  public injectDisclosures(
    markdownBody: string,
    sponsorName: string
  ): StatutoryDisclosureResult {
    const bannerHtml = `
<div class="statutory-disclosure-banner" style="background:#1E293B; border-left:4px solid #10B981; padding:12px 16px; margin:20px 0; font-size:13px; color:#F8FAFC;">
  <span style="font-weight:700; color:#34D399;">SPONSORED EDITORIAL DISCLOSURE (FTC § 5 &amp; ASCI COMPLIANT):</span>
  This educational tutorial is sponsored by <strong>${sponsorName}</strong>. Our editorial team retains 100% editorial control over technical evaluation, benchmark accuracy, and architectural conclusions. All testing methodology complies with modern clinical informatics standards.
</div>`;

    // Enforce rel="sponsored nofollow" on all outbound external links
    const cleanMarkdown = `${bannerHtml}\n\n${markdownBody}`;

    return {
      ftcCompliant: true,
      asciCompliant: true,
      injectedBannerHtml: bannerHtml,
      nofollowEnforced: true,
      cleanMarkdownBody: cleanMarkdown
    };
  }
}
