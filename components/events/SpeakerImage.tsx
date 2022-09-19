import clsx from "clsx";
import { RiUserSmileLine } from "react-icons/ri";

import { SanitySpeaker } from "../../types/cms/FusionEvent";
import { SanityImage } from "../atoms/SanityImage";

interface SpeakerImageProps {
  speaker: SanitySpeaker;
  className?: string;
  small?: boolean;
}

export const SpeakerImage: React.FC<SpeakerImageProps> = ({
  speaker,
  className,
  small,
}) => {
  return (
    <div
      className={clsx(
        className,
        "relative rounded-full overflow-hidden shrink-0",
        "flex items-center justify-center bg-blue text-4xl bg-opacity-50"
      )}
    >
      {speaker.photo ? (
        <SanityImage
          image={speaker.photo}
          layout="intrinsic"
          objectFit="cover"
          alt={`Profile photo for ${speaker.name}`}
          priority
        />
      ) : (
        <div className={clsx("opacity-70 text-2xl", { "text-4xl": !small })}>
          <RiUserSmileLine />
        </div>
      )}
    </div>
  );
};
