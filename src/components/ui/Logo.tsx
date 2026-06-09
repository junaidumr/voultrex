import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

const WORDMARK_ASPECT = 182 / 36;

const heights = {
  sm: 18,
  md: 22,
} as const;

export function Logo({ className, size = "md" }: LogoProps) {
  const height = heights[size];
  const width = Math.round(height * WORDMARK_ASPECT);

  return (
    <Image
      src="/voultrex-wordmark.png"
      alt="Voultrex"
      width={width}
      height={height}
      className={cn("block h-auto w-auto select-none", className)}
      style={{ height, width: "auto" }}
      priority
    />
  );
}
