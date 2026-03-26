// Shared easing curve constants
// Typed as [number, number, number, number] for Framer Motion BezierDefinition compatibility
// GSAP accepts the same format

export const easing = {
  // Primary ease -- smooth deceleration
  smooth: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],

  // Power curve -- aggressive start, gentle landing (image reveals)
  power: [0.77, 0, 0.175, 1] as [number, number, number, number],

  // Soft ease -- gentle throughout (text, subtle motion)
  soft: [0.45, 0, 0.55, 1] as [number, number, number, number],

  // Snap ease -- quick start, definitive stop (UI interactions, hovers)
  snap: [0.19, 1, 0.22, 1] as [number, number, number, number],

  // Spring-like -- slight bounce feel (attention-drawing elements)
  spring: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
};
