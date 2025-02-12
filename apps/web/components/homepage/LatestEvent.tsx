import dayjs from "dayjs";

import { Event } from "@fusion/sanity/types";

import { EventCard } from "../events/EventCard";

interface LatestEventProps {
  latestEvent: Event | null;
}

export const LatestEvent: React.FC<LatestEventProps> = ({ latestEvent }) => {
  if (!latestEvent) return null;

  const eventDate = dayjs(latestEvent.date);
  const isNextEvent = eventDate.isToday() || eventDate.isAfter(dayjs(), "day");

  return (
    <div className="relative flex flex-col">
      <div className="-mb-7 p-2 pl-4">
        <h3 className="w-max rounded-xl bg-slate-700/50 px-3 pb-6 pt-1 text-lg font-bold shadow backdrop-blur">
          {isNextEvent ? "Next Event" : "Last Event"}
        </h3>
      </div>

      <EventCard event={latestEvent} highlight={isNextEvent} />
    </div>
  );
};
