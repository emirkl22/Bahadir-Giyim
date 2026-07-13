import { useEffect } from "react";
import Logo from "./Logo";

export type LegalDoc = "privacy" | "kvkk" | "cookies";

const COMPANY = "Bahadır Tekstil";
const ADDRESS = "İstanbul, Türkiye";
const EMAIL = "info@bahadirgiyim.com";

const DOCS: { key: LegalDoc; hash: string; label: string }[] = [
  { key: "privacy", hash: "#/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { key: "kvkk", hash: "#/kvkk-aydinlatma", label: "KVKK Aydınlatma Metni" },
  { key: "cookies", hash: "#/cerez-politikasi", label: "Çerez Politikası" },
];

function goHome(e: React.MouseEvent) {
  e.preventDefault();
  window.location.hash = "";
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
function goDoc(e: React.MouseEvent, hash: string) {
  e.preventDefault();
  window.location.hash = hash;
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doc]);

  return (
    <div className="min-h-screen bg-[var(--color-espresso)] text-[var(--color-ivory)]">
      <header className="flex items-center justify-between border-b border-[var(--color-gold)]/15 px-6 py-4">
        <a href="#" onClick={goHome}>
          <Logo />
        </a>
        <a
          href="#"
          onClick={goHome}
          className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] transition-colors hover:text-[var(--color-champagne)]"
        >
          ← Ana Sayfa
        </a>
      </header>

      <nav className="mx-auto flex max-w-3xl flex-wrap gap-2 px-6 pt-10">
        {DOCS.map((d) => (
          <a
            key={d.key}
            href={d.hash}
            onClick={(e) => goDoc(e, d.hash)}
            className={`border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
              doc === d.key
                ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-espresso)]"
                : "border-[var(--color-gold)]/25 text-[var(--color-stone)] hover:border-[var(--color-gold)]/60 hover:text-[var(--color-champagne)]"
            }`}
          >
            {d.label}
          </a>
        ))}
      </nav>

      <article className="legal-body mx-auto max-w-3xl px-6 pb-24 pt-10">
        {doc === "privacy" && <Privacy />}
        {doc === "kvkk" && <Kvkk />}
        {doc === "cookies" && <Cookies />}
        <p className="mt-10 text-xs text-[var(--color-stone)]/60">Son güncelleme: Temmuz 2026</p>
      </article>
    </div>
  );
}

function Privacy() {
  return (
    <>
      <h1 className="font-serif text-3xl font-medium text-[var(--color-ivory)]">Gizlilik Politikası</h1>
      <p>
        {COMPANY} (“Şirket”) olarak, web sitemizi ziyaret eden kullanıcıların gizliliğine önem
        veriyoruz. Bu politika, sitemiz üzerinden hangi kişisel verileri, hangi amaçla
        topladığımızı ve nasıl koruduğumuzu açıklar.
      </p>

      <h2>Toplanan veriler</h2>
      <p>
        Yalnızca iletişim formunu doldurduğunuzda; <strong>ad, soyad, e-posta adresi, telefon
        numarası (isteğe bağlı) ve mesaj içeriği</strong> tarafımıza iletilir. Sitemiz bunun
        dışında otomatik olarak kişisel veri toplamaz, üyelik veya ödeme işlemi içermez.
      </p>

      <h2>Kullanım amacı</h2>
      <p>
        Bu veriler yalnızca <strong>talebinize/sorunuza yanıt vermek</strong> ve sizinle iletişim
        kurmak amacıyla işlenir. Pazarlama amacıyla kullanılmaz, satılmaz.
      </p>

      <h2>Aktarım ve üçüncü taraflar</h2>
      <p>
        Form mesajları, e-posta altyapımız aracılığıyla yalnızca firma yetkililerimize iletilir.
        Verileriniz hukuken zorunlu haller dışında üçüncü kişilerle paylaşılmaz.
      </p>

      <h2>Çerezler</h2>
      <p>
        Sitemiz pazarlama/izleme çerezi kullanmaz. Teknik çerezler ve harici yazı tipi servisi
        hakkında ayrıntı için <a href="#/cerez-politikasi">Çerez Politikası</a>'na bakınız.
      </p>

      <h2>Saklama süresi</h2>
      <p>
        İletişim talepleriniz, amaç ortadan kalktığında veya ilgili mevzuatın öngördüğü süre
        sonunda silinir/anonimleştirilir.
      </p>

      <h2>Haklarınız ve iletişim</h2>
      <p>
        KVKK kapsamındaki haklarınız için <a href="#/kvkk-aydinlatma">Aydınlatma Metni</a>'ni
        inceleyebilir; taleplerinizi <a href={`mailto:${EMAIL}`}>{EMAIL}</a> adresine
        iletebilirsiniz.
      </p>
    </>
  );
}

function Kvkk() {
  return (
    <>
      <h1 className="font-serif text-3xl font-medium text-[var(--color-ivory)]">KVKK Aydınlatma Metni</h1>
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla{" "}
        {COMPANY} tarafından kişisel verilerinizin işlenmesine ilişkin olarak sizi
        bilgilendirmek isteriz.
      </p>

      <h2>Veri sorumlusu</h2>
      <p>
        {COMPANY}
        <br />
        {ADDRESS}
        <br />
        E-posta: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>

      <h2>İşlenen kişisel veriler ve amaç</h2>
      <p>
        İletişim formu aracılığıyla ilettiğiniz <strong>ad, soyad, e-posta, telefon ve mesaj</strong>{" "}
        bilgileriniz; talebinizin/başvurunuzun değerlendirilmesi ve sizinle iletişim kurulması
        amacıyla işlenir.
      </p>

      <h2>Hukuki sebep</h2>
      <p>
        Kişisel verileriniz, KVKK md. 5 çerçevesinde <strong>açık rızanıza</strong> ve bir talebi
        karşılamaya yönelik meşru menfaate dayanılarak işlenir. Form gönderiminde onay kutusunu
        işaretleyerek bu işlemeye açık rıza vermiş olursunuz.
      </p>

      <h2>Aktarım</h2>
      <p>
        Verileriniz, yalnızca e-posta iletimi için kullandığımız hizmet sağlayıcı altyapısı
        üzerinden firma yetkililerimize ulaşır; yurt içi/yurt dışı üçüncü kişilere pazarlama
        amacıyla aktarılmaz.
      </p>

      <h2>Toplama yöntemi</h2>
      <p>
        Veriler, web sitemizdeki iletişim formu üzerinden elektronik ortamda, sizin tarafınızdan
        iletilerek toplanır.
      </p>

      <h2>KVKK md. 11 kapsamındaki haklarınız</h2>
      <p>
        Kişisel verilerinizle ilgili olarak; işlenip işlenmediğini öğrenme, bilgi talep etme,
        işlenme amacını öğrenme, eksik/yanlış işlenmişse düzeltilmesini, silinmesini veya yok
        edilmesini isteme ve işlemenin hukuka aykırı olması halinde zararın giderilmesini talep
        etme haklarına sahipsiniz.
      </p>

      <h2>Başvuru</h2>
      <p>
        Taleplerinizi <a href={`mailto:${EMAIL}`}>{EMAIL}</a> adresine iletebilirsiniz.
        Başvurunuz en kısa sürede ve en geç mevzuatın öngördüğü sürede sonuçlandırılır.
      </p>
    </>
  );
}

function Cookies() {
  return (
    <>
      <h1 className="font-serif text-3xl font-medium text-[var(--color-ivory)]">Çerez Politikası</h1>
      <p>Bu politika, {COMPANY} web sitesinde çerezlerin nasıl kullanıldığını açıklar.</p>

      <h2>Çerez nedir?</h2>
      <p>Çerezler, ziyaret ettiğiniz siteler tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır.</p>

      <h2>Kullandığımız çerezler</h2>
      <p>
        <strong>Zorunlu/teknik çerez:</strong> Sitemiz şu an için ziyaretçi tarafında herhangi bir
        oturum veya tercih çerezi oluşturmamaktadır.
      </p>
      <p>
        <strong>Üçüncü taraf:</strong> Yazı tiplerini Google Fonts üzerinden yüklüyoruz; bu istek
        sırasında IP adresiniz Google'a iletilebilir. Sitemiz reklam/izleme veya analitik çerezi
        kullanmaz.
      </p>

      <h2>Çerezleri yönetme</h2>
      <p>Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz.</p>

      <h2>İletişim</h2>
      <p>
        Sorularınız için <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </>
  );
}
