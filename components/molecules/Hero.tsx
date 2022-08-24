import Image from "next/image";

import FusionLogo from "../../public/fusion-logo.png";

const colourBars = [
  { color: "#FF40B4", angle: -56, position: { top: "55%", left: "-5%" } },
  { color: "#54C8E8", angle: -106, position: { top: "35%", left: "30%" } },
  { color: "#FFCD02", angle: -70, position: { top: "44%", left: "52%" } },
];

export const Hero = () => {
  return (
    <div className="w-full h-80 md:h-[40vw] xl:h-[33rem] relative overflow-hidden">
      {colourBars.map((bar, i) => (
        <HeroColourBar key={bar.color} {...{ ...bar, animationOffset: i }} />
      ))}

      <div className="absolute w-full bottom-0 h-20 bg-gradient-to-b from-transparent to-slate-100"></div>
      <div className="absolute w-full bottom-[-1px] h-[2px] bg-slate-100"></div>

      <div className="absolute left-1/2 translate-x-[-52.5%] w-96 md:w-[46vw] xl:w-[36rem] mx-auto p-16 pt-20 z-15">
        <Image
          alt="Fusion Logo"
          src={FusionLogo}
          layout="responsive"
          width={1364}
          height={1184}
        />
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
      className="absolute motion-safe:animate-chillin"
      style={{ ...position, animationDelay: `${animationOffset * 600}ms` }}
    >
      <div
        className="w-[52vw] h-[12vw] blur-lg opacity-60"
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
