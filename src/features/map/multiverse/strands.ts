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
  /** A branch that lives a single date: too short to carry its label above, so the label trails it. */
  stub: boolean;
}

/** Vertical place of each main strand; the Sacred Timeline runs through the middle. */
const LANES: Record<string, number> = { 'earth-10005': 170, 'earth-616': 345, 'earth-92131': 560, 'earth-62533': 650 };
/** Height of each branch, chosen by eye. A branch missing here takes the nearest free height (`freeLane`). */
const BRANCH_LANES: Record<string, number> = { 'fox-original': 92, 'chronicom-war': 262, 'shattered-earth-2091': 428, 'last-panther-future': 482, 'first-1993': 518, 'bishop-future': 632 };
/** Closest two strands may run while they share years. */
const GAP = 50;

const wave = (x: number, seed: number) => Math.sin(x / 78 + seed) * 6 + Math.sin(x / 31 + seed * 2) * 1.6;

const indexOf = (event: ArchiveEvent) => groups.findIndex((g) => g.label === event.dateLabel);

/** How a strand is drawn: where its line starts and ends, and where the bead of each date sits. */
interface Shape {
  x0: number;
  x1: number;
  beadX: (index: number) => number;
}

function buildStrand(id: string, universe: Universe, label: string, events: ArchiveEvent[], yAt: (x: number) => number, shape: Shape, branch?: Branch, stub = false): Strand {
  const { x0, x1, beadX } = shape;
  const points: string[] = [];
  for (let x = x0; x <= x1; x += 8) points.push(`${x.toFixed(1)} ${yAt(x).toFixed(1)}`);
  points.push(`${x1.toFixed(1)} ${yAt(x1).toFixed(1)}`);

  const byIndex = new Map<number, ArchiveEvent[]>();
  for (const event of events) {
    const index = indexOf(event);
    const list = byIndex.get(index);
    if (list) list.push(event);
    else byIndex.set(index, [event]);
  }
  const beads = [...byIndex.entries()].map(([index, list]) => ({ group: groups[index], index, events: list, x: beadX(index), y: yAt(beadX(index)) }));
  return { id, universe, branch, label, path: `M ${points.join(' L ')}`, beads, end: { x: x1, y: yAt(x1) }, stub };
}

const smooth = (t: number) => t * t * (3 - 2 * t);
/** Inverse of `smooth` on [0, 1], by bisection. */
const unsmooth = (s: number) => {
  let [lo, hi] = [0, 1];
  for (let i = 0; i < 24; i++) [lo, hi] = smooth((lo + hi) / 2) < s ? [(lo + hi) / 2, hi] : [lo, (lo + hi) / 2];
  return (lo + hi) / 2;
};

/** Run of the gentle split, for branches whose first event comes years after they split. */
const SPLIT = 120;
/** Run of the split for branches that already differ in the year they split: it starts just before that year. */
const EARLY_SPLIT = 84;
/** Run of the split for a branch that lives a single date: a short sprout. */
const SPROUT = 56;
/** A branch bead keeps at least this far from the strand it split from, so both stay visible. */
const CLEAR = 26;
/** How far a single-date branch runs past its bead. */
const STUB_TAIL = 22;

/** Where a strand runs: its height and the first and last date it covers. */
interface Span {
  y: number;
  from: number;
  to: number;
}

/** Near its reality, the first height that keeps clear of every strand sharing its years; failing that, the clearest one. */
function freeLane(lane: number, from: number, to: number, taken: readonly Span[]): number {
  const clearance = (y: number) => Math.min(...taken.filter((s) => s.from <= to && s.to >= from).map((s) => Math.abs(s.y - y)), Infinity);
  const heights = [-70, 70, -120, 120, -170, 170].map((d) => lane + d).filter((y) => y > 50 && y < HEIGHT - 30);
  return heights.find((y) => clearance(y) >= GAP) ?? heights.reduce((best, y) => (clearance(y) > clearance(best) ? y : best));
}

function buildStrands(): Strand[] {
  const realities = universeList.map((universe) => ({
    universe,
    lane: LANES[universe.id] ?? 640,
    main: archive.events.filter((e) => e.universe.id === universe.id && !e.branch),
    splits: (Object.values(branches) as Branch[])
      .filter((branch) => branch.universe === universe.id)
      .map((branch, b) => {
        const events = archive.events.filter((e) => e.branch?.id === branch.id);
        const from = Math.max(0, groups.findIndex((g) => g.year >= branch.divergence));
        const last = Math.max(...events.map(indexOf));
        // A branch that only lives its divergence date still takes room: its short line and the label that trails it.
        const stub = last <= from;
        const reach = stub ? Math.ceil((SPROUT + STUB_TAIL + `${branch.name}${branch.erased ? ' · erased' : ''}`.length * 7) / STEP) : 0;
        return { branch, b, events, from, to: Math.max(last, from + reach), stub, early: events.some((e) => indexOf(e) === from) };
      })
      .filter((split) => split.events.length),
  }));

  // Branches with no lane of their own go where they do not run over another strand.
  const taken: Span[] = realities.flatMap(({ lane, main, splits }) => [
    ...(main.length ? [{ y: lane, from: indexOf(main[0]), to: Math.max(...main.map(indexOf)) }] : []),
    ...splits.filter((s) => s.branch.id in BRANCH_LANES).map((s) => ({ y: BRANCH_LANES[s.branch.id], from: s.from, to: s.to })),
  ]);
  const freeLanes = new Map<string, number>();
  for (const { lane, splits } of realities) {
    for (const split of splits.filter((s) => !(s.branch.id in BRANCH_LANES))) {
      const y = freeLane(lane, split.from, split.to, taken);
      freeLanes.set(split.branch.id, y);
      taken.push({ y, from: split.from, to: split.to });
    }
  }

  const strands: Strand[] = [];
  realities.forEach(({ universe, lane, main, splits }, u) => {
    const yMain = (x: number) => lane + wave(x, u * 1.7);
    if (main.length) {
      const first = indexOf(main[0]);
      const shape = { x0: xOf(first), x1: xOf(Math.max(...main.map(indexOf), first + 1)), beadX: xOf };
      strands.push(buildStrand(universe.id, universe, `${universe.name} · ${universe.label}`, main, yMain, shape));
    }
    splits.forEach(({ branch, b, events, from, stub, early }) => {
      const target = BRANCH_LANES[branch.id] ?? freeLanes.get(branch.id) ?? lane - 70;
      // A branch that already differs in its divergence year sprouts just before it; any other eases away from that year.
      const [start, run] = early ? [xOf(from) - STEP * 0.8, stub ? SPROUT : EARLY_SPLIT] : [xOf(from), SPLIT];
      const yBranch = (x: number) => {
        const t = smooth(Math.min(1, Math.max(0, (x - start) / run)));
        return yMain(x) + (target - lane) * t + wave(x, b + 3) * t * 0.6;
      };
      // The bead of the divergence year sits where the branch is already clear of its reality, not on top of its bead.
      const clear = start + run * unsmooth(Math.min(1, CLEAR / Math.abs(target - lane)));
      const beadX = (index: number) => (index === from ? Math.max(xOf(index), clear) : xOf(index));
      const lastBead = Math.max(...events.map((e) => beadX(indexOf(e))));
      const shape = { x0: start, x1: stub ? lastBead + STUB_TAIL : Math.max(lastBead, xOf(from + 1)), beadX };
      strands.push(buildStrand(branch.id, universe, branch.name, events, yBranch, shape, branch, stub));
    });
  });
  return strands;
}

export const strands = buildStrands();

export const periodMarks = periods.flatMap((period) => {
  const first = groups.findIndex((g) => g.period.id === period.id);
  return first >= 0 ? [{ id: period.id, label: period.label, x: xOf(first) }] : [];
});
