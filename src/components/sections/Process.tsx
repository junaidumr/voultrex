"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="section-padding relative px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Process"
          title="How we work"
          description="A proven five-step methodology that takes your idea from discovery to global scale."
          align="center"
          className="mb-20"
        />

        <div ref={containerRef} className="relative">
          <div className="absolute top-0 left-4 h-full w-px bg-white/5 md:left-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-accent-cyan to-accent-violet"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col gap-8 pl-10 md:flex-row md:items-center md:pl-0 ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div
                    className={`${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-cyan">
                      Step {step.step}
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {step.description}
                    </p>
                    <p className="mt-2 text-sm text-muted/60">{step.detail}</p>
                  </div>
                </div>

                <div className="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent-cyan bg-background md:left-1/2" />

                <div className="flex-1">
                  <div
                    className={`glass relative overflow-hidden rounded-2xl p-8 ${
                      i % 2 === 0 ? "md:ml-16" : "md:mr-16"
                    }`}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-30"
                      style={{
                        background: `radial-gradient(ellipse 80% 80% at 70% 30%, ${
                          i % 2 === 0
                            ? "rgba(62, 200, 232, 0.12)"
                            : "rgba(124, 108, 240, 0.12)"
                        } 0%, transparent 70%)`,
                      }}
                    />
                    <div className="relative text-6xl font-bold text-white/[0.06]">
                      {String(step.step).padStart(2, "0")}
                    </div>
                    <div className="relative mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/20">
                      Phase {step.step}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
