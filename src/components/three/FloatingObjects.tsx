"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingObjectsProps {
  mouse: { x: number; y: number };
  scrollProgress: number;
}

export function FloatingObjects({ mouse, scrollProgress }: FloatingObjectsProps) {
  const groupRef = useRef<THREE.Group>(null);

  const objects = useMemo(
    () => [
      { position: [-3, 1, -2] as [number, number, number], scale: 0.6, color: "#00d4ff", speed: 0.3 },
      { position: [3.5, -0.5, -3] as [number, number, number], scale: 0.4, color: "#8b5cf6", speed: 0.5 },
      { position: [-1.5, -1.5, -1] as [number, number, number], scale: 0.35, color: "#10b981", speed: 0.4 },
      { position: [2, 2, -2.5] as [number, number, number], scale: 0.5, color: "#6366f1", speed: 0.35 },
      { position: [0, -2, -1.5] as [number, number, number], scale: 0.3, color: "#ec4899", speed: 0.45 },
    ],
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.1 + scrollProgress * 0.5,
      0.02
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.05,
      0.02
    );

    groupRef.current.children.forEach((child, i) => {
      child.position.y += Math.sin(t * objects[i].speed + i) * 0.001;
    });
  });

  return (
    <group ref={groupRef}>
      {objects.map((obj, i) => (
        <Float
          key={i}
          speed={obj.speed * 2}
          rotationIntensity={0.3}
          floatIntensity={0.5}
          position={obj.position}
        >
          {i % 3 === 0 ? (
            <mesh scale={obj.scale}>
              <icosahedronGeometry args={[1, 1]} />
              <MeshDistortMaterial
                color={obj.color}
                transparent
                opacity={0.15}
                distort={0.3}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
          ) : i % 3 === 1 ? (
            <mesh scale={obj.scale}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color={obj.color}
                transparent
                opacity={0.12}
                roughness={0.1}
                metalness={0.9}
                wireframe
              />
            </mesh>
          ) : (
            <mesh scale={obj.scale}>
              <sphereGeometry args={[0.8, 16, 16]} />
              <MeshDistortMaterial
                color={obj.color}
                transparent
                opacity={0.1}
                distort={0.5}
                speed={1.5}
                roughness={0.3}
                metalness={0.7}
              />
            </mesh>
          )}
        </Float>
      ))}
    </group>
  );
}
