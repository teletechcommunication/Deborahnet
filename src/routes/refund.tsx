import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Deborah Net" },
      { name: "description", content: "Deborah Net refund policy - eligibility, timelines and how to request a refund." },
      { property: "og:title", content: "Refund Policy - Deborah Net" },
      { property: "og:url", content: "/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        subtitle="Last updated: January 2026. Clear, fair rules for when and how refunds are issued on Deborah Net services."
      />
      <LegalContent>
        <h2>1. Overview</h2>
        <p>This Refund Policy explains when Deborah Net will issue refunds for monthly service fees, installation charges, equipment fees and other charges associated with our internet, cable TV and Wi-Fi services.</p>

        <h2>2. 30-Day Satisfaction Guarantee</h2>
        <p>New residential customers may cancel service within 30 days of activation for a full refund of monthly service charges. Installation fees, shipping and any consumed equipment costs are non-refundable. Service must be cancelled in writing or by calling our support line.</p>

        <h2>3. Monthly Service Fees</h2>
        <p>After the initial 30-day window, monthly fees are non-refundable. If you cancel mid-cycle on a month-to-month plan, you will retain access through the end of your current billing period and will not be billed for the next cycle.</p>

        <h2>4. Installation and Activation Fees</h2>
        <p>One-time installation, activation and professional setup fees are non-refundable once the work has been performed. If we are unable to complete installation due to a Deborah Net error, the full installation fee will be refunded.</p>

        <h2>5. Equipment Charges</h2>
        <p>Routers, modems, cable boxes and other equipment provided by Deborah Net remain our property. To avoid replacement charges, equipment must be returned in working condition within 30 days of cancellation. Refunds for returned equipment will be processed within 14 business days of inspection.</p>

        <h2>6. Promotional and Bundle Pricing</h2>
        <p>Promotional discounts and bundle pricing are tied to specific terms disclosed at sign-up. Cancelling a bundled service early may forfeit any remaining promotional credit. Promotional credits already applied are not refundable as cash.</p>

        <h2>7. Service Outages</h2>
        <p>Eligible customers may request a prorated service credit for confirmed outages lasting more than 24 consecutive hours that are attributable to the Deborah Net network. Credits do not apply to outages caused by force majeure, external infrastructure or customer-side equipment.</p>

        <h2>8. How to Request a Refund</h2>
        <p>To request a refund or service credit, call <a href="tel:+18338781783" className="hover:text-primary">(833) 878-1783</a> or email <a href="mailto:billing@deborahnet.com">billing@deborahnet.com</a> with your account number, the charge in question and a brief description. Approved refunds are issued to the original payment method within 7-14 business days.</p>

        <h2>9. Disputes</h2>
        <p>If you disagree with a refund decision, you may escalate the matter in writing within 30 days. We will review and respond within 15 business days. Nothing in this policy limits your rights under applicable consumer protection laws.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Refund Policy from time to time. The most current version will always be available on this page with the "Last updated" date revised accordingly.</p>

        <h2>11. Contact</h2>
        <p>Questions about refunds? Call <a href="tel:+18338781783" className="hover:text-primary">(833) 878-1783</a> or email <a href="mailto:billing@deborahnet.com">billing@deborahnet.com</a>.</p>
      </LegalContent>
    </SiteLayout>
  );
}