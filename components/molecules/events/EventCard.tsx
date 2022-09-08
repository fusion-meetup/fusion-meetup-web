import clsx from "clsx";
import dayjs from "dayjs";

import { FusionEvent } from "../../../types/cms/FusionEvent";
import { EventDetails } from "./EventDetails";

interface EventCardProps {
  event: FusionEvent;
  large?: boolean;
  isFirst?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, large, isFirst }) => {
  if (!large) {
    return (
      <a
        key={event.key}
        href={`/events/${event.slug}`}
        className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-md p-6 border-4 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {event.eventTypeDisplay}
          </h2>
          <p>{dayjs(event.date).format("Do MMMM, YYYY")}</p>
        </div>
      </a>
    );
  }

  return (
    <a
      key={event.key}
      href={`/events/${event.slug}`}
      className={clsx(
        "overflow-hidden transition-all duration-300",
        { "fusion-gradient p-1 rounded-xl relative": isFirst },
        "shadow-sm hover:shadow-xl"
      )}
    >
      <div
        className={clsx(
          "relative z-1 group bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-md p-6",
          {
            "border-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400":
              !isFirst,
          }
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="transition-all text-3xl font-bold uppercase group-hover:text-blue-700 dark:group-hover:text-blue-400">
              {dayjs(event.date).format("MMMM YYYY")}
            </h2>

            <div className="pt-4">
              <EventDetails event={event} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event.talks.map((talk) => (
              <div key={talk._key} className="flex flex-col gap-2">
                <h3 className="font-md font-bold">{talk.title}</h3>
                <p className="text-sm">{talk.speaker.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};
