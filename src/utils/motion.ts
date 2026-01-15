const cubicEase = [0.22, 1, 0.36, 1] as const;

export const sectionMotion = {
  initial: { opacity: 0, y: 28, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.8, ease: cubicEase },
  viewport: { amount: 0.2, once: false },
};

export const microHover = {
  whileHover: { y: 0 },
  whileTap: { scale: 1 },
  transition: { duration: 0.25, ease: cubicEase },
};
