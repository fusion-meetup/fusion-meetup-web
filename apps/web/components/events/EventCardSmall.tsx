import Link from "next/link";

import dayjs from "dayjs";

import { Event } from "@fusion/sanity/types";

import { cn } from "@ui/lib/utils";

import { EventDetails } from "./EventDetails";
import { LightningTalkBadge } from "./LightningTalkBadge";
import { SpeakerImage } from "./SpeakerImage";

interface EventCardSmallProps {
  event: Event;
  className?: string;
}

export const EventCardSmall: React.FC<EventCardSmallProps> = ({
  event,
  className,
}) => {
  if (!event.slug?.current) return null;

  return (
    <Link
      href={`/events/${event.slug?.current}`}
      className={cn(
        "group overflow-hidden rounded-xl bg-slate-800 p-6 shadow-lg hover:ring-4 hover:ring-blue-400",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold uppercase group-hover:text-blue-400">
          {dayjs(event.date).format("MMMM YYYY")}
        </h2>

        <div className="pt-2">
          <EventDetails event={event} small />
        </div>
      </div>

      {event.talks?.length ? (
        <>
          <div className="py-4">
            <hr className="rounded-full border-2 border-white opacity-10" />
          </div>

          <div className="flex flex-col gap-2">
            {event.talks.map((talk) => (
              <div key={talk._key} className="flex flex-row gap-4">
                <div className="flex flex-row items-center gap-3">
                  <SpeakerImage
                    speaker={talk.speaker}
                    className="h-8 w-8"
                    small
                  />

                  <div>
                    <p className="font-bold">
                      {talk.speaker?.name ?? "Unknown"}
                    </p>

                    {talk.isLightningTalk ? (
                      <div className="py-1">
                        <LightningTalkBadge basic />
                      </div>
                    ) : null}

                    <p className="text-sm opacity-50">{talk.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </Link>
  );
};
