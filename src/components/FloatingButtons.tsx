import { useEffect, useState } from "react";

/** Bahadır Tekstil'in gerçek WhatsApp hattı gelince bu numarayı güncelleyin. */
const WHATSAPP_NUMBER = "905000000000";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.02c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.84.5 3.56 1.36 5.04L2 22l5.1-1.33A9.94 9.94 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2m0 18.06c-1.62 0-3.13-.44-4.43-1.2l-.32-.19-3.03.79.81-2.95-.21-.31A8.05 8.05 0 0 1 3.96 12c0-4.44 3.62-8.06 8.06-8.06 4.44 0 8.05 3.62 8.05 8.06 0 4.44-3.61 8.06-8.05 8.06" />
    </svg>
  );
}

export default function FloatingButtons() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <button
        aria-label="Yukarı çık"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-coffee)]/90 text-[var(--color-gold)] backdrop-blur transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-champagne)] ${
          showBackTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        ↑
      </button>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-105"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
