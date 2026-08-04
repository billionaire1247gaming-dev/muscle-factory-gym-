import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  external,
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.3}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-[background,box-shadow,color] duration-500 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-[var(--shadow-neon)] hover:shadow-[var(--shadow-neon-lg)]"
      : "glass text-foreground hover:border-primary/60 hover:text-primary";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${styles} ${className}`}
      style={{ transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)" }}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 hover:translate-x-full" />
    </motion.a>
  );
}
