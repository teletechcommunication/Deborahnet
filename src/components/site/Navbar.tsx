import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, LifeBuoy, ChevronRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "What We Do" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top compliance ribbon */}
      <div className="bg-ink text-white/90 text-[11px] sm:text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-glow shrink-0" />
          <span className="leading-tight">
            Friendly internet, cable and Wi-Fi service assistance — available 24/7 to every Deborah Net customer.
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className={`transition-all duration-500 ${scrolled ? "py-2 bg-background/80 backdrop-blur-xl shadow-soft border-b border-border/60" : "py-4 bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <span className="relative grid place-items-center h-11 w-11 rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft overflow-hidden">
                <LifeBuoy className="h-5 w-5 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </span>
              <span className="flex flex-col leading-none">
                <span className={`font-display font-bold text-lg tracking-tight transition-colors ${overHero ? "text-white" : "text-ink"}`}>
                  Deborah <span className={overHero ? "text-white" : "text-gradient"}>Net</span>
                </span>
                <span className={`text-[10px] uppercase tracking-[0.18em] mt-1 transition-colors ${overHero ? "text-white/70" : "text-ink-muted"}`}>
                  Internet & Cable
                </span>
              </span>
            </Link>

            <ul className="hidden lg:flex items-center gap-1 rounded-full border border-border/70 bg-card/70 backdrop-blur px-1.5 py-1.5">
              {links.map((l) => {
                const active = pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition ${
                        active ? "text-white" : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      {active && <span className="absolute inset-0 -z-10 rounded-full bg-gradient-primary shadow-soft" />}
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to="/contact" className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-ink-muted hover:text-ink">
                  FAQ
                </Link>
              </li>
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <div className="text-right leading-tight hidden xl:block">
                <div className="text-[10px] uppercase tracking-wider text-ink-muted">Deborah Net advisor</div>
                <a href="tel:+18335814461" className="font-display font-bold text-ink hover:text-primary transition">
                  (833) 581-4461
                </a>
              </div>
              <a
                href="tel:+18335814461"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                <Phone className="h-4 w-4" /> Get Assistance
              </a>
            </div>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-grid place-items-center h-11 w-11 rounded-2xl border border-border bg-card/80 backdrop-blur"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {open && (
            <div className="lg:hidden mt-3 rounded-3xl border border-border bg-card/95 backdrop-blur-xl p-3 shadow-elegant animate-fade-in">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl text-ink font-medium hover:bg-primary/5"
                    >
                      {l.label}
                      <ChevronRight className="h-4 w-4 text-ink-muted" />
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Speak With Support
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
