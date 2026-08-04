import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Particles } from "./Particles";
import { MagneticButton } from "./MagneticButton";

const words = ["TRAIN", "HARD"];
const words2 = ["LIVE", "STRONG"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_10%,var(--background)_75%)]" />
      <div className="glow-orb absolute -left-24 top-1/4 size-[26rem] rounded-full bg-primary/40" />
      <div
        className="glow-orb absolute -right-20 bottom-10 size-[22rem] rounded-full bg-primary/30"
        style={{ animationDelay: "2.5s" }}
      />
      <Particles />

      <motion.div
        style={{ y, opacity, filter: blur }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block rounded-full border border-primary/40 bg-primary/10 px-5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.4em] text-primary sm:text-xs"
        >
          Liluah • Howrah • India
        </motion.span>

        <h1 className="mt-8 font-display text-[clamp(3rem,13vw,9rem)] uppercase leading-[0.82] tracking-tight">
          {[words, words2].map((line, li) => (
            <span key={li} className="block overflow-hidden">
              {line.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.35 + li * 0.18 + i * 0.1,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block ${i === 1 ? "ml-[0.12em] text-primary neon-text" : "mr-[0.12em]"}`}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          The Ultimate Fitness Destination in Liluah.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="https://forms.google.com" external>
            Join Now
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Contact Us
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="size-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
