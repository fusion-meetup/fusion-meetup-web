import { Event } from "@fusion/sanity/types";

import { Eventbrite } from "../atoms/Eventbrite";
import { Tito } from "../atoms/Tito";
import { YouTubeVideo } from "../atoms/YouTube";

interface EventEmbedProps {
  event: Event;
  ticketProvider: string | undefined | null;
}

export const EventEmbed: React.FC<EventEmbedProps> = ({
  event,
  ticketProvider,
}) => {
  if (event.date && new Date(event.date) > new Date()) {
    switch (ticketProvider) {
      case "eventbrite":
        return <Eventbrite eventbriteLink={event.eventbriteLink} />;
      case "tito":
        return <Tito titoLink={event.eventbriteLink} />;
      default:
        return <></>;
    }
  } else {
    return <YouTubeVideo youTubeLink={event.youTubeLink} />;
  }
};
