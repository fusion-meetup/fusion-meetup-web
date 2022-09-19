import { SanitySpeaker } from "../../types/cms/FusionEvent";
import { SanityContent } from "../atoms/SanityContent";
import { SpeakerImage } from "./SpeakerImage";

interface EventSpeakerProps {
  speaker: SanitySpeaker;
}

export const EventSpeaker: React.FC<EventSpeakerProps> = ({ speaker }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        {speaker.photo ? (
          <div className="relative">
            <SpeakerImage
              speaker={speaker}
              className="w-20 md:w-24 aspect-square"
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
