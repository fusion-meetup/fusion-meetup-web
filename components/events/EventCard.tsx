import clsx from "clsx";
import dayjs from "dayjs";
import Link from "next/link";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { EventDetails } from "./EventDetails";
import { SpeakerImage } from "./SpeakerImage";

interface EventCardProps {
  event: FusionEvent;
  highlight?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, highlight }) => {
  return (
    <EventCardContainer
      event={event}
      highlight={highlight}
      className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6"
    >
      <div className="flex flex-col gap-2">
        <h2 className="transition-all text-3xl font-bold uppercase">
          {dayjs(event.date).format("MMMM YYYY")}
        </h2>

        <div className="pt-4">
          <EventDetails event={event} />
        </div>
      </div>

      {event.talks.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {event.talks.map((talk) => (
            <div key={talk._key} className="flex flex-row gap-4">
              <SpeakerImage speaker={talk.speaker} className="w-16 h-16" />

              <div className="flex flex-col gap-2">
                <h3 className="font-md">{talk.title}</h3>
                <p className="text-sm font-bold">{talk.speaker.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="opacity-40 flex items-center justify-center text-xl font-semibold">
          More info coming soon 👀
        </div>
      )}
    </EventCardContainer>
  );
};

const EventCardContainer: React.FC<{
  event: FusionEvent;
  highlight?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ event, highlight, className, children }) => (
  <Link
    href={`/events/${event.slug}`}
    className={clsx(
      "overflow-hidden transition-all duration-300 p-1 rounded-xl relative",
      {
        "bg-slate-500 hover:bg-blue": !highlight,
        "fusion-gradient": highlight,
      },
      "group shadow-sm hover:shadow-xl"
    )}
  >
    <div
      className={clsx(
        "relative z-1 bg-white rounded-lg shadow-sm p-6",
        "transition-all bg-opacity-90 group-hover:bg-opacity-100",
        "dark:shadow-md dark:bg-slate-800 dark:bg-opacity-100 dark:group-hover:bg-opacity-90"
      )}
    >
      <div className={className}>{children}</div>
    </div>
  </Link>
);
