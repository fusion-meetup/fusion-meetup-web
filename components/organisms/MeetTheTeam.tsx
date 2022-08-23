import type { FC } from "react";

import type { TeamMember } from "../../types/cms/TeamMember";

interface MeetTheTeamProps {
  team: TeamMember[];
}

export const MeetTheTeam: FC<MeetTheTeamProps> = ({ team }) => {
  return (
    <div>
      {team.map((teamMember) => {
        return <div key={teamMember.id}>{teamMember.name}</div>;
      })}
    </div>
  );
};
