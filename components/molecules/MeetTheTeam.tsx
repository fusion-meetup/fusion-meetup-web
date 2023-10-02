import type { FC } from "react";

import type { TeamMember } from "../../types/cms/TeamMember";
import { Heading } from "../atoms/Heading";
import { SanityImage } from "../atoms/SanityImage";

interface MeetTheTeamProps {
  team: TeamMember[];
}

export const MeetTheTeam: FC<MeetTheTeamProps> = ({ team }) => {
  return (
    <div>
      <Heading level={2} className="py-4 pb-8">
        Meet the team
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-4">
        {team.map((teamMember) => (
          <TeamMemberCard key={teamMember.key} teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
};

export const TeamMemberCard: React.FC<{ teamMember: TeamMember }> = ({
  teamMember,
}) => (
  <div className="relative flex flex-col gap-3 p-6 bg-slate-100 dark:bg-slate-800 rounded-xl shadow">
    <div className="flex flex-col items-center">
      {teamMember.image && (
        <div className="relative w-28 xs:w-32 md:w-32 aspect-square rounded-full overflow-hidden">
          <SanityImage
            image={teamMember.image}
            alt={`Profile photo for ${teamMember.name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </div>

    <TeamMemberDetails teamMember={teamMember} />
  </div>
);

const TeamMemberDetails: React.FC<{ teamMember: TeamMember }> = ({
  teamMember,
}) => (
  <div className="flex flex-col items-center">
    <p className="text-xl md:text-2xl text-center">{teamMember.name}</p>

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
);
