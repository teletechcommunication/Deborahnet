import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeadphonesIcon, MapPin, Phone, ShieldCheck, Target, Users, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import aboutTeam from "@/assets/about-team.jpg";
import supportAgent from "@/assets/support-agent.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Deborah Net — 18+ Years Delivering Premium Connectivity" },
      { name: "description", content: "Learn how Deborah Net became one of America's most trusted internet & cable providers — built on reliability, transparency and real human support." },
      { property: "og:title", content: "About Deborah Net" },
      { property: "og:description", content: "Reliable internet & cable for 250,000+ American households." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2007", title: "Founded in Denver", desc: "Started with a single fiber loop and a promise: real speeds, real people." },
  { year: "2013", title: "Coast-to-coast expansion", desc: "Reached 20 states and crossed 50,000 active households." },
  { year: "2018", title: "Gigabit-everywhere initiative", desc: "Made symmetrical 1 Gbps fiber the standard for every market we serve." },
  { year: "2022", title: "WiFi 7 + cloud DVR rollout", desc: "First mid-tier ISP to bundle next-gen hardware at no extra cost." },
  { year: "Today", title: "250,000+ happy customers", desc: "Serving 48 states with 99.99% uptime and a 4.9-star average rating." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Deborah Net"
        title="Premium connectivity, powered by people who pick up the phone."
        subtitle="For nearly two decades we've been quietly building the most reliable internet & cable network in America — one customer at a time."
      />

      {/* INTRO */}
      <section className="relative py-20 mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary rounded-[2.5rem] blur-2xl opacity-25" />
            <img src={aboutTeam} alt="Deborah Net team collaborating in the office" loading="lazy" width={1600} height={1100} className="relative rounded-[2rem] shadow-elegant w-full object-cover aspect-[5/4]" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Who we are</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
            A national ISP that still feels <span className="text-gradient">local.</span>
          </h2>
          <p className="mt-6 text-ink-muted leading-relaxed">
            Deborah Net is an American internet and cable provider serving 250,000+ homes and businesses across 48 states. We blend the scale of a national network with the warmth of a neighborhood crew — no overseas call centers, no hidden fees, no robo-runarounds.
          </p>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Every install is performed by a W-2 employee. Every support call is answered by a US-based agent. And every plan we offer is a plan we'd be proud to put in our own homes.
          </p>
        </Reveal>
      </section>

      {/* MISSION & VISION */}
      <section className="relative py-24 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, t: "Our Mission", d: "Make blazing-fast, honest-priced internet a default — not a luxury — in every American zip code we touch." },
            { icon: Award, t: "Our Vision", d: "Become the most trusted name in home connectivity by treating bandwidth like a utility and customers like neighbors." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i*100}>
              <div className="card-premium h-full">
                <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">{c.t}</h3>
                <p className="mt-3 text-ink-muted leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink to-[oklch(0.22_0.09_268)] p-10 sm:p-14">
            <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
              {[
                { v: 250, suffix: "k+", l: "Households served" },
                { v: 99.99, suffix: "%", l: "Network uptime" },
                { v: 18, suffix: "+", l: "Years in business" },
                { v: 48, suffix: "", l: "States covered" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-bold text-4xl sm:text-5xl text-gradient">
                    <Counter to={s.v} suffix={s.suffix} />
                  </div>
                  <div className="text-sm mt-2 text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-24 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <Reveal>
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our journey</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
              From one fiber loop to a <span className="text-gradient">nationwide network</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          <ul className="space-y-10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i*80}>
                <li className={`relative flex ${i%2===0 ? "sm:justify-start" : "sm:justify-end"}`}>
                  <span className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 grid place-items-center h-8 w-8 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold shadow-soft ring-4 ring-background z-10">
                    {i+1}
                  </span>
                  <div className={`ml-14 sm:ml-0 sm:w-[46%] card-premium`}>
                    <div className="text-xs font-bold tracking-wider uppercase text-primary">{m.year}</div>
                    <h3 className="mt-2 font-display text-xl font-bold text-ink">{m.title}</h3>
                    <p className="mt-2 text-ink-muted text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SUPPORT TEAM */}
      <section className="relative py-24 mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-wider uppercase text-primary">Real human support</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
            A support team that <span className="text-gradient">actually picks up</span>
          </h2>
          <p className="mt-6 text-ink-muted leading-relaxed">
            Our 320+ US-based agents work out of three regional support hubs — Denver, Atlanta and Austin. Average call answer time? Under 30 seconds. First-call resolution? 94%.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: HeadphonesIcon, t: "24/7 availability", d: "Phone, chat, email — anytime." },
              { icon: Users, t: "320+ US agents", d: "Real people, real expertise." },
              { icon: ShieldCheck, t: "94% first-call fix", d: "We solve it the first time." },
              { icon: Zap, t: "<30s avg pickup", d: "Hold music is overrated." },
            ].map((f) => (
              <div key={f.t} className="flex items-start gap-3 p-4 rounded-2xl bg-card border">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0">
                  <f.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{f.t}</div>
                  <div className="text-xs text-ink-muted">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="tel:+18444212056" className="mt-8 btn-primary inline-flex">
            <Phone className="h-4 w-4" /> Talk to a real human
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary rounded-[2.5rem] blur-2xl opacity-25" />
            <img src={supportAgent} alt="Friendly Deborah Net support agent" loading="lazy" width={1280} height={1280} className="relative rounded-[2rem] shadow-elegant w-full object-cover aspect-[4/5]" />
          </div>
        </Reveal>
      </section>

      {/* COVERAGE CTA */}
      <section className="relative py-20 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] p-10 sm:p-14 bg-gradient-to-br from-primary to-primary-glow text-white">
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <MapPin className="h-8 w-8 mb-4" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">Serving 48 states. Probably yours.</h2>
              <p className="mt-3 text-white/80 max-w-xl">Check availability for your address in seconds and see live plan pricing.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-3.5 font-semibold hover:bg-ink hover:text-white transition">
                Check my address
              </Link>
              <a href="tel:+18444212056" className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-7 py-3.5 font-semibold">
                <Phone className="h-4 w-4" /> (844) 421-2056
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
