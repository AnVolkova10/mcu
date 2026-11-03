/** GLSL for the Cosmos. Only Earth uses an image, its land mask: every other surface is procedural. */

export const surfaceVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vView;
  varying vec2 vUv;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPos = position;
    vUv = uv;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const noise = /* glsl */ `
  float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x), mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x), mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y),
      f.z);
  }
  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.03;
      amplitude *= 0.5;
    }
    return value;
  }
`;

/**
 * How much a surface faces away from the camera, 0 to 1. Rounding can push the dot product just past 1, and pow() of a
 * negative base is NaN on real GPUs: one such pixel spreads through the bloom blur and blacks out the whole frame.
 */
const rim = /* glsl */ `
  float rimOf(vec3 normal, vec3 view) {
    return clamp(1.0 - dot(normal, view), 0.0, 1.0);
  }
`;

/** Rocky or banded world, lit from one side, with a glowing rim. */
export const planetFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uSeed;
  uniform float uDim;
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vView;
  ${noise}
  ${rim}
  void main() {
    vec3 p = normalize(vPos) * 2.4 + uSeed;
    float clouds = fbm(p + vec3(0.0, uTime * 0.015, 0.0));
    float bands = fbm(vec3(p.x * 0.5, p.y * 3.4, p.z * 0.5));
    float t = mix(clouds, bands, 0.5);
    vec3 surface = mix(uColor * 0.12, uColor * 0.85, smoothstep(0.32, 0.72, t));
    float light = clamp(dot(vNormal, normalize(vec3(-0.45, 0.5, 0.74))), 0.0, 1.0);
    surface *= 0.3 + 1.05 * light;
    float rim = pow(rimOf(vNormal, vView), 3.0);
    gl_FragColor = vec4((surface + uColor * rim * 1.5) * uDim, 1.0);
  }
`;

/** Holographic Earth: same language as the globe of the Earth view, red coasts on a dark sea. */
export const earthFragment = /* glsl */ `
  uniform sampler2D uLand;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec2 vUv;
  ${rim}
  float gridLine(float value, float width) {
    return 1.0 - smoothstep(0.0, width, 0.5 - abs(fract(value) - 0.5));
  }
  void main() {
    float mask = texture2D(uLand, vUv).r;
    float land = smoothstep(0.46, 0.54, mask);
    float coast = 1.0 - smoothstep(0.0, 0.09, abs(mask - 0.5));
    vec3 color = mix(vec3(0.008, 0.024, 0.06), vec3(0.05, 0.13, 0.22), land);
    color += vec3(1.0, 0.16, 0.19) * coast * 1.2;
    float grid = max(gridLine(vUv.y * 12.0, 0.03), gridLine(vUv.x * 24.0, 0.03));
    color += vec3(0.25, 0.6, 1.0) * grid * 0.2;
    float rim = pow(rimOf(vNormal, vView), 2.6);
    color += vec3(0.25, 0.6, 1.0) * rim * 1.8;
    gl_FragColor = vec4(color, 1.0);
  }
`;

/** A star: churning granules, darker and redder toward the edge, as real stars look. */
export const sunFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uDim;
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec3 vView;
  ${noise}
  ${rim}
  void main() {
    vec3 p = normalize(vPos) * 2.6;
    vec3 drift = vec3(uTime * 0.04, uTime * 0.025, -uTime * 0.03);
    float flow = fbm(p * 1.3 + drift);
    float heat = fbm(p * 2.2 + flow * 1.8 - drift * 1.5);
    float spots = smoothstep(0.58, 0.78, fbm(p * 5.0 + flow * 2.5 + drift * 2.0));
    vec3 lane = vec3(0.3, 0.025, 0.0);
    vec3 hot = vec3(1.0, 0.72, 0.28);
    vec3 surface = mix(lane, uColor, smoothstep(0.3, 0.52, heat));
    surface = mix(surface, hot, clamp(smoothstep(0.52, 0.72, heat) * 0.85 + spots * 0.35, 0.0, 1.0));
    float limb = rimOf(vNormal, vView);
    surface *= 1.0 - 0.5 * limb * limb;
    surface = mix(surface, lane * 2.2, smoothstep(0.45, 1.0, limb) * 0.55);
    gl_FragColor = vec4(surface * 1.45 * uDim, 1.0);
  }
`;

/**
 * Corona of a star, on a plane that always faces the camera; the star's sphere hides the middle. A few long streamers
 * and many fine rays drift slowly, as in photos of an eclipse. The angle comes from the direction, not from atan(),
 * which is undefined at the center. Drawn with additive blending: the light goes in the color, not in the alpha.
 */
export const coronaFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uDim;
  uniform float uTime;
  uniform float uInner;
  varying vec2 vUv;
  ${noise}
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    if (r > 1.0) discard;
    vec2 dir = r > 0.0001 ? p / r : vec2(1.0, 0.0);
    float away = clamp((r - uInner) / (1.0 - uInner), 0.0, 1.0);
    float lobes = smoothstep(0.3, 0.8, noise(vec3(dir * 1.6, uTime * 0.05)));
    float fine = noise(vec3(dir * 8.0, uTime * 0.12 + 3.0));
    float filaments = noise(vec3(dir * 26.0, uTime * 0.2 + 7.0));
    float rays = lobes * (0.35 + 0.65 * fine * fine) + filaments * filaments * filaments * fine * 0.8;
    float glow = exp(-away * 8.0);
    float light = glow * 0.75 + rays * exp(-away * mix(4.0, 1.3, lobes)) * 1.4 + exp(-away * 3.0) * 0.06;
    light *= 1.0 - smoothstep(0.75, 1.0, r);
    vec3 color = mix(uColor, vec3(1.0, 0.78, 0.42), glow * 0.7);
    gl_FragColor = vec4(color * light * uDim, 1.0);
  }
`;

export const portalVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

/** Swirling doorway to another dimension. */
export const portalFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  uniform float uDim;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    float a = r > 0.001 ? atan(p.y, p.x) : 0.0; // atan(0, 0) is undefined: same NaN risk as rimOf.
    float swirl = sin(a * 5.0 + r * 15.0 - uTime * 1.8) * 0.5 + 0.5;
    float inner = 1.0 - smoothstep(0.0, 0.92, r);
    vec3 color = mix(uColor * 0.5, vec3(1.0), pow(inner, 3.0)) + uColor * swirl * 0.55;
    float alpha = (1.0 - smoothstep(0.82, 1.0, r)) * (0.3 + 0.7 * mix(swirl, 1.0, inner));
    gl_FragColor = vec4(color * uDim, alpha * uDim);
  }
`;

/** Stars never grow past a few pixels and fade out next to the camera, so flying through the galaxy stays clean. */
export const starVertex = /* glsl */ `
  attribute vec3 aColor;
  attribute float aSize;
  uniform float uScale;
  varying vec3 vColor;
  varying float vFade;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = clamp(aSize * uScale / -mv.z, 1.0, 3.5 * aSize + 1.5);
    vFade = smoothstep(4.0, 34.0, -mv.z);
    vColor = aColor;
    gl_Position = projectionMatrix * mv;
  }
`;

export const starFragment = /* glsl */ `
  varying vec3 vColor;
  varying float vFade;
  void main() {
    float glow = pow(max(1.0 - length(gl_PointCoord - 0.5) * 2.0, 0.0), 1.6);
    gl_FragColor = vec4(vColor, glow * vFade);
  }
`;
