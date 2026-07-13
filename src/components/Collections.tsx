import { motion } from "framer-motion";

const COLLECTIONS = [
  {
    title: "Ceket & Takım Elbise",
    image: "ceket-takim.jpg",
    desc: "Klasikten modern kesime; markanızın kalıbıyla veya kendi kalıplarımızla seri üretim.",
    detail: "Yün · Kaşmir · Süper 120's",
  },
  {
    title: "Pantolon",
    image: "pantolon.jpg",
    desc: "Klasik ve slim kalıplarda, istenen adet ve beden aralığında toptan üretim.",
    detail: "Yün · Gabardin · Keten",
  },
  {
    title: "Kaşe Mont & Kaban",
    image: "kase-mont-kaban.jpg",
    desc: "Mevsimlik dış giyimde astar, dolgu ve dikim detaylarına özel fason imalat.",
    detail: "Kaşe · Yün Karışım",
  },
  {
    title: "Gömlek",
    image: "gomlek.jpg",
    desc: "Yaka ve manşet detaylarına kadar özelleştirilebilen, toplu üretime uygun gömlekler.",
    detail: "Pamuk · Poplin · Oxford",
  },
];

export default function Collections() {
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
              className="group relative overflow-hidden border border-[var(--color-gold)]/15 bg-[var(--color-coffee)] transition-colors duration-500 hover:border-[var(--color-gold)]/40"
            >
              {/* real campaign photography */}
              <div className="relative h-64 overflow-hidden bg-[var(--color-bark)]">
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
              <div className="p-8">
                <h3 className="font-serif text-3xl font-medium text-[var(--color-ivory)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-stone)]">
                  {item.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  İncele
                  <span className="inline-block h-px w-8 bg-[var(--color-gold)]/60 transition-all duration-300 group-hover:w-12" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
