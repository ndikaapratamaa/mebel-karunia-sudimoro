import type { ReactNode, SVGProps } from "react";

/** Ikon garis tipis (24px), satu warna mengikuti teks. */
function Icon({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconLeaf = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14z" />
    <path d="M5 19 13 11" />
  </Icon>
);

export const IconRuler = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M3 17 17 3l4 4L7 21z" />
    <path d="M5 15l1.5 1.5M8 12l1.5 1.5M11 9l1.5 1.5M14 6l1.5 1.5" />
  </Icon>
);

export const IconHammer = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M13 4l7 7-3 3-7-7z" />
    <path d="M13.5 10.5 4 20" />
  </Icon>
);

export const IconTruck = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="1" y="3" width="15" height="13" />
    <path d="M16 8h4l3 3v5h-7z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </Icon>
);
