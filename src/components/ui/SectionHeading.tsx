"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="mb-5 block text-[11px] font-medium uppercase tracking-[0.22em] text-white/35">
          {label}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white/90">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[15px] leading-[1.75] text-white/45 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
