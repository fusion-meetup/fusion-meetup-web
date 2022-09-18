import { SanitySpeaker } from "../../types/cms/FusionEvent";
import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";
import { SanityImage } from "../atoms/SanityImage";

interface EventSpeakerProps {
  speaker: SanitySpeaker;
}

export const EventSpeaker: React.FC<EventSpeakerProps> = ({ speaker }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        {speaker.photo ? (
          <div className="relative w-20 md:w-24 aspect-square">
            <SanityImage
              image={speaker.photo}
              alt={`Photo of ${speaker.name}`}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        ) : null}

        <div>
          <p className="text-xl md:text-2xl font-bold">{speaker.name}</p>

          {speaker.pronouns ? (
            <p className="opacity-50">({speaker.pronouns})</p>
          ) : null}
        </div>
      </div>

      <div className="opacity-70">
        <SanityContent value={speaker.bio} />
      </div>
    </div>
  );
};
