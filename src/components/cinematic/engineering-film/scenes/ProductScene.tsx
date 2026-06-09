"use client";

import { motion } from "framer-motion";
import { CinematicStage } from "../CinematicStage";

const PANELS = [
  { w: "55%", h: "38%", x: "22%", y: "28%", delay: 0.1, z: 3 },
  { w: "42%", h: "28%", x: "48%", y: "22%", delay: 0.3, z: 2 },
  { w: "38%", h: "32%", x: "30%", y: "52%", delay: 0.5, z: 1 },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductScene({ progress }: { progress: number }) {
  return (
    <CinematicStage
      label="Interface"
      sublabel="Experience emerges in layers"
      zoom={1.02 + progress * 0.05}
      panX={-8 + progress * 14}
    >
      <div className="relative h-full w-full" style={{ perspective: "900px" }}>
        {PANELS.map((panel, i) => {
          const show = progress > panel.delay;
          const lift = show ? 1 : 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 12 }}
              animate={{
                opacity: show ? 0.7 + i * 0.1 : 0,
                y: show ? 0 : 40,
                rotateX: show ? 4 - i * 2 : 12,
                rotateY: show ? (i - 1) * 3 : 0,
              }}
              transition={{ duration: 1.4, ease }}
              className="absolute overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md"
              style={{
                width: panel.w,
                height: panel.h,
                left: panel.x,
                top: panel.y,
                zIndex: panel.z,
                boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                transform: `translateZ(${lift * 20}px)`,
              }}
            >
              {/* Abstract UI content */}
              <div className="p-3 sm:p-4">
                <div className="mb-3 flex gap-1.5">
                  <div className="h-1 w-8 rounded-full bg-white/15" />
                  <div className="h-1 w-4 rounded-full bg-white/8" />
                </div>
                <div className="space-y-2">
                  {[0.9, 0.6, 0.75].map((w, j) => (
                    <motion.div
                      key={j}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: show ? 1 : 0 }}
                      transition={{ delay: panel.delay + j * 0.1, duration: 0.8, ease }}
                      className="h-1 origin-left rounded-full bg-gradient-to-r from-[#3ec8e8]/30 to-transparent"
                      style={{ width: `${w * 100}%` }}
                    />
                  ))}
                </div>
                {i === 0 && progress > 0.6 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 grid grid-cols-3 gap-2"
                  >
                    {[1, 2, 3].map((k) => (
                      <div
                        key={k}
                        className="h-8 rounded bg-white/[0.04]"
                        style={{
                          boxShadow: "0 0 12px rgba(62,200,232,0.08)",
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Central glow — product coming alive */}
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(62,200,232,0.12) 0%, transparent 70%)",
          }}
        />
      </div>
    </CinematicStage>
  );
}
