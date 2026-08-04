import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";

const DumbbellScene = lazy(() => import("./DumbbellScene"));

export function ThreeSection() {
  const ref = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progress.current = v;
  });

  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.85, 0.25]);

  useEffect(() => setMounted(true), []);

  return (
    <section ref={ref} className="relative h-[220vh]">
      <motion.div
        style={{ opacity: glow }}
        className="glow-orb absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50"
      />
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
        <div className="pointer-events-none absolute z-0 select-none px-6 text-center">
          <h2 className="font-display text-[clamp(2.5rem,10vw,7rem)] uppercase leading-[0.85] tracking-tight text-foreground/10">
            Forged In Iron
          </h2>
        </div>
        <div className="absolute inset-0 z-10">
          {mounted ? (
            <Suspense fallback={null}>
              <DumbbellScene scrollRef={progress} />
            </Suspense>
          ) : null}
        </div>
        <div className="absolute bottom-14 z-20 px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Scroll to rotate
          </p>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Precision engineered equipment, calibrated plates and a floor built for real strength.
          </p>
        </div>
      </div>
    </section>
  );
}
