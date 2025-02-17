import { Talk } from "@fusion/sanity/types";

import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";
import { EventSpeaker } from "./EventSpeaker";
import { LightningTalkBadge } from "./LightningTalkBadge";

interface EventTalksProps {
  talks: Talk[];
}

export const EventTalks: React.FC<EventTalksProps> = ({ talks }) => {
  return (
    <div className="rounded-xl bg-blue-800/30 p-8 shadow">
      <Heading level={2}>Talks</Heading>

      <div className="flex flex-col pt-6">
        {talks.map((talk, i) => (
          <div key={i}>
            {i ? (
              <div className="py-4 md:py-6">
                <hr className="rounded-full border-2 border-white opacity-10" />
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-4 gap-y-6 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-xl font-bold md:text-2xl">{talk.title}</p>

                {talk.isLightningTalk ? <LightningTalkBadge /> : null}

                <div className="opacity-70">
                  <SanityContent content={talk.overview} />
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
