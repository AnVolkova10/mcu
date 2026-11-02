import { memo, useMemo, useRef, type ReactNode } from 'react';
import { Billboard, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { Body } from './layout';
import { planetFragment, portalFragment, portalVertex, surfaceVertex } from './shaders';

/** A drag that begins on a world moves the camera; only a still press counts as a click. */
export const CLICK_TOLERANCE = 4;

interface CosmicBodyProps {
  body: Body;
  /** Number of visible events here; 0 fades the body when a filter is on. */
  activity: number;
  filtering: boolean;
  selected: boolean;
  labelled: boolean;
  onHover: (id: string | null) => void;
  onClick: (id: string) => void;
}

const seedOf = (id: string) => [...id].reduce((sum, c) => sum + c.charCodeAt(0), 0) % 50;

/** The gap to the world is measured in pixels, so it holds at any zoom. */
export function WorldLabel({ y, children }: { y: number; children: ReactNode }) {
  return (
    <Html position={[0, y, 0]} zIndexRange={[5, 0]} style={{ pointerEvents: 'none' }}>
      <span className="absolute bottom-1.5 left-0 -translate-x-1/2 whitespace-nowrap rounded-full border border-line-strong bg-bg/90 px-2.5 py-1 text-xs font-semibold text-ink">{children}</span>
    </Html>
  );
}

function Planet({ body, dim }: { body: Body; dim: number }) {
  const shader = useMemo(
    () => ({
      uniforms: { uColor: { value: new THREE.Color(body.node.color) }, uSeed: { value: seedOf(body.node.id) }, uDim: { value: 1 }, uTime: { value: 0 } },
      vertexShader: surfaceVertex,
      fragmentShader: planetFragment,
    }),
    [body.node.color, body.node.id],
  );
  useFrame((_, delta) => { shader.uniforms.uTime.value += delta; });
  return (
    <mesh>
      <sphereGeometry args={[body.radius, 48, 48]} />
      <shaderMaterial args={[shader]} uniforms-uDim-value={dim} />
    </mesh>
  );
}

function Portal({ body, dim }: { body: Body; dim: number }) {
  const shader = useMemo(
    () => ({
      uniforms: { uColor: { value: new THREE.Color(body.node.color) }, uTime: { value: 0 }, uDim: { value: 1 } },
      vertexShader: portalVertex,
      fragmentShader: portalFragment,
      transparent: true,
      depthWrite: false,
    }),
    [body.node.color],
  );
  useFrame((_, delta) => { shader.uniforms.uTime.value += delta; });
  const ringColor = useMemo(() => new THREE.Color(body.node.color).multiplyScalar(2.2 * dim), [body.node.color, dim]);
  return (
    <Billboard>
      <mesh>
        <circleGeometry args={[body.radius, 64]} />
        <shaderMaterial args={[shader]} uniforms-uDim-value={dim} />
      </mesh>
      <mesh>
        <torusGeometry args={[body.radius, 0.09, 12, 96]} />
        <meshBasicMaterial color={ringColor} toneMapped={false} />
      </mesh>
    </Billboard>
  );
}

function Crystal({ body, dim }: { body: Body; dim: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const color = useMemo(() => new THREE.Color(body.node.color).multiplyScalar(1.8 * dim), [body.node.color, dim]);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.4;
  });
  return (
    <group>
      <mesh ref={mesh}>
        <octahedronGeometry args={[body.radius, 0]} />
        <meshBasicMaterial color={color} wireframe toneMapped={false} />
      </mesh>
      <mesh scale={0.42}>
        <octahedronGeometry args={[body.radius, 0]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Station({ body, dim }: { body: Body; dim: number }) {
  const group = useRef<THREE.Group>(null);
  const color = useMemo(() => new THREE.Color(body.node.color).multiplyScalar(1.8 * dim), [body.node.color, dim]);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.3;
  });
  return (
    <group ref={group} rotation={[1.1, 0.4, 0]}>
      <mesh>
        <torusGeometry args={[body.radius, body.radius * 0.16, 8, 32]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[body.radius * 0.42, 16, 16]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
    </group>
  );
}

const LOOKS = { planet: Planet, moon: Planet, realm: Planet, portal: Portal, nexus: Crystal, station: Station } as const;

/** One world: its shape, a generous hit area, the selection ring and its label. */
export const CosmicBody = memo(function CosmicBody({ body, activity, filtering, selected, labelled, onHover, onClick }: CosmicBodyProps) {
  const pulse = useRef<THREE.Mesh>(null);
  const Shape = LOOKS[body.node.look];
  const dim = filtering && !activity ? 0.22 : 1;

  useFrame(({ clock }) => {
    if (!pulse.current) return;
    const t = (clock.elapsedTime % 2) / 2;
    pulse.current.scale.setScalar(1 + t * 0.9);
    (pulse.current.material as THREE.MeshBasicMaterial).opacity = Math.sin(t * Math.PI) * 0.8;
  });

  const highlight = selected || (filtering && activity > 0);

  return (
    <group
      position={body.position}
      onPointerOver={(e) => { e.stopPropagation(); onHover(body.node.id); }}
      onPointerOut={() => onHover(null)}
      onClick={(e) => {
        e.stopPropagation();
        if (e.delta < CLICK_TOLERANCE) onClick(body.node.id);
      }}
    >
      <mesh visible={false}>
        <sphereGeometry args={[Math.max(body.radius * 1.5, 1.1), 12, 12]} />
      </mesh>
      <Shape body={body} dim={dim} />
      {highlight && (
        <Billboard>
          <mesh ref={pulse}>
            <ringGeometry args={[body.radius * 1.3, body.radius * 1.3 + 0.08, 64]} />
            <meshBasicMaterial color={selected ? '#ffffff' : body.node.color} transparent toneMapped={false} />
          </mesh>
        </Billboard>
      )}
      {(labelled || selected) && <WorldLabel y={body.radius}>{body.node.name}{activity > 0 ? ` · ${activity}` : ''}</WorldLabel>}
    </group>
  );
});
