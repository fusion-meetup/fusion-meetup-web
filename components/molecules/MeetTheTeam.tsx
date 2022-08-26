import Image from "next/image";
import type { FC } from "react";

import type { TeamMember } from "../../types/cms/TeamMember";

interface MeetTheTeamProps {
  team: TeamMember[];
}

export const MeetTheTeam: FC<MeetTheTeamProps> = ({ team }) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold py-2">Meet the team</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-10 py-4">
        {team.map((teamMember) => {
          return (
            <div
              key={teamMember.key}
              className="relative flex flex-col gap-4 items-center"
            >
              <div className="relative px-4">
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

              <h2 className="font-bold text-white">{teamMember.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
