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
