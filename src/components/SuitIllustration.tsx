/**
 * Line-art suit jacket drawn as SVG strokes so GSAP can animate it
 * "drawing itself" — keeps the parallax centerpiece at ~2 KB instead
 * of a heavy video/image (1 GB hosting constraint).
 */
export default function SuitIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 560"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      data-suit
    >
      {/* back collar + shoulder seams */}
      <path d="M172 72 Q210 56 248 72" />
      <path d="M172 72 L118 88" />
      <path d="M248 72 L302 88" />

      {/* body outline */}
      <path d="M118 88 C106 160 102 230 112 300 C118 370 122 430 118 496" />
      <path d="M302 88 C314 160 318 230 308 300 C302 370 298 430 302 496" />

      {/* front panels below button stance (cutaway) + hem */}
      <path d="M210 338 C200 400 196 450 196 496 L118 496" />
      <path d="M210 338 C220 400 224 450 224 496 L302 496" />

      {/* lapels — outer edges and roll lines */}
      <path d="M172 72 C160 122 150 162 148 186 L208 336" />
      <path d="M172 72 C186 172 200 272 208 336" />
      <path d="M248 72 C260 122 270 162 272 186 L212 336" />
      <path d="M248 72 C234 172 220 272 212 336" />

      {/* shirt collar */}
      <path d="M186 66 L206 90" />
      <path d="M234 66 L214 90" />

      {/* tie */}
      <path d="M201 80 L219 80 L214 97 L206 97 Z" />
      <path d="M206 97 L196 200 L210 230 L224 200 L214 97" />

      {/* breast pocket + pocket square */}
      <path d="M136 296 L174 296" />
      <path d="M142 296 L151 283 L159 296" />
      <path d="M159 296 L166 286 L172 296" />

      {/* hip pocket flaps */}
      <path d="M124 396 L182 402" />
      <path d="M238 402 L296 396" />

      {/* buttons */}
      <circle cx={210} cy={346} r={3.5} />
      <circle cx={210} cy={388} r={3.5} />
    </svg>
  );
}
