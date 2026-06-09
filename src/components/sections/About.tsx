"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "2024", label: "Founded", animate: false },
  { value: "10+", label: "Experts", animate: true, target: 10, suffix: "+" },
  { value: "60+", label: "Projects Delivered", animate: true, target: 60, suffix: "+" },
  { value: "Global", label: "Clients", animate: false },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        if (!stat.animate || stat.target === undefined) return;

        const el = document.querySelector(`[data-stat="${i}"]`);
        if (!el) return;

        const suffix = stat.suffix ?? "";

        gsap.fromTo(
          el,
          { innerText: "0" },
          {
            innerText: stat.target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate: function () {
              const val = Math.round(Number(this.targets()[0].innerText));
              (this.targets()[0] as HTMLElement).innerText = `${val}${suffix}`;
            },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <SectionHeading
            label="About Voultrex"
            title="A modern software engineering studio"
            description="Founded in 2024 in Islamabad, Pakistan, Voultrex is a team of 10+ engineers and designers building enterprise-grade digital products for clients worldwide."
          />

          <div className="space-y-6 text-base leading-relaxed text-muted">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <strong className="text-foreground">Who we are.</strong> A
              precision-driven engineering studio that treats every project as
              a product — not a deliverable. We combine deep technical expertise
              with design sensibility.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <strong className="text-foreground">What we build.</strong>{" "}
              Enterprise web applications, mobile apps, SaaS platforms, AI
              systems, backend architectures, APIs, cloud infrastructure, and
              admin dashboards.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <strong className="text-foreground">Why we exist.</strong> To
              bridge the gap between ambitious ideas and production-ready
              systems that scale — helping startups and enterprises compete on a
              global stage.
            </motion.p>
          </div>
        </div>

        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
              aria-label={`${stat.value} ${stat.label}`}
            >
              <div
                data-stat={i}
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
