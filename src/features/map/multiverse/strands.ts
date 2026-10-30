/** Geometry of the Multiverse view: each reality is a glowing strand, each branch splits from its parent. */
import { archive } from '@/content';
import type { ArchiveEvent, DateGroup } from '@/domain/archive';
import { branches, universeList, type Branch, type Universe } from '@/domain/catalog';
import { periods } from '@/domain/dates';

export const WIDTH = 1600;
export const HEIGHT = 720;
const LEFT = 190;
const RIGHT = 50;

const { groups } = archive;
const STEP = (WIDTH - LEFT - RIGHT) / (groups.length - 1);

export const xOf = (index: number) => LEFT + index * STEP;

export interface Bead {
  group: DateGroup;
  index: number;
  events: ArchiveEvent[];
  x: number;
  y: number;
}

export interface Strand {
  id: string;
  universe: Universe;
  branch?: Branch;
  label: string;
  path: string;
  beads: Bead[];
  end: { x: number; y: number };
}

/** Vertical place of each main strand; the Sacred Timeline runs through the middle. */
const LANES: Record<string, number> = { 'earth-10005': 170, 'earth-616': 345, 'earth-92131': 560, 'earth-90214': 650 };
const BRANCH_LANES: Record<string, number> = { 'fox-original': 92, 'chronicom-war': 262, 'shattered-earth-2091': 428, 'last-panther-future': 482 };

const wave = (x: number, seed: number) => Math.sin(x / 78 + seed) * 6 + Math.sin(x / 31 + seed * 2) * 1.6;

function buildStrand(id: string, universe: Universe, label: string, events: ArchiveEvent[], yAt: (x: number) => number, fromIndex: number, branch?: Branch): Strand {
  const indexes = events.map((e) => groups.findIndex((g) => g.label === e.dateLabel));
  const toIndex = Math.max(...indexes, fromIndex + 1);
  const [x0, x1] = [xOf(fromIndex), xOf(toIndex)];
  const points: string[] = [];
  for (let x = x0; x <= x1; x += 8) points.push(`${x.toFixed(1)} ${yAt(x).toFixed(1)}`);
  points.push(`${x1.toFixed(1)} ${yAt(x1).toFixed(1)}`);

  const byIndex = new Map<number, ArchiveEvent[]>();
  events.forEach((event, i) => {
    const list = byIndex.get(indexes[i]);
    if (list) list.push(event);
    else byIndex.set(indexes[i], [event]);
  });
  const beads = [...byIndex.entries()].map(([index, list]) => ({ group: groups[index], index, events: list, x: xOf(index), y: yAt(xOf(index)) }));
  return { id, universe, branch, label, path: `M ${points.join(' L ')}`, beads, end: { x: x1, y: yAt(x1) } };
}

const smooth = (t: number) => t * t * (3 - 2 * t);

function buildStrands(): Strand[] {
  const strands: Strand[] = [];
  universeList.forEach((universe, u) => {
    const lane = LANES[universe.id] ?? 640;
    const main = archive.events.filter((e) => e.universe.id === universe.id && !e.branch);
    const yMain = (x: number) => lane + wave(x, u * 1.7);
    if (main.length) {
      const from = groups.findIndex((g) => g.label === main[0].dateLabel);
      strands.push(buildStrand(universe.id, universe, `${universe.name} · ${universe.label}`, main, yMain, from));
    }
    (Object.values(branches) as Branch[]).filter((b) => b.universe === universe.id).forEach((branch, b) => {
      const events = archive.events.filter((e) => e.branch?.id === branch.id);
      if (!events.length) return;
      const from = Math.max(0, groups.findIndex((g) => g.year >= branch.divergence));
      const x0 = xOf(from);
      const target = BRANCH_LANES[branch.id] ?? lane - 70;
      const yBranch = (x: number) => {
        const t = smooth(Math.min(1, (x - x0) / 120));
        return yMain(x) + (target - lane) * t + wave(x, b + 3) * t * 0.6;
      };
      strands.push(buildStrand(branch.id, universe, branch.name, events, yBranch, from, branch));
    });
  });
  return strands;
}

export const strands = buildStrands();

export const periodMarks = periods.flatMap((period) => {
  const first = groups.findIndex((g) => g.period.id === period.id);
  return first >= 0 ? [{ id: period.id, label: period.label, x: xOf(first) }] : [];
});
