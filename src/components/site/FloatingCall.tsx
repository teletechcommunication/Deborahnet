import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+18338781783"
      aria-label="Call now"
      className="fixed bottom-20 sm:bottom-24 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
      <span className="absolute inset-0 rounded-full bg-primary/60 animate-pulse-ring" style={{ animationDelay: "0.8s" }} />
      <span className="relative grid place-items-center h-16 w-16 rounded-full bg-gradient-primary text-primary-foreground shadow-elegant group-hover:scale-110 transition-transform">
        <Phone className="h-6 w-6" />
      </span>
      <span className="hidden sm:block absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap glass-dark text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition">
        (833) 878-1783
      </span>
    </a>
  );
}
