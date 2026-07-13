type LogoProps = {
  variant?: "nav" | "footer";
};

/** Official Bahadır lockup (emblem + wordmark), vectorized from the brand's own artwork — do not redraw. */
export default function Logo({ variant = "nav" }: LogoProps) {
  const height = variant === "footer" ? 84 : 46;

  return (
    <a
      href="#top"
      className="flex items-center text-[var(--color-champagne)]"
      aria-label="Bahadır Tekstil — anasayfa"
    >
      <img
        src={`${import.meta.env.BASE_URL}brand/logo.svg`}
        alt="Bahadır — Kalite Ayrıntılarda Gizlidir"
        height={height}
        style={{ height, width: "auto" }}
        className="shrink-0"
      />
    </a>
  );
}
