"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTABanner() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 60% 80% at 50% 50%, rgba(62, 200, 232, 0.06) 0%, transparent 70%),
              radial-gradient(ellipse 40% 60% at 20% 80%, rgba(124, 108, 240, 0.05) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <div className="glass-strong overflow-hidden rounded-3xl border border-white/[0.06] px-8 py-16 md:px-16 md:py-20">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/35">
            Ready to scale?
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white/90">
            Let&apos;s engineer your next product
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.75] text-white/45">
            From MVP to enterprise — we partner with ambitious teams to ship
            software that performs at global scale.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="#contact" variant="primary" size="lg">
              Start a Project
            </MagneticButton>
            <MagneticButton href="#work" variant="secondary" size="lg">
              See Our Work
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
