import { createFileRoute } from "@tanstack/react-router";
import { Clock, HeadphonesIcon, Mail, MapPin, Phone, Search, Send } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Deborah Net — Call (877) 370-6029 | Internet & Cable Support" },
      { name: "description", content: "Get in touch with Deborah Net. Check ZIP availability, request a callback, or call (877) 370-6029 — 24/7 US-based support." },
      { property: "og:title", content: "Contact Deborah Net" },
      { property: "og:description", content: "24/7 US support, ZIP availability checker, and fast callbacks." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [zipResult, setZipResult] = useState<null | "available" | "checking">(null);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="We're online. We're on the phone. And we pick up."
        subtitle="Real US-based agents, available 24/7. Pick the contact method that suits you."
      />

      {/* CONTACT CARDS */}
      <section className="relative py-12 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Phone, t: "Call us", v: "(877) 370-6029", href: "tel:+18773706029", sub: "24/7 — under 30s pickup" },
            { icon: Mail, t: "Email", v: "support@deborahnet.com", href: "mailto:support@deborahnet.com", sub: "Reply within 2 hours" },
            { icon: MapPin, t: "Headquarters", v: "1200 Lincoln St, Denver CO", sub: "Mon–Sat, 8am–8pm MT" },
            { icon: Clock, t: "Working hours", v: "24/7 support line", sub: "365 days a year" },
          ].map((c) => (
            <Reveal key={c.t}>
              <a href={c.href ?? "#"} className="block glass rounded-3xl p-6 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 h-full">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xs font-semibold tracking-wider uppercase text-primary">{c.t}</div>
                <div className="mt-1 font-display font-bold text-ink">{c.v}</div>
                <div className="mt-1 text-xs text-ink-muted">{c.sub}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="relative py-16 mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <Reveal className="lg:col-span-3">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false), 4000); }}
            className="card-premium"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">Send us a message</h2>
            <p className="mt-2 text-ink-muted text-sm">We typically reply within 2 hours during business hours.</p>

            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              <Field label="Full name" type="text" placeholder="Jane Doe" />
              <Field label="Phone number" type="tel" placeholder="(555) 123-4567" />
              <Field label="Email" type="email" placeholder="jane@example.com" />
              <Field label="ZIP code" type="text" placeholder="80202" />
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us a bit about what you're looking for…"
                className="mt-1.5 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none focus:border-primary resize-none"
              />
            </div>
            <button className="mt-6 btn-primary w-full sm:w-auto">
              {sent ? "Sent — talk soon!" : (<><Send className="h-4 w-4" /> Send message</>)}
            </button>
          </form>
        </Reveal>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* ZIP checker */}
          <Reveal delay={100}>
            <div className="rounded-3xl p-7 bg-gradient-to-br from-ink to-[oklch(0.22_0.1_268)] text-white shadow-elegant relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-primary-glow/30 blur-3xl" />
              <div className="relative">
                <div className="grid place-items-center h-11 w-11 rounded-2xl bg-white/10">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">Check availability</h3>
                <p className="mt-1 text-sm text-white/70">Enter your ZIP code to see live plans for your area.</p>
                <form
                  onSubmit={(e)=>{e.preventDefault(); setZipResult("checking"); setTimeout(()=>setZipResult("available"), 900);}}
                  className="mt-5 flex gap-2"
                >
                  <input required placeholder="Enter ZIP" maxLength={5} className="flex-1 rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm outline-none placeholder:text-white/50 focus:border-primary-glow" />
                  <button className="rounded-full bg-gradient-primary px-5 py-3 font-semibold text-sm hover:shadow-glow transition">Check</button>
                </form>
                {zipResult === "checking" && <p className="mt-3 text-xs text-white/70">Checking your area…</p>}
                {zipResult === "available" && (
                  <p className="mt-3 text-xs text-primary-glow font-semibold">✓ Service available — call (877) 370-6029 to activate.</p>
                )}
              </div>
            </div>
          </Reveal>

          {/* Support card */}
          <Reveal delay={150}>
            <div className="glass rounded-3xl p-7 shadow-soft">
              <div className="grid place-items-center h-11 w-11 rounded-2xl bg-primary/10 text-primary">
                <HeadphonesIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">Need help right now?</h3>
              <p className="mt-2 text-sm text-ink-muted">Skip the form — call our 24/7 support team and talk to a real human in under 30 seconds.</p>
              <a href="tel:+18773706029" className="mt-5 btn-primary w-full"><Phone className="h-4 w-4" /> (877) 370-6029</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="relative py-12 mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border shadow-soft aspect-[16/7]">
            <iframe
              title="Deborah Net headquarters map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-104.992%2C39.737%2C-104.984%2C39.742&layer=mapnik&marker=39.7395%2C-104.9883"
              className="w-full h-full"
              loading="lazy"
            />
            <div className="absolute top-5 left-5 glass rounded-2xl p-4 shadow-soft max-w-[260px]">
              <div className="text-xs font-semibold tracking-wider uppercase text-primary">Headquarters</div>
              <div className="mt-1 font-display font-bold text-ink">Deborah Net HQ</div>
              <div className="text-xs text-ink-muted mt-1">1200 Lincoln St, Denver, CO 80203</div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold text-ink-muted uppercase tracking-wider">{label}</label>
      <input required {...rest} className="mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
    </div>
  );
}
