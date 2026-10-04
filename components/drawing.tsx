import type { ReactNode } from "react";

/** Architectural section marker: number over sheet code, then a plain title. */
export function SectionHead({
  n,
  code,
  title,
  red = false,
  stamp,
}: {
  n: number;
  code: string;
  title: string;
  red?: boolean;
  stamp?: string;
}) {
  return (
    <div className="shead">
      <span className={`marker${red ? " red" : ""}`} aria-hidden="true">
        <span>{n}</span>
        <span>{code}</span>
      </span>
      <h2>{title}</h2>
      <span className="rule" aria-hidden="true" />
      {stamp ? <span className="stamp red">{stamp}</span> : null}
    </div>
  );
}

/** Ruled figure with a caption line. `shot` renders the image in greyscale until hovered. */
export function Fig({
  src,
  alt,
  caption,
  note,
  heavy = false,
  shot = true,
}: {
  src: string;
  alt: string;
  caption: string;
  note?: string;
  heavy?: boolean;
  shot?: boolean;
}) {
  return (
    <figure className={`fig${heavy ? " heavy" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className={shot ? "shot" : undefined} tabIndex={shot ? 0 : undefined} />
      <figcaption className="caption">
        <span>{caption}</span>
        {note ? <span>{note}</span> : null}
      </figcaption>
    </figure>
  );
}

/** Measurement figure: big value, a dimension line, a mono label. */
export function Measure({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
      <span className="wide" style={{ fontWeight: 800, fontSize: "clamp(28px, 2.4vw, 38px)", lineHeight: 1, letterSpacing: "-0.02em" }}>
        {value}
      </span>
      <span className="dim" aria-hidden="true">
        <i />
      </span>
      <span className="mono" style={{ fontSize: 12, lineHeight: 1.5, textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}

export function Sheet({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <div className="sheet">{children}</div>
    </div>
  );
}
