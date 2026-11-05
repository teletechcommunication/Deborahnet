import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone, Tv, Wifi, Zap, Briefcase, Home, MonitorPlay } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import serviceFiber from "@/assets/service-fiber.jpg";
import serviceCable from "@/assets/service-cable.jpg";
import serviceWifi from "@/assets/service-wifi.jpg";
import serviceBusiness from "@/assets/service-business.jpg";
import serviceStreaming from "@/assets/service-streaming.jpg";
import lifestyleWfh from "@/assets/lifestyle-wfh.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fiber, Cable TV, WiFi & Business Internet | Deborah Net" },
      { name: "description", content: "Explore high-speed internet, fiber, cable TV, home WiFi, business internet and streaming solutions from Deborah Net. Call (833) 581-3551." },
      { property: "og:title", content: "Deborah Net Services" },
      { property: "og:description", content: "Premium internet, cable TV, WiFi and streaming solutions for every American home." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Zap, img: lifestyleWfh, eyebrow: "Internet",
    title: "High-Speed Internet",
    desc: "Speeds from 300 Mbps to 5 Gbps over a fiber-rich nationwide backbone. Built for households that stream, work, school and game — all at the same time.",
    features: ["No data caps, ever", "Free WiFi 6/7 modem", "Self-install in 10 minutes", "Money-back 30-day guarantee"],
  },
  {
    icon: Wifi, img: serviceFiber, eyebrow: "Fiber",
    title: "Fiber Internet",
    desc: "Pure light-speed fiber with symmetrical upload and download. Sub-3ms latency makes it the new gold standard for video calls, cloud work and competitive gaming.",
    features: ["Symmetrical 1G / 2G / 5G plans", "Sub-3ms latency", "99.99% network uptime", "Static IP available"],
  },
  {
    icon: Tv, img: serviceCable, eyebrow: "TV",
    title: "Cable TV Packages",
    desc: "300+ HD channels, premium movies, live sports and on-demand libraries — all on a cloud DVR you can watch from any screen, anywhere.",
    features: ["300+ HD channels", "Premium movie add-ons", "Cloud DVR (200 hrs)", "Watch on phone, tablet, TV"],
  },
  {
    icon: Home, img: serviceWifi, eyebrow: "WiFi",
    title: "Home WiFi Setup",
    desc: "Whole-home mesh installed and tuned by a certified pro. Every room, every device — full bars, full speed, no dead zones, ever.",
    features: ["Mesh covers up to 6,000 sq ft", "Pro install + tuning included", "Parental controls + guest WiFi", "Free hardware upgrades every 3 yrs"],
  },
  {
    icon: Briefcase, img: serviceBusiness, eyebrow: "Business",
    title: "Business Internet",
    desc: "Dedicated business fiber with guaranteed SLAs, static IPs and priority repair. Built for offices, retail, healthcare and multi-site operations.",
    features: ["Guaranteed uptime SLA", "Static IP block included", "4-hour repair guarantee", "24/7 dedicated business line"],
  },
  {
    icon: MonitorPlay, img: serviceStreaming, eyebrow: "Streaming",
    title: "Streaming Solutions",
    desc: "Bundle Netflix, Disney+, Max, Apple TV+ and Paramount+ at a deep discount and manage every subscription from one simple dashboard.",
    features: ["Up to 5 services in one bill", "Save up to $35/month", "4K HDR on every device", "One login, one dashboard"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our services"
        title="Everything you need to stay connected, beautifully bundled."
        subtitle="Internet, fiber, cable TV, WiFi, business and streaming — all from one trusted American provider."
      />

      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 space-y-16 sm:space-y-24">
        {services.map((s, i) => (
          <Reveal key={s.title}>
            <article className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i%2===1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-primary rounded-[2.5rem] blur-2xl opacity-20" />
                <img src={s.img} alt={s.title} loading="lazy" width={1280} height={960} className="relative rounded-[2rem] shadow-elegant w-full object-cover aspect-[4/3]" />
                <div className="absolute -bottom-5 -right-5 glass rounded-2xl shadow-elegant px-5 py-3 flex items-center gap-3">
                  <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">{s.eyebrow}</div>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-primary">{s.eyebrow}</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">{s.title}</h2>
                <p className="mt-5 text-ink-muted leading-relaxed">{s.desc}</p>

                <ul className="mt-7 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="grid place-items-center h-6 w-6 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-ink-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="tel:+18335813551" className="mt-8 btn-primary inline-flex">
                  <Phone className="h-4 w-4" /> Call about {s.title}
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </SiteLayout>
  );
}
