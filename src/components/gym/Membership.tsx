import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

const plans = [
  {
    name: "Basic",
    price: "₹800",
    period: "/ month",
    features: ["Gym floor access", "Locker facility", "Group warm-ups", "Cardio zone"],
    featured: false,
  },
  {
    name: "Standard",
    price: "₹1,400",
    period: "/ month",
    features: [
      "Everything in Basic",
      "Strength programming",
      "Monthly body analysis",
      "CrossFit sessions",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "₹2,500",
    period: "/ month",
    features: [
      "Everything in Standard",
      "Personal trainer",
      "Custom diet plan",
      "Transformation tracking",
    ],
    featured: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="glow-orb absolute left-1/4 top-1/2 size-96 rounded-full bg-primary/20" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Membership"
          title="Choose Your Level"
          subtitle="Transparent pricing. No hidden charges. Cancel anytime."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`glass glass-hover gradient-border relative h-full rounded-3xl p-8 ${
                  p.featured ? "lg:-translate-y-4 lg:shadow-[var(--shadow-neon)]" : ""
                }`}
              >
                {p.featured ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="font-display text-2xl uppercase tracking-widest">{p.name}</h3>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl text-primary neon-text">{p.price}</span>
                  <span className="pb-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {p.period}
                  </span>
                </div>
                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <MagneticButton
                    href="https://forms.google.com"
                    external
                    variant={p.featured ? "primary" : "ghost"}
                    className="w-full"
                  >
                    Join Now
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
