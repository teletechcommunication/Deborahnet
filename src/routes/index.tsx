import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Ban, ChevronDown, Clock,
  HeadphonesIcon, HelpCircle, Lightbulb, Lock, MessageCircle, Minus,
  Phone, Plus, Quote, ShieldAlert, ShieldCheck, Sparkles, Star, Tv, Wifi, Zap,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import heroFamily from "@/assets/hero-family.jpg";
import lifestyleWfh from "@/assets/lifestyle-wfh.jpg";
import supportAgent from "@/assets/support-agent.jpg";
import serviceFiber from "@/assets/service-fiber.jpg";
import serviceCable from "@/assets/service-cable.jpg";
import serviceWifi from "@/assets/service-wifi.jpg";
import serviceStreaming from "@/assets/service-streaming.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deborah Net — High-Speed Internet & Cable TV Service" },
      { name: "description", content: "Premium fiber internet, cable TV and whole-home Wi-Fi from Deborah Net. Friendly US-based advisors and 24/7 support." },
      { property: "og:title", content: "Deborah Net — Internet & Cable" },
      { property: "og:description", content: "Stream, work and game faster with Deborah Net fiber internet, cable TV and home Wi-Fi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const offerings = [
  {
    no: "01", icon: Wifi, title: "Fiber Internet",
    img: serviceFiber, tag: "Up to 2 Gbps",
    desc: "Symmetrical fiber-optic speeds engineered for households that stream in 4K, work from home and game without lag.",
    points: ["Symmetrical upload & download", "Whole-home Wi-Fi included", "No data caps, ever"],
  },
  {
    no: "02", icon: Tv, title: "Cable TV Packages",
    img: serviceCable, tag: "200+ channels",
    desc: "Crystal-clear cable TV bundles with sports, news, family and premium channels — plus on-demand and cloud DVR.",
    points: ["Free HD on every channel", "Cloud DVR with 100 hrs", "Sports & premium add-ons"],
  },
  {
    no: "03", icon: Zap, title: "Whole-Home Wi-Fi",
    img: serviceWifi, tag: "Wi-Fi 6E mesh",
    desc: "Edge-to-edge coverage powered by tri-band Wi-Fi 6E mesh nodes — installed and tuned by our pros.",
    points: ["Smart mesh nodes", "Pro install in 60 min", "24/7 connectivity support"],
  },
  {
    no: "04", icon: MessageCircle, title: "Streaming Bundles",
    img: serviceStreaming, tag: "All your apps",
    desc: "Pair your internet with curated streaming bundles so every show, sport and movie lives in one place.",
    points: ["Top streaming apps", "One simple bill", "Cancel anytime"],
  },
];

const notDoing = [
  "We are not an Internet Service Provider (ISP).",
  "We do not sell internet, cable, or streaming subscriptions.",
  "We are not affiliated with, authorized by, or endorsed by any telecom or cable company.",
  "We do not provide official customer support for any brand.",
  "We never request your provider passwords or account credentials.",
  "We do not guarantee technical fixes or specific outcomes.",
];

const process = [
  { n: "01", t: "Reach out", d: "Call our advisors or send a message describing the connectivity question you'd like help with." },
  { n: "02", t: "Talk it through", d: "A friendly Deborah Net advisor walks you through general options, terminology and next steps." },
  { n: "03", t: "Apply the guidance", d: "Use the information to navigate your own provider — billing always stays with your chosen provider." },
];

const testimonials = [
  { name: "Marcus J.", role: "Atlanta, GA", text: "Calling Deborah Net was the first time someone actually explained the difference between fiber and cable in plain English. Zero pressure, just helpful guidance.", img: avatar1, rating: 5 },
  { name: "Priya P.", role: "Austin, TX", text: "The Deborah Net advisor walked me through plans and what to ask about installation — really useful before my next call.", img: avatar2, rating: 5 },
  { name: "Susan W.", role: "Denver, CO", text: "Wi-Fi placement tips alone made a real difference at home. Friendly, informational, and they never asked for anything sensitive.", img: avatar3, rating: 5 },
];

const faqs = [
  { q: "Are you an official cable or internet service provider?", a: "Deborah Net is a service assistance platform helping customers understand and access internet, Wi-Fi and cable TV options." },
  { q: "Do you sell internet, cable, or streaming plans?", a: "No. We provide informational guidance and assistance only. Any subscription, plan or service must be purchased directly from the provider of your choice." },
  { q: "Do you charge for your services?", a: "Yes. Our service/assistance fees are separate from anything your provider charges. Fees are disclosed before any assistance begins so there are no surprises." },
  { q: "Will I still be billed by my service provider?", a: "Yes. Your provider billing remains entirely unchanged. We have no access to and do not manage your provider account or invoices." },
  { q: "Do you need my account passwords or sensitive information?", a: "No. We never ask for provider passwords, PINs, banking details or other sensitive credentials. If anyone claiming to represent us asks for those, please hang up and contact us directly." },
  { q: "Which providers do you support?", a: "Our guidance is provider-neutral. We may reference multiple providers for informational purposes only — there is no affiliation, partnership or endorsement implied." },
  { q: "Are your services refundable?", a: "Refund requests can be submitted within 7 to 15 days of your service purchase, depending on the type of assistance provided and whether the guidance has already been delivered. Please review our Refund Policy page for full eligibility details." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden -mt-32 sm:-mt-36 pt-32 sm:pt-36">
        <div className="absolute inset-0">
          <img
            src={heroFamily}
            alt="Family at home using the internet"
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/70 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        </div>

        <div className="hidden md:block absolute top-44 right-12 glass-dark rounded-2xl px-5 py-4 text-white animate-float">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-primary-glow" />
            <div>
              <div className="text-xs text-white/70">Fiber speeds up to</div>
              <div className="font-display font-bold text-lg">2,000 Mbps</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-44 right-32 glass-dark rounded-2xl px-5 py-4 text-white animate-float" style={{ animationDelay: "1.2s" }}>
          <div className="flex items-center gap-3">
            <HeadphonesIcon className="h-5 w-5 text-primary-glow" />
            <div>
              <div className="text-xs text-white/70">US-based support</div>
              <div className="font-display font-bold text-lg">24 / 7 advisors</div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-2 sm:pt-4 pb-20 sm:pb-28">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-3 py-1 text-[10px] font-semibold tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
                Fiber Internet · Cable TV · Whole-Home Wi-Fi
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
                Blazing-Fast Internet & <span className="text-gradient">Crystal-Clear Cable TV</span><br />
                for Every Home.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                Stream in 4K, work from anywhere and game with zero lag on gigabit-grade fiber. Plus 200+ premium channels, whole-home Wi-Fi and friendly US-based advisors — ready to walk you through every plan and price.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+18444212056" className="btn-primary">
                  <Phone className="h-4 w-4" /> Call (844) 421-2056
                </a>
                <Link to="/services" className="btn-ghost">
                  View Plans & Pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-3 text-[11px] text-white/60">No contracts to sign with us · Service/assistance fee applies · See disclosure below.</p>
            </Reveal>
          </div>
        </div>

        {/* Above-the-fold disclosure ribbon */}
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 -mt-10">
            <div className="glass rounded-2xl shadow-elegant p-4 sm:p-5 flex items-start gap-3 border border-primary/20">
              <ShieldAlert className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                <strong>Disclosure:</strong> Deborah Net is a service assistance startup launched in 2026, providing informational guidance and support on internet, Wi-Fi and cable TV services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative mt-20 mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: ShieldCheck, t: "Provider-neutral", d: "Unaffiliated guidance" },
              { icon: Lock, t: "Privacy-first", d: "No credentials requested" },
              { icon: HeadphonesIcon, t: "Real advisors", d: "Friendly human support" },
              { icon: BadgeCheck, t: "Transparent fees", d: "Disclosed up front" },
            ].map((s) => (
              <div key={s.t} className="flex items-center gap-4 rounded-2xl bg-card border p-5">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-primary/10 text-primary shrink-0">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-ink">{s.t}</div>
                  <div className="text-xs text-ink-muted">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* WHAT WE OFFER — image-led service showcase */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-primary">
                  <span className="h-px w-8 bg-primary" /> What We Offer
                </span>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-ink leading-[1.05]">
                  Every service<br />
                  your home needs,<br />
                  <span className="text-gradient">in one place.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <Reveal delay={120}>
                <p className="text-lg text-ink-muted leading-relaxed">
                  From blazing-fast fiber to crystal-clear cable and whole-home Wi-Fi, Deborah Net brings together the services that make modern life flow — with one bill, one app and one team behind you.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Fiber Internet", "Cable TV", "Wi-Fi 6E", "Streaming"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-ink-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {offerings.map((o, i) => (
              <Reveal key={o.no} delay={i * 90}>
                <article className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={o.img}
                      alt={o.title}
                      loading="lazy"
                      width={960}
                      height={600}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                    {/* Number */}
                    <span className="absolute top-5 left-6 font-display text-5xl font-bold text-white/90 drop-shadow">
                      {o.no}
                    </span>
                    {/* Tag */}
                    <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink shadow-soft">
                      <Sparkles className="h-3 w-3 text-primary" /> {o.tag}
                    </span>
                    {/* Bottom title */}
                    <h3 className="absolute bottom-5 left-6 right-6 font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {o.title}
                    </h3>
                  </div>

                  {/* Body */}
                  <div className="p-7 sm:p-8">
                    <p className="text-ink-muted leading-relaxed">{o.desc}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {o.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-ink">
                          <BadgeCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 pt-5 border-t border-border flex items-center justify-between">
                      <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link">
                        Learn more
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                        Available nationwide
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DON'T DO */}
      <section className="relative py-24 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2.5rem] bg-ink text-white p-10 sm:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary-glow">For full transparency</span>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
                  What we<br /><span className="text-gradient">don't do.</span>
                </h2>
                <p className="mt-5 text-white/70 leading-relaxed max-w-md">
                  Independence is the whole point. Here's a clear list of everything that's outside our role.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-4">
                {notDoing.map((n, i) => (
                  <Reveal key={n} delay={i * 60}>
                    <li className="flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                      <div className="grid place-items-center h-9 w-9 rounded-xl bg-destructive/20 text-destructive shrink-0">
                        <Ban className="h-4 w-4" />
                      </div>
                      <span className="text-sm text-white/85 leading-relaxed">{n}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">How it works</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
              Three simple <span className="text-gradient">steps</span>
            </h2>
          </Reveal>
        </div>
        <div className="relative grid md:grid-cols-3 gap-6 lg:gap-10">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div className="relative bg-card border rounded-3xl p-8 text-center hover:-translate-y-1 hover:shadow-elegant transition-all">
                <div className="relative mx-auto grid place-items-center h-20 w-20 rounded-full bg-gradient-primary text-primary-foreground font-display font-bold text-xl shadow-elegant">
                  {p.n}
                </div>
                <h3 className="mt-6 font-display font-bold text-xl text-ink">{p.t}</h3>
                <p className="mt-3 text-ink-muted leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US split with image */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-primary rounded-[2.5rem] blur-2xl opacity-25" />
              <img src={lifestyleWfh} alt="Customer reviewing connectivity guidance" loading="lazy" width={1280} height={1280} className="relative rounded-[2rem] shadow-elegant w-full object-cover aspect-[4/5]" />
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl shadow-elegant p-5 max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary">
                    <Lightbulb className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ink">Plain-English</div>
                    <div className="text-xs text-ink-muted">No jargon, ever</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">Why Deborah Net</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
                Built on clarity.<br />Backed by <span className="text-gradient">real humans.</span>
              </h2>
            </Reveal>
            <div className="mt-10 space-y-5">
              {[
                { icon: ShieldCheck, t: "Provider-neutral", d: "Vendor-neutral guidance — we don't push any specific brand." },
                { icon: Lock, t: "Privacy-first", d: "We never request provider passwords or sensitive credentials." },
                { icon: HeadphonesIcon, t: "Friendly advisors", d: "Real people who happily slow down and explain things." },
                { icon: Sparkles, t: "Transparent fees", d: "Service/assistance fees disclosed clearly before you start." },
              ].map((f, i) => (
                <Reveal key={f.t} delay={i * 70}>
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border hover:border-primary/40 hover:shadow-soft transition-all">
                    <div className="grid place-items-center h-12 w-12 rounded-2xl bg-primary/10 text-primary shrink-0">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">{f.t}</h3>
                      <p className="text-sm text-ink-muted mt-1">{f.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — unique masonry/quote card layout */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">Voices we've helped</span>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
                  What callers say after a <span className="text-gradient">single conversation.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="flex items-center gap-4 rounded-2xl glass p-5">
                  <div className="flex -space-x-2">
                    {[avatar1, avatar2, avatar3].map((a, i) => (
                      <img key={i} src={a} alt="" loading="lazy" width={44} height={44} className="h-10 w-10 rounded-full ring-2 ring-white object-cover" />
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}
                    </div>
                    <div className="text-xs text-ink-muted mt-1">Based on early caller feedback</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <article className={`relative rounded-3xl p-8 h-full flex flex-col transition-all hover:-translate-y-1 ${
                  i === 1
                    ? "bg-gradient-to-br from-ink to-[oklch(0.25_0.08_265)] text-white shadow-elegant"
                    : "bg-card border shadow-soft hover:shadow-elegant"
                }`}>
                  <Quote className={`h-10 w-10 mb-4 ${i === 1 ? "text-primary-glow" : "text-primary/30"}`} />
                  <p className={`leading-relaxed flex-1 ${i === 1 ? "text-white/90" : "text-ink-muted"}`}>
                    "{t.text}"
                  </p>
                  <div className={`mt-6 flex items-center gap-3 pt-6 border-t ${i === 1 ? "border-white/15" : ""}`}>
                    <img src={t.img} alt={t.name} loading="lazy" width={56} height={56} className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20" />
                    <div className="flex-1">
                      <div className={`font-semibold ${i === 1 ? "text-white" : "text-ink"}`}>{t.name}</div>
                      <div className={`text-xs ${i === 1 ? "text-white/60" : "text-ink-muted"}`}>{t.role}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, k) => (
                        <Star key={k} className={`h-3.5 w-3.5 ${i === 1 ? "fill-primary-glow text-primary-glow" : "fill-primary text-primary"}`} />
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REFUND NOTE */}
      <section className="relative py-16 mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.04] to-primary-glow/[0.04] p-8 sm:p-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground shrink-0">
              <Clock className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-ink">7–15 day refund window</h3>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether guidance has already been delivered. Please review our Refund Policy page for full eligibility details.
              </p>
              <Link to="/terms" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Read full Refund Policy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ — unique two-column layout */}
      <section className="relative py-16 sm:py-24 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">FAQ</span>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">
                  Honest answers,<br /><span className="text-gradient">no fine print.</span>
                </h2>
                <p className="mt-5 text-ink-muted leading-relaxed">
                  Common questions about who we are, what we do, and how we help our customers.
                </p>
                <a href="#" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-3 font-semibold hover:bg-primary transition">
                  <HelpCircle className="h-4 w-4" /> Still have a question?
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <FaqItem q={f.q} a={f.a} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 bg-gradient-to-br from-ink via-[oklch(0.22_0.1_268)] to-primary">
          <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-float" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
                  Talk to a Deborah Net advisor
                </span>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Have a question?<br /><span className="text-gradient">Let's talk it through.</span>
                </h2>
                <p className="mt-6 text-white/80 max-w-md">
                  Friendly, vendor-neutral guidance on internet, Wi-Fi and cable TV topics. No account access, no provider passwords, no pressure.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-3.5 font-semibold hover:bg-primary-glow transition-all">
                    <Phone className="h-4 w-4" /> Call Deborah Net
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition">
                    Request Help <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="mt-4 text-xs text-white/60">
                  Deborah Net helps customers navigate internet, cable and Wi-Fi service options with friendly US-based advisors.
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <MiniContactCard />
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border bg-card transition-all ${open ? "shadow-soft border-primary/40" : "hover:border-primary/30"}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <div className="flex items-start gap-4">
          <span className="font-display text-sm font-bold text-primary mt-0.5 shrink-0">
            {String(index).padStart(2, "0")}
          </span>
          <span className="font-semibold text-ink">{q}</span>
        </div>
        <span className={`grid place-items-center h-8 w-8 rounded-full border shrink-0 transition-colors ${open ? "bg-primary text-white border-primary" : "text-primary"}`}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-6 pl-14 sm:pl-16 text-ink-muted leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

function MiniContactCard() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3500); }}
      className="glass rounded-3xl p-7 shadow-elegant"
    >
      <div className="flex items-center gap-3 mb-5">
        <img src={supportAgent} alt="" loading="lazy" width={48} height={48} className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30" />
        <div>
          <div className="font-semibold text-ink">Request a callback</div>
          <div className="text-xs text-ink-muted">A Deborah Net advisor will reach out</div>
        </div>
      </div>
      <div className="space-y-3">
        <input required maxLength={80} placeholder="Full name" className="w-full rounded-xl border bg-white/60 px-4 py-3 text-sm outline-none focus:border-primary" />
        <input required type="tel" maxLength={20} placeholder="Phone number" className="w-full rounded-xl border bg-white/60 px-4 py-3 text-sm outline-none focus:border-primary" />
        <textarea required maxLength={400} rows={3} placeholder="What can we help you understand?" className="w-full rounded-xl border bg-white/60 px-4 py-3 text-sm outline-none focus:border-primary resize-none" />
      </div>
      <button className="mt-5 w-full btn-primary">
        {sent ? "Thanks — we'll be in touch!" : "Speak With Support"}
      </button>
      <p className="mt-3 text-[11px] text-ink-muted text-center">
        By submitting you acknowledge Deborah Net's service terms and privacy policy.
      </p>
    </form>
  );
}
