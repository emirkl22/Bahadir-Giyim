import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type CollectionDetail = {
  title: string;
  detail: string;
  long: string;
  gallery: string[];
};

export default function CollectionModal({
  item,
  onClose,
}: {
  item: CollectionDetail | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto border border-[var(--color-gold)]/25 bg-[var(--color-coffee)] p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Kapat"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold)]/30 text-[var(--color-gold)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-champagne)]"
            >
              ✕
            </button>

            <p className="eyebrow mb-3">{item.detail}</p>
            <h3 className="font-serif text-3xl font-medium text-[var(--color-ivory)] md:text-4xl">
              {item.title}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--color-stone)]">
              {item.long}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {item.gallery.map((src) => (
                <div key={src} className="aspect-[3/4] overflow-hidden border border-[var(--color-gold)]/10 bg-[var(--color-bark)]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/gallery/${src}`}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <a href="#iletisim" onClick={onClose} className="btn-gold mt-8 inline-block">
              Bu Kategori İçin Teklif Alın
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
