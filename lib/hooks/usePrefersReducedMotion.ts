// Based on Josh W Comeau's solution:
// https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion

import { useEffect, useState } from "react";

const query = "(prefers-reduced-motion: no-preference)";
const isRenderingOnServer = typeof window === "undefined";

const getInitialState = () =>
  isRenderingOnServer ? true : !window.matchMedia(query).matches;

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialState);

  useEffect(() => {
    const mq = window.matchMedia(query);

    const listener = (event: any) => {
      setPrefersReducedMotion(!event.matches);
    };

    mq.addEventListener("change", listener);

    return () => {
      mq.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
