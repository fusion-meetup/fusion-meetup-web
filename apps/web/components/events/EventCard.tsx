import Link from "next/link";

import dayjs from "dayjs";

import { Event } from "@fusion/sanity/types";

import { cn } from "@ui/lib/utils";

import { EventDetails } from "./EventDetails";
import { LightningTalkBadge } from "./LightningTalkBadge";
import { SpeakerImage } from "./SpeakerImage";

interface EventCardProps {
  event: Event;
  highlight?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, highlight }) => {
  return (
    <EventCardContainer
      event={event}
      highlight={highlight}
      className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_3fr]"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold uppercase transition-all">
          {dayjs(event.date).format("MMMM YYYY")}
        </h2>

        <div className="pt-4">
          <EventDetails event={event} />
        </div>
      </div>

      {event.talks?.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
          {event.talks.map((talk) => (
            <div key={talk._key} className="flex flex-row gap-4">
              <SpeakerImage speaker={talk.speaker} className="h-16 w-16" />

              <div className="flex flex-col gap-2">
                <h3 className="font-md">{talk.title}</h3>
                {talk.isLightningTalk ? <LightningTalkBadge basic /> : null}
                <p className="text-sm font-bold">
                  {talk.speaker?.name ?? "Unknown"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center text-xl font-semibold opacity-40">
          More info coming soon 👀
        </div>
      )}
    </EventCardContainer>
  );
};

const EventCardContainer: React.FC<{
  event: Event;
  highlight?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ event, highlight, className, children }) => (
  <Link
    href={`/events/${event.slug?.current ?? "#"}`}
    className={cn(
      "group relative overflow-hidden rounded-xl p-1 shadow-sm hover:shadow-xl",
      highlight ? "fusion-gradient" : "bg-slate-500 hover:bg-blue",
    )}
  >
    <div className="z-1 relative rounded-lg bg-slate-800 p-6 shadow-md group-hover:bg-opacity-90">
      <div className={className}>{children}</div>
    </div>
  </Link>
);
