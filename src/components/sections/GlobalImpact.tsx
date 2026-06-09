"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const regions = [
  {
    name: "Pakistan",
    city: "Islamabad",
    description: "Headquarters & engineering hub",
    position: { top: "44%", left: "68%" },
    delay: 0,
  },
  {
    name: "Middle East",
    city: "Dubai, Riyadh",
    description: "Enterprise & startup clients",
    position: { top: "40%", left: "58%" },
    delay: 0.2,
  },
  {
    name: "Europe",
    city: "London, Berlin",
    description: "International partnerships",
    position: { top: "30%", left: "46%" },
    delay: 0.4,
  },
];

export function GlobalImpact() {
  return (
    <section id="global" className="section-padding relative px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Global Impact"
          title="Engineering without borders"
          description="From our studio in Islamabad to clients across three continents — we deliver world-class software globally."
          align="center"
          className="mb-16"
        />

        <div className="relative mx-auto aspect-[2/1] max-w-4xl overflow-hidden rounded-3xl glass">
          <svg
            viewBox="0 0 800 400"
            className="h-full w-full opacity-25"
            fill="none"
            aria-hidden
          >
            <ellipse
              cx="400"
              cy="200"
              rx="350"
              ry="170"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <ellipse
              cx="400"
              cy="200"
              rx="250"
              ry="120"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
            <path
              d="M120 120 Q280 80 420 140 Q560 200 680 160"
              stroke="rgba(62,200,232,0.15)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M80 220 Q300 280 500 200 Q620 140 720 200"
              stroke="rgba(124,108,240,0.12)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {regions.map((region) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: region.delay,
                type: "spring",
                stiffness: 200,
              }}
              className="absolute"
              style={region.position}
            >
              <div className="group relative -translate-x-1/2 -translate-y-1/2">
                <div className="absolute -inset-4 motion-safe:animate-ping rounded-full bg-accent-cyan/20 motion-reduce:hidden" />
                <div className="relative h-3 w-3 rounded-full bg-accent-cyan shadow-[0_0_20px_rgba(62,200,232,0.5)]" />
                <div className="absolute top-6 left-1/2 hidden w-48 -translate-x-1/2 rounded-xl glass p-3 opacity-0 transition-opacity group-hover:opacity-100 md:block">
                  <div className="text-sm font-medium text-foreground">
                    {region.name}
                  </div>
                  <div className="text-xs text-accent-cyan">{region.city}</div>
                  <div className="mt-1 text-xs text-muted">
                    {region.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-lg font-semibold text-foreground">
                {region.name}
              </div>
              <div className="text-sm text-accent-cyan">{region.city}</div>
              <div className="mt-2 text-xs text-muted">{region.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
