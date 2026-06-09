"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { IconGlobe, IconCode, IconGrowth } from "@/components/ui/Icons";

const perks = [
  {
    title: "Remote Friendly",
    description:
      "Work from anywhere. We believe great engineering happens when you're comfortable.",
    Icon: IconGlobe,
  },
  {
    title: "Engineering Focused",
    description:
      "No bureaucracy. Pure engineering culture with code reviews, pair programming, and learning.",
    Icon: IconCode,
  },
  {
    title: "Growth Opportunities",
    description:
      "Work on diverse projects across industries. Level up your skills with every sprint.",
    Icon: IconGrowth,
  },
];

export function Careers() {
  return (
    <section id="careers" className="section-padding relative px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <SectionHeading
            label="Careers"
            title="Join the team"
            description="We're always looking for exceptional engineers and designers who care about craft, performance, and impact."
          />

          <div className="space-y-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass flex items-start gap-4 rounded-2xl p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] text-accent-cyan">
                  <perk.Icon />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{perk.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <MagneticButton
            href="mailto:info@voultrex.com?subject=Careers%20at%20Voultrex"
            variant="secondary"
            size="lg"
          >
            Send us your portfolio
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
