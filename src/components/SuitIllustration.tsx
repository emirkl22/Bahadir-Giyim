/**
 * Editorial fashion-croquis illustration of a notch-lapel jacket, drawn as
 * layered SVG so GSAP can animate it "sketching itself" — keeps the parallax
 * centerpiece a few KB instead of a heavy photo/video asset.
 */
export default function SuitIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 560"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      data-suit
    >
      {/* tonal fill behind the linework, gives the silhouette weight */}
      <path
        data-suit-fill
        fill="currentColor"
        fillOpacity={0.08}
        stroke="none"
        d="M172,72 Q210,56 248,72 L302,88 C314,160 318,230 308,300 C302,370 298,430 302,496
           L118,496 C122,430 118,370 112,300 C102,230 106,160 118,88 Z"
      />

      {/* back collar */}
      <path d="M172,72 Q210,56 248,72" strokeWidth={2.4} />
      {/* shoulders */}
      <path d="M172,72 L118,88" strokeWidth={2.4} />
      <path d="M248,72 L302,88" strokeWidth={2.4} />
      {/* side body silhouette */}
      <path d="M118,88 C106,160 102,230 112,300 C118,370 122,430 118,496" strokeWidth={2.4} />
      <path d="M302,88 C314,160 318,230 308,300 C302,370 298,430 302,496" strokeWidth={2.4} />
      {/* hem */}
      <path d="M210,338 C200,400 196,450 196,496 L118,496" strokeWidth={1.6} />
      <path d="M210,338 C220,400 224,450 224,496 L302,496" strokeWidth={1.6} />

      {/* left lapel */}
      <path d="M172,72 C160,122 150,162 148,186 L208,336" strokeWidth={1.8} />
      <path d="M172,72 C186,172 200,272 208,336" strokeWidth={1} strokeOpacity={0.55} />
      {/* right lapel */}
      <path d="M248,72 C260,122 270,162 272,186 L212,336" strokeWidth={1.8} />
      <path d="M248,72 C234,172 220,272 212,336" strokeWidth={1} strokeOpacity={0.55} />

      {/* shirt collar */}
      <path d="M186,66 L206,90" strokeWidth={1.4} />
      <path d="M234,66 L214,90" strokeWidth={1.4} />

      {/* tie */}
      <path d="M201,80 L219,80 L214,97 L206,97 Z" strokeWidth={1.4} />
      <path d="M206,97 L196,200 L210,230 L224,200 L214,97" strokeWidth={1.4} />

      {/* breast pocket + pocket square */}
      <path d="M136,296 L174,296" strokeWidth={1.3} />
      <path d="M142,296 L151,283 L159,296" strokeWidth={1} />
      <path d="M159,296 L166,286 L172,296" strokeWidth={1} />

      {/* buttons */}
      <circle cx="210" cy="346" r="3.5" strokeWidth={1.4} />
      <circle cx="210" cy="388" r="3.5" strokeWidth={1.4} />

      {/* hip pockets */}
      <path d="M124,396 L182,402" strokeWidth={1.3} />
      <path d="M238,402 L296,396" strokeWidth={1.3} />

      {/* tailor's chalk measurement ticks */}
      <g strokeWidth={0.8} strokeOpacity={0.45}>
        <path d="M110,470 L120,470" />
        <path d="M115,462 L115,478" />
        <path d="M310,470 L300,470" />
        <path d="M305,462 L305,478" />
      </g>
    </svg>
  );
}
