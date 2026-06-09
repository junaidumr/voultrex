"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

const SubtleDepthLayer = dynamic(
  () => import("./SubtleDepthLayer").then((m) => m.SubtleDepthLayer),
  { ssr: false }
);

const VIDEO_DESKTOP = "/videos/hero-cinematic.mp4";
const VIDEO_MOBILE = "/videos/hero-cinematic-mobile.mp4";

export function CinematicHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [useVideo, setUseVideo] = useState(true);
  const [videoSrc, setVideoSrc] = useState(VIDEO_DESKTOP);
  const mouse = useMousePosition();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;

    if (reducedMotion) {
      setUseVideo(false);
      setReady(true);
      return;
    }

    setVideoSrc(mobile ? VIDEO_MOBILE : VIDEO_DESKTOP);
  }, []);

  useEffect(() => {
    if (!useVideo) return;

    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setReady(true);
    const onError = () => {
      setUseVideo(false);
      setReady(true);
    };

    video.addEventListener("loadeddata", markReady);
    video.addEventListener("error", onError);

    const play = async () => {
      try {
        video.playbackRate = 0.8;
        await video.play();
        setReady(true);
      } catch {
        setReady(true);
      }
    };

    void play();

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("error", onError);
    };
  }, [useVideo, videoSrc]);

  useEffect(() => {
    if (!useVideo) return;

    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [useVideo]);

  const parallaxX = mouse.x * 6;
  const parallaxY = mouse.y * 4;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Static fallback — visible before video loads or when motion is reduced */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 50% 20%, rgba(62, 200, 232, 0.08) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 80% 70%, rgba(124, 108, 240, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #020208 0%, #0a0a14 45%, #030308 100%)
          `,
        }}
      />

      {/* Cinematic software-engineering footage */}
      {useVideo && (
        <div
          className="absolute inset-0 transition-opacity duration-[2200ms] ease-out"
          style={{
            opacity: ready ? 1 : 0,
            transform: `translate3d(${parallaxX * 0.3}px, ${parallaxY * 0.2}px, 0) scale(1.08)`,
          }}
        >
          <video
            key={videoSrc}
            ref={videoRef}
            className="h-full w-full object-cover"
            style={{
              filter:
                "brightness(0.5) saturate(0.8) contrast(1.08) hue-rotate(-5deg)",
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Editorial gradient overlay — keeps text legible */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(2, 2, 8, 0.78) 0%,
              rgba(2, 2, 8, 0.42) 32%,
              rgba(3, 3, 10, 0.75) 68%,
              rgba(3, 3, 8, 0.98) 100%
            ),
            radial-gradient(ellipse 85% 55% at 50% 38%, transparent 0%, rgba(2, 2, 8, 0.55) 100%)
          `,
        }}
      />

      {/* Scan-line accent — subtle tech feel */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Ambient glow accents */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          transform: `translate3d(${parallaxX * 0.15}px, ${parallaxY * 0.1}px, 0)`,
          background: `
            radial-gradient(ellipse 50% 40% at 18% 28%, rgba(62, 200, 232, 0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 35% at 82% 62%, rgba(124, 108, 240, 0.06) 0%, transparent 70%)
          `,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 72% 62% at 50% 48%, transparent 28%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* WebGL depth layer */}
      <div className={cn("absolute inset-0 opacity-[0.16]")}>
        <SubtleDepthLayer mouse={mouse} />
      </div>

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030308] via-[#030308]/80 to-transparent" />
    </div>
  );
}
