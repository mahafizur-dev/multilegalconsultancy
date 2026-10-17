import type { CSSProperties } from "react";

/** Stagger delay for a `[data-reveal]` item; `perRow` restarts the wave on each grid row. */
export const revealDelay = (index: number, perRow = 4, step = 90) =>
  ({ "--reveal-delay": `${(index % perRow) * step}ms` }) as CSSProperties;

/** Delay for a hero line that animates on page load. */
export const enterDelay = (ms: number) =>
  ({ "--delay": `${ms}ms` }) as CSSProperties;
