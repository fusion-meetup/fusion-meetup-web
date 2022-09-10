import { SanitySpeaker } from "../../types/cms/FusionEvent";
import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";

interface EventSpeakerProps {
  speaker: SanitySpeaker;
}

export const EventSpeaker: React.FC<EventSpeakerProps> = ({ speaker }) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <Heading level={4}>{speaker.name}</Heading>

        {speaker.pronouns ? <p className="opacity-30">({speaker.pronouns})</p> : null}
      </div>

      <div className="opacity-70">
        <SanityContent value={speaker.bio} />
      </div>
    </div>
  );
};
