import { FusionLogo } from "../atoms/FusionLogo";
import { FusionLogoParallax } from "./FusionLogoParallax";

const colourBars = [
  { color: "#FF40B4", angle: -56, position: { top: "55%", left: "-5%" } },
  { color: "#54C8E8", angle: -106, position: { top: "30%", left: "30%" } },
  { color: "#FFCD02", angle: -70, position: { top: "44%", left: "55%" } },
];

export const Hero = () => {
  return (
    <div className="relative h-80 w-full md:h-[40vw] xl:h-[33rem]">
      {colourBars.map((bar, i) => (
        <HeroColourBar key={bar.color} {...{ ...bar, animationOffset: i }} />
      ))}

      <div className="absolute left-1/2 z-15 mx-auto w-96 translate-x-[-50%] p-16 pt-20 md:w-[46vw] xl:w-[36rem]">
        <FusionLogoParallax />

        <noscript>
          <div className="relative">
            <div className="absolute top-0 h-full w-full">
              <FusionLogo />
            </div>
          </div>
        </noscript>
      </div>
    </div>
  );
};

interface HeroColourBarProps {
  color: string;
  angle: number;
  animationOffset: number;
  position: { top: string; left: string };
}

export const HeroColourBar: React.FC<HeroColourBarProps> = ({
  color,
  angle,
  animationOffset,
  position,
}) => {
  return (
    <div
      className="motion-safe:animate-chillin absolute h-0 w-0"
      style={{ ...position, animationDelay: `${animationOffset * 1500}ms` }}
    >
      <div
        className="h-[12vw] w-[52vw] opacity-25 blur-xl"
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
