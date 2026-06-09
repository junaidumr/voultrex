"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiceIcon } from "@/components/ui/Icons";

export function Services() {
  return (
    <section id="services" className="section-padding relative px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Services"
          title="What we engineer"
          description="Full-stack capabilities across the modern software landscape — from frontend experiences to cloud infrastructure."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard className="group relative h-full overflow-hidden border-white/[0.04] bg-white/[0.015] transition-colors duration-500 hover:border-white/[0.08] hover:bg-white/[0.03]">
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-accent-cyan transition-colors group-hover:border-accent-cyan/20 group-hover:bg-accent-cyan/10">
                      <ServiceIcon name={service.icon} />
                    </div>
                    <span className="font-mono text-[11px] text-white/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-medium tracking-[-0.02em] text-white/85">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-white/40">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
