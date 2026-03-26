"use client";

import { motion } from "framer-motion";
import { easing } from "@/lib/easing";

interface ClipRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

const clipPaths = {
  up: {
    hidden: "inset(100% 0% 0% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  left: {
    hidden: "inset(0% 100% 0% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  right: {
    hidden: "inset(0% 0% 0% 100%)",
    visible: "inset(0% 0% 0% 0%)",
  },
};

export function ClipReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  className,
}: ClipRevealProps) {
  return (
    <motion.div
      initial={{
        clipPath: clipPaths[direction].hidden,
        y: direction === "up" ? 30 : 0,
      }}
      whileInView={{
        clipPath: clipPaths[direction].visible,
        y: 0,
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration,
        delay,
        ease: easing.smooth,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
