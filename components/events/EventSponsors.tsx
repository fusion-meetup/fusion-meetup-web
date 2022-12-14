import clsx from "clsx";
import { FaArrowDown } from "react-icons/fa";

import { SanitySponsor, SponsorLevel } from "../../types/cms/FusionEvent";
import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";
import { SanityImage } from "../atoms/SanityImage";

interface EventSponsorsProps {
  sponsors: SanitySponsor[];
}

export const EventSponsors: React.FC<EventSponsorsProps> = ({ sponsors }) => {
  return (
    <div>
      <Heading level={2}>Sponsors</Heading>
      <p className="py-2">
        Fusion is made possible with the help of our awesome sponsors!{" "}
        <span className="inline-block pl-1 translate-y-[1px]">
          <FaArrowDown />
        </span>
      </p>

      <div className="flex flex-col gap-6 pt-6">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor._key}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 p-8 rounded-xl bg-white dark:bg-slate-800"
          >
            <div className="w-2/3 sm:w-1/2 md:w-full flex flex-row items-center">
              <div className="dark:hidden">
                <SanityImage
                  image={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  layout="intrinsic"
                />
              </div>

              <div className="hidden dark:block">
                <SanityImage
                  image={sponsor.logoDark}
                  alt={`${sponsor.name} logo`}
                  layout="intrinsic"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-row w-full justify-between items-center">
                <p className="text-xl md:text-2xl font-bold">{sponsor.name}</p>

                <div
                  className={clsx(
                    "rounded-full py-[3px] shadow uppercase font-semibold text-sm w-[7em] text-center",
                    sponsorLevelTagClasses[sponsor.level]
                  )}
                >
                  {sponsor.level}
                </div>
              </div>

              <div className="opacity-70">
                <SanityContent value={sponsor.content} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const sponsorLevelTagClasses: { [key in SponsorLevel]: string } = {
  headline:
    "bg-gradient-to-r from-blue-300 via-pink-400 to-yellow-300" +
    " dark:from-blue-700 dark:via-pink-700 dark:to-yellow-600",
  platinum: "bg-[#dad9d7] dark:bg-[#dad9d7] dark:text-black",
  gold: "bg-[#e6b206] dark:bg-[#9b7700]",
  silver: "bg-[#b3b3ba] dark:bg-[#6f6f76]",
  bronze: "bg-[#d1873d] dark:bg-[#78512b]",
};
