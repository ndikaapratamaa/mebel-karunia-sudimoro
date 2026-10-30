import Image from "next/image";
import type { PlaceholderKind } from "@/data/catalog";

type Tone = "krem" | "sengon" | "jati";

const T: Record<Tone, { bg: string; floor: string; w: string; l: string; d: string }> = {
  krem: { bg: "#efe4d0", floor: "#dcc6a0", w: "#6a4327", l: "#926339", d: "#4e301b" },
  sengon: { bg: "#ddc29b", floor: "#c7a678", w: "#5b3820", l: "#80542f", d: "#3f2615" },
  jati: { bg: "#7a5030", floor: "#5e3b22", w: "#e9dcc4", l: "#f6eedd", d: "#c9b48f" },
};

function Art({ kind, tone }: { kind: PlaceholderKind; tone: Tone }) {
  const c = T[tone];
  const shadow = <ellipse cx="200" cy="386" rx="120" ry="9" fill="#000" opacity=".13" />;
  switch (kind) {
    case "kursi":
      return (
        <g>
          {shadow}
          <rect x="142" y="150" width="12" height="142" fill={c.w} />
          <rect x="246" y="150" width="12" height="142" fill={c.w} />
          <rect x="142" y="150" width="116" height="14" rx="3" fill={c.l} />
          {[166, 188, 210].map((x) => (
            <rect key={x} x={x} y="164" width="12" height="100" fill={c.l} />
          ))}
          <rect x="130" y="268" width="140" height="24" rx="4" fill={c.l} />
          <rect x="138" y="292" width="12" height="90" fill={c.w} />
          <rect x="250" y="292" width="12" height="90" fill={c.w} />
          <rect x="150" y="340" width="100" height="8" fill={c.d} />
        </g>
      );
    case "meja":
      return (
        <g>
          {shadow}
          <rect x="70" y="250" width="260" height="26" rx="4" fill={c.l} />
          <rect x="84" y="276" width="232" height="16" fill={c.w} />
          <rect x="84" y="292" width="16" height="90" fill={c.w} />
          <rect x="300" y="292" width="16" height="90" fill={c.w} />
          <rect x="188" y="214" width="24" height="36" rx="3" fill={c.d} />
          <ellipse cx="190" cy="196" rx="9" ry="22" fill="#6f7f4f" transform="rotate(-24 190 196)" />
          <ellipse cx="212" cy="194" rx="9" ry="24" fill="#7f8f5c" transform="rotate(22 212 194)" />
          <ellipse cx="200" cy="188" rx="8" ry="26" fill="#5f6f42" />
        </g>
      );
    case "lemari":
      return (
        <g>
          {shadow}
          <rect x="97" y="78" width="206" height="16" rx="3" fill={c.d} />
          <rect x="105" y="94" width="190" height="276" rx="4" fill={c.w} />
          <rect x="114" y="104" width="84" height="256" fill={c.l} />
          <rect x="202" y="104" width="84" height="256" fill={c.l} />
          <rect x="126" y="118" width="60" height="228" fill="none" stroke={c.d} strokeWidth="3" opacity=".55" />
          <rect x="214" y="118" width="60" height="228" fill="none" stroke={c.d} strokeWidth="3" opacity=".55" />
          <circle cx="188" cy="236" r="5" fill={c.d} />
          <circle cx="212" cy="236" r="5" fill={c.d} />
          <rect x="112" y="370" width="16" height="14" fill={c.d} />
          <rect x="272" y="370" width="16" height="14" fill={c.d} />
        </g>
      );
    case "tempat-tidur":
      return (
        <g>
          {shadow}
          <rect x="70" y="150" width="260" height="150" rx="12" fill={c.w} />
          <rect x="84" y="164" width="232" height="122" rx="6" fill={c.l} />
          <rect x="58" y="290" width="284" height="52" rx="8" fill="#f7f0e3" />
          <rect x="100" y="266" width="82" height="34" rx="14" fill="#fffaf0" />
          <rect x="218" y="266" width="82" height="34" rx="14" fill="#fffaf0" />
          <rect x="58" y="314" width="284" height="30" rx="6" fill="#a9815a" />
          <rect x="58" y="342" width="284" height="26" rx="4" fill={c.d} />
          <rect x="68" y="368" width="14" height="16" fill={c.d} />
          <rect x="318" y="368" width="14" height="16" fill={c.d} />
        </g>
      );
    case "rak":
      return (
        <g>
          {shadow}
          <rect x="106" y="90" width="188" height="292" rx="4" fill={c.w} />
          <rect x="118" y="102" width="164" height="268" fill={c.d} opacity=".5" />
          {[170, 240, 310].map((y) => (
            <rect key={y} x="114" y={y} width="172" height="9" fill={c.l} />
          ))}
          {[
            [126, 128, 14, 42, "#b9916a"], [142, 136, 12, 34, "#f0e6d3"], [156, 124, 16, 46, "#8a9a68"],
            [176, 140, 14, 30, "#d8bc93"], [128, 200, 18, 40, "#f0e6d3"], [148, 194, 14, 46, "#b9916a"],
            [166, 204, 20, 36, "#8a9a68"], [220, 214, 52, 26, "#d8bc93"], [130, 280, 60, 30, "#f0e6d3"],
            [232, 262, 14, 48, "#b9916a"], [248, 270, 16, 40, "#f0e6d3"],
          ].map(([x, y, w, h, f]) => (
            <rect key={`${x}-${y}`} x={x as number} y={y as number} width={w as number} height={h as number} fill={f as string} />
          ))}
        </g>
      );
    case "sofa":
    default:
      return (
        <g>
          {shadow}
          <rect x="80" y="196" width="240" height="96" rx="20" fill={c.w} />
          <rect x="92" y="262" width="108" height="58" rx="10" fill={c.l} />
          <rect x="200" y="262" width="108" height="58" rx="10" fill={c.l} />
          <rect x="62" y="234" width="38" height="98" rx="14" fill={c.w} />
          <rect x="300" y="234" width="38" height="98" rx="14" fill={c.w} />
          <rect x="70" y="326" width="260" height="22" rx="6" fill={c.d} />
          <rect x="88" y="348" width="12" height="28" fill={c.d} />
          <rect x="300" y="348" width="12" height="28" fill={c.d} />
        </g>
      );
  }
}

type Props = {
  kind: PlaceholderKind;
  alt: string;
  /** Path foto asli di /public. Bila kosong, ilustrasi placeholder dipakai. */
  src?: string;
  tone?: Tone;
  className?: string;
  /** Tampilkan keterangan "Foto menyusul" pada placeholder. */
  showNote?: boolean;
  priority?: boolean;
};

/** Pembungkus gambar. Ukuran ditentukan oleh className induk (aspect ratio, lebar). */
export function FurnitureImage({ kind, alt, src, tone = "krem", className = "", showNote = false, priority = false }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: T[tone].bg }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" priority={priority} />
      ) : (
        <>
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMax meet" role="img" aria-label={alt} className="absolute inset-0 h-full w-full overflow-visible">
            <rect x="-2400" y="380" width="5200" height="1400" fill={T[tone].floor} />
            <Art kind={kind} tone={tone} />
          </svg>
          {showNote && (
            <span className="absolute bottom-3 left-3 rounded-sm bg-kapas/85 px-2 py-1 text-xs text-batang">Foto menyusul</span>
          )}
        </>
      )}
    </div>
  );
}
