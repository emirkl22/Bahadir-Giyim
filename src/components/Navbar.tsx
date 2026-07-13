import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const LINKS = [
  { label: "Koleksiyon", href: "#koleksiyon" },
  { label: "Atölye", href: "#atolye" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--color-gold)]/15 bg-[var(--color-espresso)]/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden items-center gap-10 text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)]/70 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group relative py-1 transition-colors duration-300 hover:text-[var(--color-gold)]">
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#iletisim" className="btn-outline hidden sm:inline-block">
          Teklif Al
        </a>
      </nav>
    </motion.header>
  );
}
