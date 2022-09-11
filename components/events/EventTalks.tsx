import { SanityTalk } from "../../types/cms/FusionEvent";
import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";
import { EventSpeaker } from "./EventSpeaker";

interface EventTalksProps {
  talks: SanityTalk[];
}

export const EventTalks: React.FC<EventTalksProps> = ({ talks }) => {
  return (
    <div className="p-8 rounded-xl bg-white dark:bg-blue-800 dark:bg-opacity-50 shadow">
      <Heading level={2}>Talks</Heading>

      <div className="flex flex-col pt-6">
        {talks.map((talk, i) => (
          <>
            {i ? (
              <div className="py-4">
                <hr className="border-2 border-slate-800 dark:border-white rounded-full opacity-10" />
              </div>
            ) : null}

            <div key={talk._key} className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <Heading level={4}>{talk.title}</Heading>

                <div className="opacity-70">
                  <SanityContent value={talk.overview} />
                </div>
              </div>

              <EventSpeaker speaker={talk.speaker} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
