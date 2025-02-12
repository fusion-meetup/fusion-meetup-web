import { RiUserSmileLine } from "react-icons/ri";

import { Speaker } from "@fusion/sanity/types";

import { cn } from "@ui/lib/utils";

import { SanityImage } from "../atoms/SanityImage";

interface SpeakerImageProps {
  speaker?: Speaker;
  className?: string;
  small?: boolean;
}

export const SpeakerImage: React.FC<SpeakerImageProps> = ({
  speaker,
  className,
  small,
}) => {
  if (!speaker) return null;

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue bg-opacity-50 text-4xl",
        className,
      )}
    >
      {speaker.photo ? (
        <SanityImage
          image={speaker.photo}
          layout="fill"
          objectFit="cover"
          alt={`Profile photo for ${speaker.name}`}
        />
      ) : (
        <div className={cn("text-2xl opacity-70", { "text-4xl": !small })}>
          <RiUserSmileLine />
        </div>
      )}
    </div>
  );
};
