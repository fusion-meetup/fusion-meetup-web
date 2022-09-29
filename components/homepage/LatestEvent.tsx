import clsx from "clsx";
import dayjs from "dayjs";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { EventCard } from "../events/EventCard";

interface LatestEventProps {
  latestEvent: FusionEvent | null;
}

export const LatestEvent: React.FC<LatestEventProps> = ({ latestEvent }) => {
  if (!latestEvent) return null;

  const eventDate = dayjs(latestEvent.date);
  const isNextEvent = eventDate.isToday() || eventDate.isAfter(dayjs(), "day");

  return (
    <div className="flex flex-col relative">
      <div className="p-2 pl-4 -mb-7">
        <h3
          className={clsx(
            "shadow font-bold w-max rounded-xl pt-1 px-3 pb-6 text-lg",
            "bg-white bg-opacity-50 backdrop-blur",
            "dark:bg-slate-700 dark:bg-opacity-50"
          )}
        >
          {isNextEvent ? "Next Event" : "Last Event"}
        </h3>
      </div>

      <EventCard event={latestEvent} highlight={isNextEvent} />
    </div>
  );
};
