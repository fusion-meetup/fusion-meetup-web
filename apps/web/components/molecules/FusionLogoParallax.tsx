"use client";

import { useEffect, useState } from "react";

import { animated, useSpring } from "react-spring";

import usePrefersReducedMotion from "@ui/lib/hooks/usePrefersReducedMotion";
import { cn } from "@ui/lib/utils";

import { FusionLogo, LogoComponent } from "../atoms/FusionLogo";

// TODO: Fix mouse scope on either side
// TODO: Make this use accelerometer instead of mouse position on mobile

const FusionLogoParallax = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [rendered, setRendered] = useState(false);

  const [springProps, setMouse] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 2, tension: 400, friction: 90 },
  }));

  useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 0);
  }, []);

  const animatedLogoComponent = (
    logoComponents: LogoComponent[],
    translateFn: (_x: number, _y: number) => string,
    className?: string,
    classNameInit?: string,
    classNameRendered?: string,
  ) => (
    <animated.div
      className="absolute top-0 h-full w-full"
      style={{
        transform: prefersReducedMotion
          ? undefined
          : springProps.xy.to(translateFn),
      }}
    >
      <div
        className={cn(
          "transition-all",
          className,
          !rendered && classNameInit,
          rendered && classNameRendered,
        )}
      >
        <FusionLogo logoComponents={logoComponents} />
      </div>
    </animated.div>
  );

  return (
    <div
      className="relative"
      onMouseMove={({ clientX: x, clientY: y }) =>
        setMouse({ xy: calcXy(x, y) })
      }
      onMouseLeave={() => setMouse({ xy: [0, 0] })}
    >
      {animatedLogoComponent(
        ["barBlueBehind"],
        translateZ(24),
        "duration-1000 delay-100",
        "-translate-y-12 -translate-x-4",
        "translate-y-0 translate-x-0",
      )}

      {animatedLogoComponent(["rectangleFrame"], translateZ(80))}

      {animatedLogoComponent(
        ["barBlueInfront"],
        translateZ(24),
        "duration-1000 delay-100",
        "-translate-y-12 -translate-x-4",
        "translate-y-0 translate-x-0",
      )}

      {animatedLogoComponent(
        ["barPink"],
        translateZ(20),
        "duration-1000",
        "translate-y-12 -translate-x-8",
        "translate-y-0 translate-x-0",
      )}

      {animatedLogoComponent(
        ["barYellow"],
        translateZ(20),
        "duration-1000 delay-200",
        "translate-y-12 -translate-x-4",
        "translate-y-0 translate-x-0",
      )}

      {animatedLogoComponent(
        ["fusionText"],
        translateZ(14),
        "duration-1000 delay-500 origin-[50%_45%]",
        "opacity-0",
        "opacity-100",
      )}
    </div>
  );
};

const calcXy = (x: number, y: number) =>
  typeof window !== "undefined"
    ? [x - window.innerWidth / 2, y - window.innerHeight / 2 + 140]
    : [x, y];

const translateZ = (z: number) => (x: number, y: number) =>
  `translate3d(${x / z}px, ${y / z}px, 0)`;

export default FusionLogoParallax;
