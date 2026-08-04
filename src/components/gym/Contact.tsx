import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

const contacts = [
  { icon: Phone, label: "Phone", value: "+91 98000 00000", href: "tel:+919800000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919800000000" },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@musclefactorygym",
    href: "https://instagram.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Liluah, Howrah, West Bengal 711204",
    href: "https://maps.google.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Come Train With Us"
          subtitle="Walk in for a free trial session — we're open 6 AM to 10 PM, all week."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.07}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover group flex h-full flex-col rounded-2xl p-6"
              >
                <c.icon className="size-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                <span className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {c.label}
                </span>
                <span className="mt-2 text-sm font-medium">{c.value}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="glass gradient-border mt-8 flex flex-col items-center gap-6 rounded-3xl px-8 py-12 text-center">
            <h3 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
              Ready to start your <span className="text-primary neon-text">transformation?</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton href="https://forms.google.com" external>
                Join Now
              </MagneticButton>
              <MagneticButton href="https://maps.google.com" external variant="ghost">
                Open in Google Maps
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
