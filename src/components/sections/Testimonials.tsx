"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="section-padding relative px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Testimonials"
          title="Trusted by teams worldwide"
          description="Founders and engineering leaders who chose Voultrex to ship products that scale."
          align="center"
          className="mb-16"
        />

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
              aria-live="polite"
              aria-atomic="true"
            >
              <blockquote className="text-xl leading-relaxed font-light text-foreground/90 sm:text-2xl md:text-3xl">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <div className="font-medium text-foreground">
                  {testimonials[active].author}
                </div>
                <div className="mt-1 text-sm text-muted">
                  {testimonials[active].role}
                </div>
                <div className="text-xs text-muted/60">
                  {testimonials[active].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            aria-label="Previous testimonial"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-accent-cyan"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`View testimonial ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            aria-label="Next testimonial"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
