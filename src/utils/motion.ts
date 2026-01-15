import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const cubicEase = [0.22, 1, 0.36, 1] as const;

function usePointerIsCoarse() {
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarse(media.matches);
    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return isCoarse;
}

export function useSectionMotion() {
  const prefersReducedMotion = useReducedMotion();
  const isCoarse = usePointerIsCoarse();

  if (prefersReducedMotion) return {};

  if (isCoarse) {
    return {
      initial: { opacity: 0, y: 16, scale: 0.99 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.7, ease: cubicEase },
      viewport: { amount: 0.15, once: true },
    };
  }

  return {
    initial: { opacity: 0, y: 28, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: cubicEase },
    viewport: { amount: 0.2, once: false },
  };
}

export function useMicroHover() {
  const prefersReducedMotion = useReducedMotion();
  const isCoarse = usePointerIsCoarse();

  if (prefersReducedMotion || isCoarse) return {};

  return {
    whileHover: { y: -3 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.25, ease: cubicEase },
  };
}
