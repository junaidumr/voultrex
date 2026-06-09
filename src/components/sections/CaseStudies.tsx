"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { caseStudies } from "@/lib/data/caseStudies";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scrollRef.current) return;

      const cards = scrollRef.current.querySelectorAll(".case-card");
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => `+=${scrollRef.current!.scrollWidth}`,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden">
      <div className="section-padding px-6">
        <SectionHeading
          label="Case Studies"
          title="Products we've shipped"
          description="Real projects, real impact. Explore how we've helped clients build and scale their digital products."
          className="mb-16"
        />
      </div>

      <div ref={scrollRef} className="flex gap-6 px-6 pb-20">
        {caseStudies.map((project, i) => (
          <div
            key={project.id}
            className="case-card w-[85vw] shrink-0 md:w-[60vw] lg:w-[45vw]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`glass-strong relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient}`}
            >
              <div className="flex h-full min-h-[500px] flex-col justify-between p-8 md:p-10">
                <div
                  className="pointer-events-none absolute -top-8 -right-4 select-none text-[10rem] font-bold leading-none opacity-[0.04]"
                  aria-hidden
                >
                  {project.name.charAt(0)}
                </div>
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: project.accent }}
                    />
                    <span className="text-sm font-medium text-muted">
                      {project.tagline}
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {project.name}
                  </h3>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                      Problem
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                      Solution
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full glass px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div
                        className="text-2xl font-semibold"
                        style={{ color: project.accent }}
                      >
                        {metric.value}
                      </div>
                      <div className="mt-1 text-xs text-muted">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 text-xs text-muted/40">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(caseStudies.length).padStart(2, "0")}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
