import { useMemo, useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import landMask from './land-mask.webp';
import { EARTH_RADIUS, bodyById, type Vec3 } from './layout';
import { earthFragment, starFragment, starVertex, surfaceVertex } from './shaders';

const TAU = Math.PI * 2;
const ARMS = 4;
const STARS = 26000;
const GALAXY_RADIUS = 112;
const WARM = new THREE.Color('#ffc99a');
const COOL = new THREE.Color('#7a9bff');
const PINK = new THREE.Color('#f06bd8');

type Random = () => number;

/** Seeded, so the galaxy is the same on every visit. */
function seededRandom(seed: number): Random {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

/** A point on a spiral arm; `scatter` is how far it can stray from the arm. */
function armPoint(random: Random, scatter: number): Vec3 {
  const r = 12 + random() ** 1.15 * GALAXY_RADIUS;
  const angle = Math.floor(random() * ARMS) * (TAU / ARMS) + r * 0.05;
  const stray = (range: number) => random() ** 3 * (random() < 0.5 ? -1 : 1) * range;
  return [Math.cos(angle) * r + stray(r * scatter), stray(12 - r * 0.08), Math.sin(angle) * r + stray(r * scatter)];
}

const armColor = (color: THREE.Color, x: number, z: number) => color.copy(WARM).lerp(COOL, Math.min(1, Math.hypot(x, z) / 75));

/** The center is where the arms crowd together: dimmed, so it glows instead of burning to white. */
const coreDim = (x: number, z: number) => 0.3 + 0.7 * Math.min(1, Math.hypot(x, z) / 55);

function starGeometry() {
  const random = seededRandom(42);
  const positions = new Float32Array(STARS * 3);
  const colors = new Float32Array(STARS * 3);
  const sizes = new Float32Array(STARS);
  const color = new THREE.Color();
  for (let i = 0; i < STARS; i++) {
    const [x, y, z] = armPoint(random, 0.3);
    armColor(color, x, z);
    if (random() > 0.93) color.lerp(PINK, 0.7);
    color.multiplyScalar(coreDim(x, z));
    positions.set([x, y, z], i * 3);
    colors.set([color.r, color.g, color.b], i * 3);
    sizes[i] = 0.3 + random() ** 4 * 1.1;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  return geometry;
}

const HAZE_RADIUS = GALAXY_RADIUS + 24;
const HAZE_TEXTURE = 1024;
/** Distance from the center where the glow starts to show and where it is complete: up close it would read as a floor. */
const HAZE_FADE = [70, 125] as const;

/**
 * The glow of the arms, painted once onto a disc: far cheaper than hundreds of big sprites every frame.
 * Canvas gradients are dithered, and that pattern piles up over a thousand of them, so the result is blurred.
 */
function hazeTexture() {
  const random = seededRandom(7);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = HAZE_TEXTURE;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, HAZE_TEXTURE, HAZE_TEXTURE);
  ctx.globalCompositeOperation = 'lighter';
  const scale = HAZE_TEXTURE / 2 / HAZE_RADIUS;
  const color = new THREE.Color();
  for (let i = 0; i < 1100; i++) {
    const [x, , z] = armPoint(random, 0.2);
    armColor(color, x, z);
    if (random() > 0.8) color.lerp(PINK, 0.8);
    const css = `${Math.round(color.r * 255)},${Math.round(color.g * 255)},${Math.round(color.b * 255)}`;
    const size = (5 + random() * 13) * scale;
    const px = HAZE_TEXTURE / 2 + x * scale;
    const py = HAZE_TEXTURE / 2 + z * scale;
    const gradient = ctx.createRadialGradient(px, py, 0, px, py, size);
    gradient.addColorStop(0, `rgba(${css},${0.06 * coreDim(x, z)})`);
    gradient.addColorStop(1, `rgba(${css},0)`);
    ctx.fillStyle = gradient;
    ctx.fillRect(px - size, py - size, size * 2, size * 2);
  }
  const soft = document.createElement('canvas');
  soft.width = soft.height = HAZE_TEXTURE;
  const softCtx = soft.getContext('2d')!;
  softCtx.filter = 'blur(7px)';
  softCtx.drawImage(canvas, 0, 0);
  const texture = new THREE.CanvasTexture(soft);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Spiral galaxy around Earth: the disc that holds the deep-space worlds.
 * It stays still on purpose: turning this slowly is invisible, and only makes thousands of tiny stars shimmer as they cross pixels.
 */
export function Galaxy() {
  const hazeMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const height = useThree((state) => state.size.height * state.viewport.dpr);
  const geometry = useMemo(starGeometry, []);
  const haze = useMemo(hazeTexture, []);
  const shader = useMemo(
    () => ({ uniforms: { uScale: { value: height * 1.3 } }, vertexShader: starVertex, fragmentShader: starFragment, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
    [height],
  );

  useFrame(({ camera }) => {
    if (hazeMaterial.current) hazeMaterial.current.opacity = THREE.MathUtils.smoothstep(camera.position.length(), HAZE_FADE[0], HAZE_FADE[1]);
  });

  return (
    <>
      {/* Drawn first and behind everything: as a real disc it would slice through every world on its plane. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} renderOrder={-1}>
        <circleGeometry args={[HAZE_RADIUS, 96]} />
        <meshBasicMaterial ref={hazeMaterial} map={haze} depthTest={false} depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} side={THREE.DoubleSide} />
      </mesh>
      <points geometry={geometry}>
        <shaderMaterial args={[shader]} />
      </points>
    </>
  );
}

interface EarthCoreProps {
  /** Radius of each orbit drawn around the planet. */
  orbits: readonly number[];
  onClick: (e: ThreeEvent<MouseEvent>) => void;
  onHover: (hover: boolean) => void;
}

export function EarthCore({ orbits, onClick, onHover }: EarthCoreProps) {
  const globe = useRef<THREE.Mesh>(null);
  const land = useTexture(landMask);
  const shader = useMemo(() => ({ uniforms: { uLand: { value: land } }, vertexShader: surfaceVertex, fragmentShader: earthFragment }), [land]);

  useFrame((_, delta) => {
    if (globe.current) globe.current.rotation.y += delta * 0.04;
  });

  return (
    <>
      <mesh
        ref={globe}
        onClick={onClick}
        onPointerOver={(e) => { e.stopPropagation(); onHover(true); }}
        onPointerOut={() => onHover(false)}
      >
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <shaderMaterial args={[shader]} />
      </mesh>
      {orbits.map((r) => (
        <mesh key={r} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[r, r + 0.012, 160]} />
          <meshBasicMaterial color="#7dd3fc" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </>
  );
}

const TRUNK_GOLD = new THREE.Color('#fbbf24').multiplyScalar(1.5);

function Branch({ points, radius }: { points: Vec3[]; radius: number }) {
  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
    return new THREE.TubeGeometry(curve, 64, radius, 8, false);
  }, [points, radius]);
  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial color={TRUNK_GOLD} transparent opacity={0.5} toneMapped={false} />
    </mesh>
  );
}

const MIDGARD: Vec3 = [0, 0, 0];
const pos = (id: string): Vec3 => bodyById.get(id)?.position ?? MIDGARD;

/** Each branch grows out of Earth, so it can leave with its realm without cutting off any other. */
const BRANCHES: { realm: string; points: Vec3[]; radius: number }[] = [
  { realm: 'asgard', radius: 0.1, points: [MIDGARD, [0.4, 3.4, 0], [-0.9, 10, -0.6], pos('asgard')] },
  { realm: 'niflheim', radius: 0.1, points: [MIDGARD, [-0.4, -3.4, 0], [0.9, -9, 1], pos('niflheim')] },
  { realm: 'vanaheim', radius: 0.05, points: [MIDGARD, [0.4, 3.4, 0], [-0.5, 7, -0.3], [-3.5, 10.5, 1.2], pos('vanaheim')] },
  { realm: 'alfheim', radius: 0.05, points: [MIDGARD, [0.4, 3.4, 0], [-0.5, 7, -0.3], [3.5, 10.5, -1.2], pos('alfheim')] },
  { realm: 'jotunheim', radius: 0.05, points: [MIDGARD, [0.2, 2.6, 0], [-6, 5, -1.5], pos('jotunheim')] },
  { realm: 'nidavellir', radius: 0.05, points: [MIDGARD, [0.2, 2.6, 0], [6, 5, 1.5], pos('nidavellir')] },
  { realm: 'svartalfheim', radius: 0.05, points: [MIDGARD, [0.2, -3, 0.2], [-4, -4.5, 1.5], pos('svartalfheim')] },
  { realm: 'muspelheim', radius: 0.05, points: [MIDGARD, [0.2, -3, 0.2], [4, -5.5, -1.5], pos('muspelheim')] },
];

/** The world tree: a luminous trunk through Midgard, with a branch to every realm on the map. */
export function Yggdrasil({ realms }: { realms: ReadonlySet<string> }) {
  return (
    <group>
      {BRANCHES.filter((branch) => realms.has(branch.realm)).map((branch) => <Branch key={branch.realm} points={branch.points} radius={branch.radius} />)}
    </group>
  );
}
