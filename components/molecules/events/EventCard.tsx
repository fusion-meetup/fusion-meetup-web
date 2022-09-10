import clsx from "clsx";
import dayjs from "dayjs";

import { FusionEvent } from "../../../types/cms/FusionEvent";
import { EventDetails } from "./EventDetails";

interface EventCardProps {
  event: FusionEvent;
  isFirst?: boolean;
  isUpcoming?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, isFirst, isUpcoming }) => {
  return (
    <a
      key={event.key}
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
          "relative z-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-md p-6",
          { "dark:bg-slate-700": isUpcoming },
          "transition-opacity group-hover:bg-opacity-90"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="transition-all text-3xl font-bold uppercase">
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
