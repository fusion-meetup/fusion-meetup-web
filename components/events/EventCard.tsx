import clsx from "clsx";
import dayjs from "dayjs";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { EventCardSpeakerImage } from "./EventCardSpeakerImage";
import { EventDetails } from "./EventDetails";

interface EventCardProps {
  event: FusionEvent;
  isFirst?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, isFirst }) => {
  return (
    <EventCardContainer
      event={event}
      isFirst={isFirst}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {event.talks.map((talk) => (
          <div key={talk._key} className="flex flex-row gap-4">
            {talk.speaker.photo ? (
              <EventCardSpeakerImage
                image={talk.speaker.photo}
                alt={`Profile photo for ${talk.speaker.name}`}
              />
            ) : null}

            <div className="flex flex-col gap-2">
              <h3 className="font-md">{talk.title}</h3>
              <p className="text-sm font-bold">{talk.speaker.name}</p>
            </div>
          </div>
        ))}
      </div>
    </EventCardContainer>
  );
};

const EventCardContainer: React.FC<{
  event: FusionEvent;
  isFirst?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ event, isFirst, className, children }) => (
  <a
    href={`/events/${event.slug}`}
    className={clsx(
      "overflow-hidden transition-all duration-300 p-1 rounded-xl relative",
      {
        "bg-slate-500 hover:bg-blue": !isFirst,
        "fusion-gradient": isFirst,
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
  </a>
);
