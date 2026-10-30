import type { CSSProperties } from "react";

/** Jeda kemunculan bertahap (0, 80, 160 ms, dst.) untuk elemen `.reveal` yang berjajar; `cols` = jumlah kolom grid. */
export const revealDelay = (i: number, cols = 4) => ({ "--reveal-delay": `${(i % cols) * 80}ms` }) as CSSProperties;
