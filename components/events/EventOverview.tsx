import { CodeOfConduct } from "../../types/cms/CodeOfConduct";
import { FusionEvent } from "../../types/cms/FusionEvent";
import { FusionLogo } from "../atoms/FusionLogo";
import { Heading } from "../atoms/Heading";
import { EventDetails } from "./EventDetails";

interface EventOverviewProps {
  event: FusionEvent;
  codeOfConduct?: CodeOfConduct;
}

export const EventOverview: React.FC<EventOverviewProps> = ({ event, codeOfConduct }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[3fr_2fr] gap-2 md:gap-4">
      <div className="order-1 md:order-2">
        <FusionLogo />
      </div>

      <div className="order-2 md:order-1 pt-4 md:pt-8">
        <Heading level={1}>Fusion {event.eventTypeDisplay}</Heading>

        <div className="py-8">
          <EventDetails event={event} displayLinks codeOfConduct={codeOfConduct} />
        </div>
      </div>
    </div>
  );
};
