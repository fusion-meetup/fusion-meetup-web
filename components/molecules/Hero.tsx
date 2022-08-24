import clsx from "clsx";

const bars = [
  { color: "#FF40B4", angle: -56, position: { top: "50%", left: "0%" } },
  { color: "#54C8E8", angle: -110, position: { top: "0%", left: "50%" } },
  { color: "#FFCD02", angle: -70, position: { top: "10%", left: "60%" } },
];

export const Hero = () => {
  return (
    <div className="w-full h-[40vh] relative">
      {bars.map((bar, i) => (
        <HeroColourBar key={bar.color} {...{ ...bar, animationOffset: i }} />
      ))}
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
      className={clsx("absolute w-[45vw] h-[10vw]")}
      style={{
        background: color,
        transform: `rotate(${angle}deg)`,
        ...position,
      }}
    >
      &nbsp;
    </div>
  );
};
