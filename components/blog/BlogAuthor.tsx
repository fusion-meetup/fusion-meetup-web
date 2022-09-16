import Image from "next/image";

import { TeamMember } from "../../types/cms/TeamMember";
import { SanityImage } from "../atoms/SanityImage";

interface BlogAuthorProps {
  teamMember: TeamMember;
  enableTwitterLink?: boolean;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = ({
  teamMember,
  enableTwitterLink,
}) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      {teamMember.image ? (
        <div className="relative w-10 h-10">
          <SanityImage
            image={teamMember.image}
            alt={`Profile photo for ${teamMember.name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      ) : null}

      <div>
        <h5 className="font-bold">{teamMember.name}</h5>

        <div className="text-sm opacity-50">
          {enableTwitterLink && teamMember.twitterUrl ? (
            <a
              href={teamMember.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
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
