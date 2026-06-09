"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const STRENGTH = 0.22;

export function MagneticButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const variants = {
    primary:
      "bg-white/95 text-[#08080f] hover:bg-white border border-white/20 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_8px_32px_rgba(0,0,0,0.35)]",
    secondary:
      "bg-white/[0.04] text-foreground border border-white/[0.12] hover:bg-white/[0.07] backdrop-blur-md",
    ghost: "text-white/60 hover:text-white hover:bg-white/[0.04]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-[15px]",
  };

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * STRENGTH, y: y * STRENGTH });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const isFullWidth = className?.includes("w-full");

  const classes = cn(
    "relative inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-colors duration-500",
    variants[variant],
    sizes[size],
    className
  );

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.6 }}
      className={cn(isFullWidth ? "block w-full" : "inline-block")}
    >
      {href ? (
        <a href={href} className={cn(classes, isFullWidth && "w-full")}>
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={cn(classes, isFullWidth && "w-full")}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return inner;
}
