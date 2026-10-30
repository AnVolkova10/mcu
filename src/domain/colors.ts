/** Color helpers: every identity color gets a readable text variant against the app background. */

const BACKGROUND = [11, 11, 14] as const; // --color-bg #0b0b0e
const MIN_CONTRAST = 4.6;

type Rgb = readonly [number, number, number];

const parseHex = (hex: string): Rgb => {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as unknown as Rgb;
};

const toHex = (rgb: Rgb) => '#' + rgb.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

const luminance = (rgb: Rgb) => {
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const contrastRatio = (a: Rgb, b: Rgb) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const mix = (a: Rgb, b: Rgb, t: number): Rgb => [0, 1, 2].map((i) => a[i] + (b[i] - a[i]) * t) as unknown as Rgb;

const cache = new Map<string, string>();

/** Lightens a color just enough to be readable as text on the app background. */
export function readableOn(hex: string): string {
  const cached = cache.get(hex);
  if (cached) return cached;
  let rgb = parseHex(hex);
  const base = rgb;
  for (let t = 0.05; contrastRatio(rgb, BACKGROUND) < MIN_CONTRAST && t <= 1; t += 0.05) {
    rgb = mix(base, [255, 255, 255], t);
  }
  const out = toHex(rgb);
  cache.set(hex, out);
  return out;
}

/** `#rrggbb` + alpha (0–1) as an 8-digit hex. */
export const alpha = (hex: string, a: number) => toHex(parseHex(hex)) + Math.round(a * 255).toString(16).padStart(2, '0');

export const contrastOnBackground = (hex: string) => contrastRatio(parseHex(hex), BACKGROUND);
