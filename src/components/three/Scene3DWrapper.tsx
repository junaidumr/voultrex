"use client";

import dynamic from "next/dynamic";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const Scene3D = dynamic(
  () => import("./Scene3D").then((mod) => mod.Scene3D),
  { ssr: false, loading: () => <div className="fixed inset-0 -z-10 bg-[#030308]" /> }
);

export function Scene3DWrapper() {
  const mouse = useMousePosition();
  const scrollProgress = useScrollProgress();

  return <Scene3D mouse={mouse} scrollProgress={scrollProgress} />;
}
