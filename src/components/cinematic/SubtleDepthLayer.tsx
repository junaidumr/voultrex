"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  gradientVertexShader,
  gradientFragmentShader,
} from "@/components/three/shaders/gradientShader";

interface SubtleDepthLayerProps {
  mouse: { x: number; y: number };
}

function AmbientShader({ mouse }: SubtleDepthLayerProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = state.clock.elapsedTime * 0.4;
    material.uniforms.uMouse.value.lerp(
      new THREE.Vector2(mouse.x * 0.3, mouse.y * 0.3),
      0.03
    );
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]} scale={[12, 12, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={gradientVertexShader}
        fragmentShader={gradientFragmentShader}
        uniforms={uniforms}
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </mesh>
  );
}

export function SubtleDepthLayer({ mouse }: SubtleDepthLayerProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 50 }}
      dpr={[1, 1]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <AmbientShader mouse={mouse} />
      </Suspense>
    </Canvas>
  );
}
