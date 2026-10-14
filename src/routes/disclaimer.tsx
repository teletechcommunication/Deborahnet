import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Deborah Net" },
      { name: "description", content: "Important disclaimers about information, services and trademarks referenced on the Deborah Net website." },
      { property: "og:title", content: "Disclaimer — Deborah Net" },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        subtitle="Last updated: January 2026. Important information about the content, services and brand references on this website."
      />
      <LegalContent>
        <h2>1. General Information</h2>
        <p>The information provided on the Deborah Net website is for general informational purposes only. While we strive to keep service details, pricing and availability accurate and current, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability or suitability of any information on this site.</p>

        <h2>2. No Professional Advice</h2>
        <p>Content published on this website does not constitute legal, financial, technical or professional advice. You should not rely on this information as a substitute for advice from a qualified professional appropriate to your specific situation.</p>

        <h2>3. Service Availability</h2>
        <p>Internet, cable TV, Wi-Fi and related services are subject to availability, serviceability checks, credit approval and applicable terms. Advertised speeds, channel counts and feature sets are not guaranteed and may vary based on location, equipment and network conditions.</p>

        <h2>4. Pricing & Promotions</h2>
        <p>All pricing, packages and promotional offers shown on this site are illustrative and may change without notice. Final pricing is confirmed at the time of order and may include taxes, fees, surcharges and equipment costs that are not reflected in advertised rates.</p>

        <h2>5. Trademark Notice</h2>
        <p>All third-party brand names, logos and trademarks referenced on this website are the property of their respective owners. Their use does not imply any affiliation with, endorsement by or sponsorship from those owners.</p>

        <h2>6. External Links</h2>
        <p>This website may contain links to external sites that are not operated by Deborah Net. We have no control over the content, privacy practices or accuracy of those external resources and accept no responsibility for them.</p>

        <h2>7. Testimonials</h2>
        <p>Customer testimonials and reviews displayed on this site reflect individual experiences and opinions. Results, savings and outcomes may vary from customer to customer.</p>

        <h2>8. Limitation of Liability</h2>
        <p>Deborah Net, its officers, employees and partners will not be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, arising from the use of or reliance on information available through this website.</p>

        <h2>9. Errors & Omissions</h2>
        <p>While every effort is made to ensure accuracy, this website may contain typographical errors, inaccuracies or omissions that relate to pricing, plan features, availability and other content. We reserve the right to correct such information without prior notice.</p>

        <h2>10. Changes to This Disclaimer</h2>
        <p>We may revise this Disclaimer at any time without notice. The most current version is the version posted on this page. Continued use of the website following any change constitutes acceptance of the revised Disclaimer.</p>

        <h2>11. Contact</h2>
        <p>If you have questions about this Disclaimer, call <a href="tel:+18335814461" className="hover:text-primary">(833) 581-4461</a> or email <a href="mailto:legal@deborahnet.com">legal@deborahnet.com</a>.</p>
      </LegalContent>
    </SiteLayout>
  );
}
