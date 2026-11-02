import { useLayoutEffect, useRef } from 'react';

/** On a phone the cut at the bottom is what invites the scroll, so all of this is for wider screens. */
export const isWideScreen = () => window.matchMedia('(min-width: 64rem)').matches;

/** Where the first screen ends: the top of the fixed footer. */
export const foldLine = () => document.getElementById('site-footer')?.getBoundingClientRect().top ?? window.innerHeight;

/** Runs `fit` now, once the fonts have settled the text, and whenever the window changes. */
export function useFitOnResize(fit: () => void) {
  useLayoutEffect(() => {
    fit();
    void document.fonts.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [fit]);
}

/**
 * Sizes the rows of a grid so the first screen ends on a whole row, at any window size: each row and its gap take an
 * equal share of the room, so the next row starts right behind the footer.
 * Fits as many rows of at least `minRow` pixels as it can and writes their height to `--row`, for the grid's CSS to use.
 * Put the ref on something that is always mounted: the grid itself may leave when nothing matches.
 * `heading`: what sits at the top of the element, above its first row, in pixels.
 */
export function useFitRows<T extends HTMLElement>(minRow: number, gap: number, maxRows = Infinity, heading = 0) {
  const ref = useRef<T>(null);
  const fit = useRef(() => {
    const element = ref.current;
    if (!element || !isWideScreen()) return;
    const room = foldLine() - (element.getBoundingClientRect().top + window.scrollY) - heading;
    const rows = Math.min(maxRows, Math.max(1, Math.floor(room / (minRow + gap))));
    // Rounding up hides the next row in the gap; without a gap it would push the last row under the footer.
    const row = room / rows - gap;
    element.style.setProperty('--row', `${gap ? Math.ceil(row) : row}px`);
  });
  useFitOnResize(fit.current);
  return ref;
}
