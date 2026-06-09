"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GradientBackground } from "./GradientBackground";
import { FloatingObjects } from "./FloatingObjects";
import { ParticleField } from "./ParticleField";

interface Scene3DProps {
  mouse: { x: number; y: number };
  scrollProgress: number;
}

function SceneContent({ mouse, scrollProgress }: Scene3DProps) {
  return (
    <>
      <fog attach="fog" args={["#030308", 5, 25]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[-10, -5, 5]} intensity={0.3} color="#8b5cf6" />
      <directionalLight
        position={[mouse.x * 5, mouse.y * 5 + 5, 5]}
        intensity={0.4}
        color="#ffffff"
      />
      <GradientBackground mouse={mouse} scrollProgress={scrollProgress} />
      <FloatingObjects mouse={mouse} scrollProgress={scrollProgress} />
      <ParticleField mouse={mouse} />
    </>
  );
}

export function Scene3D({ mouse, scrollProgress }: Scene3DProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "#030308" }}
      >
        <Suspense fallback={null}>
          <SceneContent mouse={mouse} scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
