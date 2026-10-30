/** Where every world sits in the 3D scene. A new node only needs its zone; its seat is computed here. */
import { cosmosNodes, type CosmosNode, type Location } from '@/domain/catalog';

export type Vec3 = [number, number, number];

export interface Body {
  node: CosmosNode;
  position: Vec3;
  radius: number;
}

export const EARTH_RADIUS = 2.2;

/** Norse cosmology: Asgard on top, Midgard (Earth) at the middle, the underworlds below. */
const REALMS: Record<string, Vec3> = {
  asgard: [0, 17, 0],
  vanaheim: [-8, 12, 3],
  alfheim: [8, 12, -3],
  jotunheim: [-12.5, 3.5, -4],
  nidavellir: [12.5, 3.5, 4],
  svartalfheim: [-8.5, -7.5, 3],
  muspelheim: [8.5, -8.5, -3],
  niflheim: [0, -15, 2],
};

const ORBITS: Record<string, [angle: number, radius: number]> = {
  'shuttle-orbit': [0.85, 3.6],
  'mar-vell-lab': [2.5, 4.2],
  'asteroid-m': [4.1, 4.9],
  'saber-station': [5.6, 5.6],
  moon: [3.3, 8],
};

const GOLDEN_ANGLE = 2.39996;

function hashRadius(id: string, min: number, max: number) {
  const h = [...id].reduce((sum, c) => sum + c.charCodeAt(0), 0);
  return min + ((h * 37) % 100) / 100 * (max - min);
}

function place(node: CosmosNode, index: number, count: number): Body {
  switch (node.zone) {
    case 'orbit': {
      const [angle, r] = ORBITS[node.id] ?? [index * 1.3, 6.5 + index * 0.3];
      return { node, position: [Math.cos(angle) * r, 0, Math.sin(angle) * r], radius: node.look === 'moon' ? 0.75 : 0.32 };
    }
    case 'realms':
      return { node, position: REALMS[node.id] ?? [0, 20 + index, 0], radius: node.id === 'asgard' ? 2 : 1.25 };
    case 'deep-space': {
      const angle = index * GOLDEN_ANGLE;
      const r = 28 + (42 * (index + 0.5)) / count;
      return { node, position: [Math.cos(angle) * r, Math.sin(index * 1.7) * 4, Math.sin(angle) * r], radius: node.look === 'station' ? 0.8 : hashRadius(node.id, 1.5, 2.8) };
    }
    case 'dimensions': {
      // An arch of doors behind the galaxy: seen from the front, none hides another.
      const angle = (count > 1 ? index / (count - 1) - 0.5 : 0) * Math.PI * 0.8;
      return { node, position: [Math.sin(angle) * 74, 28 + Math.cos(angle) * 16 + (index % 2 ? 7 : -4), -30 - Math.cos(angle) * 30], radius: 3 };
    }
  }
}

const allNodes = Object.values(cosmosNodes) as CosmosNode[];
const zoneCounts = new Map<string, number>();

export const bodies: Body[] = allNodes.map((node) => {
  const index = zoneCounts.get(node.zone) ?? 0;
  zoneCounts.set(node.zone, index + 1);
  return place(node, index, allNodes.filter((n) => n.zone === node.zone).length);
});

export const bodyById = new Map(bodies.map((b) => [b.node.id as string, b]));

export const orbitRadii = bodies.filter((b) => b.node.zone === 'orbit').map((b) => Math.hypot(b.position[0], b.position[2]));

/** Earth locations all share the Earth at the center of the scene. */
export const positionOf = (location: Location): Vec3 => (location.node && bodyById.get(location.node)?.position) || [0, 0, 0];

export interface Zone {
  id: string;
  label: string;
  position: Vec3;
  target: Vec3;
}

export const ZONES = [
  { id: 'overview', label: 'Everything', position: [0, 78, 142], target: [0, 12, 0] },
  { id: 'orbit', label: 'Earth orbit', position: [0, 6, 19], target: [0, 0, 0] },
  { id: 'realms', label: 'The Nine Realms', position: [0, 4, 64], target: [0, 1, 0] },
  { id: 'deep-space', label: 'Deep space', position: [0, 88, 100], target: [0, -12, 0] },
  { id: 'dimensions', label: 'Dimensions', position: [0, 36, 112], target: [0, 34, -40] },
] as const satisfies readonly Zone[];

export type ZoneId = (typeof ZONES)[number]['id'];
