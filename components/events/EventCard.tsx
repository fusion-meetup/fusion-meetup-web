import clsx from "clsx";
import dayjs from "dayjs";
import { RiUserSmileLine } from "react-icons/ri";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { SanityImage } from "../atoms/SanityImage";
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
            <div
              className={clsx(
                "relative w-16 h-16 rounded-full overflow-hidden shrink-0",
                "flex items-center justify-center bg-blue text-4xl bg-opacity-50"
              )}
            >
              {talk.speaker.photo ? (
                <SanityImage
                  image={talk.speaker.photo}
                  layout="fill"
                  objectFit="cover"
                  alt={`Profile photo for ${talk.speaker.name}`}
                />
              ) : (
                <div className="text-4xl opacity-70">
                  <RiUserSmileLine />
                </div>
              )}
            </div>

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
