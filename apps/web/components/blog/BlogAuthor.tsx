import { TeamMember } from "@fusion/sanity/types";

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
    <div className="flex flex-row items-center gap-3">
      {teamMember.image ? (
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <SanityImage
            image={teamMember.image}
            alt={`Profile photo for ${teamMember.name}`}
            layout="fixed"
            objectFit="cover"
            width={40}
            height={40}
          />
        </div>
      ) : null}

      <div>
        <p className="font-bold">{teamMember.name}</p>

        <div className="text-sm opacity-50">
          {enableTwitterLink && teamMember.twitter ? (
            <a
              href={`https://twitter.com/${teamMember.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{teamMember.twitter}
            </a>
          ) : teamMember.twitter ? (
            <>@{teamMember.twitter}</>
          ) : null}
        </div>
      </div>
    </div>
  );
};
