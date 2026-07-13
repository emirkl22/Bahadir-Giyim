import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SuitIllustration from "./SuitIllustration";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const suitRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      // 1) suit draws itself on load — stroke by stroke, like chalk on fabric
      const strokes = suitRef.current?.querySelectorAll<SVGGeometryElement>("[data-suit] path, [data-suit] circle");
      if (strokes?.length) {
        strokes.forEach((el) => {
          const len = el.getTotalLength();
          el.style.strokeDasharray = `${len}`;
          el.style.strokeDashoffset = `${len}`;
        });
        gsap.to(strokes, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.3,
        });
      }

      gsap.fromTo(
        fgRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
      );

      // 2) multi-layer parallax while scrolling past the pinned hero
      const isSmall = window.matchMedia("(max-width: 768px)").matches;
      if (isSmall) return;

      const vh = window.innerHeight;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      tl.to(bgRef.current, { y: -vh * 0.5, ease: "none" }, 0);
      tl.to(suitRef.current, { y: -vh * 0.8, rotate: -3, ease: "none" }, 0);
      tl.to(fgRef.current, { y: -vh * 1, opacity: 0, ease: "none" }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative h-[180vh]">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-[var(--color-espresso)]">
        {/* background layer — 0.5x — subtle fabric weave + vignette */}
        <div ref={bgRef} className="weave-herringbone absolute inset-[-20%] opacity-40 will-change-transform" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-espresso)_95%)]" />

        {/* vertical side label */}
        <span
          className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.5em] text-[var(--color-gold)]/50 lg:block"
          style={{ writingMode: "vertical-rl" }}
        >
          Bahadır Tekstil — Adana · İstanbul
        </span>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
          {/* foreground — 1x — headline */}
          <div ref={fgRef} className="will-change-transform">
            <p className="eyebrow mb-6">Toptan Üretim — İmalat &amp; Fason Dikim</p>
            <h1 className="font-serif text-5xl leading-[1.05] font-medium text-[var(--color-ivory)] md:text-7xl">
              Kalite,
              <br />
              <span className="italic text-[var(--color-gold)]">Ayrıntılarda</span>
              <br />
              Gizlidir
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--color-stone)]">
              Pantolon, ceket, takım elbise, kaşe mont, kaban ve gömlekte
              toptan imalat ve fason dikim. Markanızın üretim ortağı olarak
              seri üretimde zanaat kalitesini korur.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#koleksiyon" className="btn-gold">
                Üretim Kapasitemiz
              </a>
              <a href="#iletisim" className="btn-outline">
                Teklif Alın
              </a>
            </div>
          </div>

          {/* mid layer — 0.8x — self-drawing suit */}
          <div ref={suitRef} className="relative mx-auto hidden w-full max-w-sm text-[var(--color-gold)] will-change-transform md:block">
            <SuitIllustration className="h-auto w-full drop-shadow-[0_0_40px_rgba(200,164,93,0.08)]" />
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-gold)]/60">
          <span className="text-[9px] uppercase tracking-[0.4em]">Keşfet</span>
          <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-[var(--color-gold)]/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
