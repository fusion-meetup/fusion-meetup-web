import Image from "next/image";
import type { FC } from "react";

import type { TeamMember } from "../../types/cms/TeamMember";
import { Heading } from "../atoms/Heading";

interface MeetTheTeamProps {
  team: TeamMember[];
}

export const MeetTheTeam: FC<MeetTheTeamProps> = ({ team }) => {
  return (
    <div>
      <Heading level={3} className="py-4 pb-8">
        Meet the team
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-4">
        {team.map((teamMember) => {
          return (
            <div
              key={teamMember.key}
              className="relative flex flex-col gap-3 p-6 bg-slate-800 rounded-xl"
            >
              <div className="flex flex-col items-center w-28 xs:w-32 md:w-32 mx-auto">
                {teamMember.image && (
                  <Image
                    src={teamMember.image.src}
                    alt={teamMember.image.alt || teamMember.name}
                    className="rounded-full max-h-full"
                    width={teamMember.image.width}
                    height={teamMember.image.height}
                    layout="intrinsic"
                  />
                )}
              </div>

              <div className="flex flex-col items-center">
                <Heading level={4} className="text-center">
                  {teamMember.name}
                </Heading>

                {teamMember.twitterUrl ? (
                  <a
                    href={teamMember.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-50"
                  >
                    @{teamMember.twitter}
                  </a>
                ) : null}

                <p className="text-sm pt-1 text-center">{teamMember.intro}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
