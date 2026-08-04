import {
  Users,
  Cog,
  Dumbbell,
  Flame,
  Activity,
  HeartPulse,
  Timer,
  UserCheck,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  { icon: Users, title: "Professional Trainers", text: "Certified coaches who track every rep." },
  { icon: Cog, title: "Latest Equipment", text: "Imported machines and calibrated free weights." },
  { icon: Dumbbell, title: "Strength Training", text: "Progressive overload programs that work." },
  { icon: Flame, title: "Weight Loss", text: "Structured fat-loss cycles with real results." },
  { icon: Activity, title: "Muscle Gain", text: "Hypertrophy blocks built around your body." },
  { icon: HeartPulse, title: "Cardio", text: "Conditioning zones with heart-rate coaching." },
  { icon: Timer, title: "CrossFit", text: "High intensity circuits, every single day." },
  { icon: UserCheck, title: "Personal Coaching", text: "One-on-one attention, start to finish." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Us"
          title="Built For Those Who Refuse Average"
          subtitle="Muscle Factory Gym is Liluah's home of serious training — a floor engineered for strength, discipline and transformation."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="glass glass-hover gradient-border group h-full rounded-2xl p-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg uppercase tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
