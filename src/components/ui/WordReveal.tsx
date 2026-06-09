"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
  stagger?: number;
  once?: boolean;
  /** "mount" fires on load (hero); "view" waits for scroll into view */
  trigger?: "mount" | "view";
  /** Set false when nested inside a parent with its own accessible name */
  ariaLabel?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function WordReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  stagger = 0.055,
  once = true,
  trigger = "view",
  ariaLabel = true,
}: WordRevealProps) {
  const words = text.split(" ");

  const motionTarget =
    trigger === "mount"
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : undefined;

  return (
    <Tag
      className={cn("inline", className)}
      {...(ariaLabel ? { "aria-label": text } : {})}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: "1.1em", filter: "blur(8px)" }}
            animate={motionTarget}
            whileInView={
              trigger === "view"
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : undefined
            }
            viewport={{ once }}
            transition={{
              duration: 1.1,
              delay: delay + i * stagger,
              ease,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
