"use client";

import { motion } from "framer-motion";
import { CinematicStage } from "../CinematicStage";

const STAGES = ["Source", "Test", "Build", "Deploy", "Live"];

const ease = [0.22, 1, 0.36, 1] as const;

export function DeployScene({ progress }: { progress: number }) {
  const energyPos = progress * 100;

  return (
    <CinematicStage
      label="Deployment"
      sublabel="Energy flows to production"
      zoom={1.04}
      panY={2}
    >
      <div className="relative flex h-full items-center justify-center px-8">
        {/* Pipeline track */}
        <div className="absolute left-[10%] right-[10%] top-1/2 h-8 -translate-y-1/2 rounded-full border border-white/[0.04] bg-white/[0.02]" />

        {/* Glowing energy flow */}
        <motion.div
          className="absolute left-[10%] top-1/2 h-1 -translate-y-1/2 rounded-full"
          style={{
            width: `${energyPos * 0.8}%`,
            background: "linear-gradient(90deg, transparent, #3ec8e8, #7c6cf0, #3ec8e8)",
            boxShadow: "0 0 20px rgba(62,200,232,0.5), 0 0 40px rgba(124,108,240,0.2)",
          }}
        />

        {/* Energy pulse traveling */}
        <motion.div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white/80"
          style={{
            left: `calc(10% + ${energyPos * 0.8}% - 6px)`,
            boxShadow: "0 0 16px rgba(255,255,255,0.6), 0 0 32px rgba(62,200,232,0.4)",
          }}
        />

        {/* Stage nodes */}
        {STAGES.map((stage, i) => {
          const x = 10 + (i / (STAGES.length - 1)) * 80;
          const lit = progress >= i / (STAGES.length - 1);

          return (
            <motion.div
              key={stage}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%` }}
              animate={{
                opacity: lit ? 1 : 0.3,
                scale: lit ? 1 : 0.9,
              }}
              transition={{ duration: 0.5, ease }}
            >
              <div
                className={`mb-8 flex h-8 w-8 items-center justify-center rounded-lg border sm:h-9 sm:w-9 ${
                  lit
                    ? "border-[#3ec8e8]/30 bg-[#3ec8e8]/[0.08] shadow-[0_0_24px_rgba(62,200,232,0.15)]"
                    : "border-white/[0.06] bg-transparent"
                }`}
              >
                <div className={`h-1.5 w-1.5 rounded-full ${lit ? "bg-[#3ec8e8]" : "bg-white/20"}`} />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] uppercase tracking-wider text-white/25 sm:text-[9px]">
                {stage}
              </span>
            </motion.div>
          );
        })}

        {/* Infrastructure cards — floating */}
        {progress > 0.5 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: [0, -4, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity }, opacity: { duration: 0.8 } }}
              className="absolute left-[15%] top-[22%] rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-1 backdrop-blur-sm"
            >
              <span className="text-[8px] uppercase tracking-wider text-white/30">K8s</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: [0, -3, 0] }}
              transition={{ y: { duration: 3.5, repeat: Infinity, delay: 0.5 }, opacity: { duration: 0.8, delay: 0.2 } }}
              className="absolute right-[18%] top-[25%] rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-1 backdrop-blur-sm"
            >
              <span className="text-[8px] uppercase tracking-wider text-white/30">Docker</span>
            </motion.div>
          </>
        )}
      </div>
    </CinematicStage>
  );
}
