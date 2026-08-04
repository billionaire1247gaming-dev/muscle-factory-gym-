import { Dumbbell, Instagram, Facebook, MessageCircle, Phone, MapPin } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919800000000" },
  { icon: Phone, label: "Call", href: "tel:+919800000000" },
  { icon: MapPin, label: "Location", href: "https://maps.google.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-6 py-16">
      <div className="glow-orb absolute -bottom-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-primary/20" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-2">
          <Dumbbell className="size-6 text-primary" />
          <span className="font-display text-xl uppercase tracking-widest">
            Muscle<span className="text-primary">Factory</span> Gym
          </span>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Liluah, Howrah, West Bengal — where discipline is built one rep at a time.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex size-11 items-center justify-center rounded-full text-muted-foreground transition-all duration-400 hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
            >
              <s.icon className="size-5" />
            </a>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
          © {new Date().getFullYear()} Muscle Factory Gym — All rights reserved
        </p>
      </div>
    </footer>
  );
}
