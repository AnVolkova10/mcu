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
  void main() {
    vec3 p = normalize(vPos) * 2.4 + uSeed;
    float clouds = fbm(p + vec3(0.0, uTime * 0.015, 0.0));
    float bands = fbm(vec3(p.x * 0.5, p.y * 3.4, p.z * 0.5));
    float t = mix(clouds, bands, 0.5);
    vec3 surface = mix(uColor * 0.12, uColor * 0.85, smoothstep(0.32, 0.72, t));
    float light = clamp(dot(vNormal, normalize(vec3(-0.45, 0.5, 0.74))), 0.0, 1.0);
    surface *= 0.3 + 1.05 * light;
    float rim = pow(1.0 - max(dot(vNormal, vView), 0.0), 3.0);
    gl_FragColor = vec4((surface + uColor * rim * 1.5) * uDim, 1.0);
  }
`;

/** Holographic Earth: same language as the globe of the Earth view, red coasts on a dark sea. */
export const earthFragment = /* glsl */ `
  uniform sampler2D uLand;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec2 vUv;
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
    float rim = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.6);
    color += vec3(0.25, 0.6, 1.0) * rim * 1.8;
    gl_FragColor = vec4(color, 1.0);
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
    float a = atan(p.y, p.x);
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
