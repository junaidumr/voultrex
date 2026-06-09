"use client";

import { motion } from "framer-motion";
import { whyVoultrex } from "@/lib/data/why";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { WhyIcon } from "@/components/ui/Icons";

export function WhyVoultrex() {
  return (
    <section id="why" className="section-padding relative px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Why Voultrex"
          title="Built different"
          description="We don't just write code — we engineer systems that perform, scale, and delight."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyVoultrex.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard glow="violet" className="h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent-violet/20 bg-accent-violet/10 text-accent-violet">
                  <WhyIcon name={item.icon} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
