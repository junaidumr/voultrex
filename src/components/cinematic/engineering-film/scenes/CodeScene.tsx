"use client";

import { motion } from "framer-motion";
import { CinematicStage } from "../CinematicStage";

const LINES = [
  { text: "export async function auth", colors: ["#c4b5fd", "#93c5fd", "#e2e8f0"], width: "72%" },
  { text: "  const session = await verify", colors: ["#7dd3fc", "#e2e8f0"], width: "58%" },
  { text: "  return middleware(req)", colors: ["#a5b4fc", "#e2e8f0"], width: "48%" },
  { text: "interface Product { scale }", colors: ["#c4b5fd", "#94a3b8"], width: "65%" },
  { text: "await pipeline.deploy()", colors: ["#67e8f9", "#e2e8f0"], width: "42%" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function CodeScene({ progress }: { progress: number }) {
  const visibleLines = Math.ceil(progress * (LINES.length + 0.5));

  return (
    <CinematicStage
      label="Composition"
      sublabel="Code takes form"
      zoom={1.08 + progress * 0.04}
      panX={-12 + progress * 20}
      panY={6 - progress * 10}
    >
      <div className="relative flex h-full flex-col justify-center gap-5 px-8 sm:gap-6 sm:px-14">
        {/* Blurred background code — out of focus */}
        <div className="pointer-events-none absolute inset-0 opacity-20 blur-md">
          {LINES.map((line, i) => (
            <div
              key={`bg-${i}`}
              className="mb-4 h-2 rounded-full bg-white/10"
              style={{ width: line.width, marginLeft: `${i * 4}%` }}
            />
          ))}
        </div>

        {/* Macro focus lines */}
        {LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30, filter: "blur(12px)" }}
            animate={{
              opacity: i === visibleLines - 1 ? 1 : 0.35 + (i / LINES.length) * 0.4,
              x: 0,
              filter: i === visibleLines - 1 ? "blur(0px)" : "blur(2px)",
            }}
            transition={{ duration: 1.4, ease }}
            className="relative"
            style={{ marginLeft: `${i * 3}%` }}
          >
            <div
              className="h-[3px] rounded-full sm:h-1"
              style={{
                width: line.width,
                background: `linear-gradient(90deg, ${line.colors.map((c, j) => `${c} ${j * 50}%`).join(", ")})`,
                boxShadow:
                  i === visibleLines - 1
                    ? "0 0 24px rgba(62,200,232,0.35), 0 0 48px rgba(124,108,240,0.15)"
                    : "none",
              }}
            />
            {i === visibleLines - 1 && (
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="absolute -right-1 top-1/2 h-4 w-0.5 -translate-y-1/2 bg-white/60 sm:h-5"
              />
            )}
          </motion.div>
        ))}
      </div>
    </CinematicStage>
  );
}
