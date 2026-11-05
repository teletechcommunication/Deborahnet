import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Wifi } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white/80">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10">
        {/* Compliance disclosure band */}
        <div className="mb-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-glow/15 text-primary-glow px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shrink-0">
              Compliance Disclosure
            </span>
            <p className="text-sm leading-relaxed text-white/70">
              Deborah Net is a service assistance startup launched in 2026. We help customers understand, compare and access internet, Wi-Fi and cable TV options with friendly US-based advisors and transparent service fees. Any brand names referenced are used strictly for informational purposes only — all trademarks belong to their respective owners.
            </p>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-primary">
                <Wifi className="h-5 w-5 text-white" />
              </span>
              <span className="font-display font-bold text-xl text-white">
                Deborah <span className="text-gradient">Net</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              A service assistance platform offering friendly guidance on internet, Wi-Fi and cable TV — plus US-based advisors and clear, up-front pricing.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid place-items-center h-10 w-10 rounded-full bg-white/5 hover:bg-gradient-primary hover:text-white transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms & Conditions" },
                { to: "/refund", label: "Refund Policy" },
                { to: "/disclaimer", label: "Disclaimer" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Assistance Areas</h4>
            <ul className="space-y-3 text-sm">
              <li>Internet & broadband guidance</li>
              <li>Wi-Fi setup support</li>
              <li>Cable TV informational help</li>
              <li>Streaming service questions</li>
              <li>Connectivity troubleshooting tips</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-primary-glow shrink-0" />
                <a href="tel:+18335813551" className="hover:text-white">(833) 581-3551</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-primary-glow shrink-0" />
                <a href="mailto:support@deborahnet.com" className="hover:text-white">support@deborahnet.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-primary-glow shrink-0" />
                <span>Serving 48 states nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Deborah Net. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link to="/refund" className="hover:text-white">Refund Policy</Link>
            <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
