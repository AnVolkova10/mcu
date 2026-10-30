import type { EventDateInput } from './schema';

const formatYear = (year: number): string => {
  const abs = Math.abs(year);
  const digits = abs >= 10_000 ? abs.toLocaleString('en-US') : String(abs);
  if (year < 0) return `${digits} BCE`;
  if (year < 1000) return `${year} CE`;
  return String(year);
};

/** Printed date of an event: "1944", "c. 3600 BCE", "1861–1865", "5,000 years ago". */
export function formatDate(date: EventDateInput): string {
  if (date.label) return date.label;
  const range = date.end ? `${formatYear(date.year)}–${formatYear(date.end)}` : formatYear(date.year);
  return date.approx ? `c. ${range}` : range;
}

/** Position on the timeline. Events of the same year keep their `order` (default 500). */
export function sortKey(date: EventDateInput): number {
  return date.year * 10_000 + (date.order ?? 500);
}

export interface Period {
  id: string;
  label: string;
  from: number;
  to: number;
}

/** Broad periods used to filter and to jump around the timeline. */
export const periods: readonly Period[] = [
  { id: 'ancient', label: 'Before 1900', from: -Infinity, to: 1899 },
  { id: 'world-wars', label: '1900–1945', from: 1900, to: 1945 },
  { id: 'cold-war', label: '1946–1991', from: 1946, to: 1991 },
  { id: 'nineties', label: '1992–2007', from: 1992, to: 2007 },
  { id: 'heroic-age', label: '2008–2018', from: 2008, to: 2018 },
  { id: 'beyond', label: '2019 & beyond', from: 2019, to: Infinity },
];

export const periodOf = (year: number): Period => periods.find((p) => year >= p.from && year <= p.to) ?? periods[0];
