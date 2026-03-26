"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // 0.3 = background plane, 0.6 = midground, 1.0 = foreground (normal scroll)
  className?: string;
}

export function Parallax({ children, speed = 0.4, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Positive speed values move the element UP relative to scroll (background effect)
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -80]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
