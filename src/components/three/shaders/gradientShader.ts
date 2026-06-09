export const gradientVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const gradientFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScroll;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.853735475937459 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float time = uTime * 0.15;

    // Liquid distortion
    float noise1 = snoise(uv * 2.0 + time * 0.3);
    float noise2 = snoise(uv * 3.0 - time * 0.2 + uMouse * 0.5);
    float distortion = noise1 * 0.03 + noise2 * 0.02;

    vec2 distortedUv = uv + vec2(distortion);

    // Color morphing gradient
    vec3 color1 = vec3(0.01, 0.01, 0.04);
    vec3 color2 = vec3(0.05, 0.02, 0.12);
    vec3 color3 = vec3(0.0, 0.08, 0.15);
    vec3 accent1 = vec3(0.0, 0.83, 1.0);
    vec3 accent2 = vec3(0.55, 0.36, 0.96);

    float blend1 = smoothstep(0.0, 1.0, distortedUv.y + sin(distortedUv.x * 3.0 + time) * 0.1);
    float blend2 = smoothstep(0.3, 0.8, distortedUv.x + cos(distortedUv.y * 2.0 - time * 0.5) * 0.15);

    vec3 baseColor = mix(color1, color2, blend1);
    baseColor = mix(baseColor, color3, blend2);

    // Soft bloom glow spots
    float glow1 = exp(-length(distortedUv - vec2(0.3 + sin(time) * 0.1, 0.7)) * 3.0) * 0.15;
    float glow2 = exp(-length(distortedUv - vec2(0.8, 0.3 + cos(time * 0.7) * 0.1)) * 4.0) * 0.1;
    float mouseGlow = exp(-length(distortedUv - uMouse * 0.5 - 0.5) * 5.0) * 0.08;

    baseColor += accent1 * glow1;
    baseColor += accent2 * glow2;
    baseColor += accent1 * mouseGlow;

    // Scroll-based color shift
    baseColor = mix(baseColor, color2, uScroll * 0.3);

    // Vignette
    float vignette = 1.0 - length(uv - 0.5) * 0.8;
    baseColor *= vignette;

    gl_FragColor = vec4(baseColor, 1.0);
  }
`;
