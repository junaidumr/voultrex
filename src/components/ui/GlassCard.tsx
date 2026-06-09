"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "violet" | "none";
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = "none",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -2,
              transition: { type: "spring", stiffness: 260, damping: 28 },
            }
          : undefined
      }
      className={cn(
        "glass rounded-2xl p-6 transition-shadow duration-500",
        glow === "cyan" && "hover:glow-cyan",
        glow === "violet" && "hover:glow-violet",
        hover && "hover:border-white/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
