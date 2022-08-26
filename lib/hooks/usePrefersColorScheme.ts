// https://github.com/anatoliygatt/use-prefers-color-scheme/blob/master/src/usePrefersColorScheme.ts

import { useState, useEffect } from "react";

export type ColorScheme = "light" | "dark";

export interface PrefersColorSchemeOptions {
  ssr?: boolean;
}

const usePrefersColorScheme = (
  options: PrefersColorSchemeOptions = {}
): ColorScheme => {
  const { ssr = false } = options;

  const [preferredColorScheme, setPreferredColorScheme] = useState<ColorScheme>(
    ssr ? "dark" : "light"
  );

  useEffect(() => {
    if (!window.matchMedia) {
      setPreferredColorScheme("light");
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setPreferredColorScheme(mediaQuery.matches ? "dark" : "light");

    function onChange(event: MediaQueryListEvent): void {
      setPreferredColorScheme(event.matches ? "dark" : "light");
    }

    mediaQuery.addEventListener("change", onChange);

    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  return preferredColorScheme;
};

export default usePrefersColorScheme;
