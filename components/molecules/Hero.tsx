import dynamic from "next/dynamic";

import { FusionLogo } from "../atoms/FusionLogo";

const FusionLogoParallax = dynamic(() => import("../molecules/FusionLogoParallax"), {
  ssr: false,
});

const colourBars = [
  { color: "#FF40B4", angle: -56, position: { top: "55%", left: "-5%" } },
  { color: "#54C8E8", angle: -106, position: { top: "30%", left: "30%" } },
  { color: "#FFCD02", angle: -70, position: { top: "44%", left: "55%" } },
];

export const Hero = () => {
  return (
    <div className="w-full h-80 md:h-[40vw] xl:h-[33rem] relative">
      {colourBars.map((bar, i) => (
        <HeroColourBar key={bar.color} {...{ ...bar, animationOffset: i }} />
      ))}

      <div className="absolute left-1/2 translate-x-[-50%] w-96 md:w-[46vw] xl:w-[36rem] mx-auto p-16 pt-20 z-15">
        <FusionLogoParallax />

        <noscript>
          <div className="relative">
            <div className="absolute top-0 w-full h-full">
              <FusionLogo />
            </div>
          </div>
        </noscript>
      </div>
    </div>
  );
};

interface HeroColourBar {
  color: string;
  angle: number;
  animationOffset: number;
  position: { top: string; left: string };
}

export const HeroColourBar: React.FC<HeroColourBar> = ({
  color,
  angle,
  animationOffset,
  position,
}) => {
  return (
    <div
      className="absolute motion-safe:animate-chillin h-0 w-0"
      style={{ ...position, animationDelay: `${animationOffset * 1500}ms` }}
    >
      <div
        className="w-[52vw] h-[12vw] blur-xl opacity-25"
        style={{
          background: color,
          transform: `rotate(${angle}deg)`,
        }}
      >
        &nbsp;
      </div>
    </div>
  );
};
