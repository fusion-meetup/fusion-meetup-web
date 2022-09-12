import clsx from "clsx";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { EventCard } from "../events/EventCard";

interface NextEventProps {
  nextEvent: FusionEvent | undefined;
}

export const NextEvent: React.FC<NextEventProps> = ({ nextEvent }) => {
  if (!nextEvent) return null;

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
          Next Event
        </h3>
      </div>

      <EventCard event={nextEvent} isFirst />
    </div>
  );
};
