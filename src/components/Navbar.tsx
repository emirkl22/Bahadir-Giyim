import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const LINKS = [
  { label: "Koleksiyon", href: "#koleksiyon" },
  { label: "Atölye", href: "#atolye" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
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

        <div className="flex items-center gap-4">
          <a href="#iletisim" className="btn-outline hidden sm:inline-block">
            Teklif Al
          </a>

          {/* mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            className="relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-[var(--color-champagne)]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-6 bg-[var(--color-champagne)]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-[var(--color-champagne)]"
            />
          </button>
        </div>
      </nav>

      {/* mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-[var(--color-gold)]/15 bg-[var(--color-espresso)]/98 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6 text-sm uppercase tracking-[0.2em] text-[var(--color-ivory)]/80">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 transition-colors duration-300 hover:text-[var(--color-gold)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#iletisim"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold inline-block"
                >
                  Teklif Al
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
