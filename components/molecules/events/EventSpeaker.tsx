import { SanitySpeaker } from "../../../types/cms/FusionEvent";
import { Heading } from "../../atoms/Heading";
import { SanityContent } from "../../atoms/SanityContent";

interface EventSpeakerProps {
  speaker: SanitySpeaker;
}

export const EventSpeaker: React.FC<EventSpeakerProps> = ({ speaker }) => {
  return (
    <div>
      <Heading level={4}>{speaker.name}</Heading>

      <div className="opacity-70">
        <SanityContent value={speaker.bio} />
      </div>
    </div>
  );
};
