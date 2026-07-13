import { motion } from "framer-motion";

const COLLECTIONS = [
  {
    title: "Takım Elbise",
    weave: "weave-pinstripe",
    desc: "Klasikten modern kesime, düğünden iş hayatına — ölçünüze göre şekillenen takımlar.",
    detail: "Yün · Kaşmir · Süper 120's",
  },
  {
    title: "Gömlek",
    weave: "weave-oxford",
    desc: "Yaka duruşundan manşet detayına, teninize dokunan kumaşa kadar size özel gömlekler.",
    detail: "Pamuk · Poplin · Oxford",
  },
  {
    title: "Kumaş & Aksesuar",
    weave: "weave-herringbone",
    desc: "Kravat, papyon, mendil ve mevsimine göre seçilmiş kumaşlarla bütünlenen stil.",
    detail: "İpek · Yün · Keten",
  },
];

export default function Collections() {
  return (
    <section id="koleksiyon" className="relative bg-[var(--color-espresso)] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-6">Koleksiyon</p>
            <h2 className="font-serif text-4xl leading-tight font-medium text-[var(--color-ivory)] md:text-5xl">
              Dolabınızın <span className="italic text-[var(--color-gold)]">temel taşları</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--color-stone)]">
            Her parça, kumaşının dokusunu taşıyan bir hikâye ile gelir.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {COLLECTIONS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative overflow-hidden border border-[var(--color-gold)]/15 bg-[var(--color-coffee)] transition-colors duration-500 hover:border-[var(--color-gold)]/40"
            >
              {/* fabric swatch header — CSS weave, no images */}
              <div className={`${item.weave} relative h-48 bg-[var(--color-bark)] transition-transform duration-700 group-hover:scale-[1.03]`}>
                <span className="absolute bottom-4 left-6 font-serif text-lg italic text-[var(--color-champagne)]/80">
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
