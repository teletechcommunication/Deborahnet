import { Reveal } from "@/components/site/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-70 pointer-events-none" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className={`relative mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24 ${align === "center" ? "text-center" : ""}`}>
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-6 text-lg text-ink-muted leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
