import type { FC } from "react";

import { GetTeamMembersQueryResult } from "@fusion/sanity/types";

import { Heading } from "../atoms/Heading";
import { SanityImage } from "../atoms/SanityImage";

interface MeetTheTeamProps {
  team: GetTeamMembersQueryResult;
}

export const MeetTheTeam: FC<MeetTheTeamProps> = ({ team }) => {
  return (
    <div>
      <Heading level={2} className="py-4 pb-8">
        Meet the team
      </Heading>

      <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {team.map((teamMember) => (
          <div
            key={teamMember._id}
            className="relative flex flex-col gap-3 rounded-xl bg-slate-800 p-6 shadow"
          >
            <div className="flex flex-col items-center">
              {teamMember.image && (
                <div className="xs:w-32 relative aspect-square w-28 overflow-hidden rounded-full md:w-32">
                  <SanityImage
                    image={teamMember.image}
                    alt={`Profile photo for ${teamMember.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <p className="text-center text-xl md:text-2xl">
                {teamMember.name}
              </p>

              {teamMember.twitter ? (
                <a
                  href={`https://twitter.com/${teamMember.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-50"
                >
                  @{teamMember.twitter}
                </a>
              ) : null}

              <p className="pt-1 text-center text-sm">{teamMember.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
