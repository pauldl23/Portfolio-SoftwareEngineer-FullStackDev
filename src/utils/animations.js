export const globalEase = [0.16, 1, 0.3, 1];

export const fastTransition = {
  duration: 0.4,
  ease: globalEase
};

export const fastStagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export const spatialReveal = {
  initial: { opacity: 0, y: 30, scale: 0.96, rotateX: 6 },
  whileInView: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: fastTransition
};

