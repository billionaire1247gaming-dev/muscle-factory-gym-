import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { value: 500, suffix: "+", label: "Happy Members" },
  { value: 15, suffix: "+", label: "Expert Trainers" },
  { value: 40, suffix: "+", label: "Modern Machines" },
  { value: 100, suffix: "%", label: "Affordable Fees" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl text-primary neon-text sm:text-7xl">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="why" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="glow-orb absolute right-0 top-1/3 size-80 rounded-full bg-primary/25" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Numbers That Speak Louder"
          subtitle="A community that shows up, trains hard and keeps coming back."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass glass-hover rounded-2xl px-6 py-10 text-center">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
