import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { Canvas, type ThreeEvent } from '@react-three/fiber';
import { CameraControls, QuadraticBezierLine, Stars } from '@react-three/drei';
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { archive } from '@/content';
import { inView, nodeEvents, type MapFilters, type Trace } from '@/domain/atlas';
import { readableOn } from '@/domain/colors';
import { href, navigate } from '@/app/router';
import { cn } from '@/shared/lib/cn';
import { EarthCore, Galaxy, Yggdrasil } from './Backdrop';
import { CLICK_TOLERANCE, CosmicBody, WorldLabel } from './CosmicBody';
import { bodies, bodyById, EARTH_RADIUS, positionOf, ZONES, type Vec3, type Zone, type ZoneId } from './layout';

interface CosmosViewProps {
  filters: MapFilters;
  selected: string | null;
  onSelect: (id: string | null) => void;
  trace: Trace | null;
  stopIndex: number;
}

const DESIGN_ASPECT = 1.6;
const small = () => window.innerWidth < 640;

/** Presets are framed for a landscape screen; narrower ones step back until the zone fits. */
function framed({ position, target }: Zone, extra = 1): Vec3 {
  const step = Math.min(2.2, Math.max(1, DESIGN_ASPECT / (window.innerWidth / window.innerHeight))) * extra;
  return [0, 1, 2].map((i) => target[i] + (position[i] - target[i]) * step) as Vec3;
}

/** Stops on Earth share its center; a leg ends on the surface that faces the other stop. */
function onSurface(point: Vec3, toward: Vec3): Vec3 {
  if (point.some(Boolean)) return point;
  const scale = EARTH_RADIUS / Math.hypot(...toward);
  return [toward[0] * scale, toward[1] * scale, toward[2] * scale];
}

/** One arc per leg of a journey; legs already travelled glow. */
function TracePath({ trace, stopIndex }: { trace: Trace; stopIndex: number }) {
  const color = useMemo(() => new THREE.Color(readableOn(trace.color)).multiplyScalar(1.6), [trace.color]);
  const legs = useMemo(() => {
    const list: { start: Vec3; end: Vec3; mid: Vec3; stop: number }[] = [];
    trace.stops.forEach((stop, i) => {
      if (i === 0) return;
      const from = positionOf(trace.stops[i - 1].location);
      const to = positionOf(stop.location);
      if (from.join() === to.join()) return;
      const start = onSurface(from, to);
      const end = onSurface(to, from);
      const lift = Math.hypot(end[0] - start[0], end[1] - start[1], end[2] - start[2]) * 0.28;
      list.push({ start, end, stop: i, mid: [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2 + lift, (start[2] + end[2]) / 2] });
    });
    return list;
  }, [trace]);
  return (
    <group>
      {legs.map((leg) => (
        <QuadraticBezierLine key={leg.stop} start={leg.start} mid={leg.mid} end={leg.end} color={color} lineWidth={leg.stop <= stopIndex ? 2.4 : 0.8} transparent opacity={leg.stop <= stopIndex ? 1 : 0.28} toneMapped={false} />
      ))}
    </group>
  );
}

/** A navigable universe: Earth and its orbit, the Nine Realms, the galaxy and the dimensions beyond. */
export function CosmosView({ filters, selected, onSelect, trace, stopIndex }: CosmosViewProps) {
  // In state, not a ref: the scene mounts after this component, and the effects below wait for it.
  const [controls, setControls] = useState<CameraControls | null>(null);
  const [zone, setZone] = useState<ZoneId>('overview');
  const [hovered, setHovered] = useState<string | null>(null);
  const [earthHovered, setEarthHovered] = useState(false);

  const activeZone = (selected && bodyById.get(selected)?.node.zone) || zone;
  const filtering = Boolean(filters.group || filters.universes.length);
  const activity = useMemo(
    () => new Map(bodies.map((b) => [b.node.id as string, nodeEvents(archive, b.node.id).filter((e) => inView(e, filters)).length])),
    [filters],
  );

  useEffect(() => {
    document.body.style.cursor = hovered || earthHovered ? 'pointer' : '';
    return () => { document.body.style.cursor = ''; };
  }, [hovered, earthHovered]);

  /** `beside` keeps the subject clear of the card: to its left on wide screens, above it on phones. */
  const fly = useCallback((position: Vec3, target: Vec3, beside = false) => {
    if (!controls) return;
    void controls.setLookAt(...position, ...target, true);
    const distance = Math.hypot(position[0] - target[0], position[1] - target[1], position[2] - target[2]);
    void controls.setFocalOffset(beside && !small() ? distance * 0.17 : 0, beside && small() ? distance * 0.1 : 0, 0, true);
  }, [controls]);

  const focusBody = useCallback((id: string) => {
    const body = bodyById.get(id);
    if (!body) return;
    const [x, y, z] = body.position;
    const direction = new THREE.Vector3(x, y * 0.6 + 2, z + 6).normalize();
    const distance = body.radius * 6 + 4;
    fly([x + direction.x * distance, y + direction.y * distance + 1, z + direction.z * distance], body.position, true);
  }, [fly]);

  const goToZone = (id: ZoneId) => {
    setZone(id);
    if (selected) onSelect(null);
    const preset = ZONES.find((z) => z.id === id)!;
    fly(framed(preset), preset.target);
  };

  // The galaxy comes in from afar.
  useEffect(() => {
    if (!controls) return;
    void controls.setLookAt(...framed(ZONES[0], 1.8), ...ZONES[0].target, false);
    fly(framed(ZONES[0]), ZONES[0].target);
  }, [controls, fly]);

  useEffect(() => {
    if (selected) focusBody(selected);
    else void controls?.setFocalOffset(0, 0, 0, true);
  }, [controls, selected, focusBody]);

  // Follow the journey from world to world.
  useEffect(() => {
    if (!trace) return;
    const location = trace.stops[stopIndex]?.location;
    if (!location) return;
    if (location.node) focusBody(location.node);
    else fly([0, 7, 20], [0, 0, 0], true);
  }, [trace, stopIndex, focusBody, fly]);

  const openEarth = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (e.delta >= CLICK_TOLERANCE) return;
    navigate(href('map', { at: filters.group?.label, u: filters.universes.length ? filters.universes.join(',') : undefined }, ['earth']));
  };

  const traceNodes = useMemo(() => new Set(trace?.stops.flatMap((s) => (s.location.node ? [s.location.node as string] : []))), [trace]);
  const labelled = (id: string, nodeZone: string) => hovered === id || activeZone === nodeZone || traceNodes.has(id) || (filtering && (activity.get(id) ?? 0) > 0);

  return (
    <div className="absolute inset-0 isolate bg-[#02030a]">
      <Canvas dpr={[1, small() ? 1.25 : 1.75]} camera={{ position: ZONES[0].position, fov: 42, near: 0.1, far: 900 }} gl={{ antialias: true, powerPreference: 'high-performance' }} onPointerMissed={() => { if (selected) onSelect(null); }}>
        <color attach="background" args={['#02030a']} />
        <Suspense fallback={null}>
          <Stars radius={320} depth={120} count={6000} factor={6} saturation={0.3} fade speed={0} />
          <Galaxy />
          <EarthCore onClick={openEarth} onHover={setEarthHovered} />
          {earthHovered && <group position={[0, EARTH_RADIUS, 0]}><WorldLabel y={0}>Earth · open the globe</WorldLabel></group>}
          <Yggdrasil />
          {bodies.map((body) => (
            <CosmicBody
              key={body.node.id}
              body={body}
              activity={activity.get(body.node.id) ?? 0}
              filtering={filtering}
              selected={selected === body.node.id}
              labelled={labelled(body.node.id, body.node.zone)}
              onHover={setHovered}
              onClick={onSelect}
            />
          ))}
          {trace && <TracePath trace={trace} stopIndex={stopIndex} />}
        </Suspense>
        <CameraControls ref={setControls} makeDefault minDistance={3.5} maxDistance={340} smoothTime={0.75} draggingSmoothTime={0.15} />
        {!small() && (
          <EffectComposer multisampling={4}>
            <Bloom mipmapBlur intensity={0.9} luminanceThreshold={0.55} luminanceSmoothing={0.35} radius={0.72} />
            <Vignette offset={0.25} darkness={0.75} />
          </EffectComposer>
        )}
      </Canvas>

      <nav aria-label="Zones of the Cosmos" className="no-scrollbar absolute inset-x-3 top-[7.1rem] z-10 flex gap-0.5 overflow-x-auto rounded-2xl border border-line bg-bg/75 p-1 backdrop-blur-xl md:inset-x-auto md:left-3 md:top-16 md:flex-col md:overflow-visible">
        {ZONES.map((z) => (
          <button
            key={z.id}
            type="button"
            onClick={() => goToZone(z.id)}
            aria-pressed={activeZone === z.id}
            className={cn('shrink-0 rounded-xl px-3 py-1.5 text-left text-xs font-semibold transition', activeZone === z.id ? 'bg-ink text-bg' : 'text-ink-muted hover:text-ink')}
          >
            {z.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
