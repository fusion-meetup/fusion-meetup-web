import { CodeOfConduct, Event } from "@fusion/sanity/types";

import { FusionLogo } from "../atoms/FusionLogo";
import { Heading } from "../atoms/Heading";
import { EventDetails } from "./EventDetails";

interface EventOverviewProps {
  event: Event;
  codeOfConduct?: CodeOfConduct | null;
  ticketProvider: string;
}

export const EventOverview: React.FC<EventOverviewProps> = ({
  event,
  codeOfConduct,
  ticketProvider,
}) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[3fr_2fr] sm:gap-4 md:grid-cols-2 xl:grid-cols-[3fr_2fr]">
      <div className="order-1 sm:order-2">
        <FusionLogo />
      </div>

      <div className="order-2 pt-4 sm:order-1 sm:pt-8">
        <Heading level={1}>
          Fusion {eventTypeDisplayMap[event.eventType ?? "meetup"]}
        </Heading>

        <div className="py-8">
          <EventDetails
            event={event}
            displayLinks
            codeOfConduct={codeOfConduct}
            ticketProvider={ticketProvider}
          />
        </div>
      </div>
    </div>
  );
};

export const eventTypeDisplayMap: Record<string, string> = {
  meetup: "Meetup",
  conference: "Conference",
};
