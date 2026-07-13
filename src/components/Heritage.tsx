import { motion } from "framer-motion";

const VALUES = [
  {
    title: "Seri Üretim Kapasitesi",
    desc: "Kalıptan son ütüye kadar her aşama deneyimli ekiplerin elinden geçer; büyük adetli siparişlerde de zanaat kalitesi korunur.",
  },
  {
    title: "Fason Esnekliği",
    desc: "Markanızın kendi kalıbı, modeli ve kumaşıyla; ihtiyacınıza göre tam kapasite veya kısmi fason üretim modeli kurarız.",
  },
  {
    title: "Seçkin Kumaş",
    desc: "Yün, kaşmir ve pamuk; dokusuna, tuşesine ve dökümüne göre tedarikçilerimizle birlikte özenle seçilir.",
  },
];

export default function Heritage() {
  return (
    <section id="hakkimizda" className="relative bg-[var(--color-ivory)] px-6 py-28 text-[var(--color-espresso)]">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow mb-6">Hakkımızda — 1976'dan Beri</p>
          <h2 className="font-serif text-4xl leading-tight font-medium md:text-5xl">
            Üretimde bile bir
            <span className="italic text-[var(--color-gold)]"> ayrıntı </span>
            meselesidir
          </h2>
          <div className="rule-gold mt-10 w-24" style={{ marginLeft: 0, background: "linear-gradient(to right, var(--color-gold), transparent)" }} />
          <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--color-espresso)]/70">
            1976'dan bu yana erkek giyiminde biriktirdiğimiz tecrübeyi, bugün
            toptan imalat ve fason dikimde markanızın hizmetine sunuyoruz.
            Pantolon, ceket, takım elbise, kaşe mont, kaban ve gömlekte
            kalitesinden ödün vermeyen bir üretim ortağı arıyorsanız, doğru
            yerdesiniz — çünkü kalite, ayrıntılarda gizlidir.
          </p>
          <img
            src={`${import.meta.env.BASE_URL}images/hakkimizda.jpg`}
            alt="Bahadır Tekstil üretimi"
            className="mt-10 h-56 w-full max-w-md rounded-sm border border-[var(--color-espresso)]/10 object-cover object-top"
            loading="lazy"
          />
        </motion.div>

        <div className="flex flex-col justify-center divide-y divide-[var(--color-espresso)]/10">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="flex gap-8 py-8"
            >
              <span className="font-serif text-5xl leading-none font-medium text-[var(--color-gold)]/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-medium">{value.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-espresso)]/65">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
