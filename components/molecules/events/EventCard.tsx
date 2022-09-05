import dayjs from "dayjs";

import { FusionEvent } from "../../../types/cms/FusionEvent";

interface EventCardProps {
  event: FusionEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <a
      key={event.key}
      href={`/events/${event.slug}`}
      className="group bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-md p-6 border-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {event.eventTypeDisplay}
        </h2>
        <p>{dayjs(event.date).format("Do MMMM, YYYY")}</p>
      </div>
    </a>
  );
};
