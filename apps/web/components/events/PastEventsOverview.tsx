import { FaArrowRight } from "react-icons/fa";

import { Event } from "@fusion/sanity/types";

import { cn } from "@ui/lib/utils";

import { Button } from "../atoms/Button";
import { EventCardSmall } from "./EventCardSmall";

interface PastEventsOverviewProps {
  pastFourEvents: Event[];
}

export const PastEventsOverview: React.FC<PastEventsOverviewProps> = ({
  pastFourEvents,
}) => {
  return (
    <div className="flex flex-col gap-8 py-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pastFourEvents.slice(0, 4).map((event, i) => (
          <EventCardSmall
            event={event}
            key={event._id}
            className={cn({
              "hidden sm:block": i === 1,
              "hidden lg:block": i === 2,
              "hidden xl:block": i === 3,
            })}
          />
        ))}
      </div>

      <Button href="/events" color="blue">
        More past events <FaArrowRight />
      </Button>
    </div>
  );
};
