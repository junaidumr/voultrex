"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { WordReveal } from "@/components/ui/WordReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useMousePosition } from "@/hooks/useMousePosition";

const CinematicHeroBackground = dynamic(
  () =>
    import("@/components/cinematic/CinematicHeroBackground").then(
      (m) => m.CinematicHeroBackground
    ),
  { ssr: false }
);

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const parallaxX = mouse.x * 10;
  const parallaxY = mouse.y * 6;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden"
    >
      <CinematicHeroBackground />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pt-24 pb-20"
      >
        <motion.div
          style={{
            x: parallaxX * 0.15,
            y: parallaxY * 0.1,
          }}
          className="mx-auto w-full max-w-[54rem] text-center"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.35em" }}
            animate={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 1.4, delay: 0.2, ease }}
            className="mb-10 text-[11px] font-medium uppercase text-white/45"
          >
            Engineering Scalable Digital Futures
          </motion.p>

          {/* Headline — Apple keynote pacing */}
          <h1
            aria-label="We Build Digital Products That Scale Globally"
            className="text-[clamp(2.25rem,6.5vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white"
          >
            <WordReveal
              text="We Build Digital Products"
              as="span"
              className="block text-white/95"
              delay={0.45}
              stagger={0.07}
              trigger="mount"
              ariaLabel={false}
            />
            <span className="mt-1 block">
              <WordReveal
                text="That Scale Globally"
                as="span"
                className="text-white/55"
                delay={0.95}
                stagger={0.07}
                trigger="mount"
                ariaLabel={false}
              />
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.65, ease }}
            className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.7] text-white/50 sm:text-[17px]"
          >
            From idea to production — we engineer high-performance software
            systems for startups, enterprises, and international clients.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 2.05, ease }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton href="#contact" variant="primary" size="lg">
              Start a Project
            </MagneticButton>
            <MagneticButton href="#work" variant="secondary" size="lg">
              View Case Studies
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1.2, ease }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Scroll
            </span>
            <div className="h-9 w-[1px] bg-gradient-to-b from-white/0 via-white/30 to-white/0" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
