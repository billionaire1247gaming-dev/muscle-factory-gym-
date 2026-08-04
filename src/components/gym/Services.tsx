import { Dumbbell, Flame, UserCheck, Shield, Sparkles, Apple, Timer } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  { icon: Dumbbell, title: "Weight Training", text: "Barbell fundamentals to advanced splits." },
  { icon: Flame, title: "Fat Loss", text: "Metabolic circuits and cardio programming." },
  { icon: UserCheck, title: "Personal Training", text: "Dedicated coach, dedicated plan." },
  { icon: Shield, title: "Strength Building", text: "Squat, bench, deadlift — done right." },
  { icon: Sparkles, title: "Body Transformation", text: "12-week guided transformation cycles." },
  { icon: Apple, title: "Diet Guidance", text: "Simple Indian meal plans that fit your life." },
  { icon: Timer, title: "CrossFit", text: "Explosive WODs for total conditioning." },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Everything You Need Under One Roof"
          subtitle="Pick your goal. We build the path and hold you to it."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="glass glass-hover gradient-border group relative h-full overflow-hidden rounded-3xl p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <s.icon className="size-8 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                <h3 className="mt-6 font-display text-2xl uppercase tracking-wide">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="mt-6 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Explore →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
