"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { WhyVoultrex } from "@/components/sections/WhyVoultrex";
import { GlobalImpact } from "@/components/sections/GlobalImpact";
import { Testimonials } from "@/components/sections/Testimonials";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";
import { CTABanner } from "@/components/sections/CTABanner";
import { CaseStudiesSkeleton } from "@/components/sections/CaseStudiesSkeleton";

const CaseStudies = dynamic(
  () =>
    import("@/components/sections/CaseStudies").then((mod) => mod.CaseStudies),
  { ssr: false, loading: () => <CaseStudiesSkeleton /> }
);

export function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative bg-background">
        <div
          className="pointer-events-none fixed inset-0 z-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 50% 30% at 10% 20%, rgba(62, 200, 232, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse 40% 25% at 90% 60%, rgba(124, 108, 240, 0.025) 0%, transparent 50%)
            `,
          }}
        />
        <div className="relative z-[1]">
          <Hero />
          <About />
          <Services />
          <CaseStudies />
          <TechStack />
          <Process />
          <WhyVoultrex />
          <GlobalImpact />
          <Testimonials />
          <Careers />
          <CTABanner />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
