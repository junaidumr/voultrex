"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

interface CinematicStageProps {
  children: React.ReactNode;
  label?: string;
  sublabel?: string;
  className?: string;
  zoom?: number;
  panX?: number;
  panY?: number;
}

export function CinematicStage({
  children,
  label,
  sublabel,
  className,
  zoom = 1,
  panX = 0,
  panY = 0,
}: CinematicStageProps) {
  return (
    <div
      className={cn("relative mx-auto h-[min(52vh,420px)] w-full max-w-4xl px-6 sm:h-[min(58vh,480px)]", className)}
      style={{
        transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
        transition: "transform 4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Editorial frame — soft bloom container */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        {/* Ambient key light */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(62,200,232,0.06) 0%, transparent 65%)",
          }}
        />

        {children}

        {/* Shallow DOF — center sharp, edges fall away */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backdropFilter: "blur(0px)",
            WebkitMaskImage:
              "radial-gradient(ellipse 48% 42% at 50% 48%, black 20%, transparent 72%)",
            maskImage:
              "radial-gradient(ellipse 48% 42% at 50% 48%, black 20%, transparent 72%)",
          }}
        />

        {/* Edge blur overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 44% at 50% 48%, transparent 28%, rgba(3,3,10,0.55) 68%, rgba(3,3,10,0.92) 100%)",
          }}
        />

        {/* Bloom */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 35% 25% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Editorial caption */}
      {(label || sublabel) && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
          className="absolute -bottom-10 left-0 right-0 text-center"
        >
          {label && (
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/30">
              {label}
            </span>
          )}
          {sublabel && (
            <p className="mt-1 text-[11px] text-white/20">{sublabel}</p>
          )}
        </motion.div>
      )}
    </div>
  );
}
