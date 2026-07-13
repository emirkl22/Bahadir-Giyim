import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Teklif & Numune",
    desc: "Model, kumaş ve adet talebinizi alır; onayınız için numune parça hazırlarız.",
  },
  {
    title: "Kumaş & Model Onayı",
    desc: "Numune onaylandıktan sonra kumaş tedariki ve üretim planlaması netleşir.",
  },
  {
    title: "Seri Üretim",
    desc: "Kalite kontrolü her aşamada sürdürülerek, anlaşılan adet ve teslim takvimine göre üretim yapılır.",
  },
  {
    title: "Sevkiyat",
    desc: "Son kontrol ve paketlemenin ardından siparişiniz belirlenen adrese teslim edilir.",
  },
];

export default function Atelier() {
  return (
    <section id="atolye" className="relative bg-[var(--color-coffee)] px-6 py-28">
      <div className="pointer-events-none absolute inset-0 weave-oxford opacity-20" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="eyebrow mb-6">Üretim Süreci</p>
          <h2 className="font-serif text-4xl leading-tight font-medium text-[var(--color-ivory)] md:text-5xl">
            Teklifinizden sevkiyata <span className="italic text-[var(--color-gold)]">dört adım</span>
          </h2>
          <div className="rule-gold mx-auto mt-8 w-32" />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              <span className="font-serif text-7xl leading-none font-medium text-[var(--color-gold)]/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-medium text-[var(--color-ivory)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-stone)]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
