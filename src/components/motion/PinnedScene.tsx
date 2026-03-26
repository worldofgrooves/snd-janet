"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface PinnedSceneProps {
  children: React.ReactNode;
  id: string;
  pinDuration?: string; // e.g. "+=150%" -- how much extra scroll to pin for
  className?: string;
}

export function PinnedScene({
  children,
  id,
  pinDuration = "+=120%",
  className,
}: PinnedSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const titleEl = containerRef.current.querySelector(".scene-title");
      const bodyEl = containerRef.current.querySelector(".scene-body");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: pinDuration,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      if (titleEl) {
        tl.fromTo(
          titleEl,
          { clipPath: "inset(100% 0% 0% 0%)", y: 50 },
          { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 0.5 }
        );
      }

      if (bodyEl) {
        tl.fromTo(
          bodyEl,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.15"
        );
      }

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative will-change-transform ${className ?? ""}`}
    >
      <div className="min-h-screen flex items-center">{children}</div>
    </div>
  );
}
