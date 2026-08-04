import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-[var(--shadow-neon)]" : "border border-transparent"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2">
          <Dumbbell className="size-6 text-primary" />
          <span className="font-display text-lg uppercase tracking-widest">
            Muscle<span className="text-primary">Factory</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-neon)] transition-shadow hover:shadow-[var(--shadow-neon-lg)] md:inline-flex"
        >
          Join Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-5 md:hidden"
        >
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-[0.2em] text-primary"
              >
                Join Now
              </a>
            </li>
          </ul>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
