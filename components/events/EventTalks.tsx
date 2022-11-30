import { SanityTalk } from "../../types/cms/FusionEvent";
import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";
import { EventSpeaker } from "./EventSpeaker";
import { LightningTalkBadge } from "./LightningTalkBadge";

interface EventTalksProps {
  talks: SanityTalk[];
}

export const EventTalks: React.FC<EventTalksProps> = ({ talks }) => {
  return (
    <div className="p-8 rounded-xl bg-slate-100 dark:bg-blue-800 dark:bg-opacity-30 shadow">
      <Heading level={2}>Talks</Heading>

      <div className="flex flex-col pt-6">
        {talks.map((talk, i) => (
          <div key={talk._key}>
            {i ? (
              <div className="py-4 md:py-6">
                <hr className="border-2 border-slate-800 dark:border-white rounded-full opacity-10" />
              </div>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6 md:gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-xl md:text-2xl font-bold">{talk.title}</p>

                {talk.isLightningTalk ? <LightningTalkBadge /> : null}

                <div className="opacity-70">
                  <SanityContent value={talk.overview} />
                </div>
              </div>

              <EventSpeaker speaker={talk.speaker} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
