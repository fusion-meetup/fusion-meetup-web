import Image from "next/image";

import { TeamMember } from "../../types/cms/TeamMember";

interface BlogAuthorProps {
  teamMember: TeamMember;
  enableTwitterLink?: boolean;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = ({
  teamMember,
  enableTwitterLink,
}) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      {teamMember.image ? (
        <div className="w-10 h-10">
          <Image
            src={teamMember.image.src}
            alt={teamMember.image.alt || teamMember.name}
            className="rounded-full max-h-full"
            width={teamMember.image.width}
            height={teamMember.image.height}
            layout="intrinsic"
          />
        </div>
      ) : null}

      <div>
        <h5 className="font-bold">{teamMember.name}</h5>

        <div className="text-sm opacity-50">
          {enableTwitterLink && teamMember.twitterUrl ? (
            <a href={teamMember.twitterUrl} target="_blank" rel="noopener noreferrer">
              @{teamMember.twitter}
            </a>
          ) : (
            <>@{teamMember.twitter}</>
          )}
        </div>
      </div>
    </div>
  );
};
