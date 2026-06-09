"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  gradientVertexShader,
  gradientFragmentShader,
} from "./shaders/gradientShader";

interface GradientBackgroundProps {
  mouse: { x: number; y: number };
  scrollProgress: number;
}

export function GradientBackground({
  mouse,
  scrollProgress,
}: GradientBackgroundProps) {
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
    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uMouse.value.lerp(
      new THREE.Vector2(mouse.x, mouse.y),
      0.05
    );
    material.uniforms.uScroll.value = THREE.MathUtils.lerp(
      material.uniforms.uScroll.value,
      scrollProgress,
      0.02
    );
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={gradientVertexShader}
        fragmentShader={gradientFragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}
