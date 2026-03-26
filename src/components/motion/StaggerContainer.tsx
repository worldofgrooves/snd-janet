"use client";

import { motion, type Variants } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  margin?: string;
}

// Variants for use with StaggerContainer + StaggerChild
// Easing cast as tuple for Framer Motion BezierDefinition compatibility
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
    },
  },
};

// StaggerContainer -- use in "use client" components or pages
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  margin = "-10%",
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// StaggerChild -- use inside StaggerContainer
// Marked "use client" via parent file, safe to import from server components
interface StaggerChildProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerChild({ children, className }: StaggerChildProps) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}
