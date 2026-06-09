"use client";

import { motion } from "framer-motion";
import { CinematicStage } from "../CinematicStage";

const LABELS = [
  { text: "API Gateway", x: 50, y: 18, delay: 0.1 },
  { text: "Auth", x: 22, y: 42, delay: 0.25 },
  { text: "Core API", x: 50, y: 42, delay: 0.35 },
  { text: "AI Layer", x: 78, y: 42, delay: 0.45 },
  { text: "PostgreSQL", x: 28, y: 68, delay: 0.55 },
  { text: "Cache", x: 50, y: 68, delay: 0.65 },
  { text: "Queue", x: 72, y: 68, delay: 0.75 },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function BlueprintScene({ progress }: { progress: number }) {
  return (
    <CinematicStage
      label="Architecture"
      sublabel="Systems find their structure"
      zoom={0.96 + progress * 0.08}
      panX={progress * 6 - 3}
    >
      <div className="relative h-full w-full">
        {/* Blueprint grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.12]">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(62,200,232,0.4)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Connection lines */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {progress > 0.15 && (
            <>
              <motion.line x1="50" y1="22" x2="50" y2="38" stroke="rgba(62,200,232,0.25)" strokeWidth="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, ease }} />
              <motion.line x1="50" y1="46" x2="22" y2="46" stroke="rgba(62,200,232,0.2)" strokeWidth="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.2, ease }} />
              <motion.line x1="50" y1="46" x2="78" y2="46" stroke="rgba(124,108,240,0.2)" strokeWidth="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.3, ease }} />
              <motion.line x1="22" y1="50" x2="28" y2="64" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.4, ease }} />
              <motion.line x1="50" y1="50" x2="50" y2="64" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.45, ease }} />
              <motion.line x1="78" y1="50" x2="72" y2="64" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5, ease }} />
            </>
          )}
        </svg>

        {/* Floating labels */}
        {LABELS.map((item) =>
          progress > item.delay ? (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded border border-[#3ec8e8]/20 bg-[#3ec8e8]/[0.04] px-3 py-1.5 backdrop-blur-sm"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
            >
              <span className="text-[9px] font-medium uppercase tracking-wider text-white/45 sm:text-[10px]">
                {item.text}
              </span>
            </motion.div>
          ) : null
        )}
      </div>
    </CinematicStage>
  );
}
