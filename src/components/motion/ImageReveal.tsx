"use client";

import { motion } from "framer-motion";
import { easing } from "@/lib/easing";

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ImageReveal({ children, delay = 0, className }: ImageRevealProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{
          clipPath: {
            duration: 1.2,
            delay,
            ease: easing.power,
          },
          scale: {
            duration: 1.6,
            delay,
            ease: easing.smooth,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
