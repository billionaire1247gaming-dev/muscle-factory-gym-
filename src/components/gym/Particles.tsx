import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  red: boolean;
};

function seeded(i: number) {
  const x = Math.sin(i * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

export function Particles({ count = 42 }: { count?: number }) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: seeded(i + 1) * 100,
        top: seeded(i + 50) * 100,
        size: 1 + seeded(i + 90) * 3,
        delay: seeded(i + 130) * 6,
        duration: 6 + seeded(i + 170) * 10,
        red: seeded(i + 210) > 0.55,
      })),
    [count],
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full ${p.red ? "bg-primary" : "bg-white"}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            boxShadow: p.red ? "0 0 12px 2px var(--primary)" : "0 0 8px 1px rgba(255,255,255,0.6)",
          }}
          animate={{ y: [0, -60, 0], opacity: [0, 0.9, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
