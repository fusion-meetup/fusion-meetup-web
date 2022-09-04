import { SanityTalk } from "../../../types/cms/FusionEvent";
import { Heading } from "../../atoms/Heading";
import { SanityContent } from "../../atoms/SanityContent";
import { EventSpeaker } from "./EventSpeaker";

interface EventTalksProps {
  talks: SanityTalk[];
}

export const EventTalks: React.FC<EventTalksProps> = ({ talks }) => {
  return (
    <div className="p-8 rounded-xl bg-white dark:bg-blue-800 dark:bg-opacity-25 shadow">
      <Heading level={2}>Talks</Heading>

      <div className="flex flex-col gap-6 pt-6">
        {talks.map((talk) => (
          <div
            key={talk._key}
            className="py-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[3fr_2fr] gap-4 md:gap-10"
          >
            <div className="flex flex-col gap-2">
              <Heading level={4}>{talk.title}</Heading>

              <div className="opacity-70">
                <SanityContent value={talk.overview} />
              </div>
            </div>

            <EventSpeaker speaker={talk.speaker} />
          </div>
        ))}
      </div>
    </div>
  );
};
