import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { Button } from "../atoms/Button";
import { EventCardSmall } from "./EventCardSmall";

interface PastEventsOverviewProps {
  pastFourEvents: FusionEvent[];
}

export const PastEventsOverview: React.FC<PastEventsOverviewProps> = ({
  pastFourEvents,
}) => {
  return (
    <div className="flex flex-col gap-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pastFourEvents.slice(0, 4).map((event, i) => (
          <EventCardSmall
            event={event}
            key={event.key}
            className={clsx({
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
