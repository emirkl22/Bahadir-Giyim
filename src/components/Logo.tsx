type LogoProps = {
  variant?: "nav" | "footer";
};

/** Official Bahadır artwork, vectorized from the brand's own PDF — do not redraw. */
export default function Logo({ variant = "nav" }: LogoProps) {
  if (variant === "footer") {
    return (
      <a
        href="#top"
        className="flex items-center text-[var(--color-champagne)]"
        aria-label="Bahadır Tekstil — anasayfa"
      >
        <img
          src={`${import.meta.env.BASE_URL}brand/logo.svg`}
          alt="Bahadır — Kalite Ayrıntılarda Gizlidir"
          height={84}
          style={{ height: 84, width: "auto" }}
          className="shrink-0"
        />
      </a>
    );
  }

  // nav — emblem stays a fixed size, wordmark scales up to match its full height
  const emblemHeight = 46;

  return (
    <a
      href="#top"
      className="flex items-center gap-3 text-[var(--color-champagne)]"
      aria-label="Bahadır Tekstil — anasayfa"
    >
      <img
        src={`${import.meta.env.BASE_URL}brand/emblem.svg`}
        alt=""
        height={emblemHeight}
        style={{ height: emblemHeight, width: "auto" }}
        className="shrink-0"
      />
      <img
        src={`${import.meta.env.BASE_URL}brand/wordmark.svg`}
        alt="Bahadır — Kalite Ayrıntılarda Gizlidir"
        height={emblemHeight}
        style={{ height: emblemHeight, width: "auto" }}
        className="shrink-0"
      />
    </a>
  );
}
