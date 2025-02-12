import { Speaker } from "@fusion/sanity/types";

import { SanityContent } from "../atoms/SanityContent";
import { SpeakerImage } from "./SpeakerImage";

interface EventSpeakerProps {
  speaker?: Speaker;
}

export const EventSpeaker: React.FC<EventSpeakerProps> = ({ speaker }) => {
  if (!speaker) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        {speaker.photo ? (
          <div className="relative">
            <SpeakerImage
              speaker={speaker}
              className="aspect-square w-20 md:w-24"
            />
          </div>
        ) : null}

        <div>
          <p className="text-xl font-bold md:text-2xl">{speaker.name}</p>

          {speaker.pronouns ? (
            <p className="opacity-50">({speaker.pronouns})</p>
          ) : null}
        </div>
      </div>

      <div className="opacity-70">
        <SanityContent content={speaker.bio} />
      </div>
    </div>
  );
};
