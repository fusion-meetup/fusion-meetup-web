import { FaArrowDown } from "react-icons/fa";

import { Sponsor } from "@fusion/sanity/types";

import { cn } from "@ui/lib/utils";

import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";
import { SanityImage } from "../atoms/SanityImage";

interface EventSponsorsProps {
  sponsors?: Sponsor[];
}

export const EventSponsors: React.FC<EventSponsorsProps> = ({ sponsors }) => {
  if (!sponsors) return null;

  return (
    <div>
      <Heading level={2}>Sponsors</Heading>
      <p className="py-2">
        Fusion is made possible with the help of our awesome sponsors!{" "}
        <span className="inline-block translate-y-[1px] pl-1">
          <FaArrowDown />
        </span>
      </p>

      <div className="flex flex-col gap-6 pt-6">
        {sponsors.map((sponsor, i) => {
          const logo = sponsor.logoDark ?? sponsor.logo;
          return (
            <div
              key={i}
              className="grid grid-cols-1 gap-8 rounded-xl bg-slate-800 p-8 md:grid-cols-[1fr_2fr] md:gap-12"
            >
              <div className="flex w-2/3 flex-row items-center sm:w-1/2 md:w-full">
                {logo ? (
                  <SanityImage
                    image={logo}
                    alt={`${sponsor.name} logo`}
                    layout="intrinsic"
                  />
                ) : null}
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="text-xl font-bold md:text-2xl">
                    {sponsor.name}
                  </p>

                  {sponsor.level ? (
                    <div
                      className={cn(
                        "w-[7em] rounded-full py-[3px] text-center text-sm font-semibold uppercase shadow",
                        sponsorLevelTagClasses[sponsor.level],
                      )}
                    >
                      {sponsor.level}
                    </div>
                  ) : null}
                </div>

                <div className="opacity-70">
                  <SanityContent content={sponsor.content} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const sponsorLevelTagClasses: {
  [_key in Exclude<Sponsor["level"], undefined>]: string;
} = {
  headline: "bg-gradient-to-r from-blue-700 via-pink-700 to-yellow-600",
  platinum: "bg-[#dad9d7] text-black",
  gold: "bg-[#9b7700]",
  silver: "bg-[#6f6f76]",
  bronze: "bg-[#78512b]",
};
