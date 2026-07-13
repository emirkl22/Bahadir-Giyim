import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="iletisim" className="relative bg-[var(--color-espresso)] px-6 pt-24 pb-10">
      <div className="mx-auto max-w-6xl">
        {/* CTA band */}
        <div className="border border-[var(--color-gold)]/20 px-8 py-14 text-center md:px-16">
          <p className="eyebrow mb-4">İş Birliği</p>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight font-medium text-[var(--color-ivory)] md:text-5xl">
            Markanızın üretim ortağı olalım
          </h2>
          <a href="mailto:info@bahadirgiyim.com" className="btn-gold mt-10">
            Teklif Alın
          </a>
        </div>

        {/* logo + contact */}
        <div className="mt-20 flex flex-col items-center gap-12">
          <Logo variant="footer" />

          <div className="grid w-full gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="eyebrow mb-4">Merkez / Fabrika</h4>
              <p className="text-sm leading-relaxed text-[var(--color-stone)]">
                Kocavezir Mh. 32003 Sk. No:35/C
                <br />
                Seyhan / Adana
              </p>
            </div>
            <div>
              <h4 className="eyebrow mb-4">Showroom İstanbul</h4>
              <p className="text-sm leading-relaxed text-[var(--color-stone)]">
                Samanyolu Sk. Zafer Han No:56/27
                <br />
                Osmanbey, Şişli / İstanbul
              </p>
            </div>
            <div>
              <h4 className="eyebrow mb-4">İletişim</h4>
              <p className="text-sm leading-relaxed text-[var(--color-stone)]">
                info@bahadirgiyim.com
                <br />
                +90 (322) 359 04 77
                <br />
                GSM: +90 (532) 552 56 52
              </p>
            </div>
            <div>
              <h4 className="eyebrow mb-4">Sosyal</h4>
              <p className="text-sm leading-relaxed text-[var(--color-stone)]">
                <a
                  href="https://www.instagram.com/bahadirtextile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-gold)]"
                >
                  Instagram — @bahadirtextile
                </a>
              </p>
            </div>
          </div>

          <div className="rule-gold w-full" />

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs tracking-wide text-[var(--color-stone)]/80">
            <a href="#/gizlilik-politikasi" className="transition-colors hover:text-[var(--color-gold)]">
              Gizlilik Politikası
            </a>
            <a href="#/kvkk-aydinlatma" className="transition-colors hover:text-[var(--color-gold)]">
              KVKK Aydınlatma Metni
            </a>
            <a href="#/cerez-politikasi" className="transition-colors hover:text-[var(--color-gold)]">
              Çerez Politikası
            </a>
          </nav>

          <p className="text-xs tracking-wide text-[var(--color-stone)]/70">
            © {new Date().getFullYear()} Bahadır Tekstil. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
