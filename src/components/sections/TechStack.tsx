"use client";

import { motion } from "framer-motion";
import { technologies } from "@/lib/data/techStack";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStack() {
  return (
    <section id="technology" className="section-padding relative px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Technology"
          title="Built with the best"
          description="We work with battle-tested technologies that power the world's most demanding applications."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="group glass flex flex-col items-center justify-center rounded-2xl p-6 transition-shadow duration-500 hover:border-white/10"
              style={
                {
                  "--tech-color": tech.color,
                } as React.CSSProperties
              }
            >
              <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl font-mono text-[11px] font-bold tracking-tight transition-shadow duration-500 group-hover:shadow-[0_0_30px_var(--tech-color)]"
                style={{
                  backgroundColor: `${tech.color}15`,
                  color: tech.color,
                }}
              >
                {tech.abbr}
              </div>
              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
