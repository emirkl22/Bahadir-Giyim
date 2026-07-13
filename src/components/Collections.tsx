import { useState } from "react";
import { motion } from "framer-motion";
import CollectionModal, { type CollectionDetail } from "./CollectionModal";

const COLLECTIONS: (CollectionDetail & { image: string; desc: string })[] = [
  {
    title: "Ceket & Takım Elbise",
    image: "ceket-takim.jpg",
    desc: "Klasikten modern kesime; markanızın kalıbıyla veya kendi kalıplarımızla seri üretim.",
    detail: "Yün · Kaşmir · Süper 120's",
    long:
      "Tek ve çift düğmeli, klasik ve slim kalıplarda ceket ve takım elbise üretimi yapıyoruz. Kendi kalıplarımızı kullanabilir ya da markanızın kalıp ve numune onayına göre seri üretime geçebiliriz — düğün, iş hayatı ve günlük şıklık için farklı kumaş ve kesim seçenekleriyle.",
    gallery: ["ceket-takim-1.jpg", "ceket-takim-2.jpg", "ceket-takim-3.jpg", "ceket-takim-4.jpg"],
  },
  {
    title: "Pantolon",
    image: "pantolon.jpg",
    desc: "Klasik ve slim kalıplarda, istenen adet ve beden aralığında toptan üretim.",
    detail: "Yün · Gabardin · Keten",
    long:
      "Klasik, slim ve chino kalıplarında; yün, gabardin ve keten kumaş seçenekleriyle istenen adet ve beden aralığında toptan pantolon üretimi. Bel, paça ve dikiş detayları markanızın spesifikasyonuna göre uygulanır.",
    gallery: ["pantolon-1.jpg", "pantolon-2.jpg", "pantolon-3.jpg"],
  },
  {
    title: "Kaşe Mont & Kaban",
    image: "kase-mont-kaban.jpg",
    desc: "Mevsimlik dış giyimde astar, dolgu ve dikim detaylarına özel fason imalat.",
    detail: "Kaşe · Yün Karışım",
    long:
      "Kaşe ve yün karışımlı kumaşlarla mevsimlik kaban ve mont üretimi. Astar, dolgu, yaka ve düğme detaylarına kadar her aşama atölyemizde titizlikle uygulanır; tek parça numuneden seri üretime kadar aynı kaliteyi koruruz.",
    gallery: ["kase-mont-kaban-1.jpg", "kase-mont-kaban-2.jpg", "kase-mont-kaban-3.jpg"],
  },
  {
    title: "Gömlek",
    image: "gomlek.jpg",
    desc: "Yaka ve manşet detaylarına kadar özelleştirilebilen, toplu üretime uygun gömlekler.",
    detail: "Pamuk · Poplin · Oxford",
    long:
      "Pamuk, poplin ve oxford kumaşlarda; yaka, manşet ve kesim detayları markanıza göre özelleştirilebilen, toplu üretime uygun gömlek imalatı.",
    gallery: ["gomlek-1.jpg"],
  },
];

export default function Collections() {
  const [active, setActive] = useState<CollectionDetail | null>(null);

  return (
    <section id="koleksiyon" className="relative bg-[var(--color-espresso)] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-6">Üretim Kategorilerimiz</p>
            <h2 className="font-serif text-4xl leading-tight font-medium text-[var(--color-ivory)] md:text-5xl">
              Toptan üretimde <span className="italic text-[var(--color-gold)]">kapasitemiz</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--color-stone)]">
            Her kategori, kendi kumaşı ve fason ihtiyacınıza göre şekillenir.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COLLECTIONS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group flex h-full flex-col overflow-hidden border border-[var(--color-gold)]/15 bg-[var(--color-coffee)] transition-colors duration-500 hover:border-[var(--color-gold)]/40"
            >
              {/* real campaign photography */}
              <div className="relative h-64 shrink-0 overflow-hidden bg-[var(--color-bark)]">
                <img
                  src={`${import.meta.env.BASE_URL}images/${item.image}`}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-espresso)] via-transparent to-transparent" />
                <span className="absolute bottom-4 left-6 font-serif text-lg italic text-[var(--color-champagne)]">
                  {item.detail}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-serif text-3xl font-medium text-[var(--color-ivory)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-stone)]">
                  {item.desc}
                </p>
                <button
                  onClick={() => setActive(item)}
                  className="mt-auto self-start border border-[var(--color-gold)]/50 px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-[var(--color-champagne)] transition-colors duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-espresso)]"
                >
                  İncele
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <CollectionModal item={active} onClose={() => setActive(null)} />
    </section>
  );
}
