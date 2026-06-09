"use client";

import { motion } from "framer-motion";
import { CinematicStage } from "../CinematicStage";

const NODES = [
  { label: "Write", x: 8 },
  { label: "Stage", x: 28 },
  { label: "Commit", x: 50 },
  { label: "Build", x: 72 },
  { label: "Ship", x: 92 },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function CommitScene({ progress }: { progress: number }) {
  const activeIndex = Math.min(
    NODES.length - 1,
    Math.floor(progress * (NODES.length + 0.3))
  );

  return (
    <CinematicStage
      label="Version Control"
      sublabel="Changes crystallize into history"
      zoom={1.05}
      panY={-4 + progress * 8}
    >
      <div className="relative flex h-full items-center justify-center px-6">
        {/* Flow line */}
        <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-white/[0.06]" />
        <motion.div
          className="absolute left-[8%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#3ec8e8]/60 via-[#7c6cf0]/50 to-transparent"
          animate={{ width: `${progress * 84}%` }}
          transition={{ duration: 0.8, ease }}
        />

        {/* Nodes */}
        {NODES.map((node, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;

          return (
            <motion.div
              key={node.label}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: i <= activeIndex ? 1 : 0.25,
                scale: isActive ? 1.15 : isPast ? 1 : 0.85,
              }}
              transition={{ duration: 0.6, ease }}
            >
              <div
                className={`relative flex h-10 w-10 items-center justify-center rounded-full border sm:h-12 sm:w-12 ${
                  isActive
                    ? "border-[#3ec8e8]/50 bg-[#3ec8e8]/10 shadow-[0_0_32px_rgba(62,200,232,0.25)]"
                    : isPast
                      ? "border-white/20 bg-white/[0.04]"
                      : "border-white/[0.06] bg-transparent"
                }`}
              >
                {isPast && !isActive && (
                  <span className="text-[10px] text-white/40">✓</span>
                )}
                {isActive && (
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border border-[#3ec8e8]/40"
                  />
                )}
              </div>
              <span
                className={`absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-wider sm:text-[10px] ${
                  isActive ? "text-white/50" : "text-white/20"
                }`}
              >
                {node.label}
              </span>
            </motion.div>
          );
        })}

        {/* Abstract log streams */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
            style={{
              top: `${35 + i * 12}%`,
              left: "10%",
              right: "10%",
            }}
            animate={{
              opacity: [0, 0.4, 0],
              x: [0, 20, 40],
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </CinematicStage>
  );
}
