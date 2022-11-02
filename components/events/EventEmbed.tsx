import { FusionEvent } from "../../types/cms/FusionEvent";
import { YouTubeVideo } from "../atoms/YouTube";
import { Eventbrite } from "../atoms/Eventbrite";
import { Tito } from "../atoms/Tito";

interface EventEmbedProps {
  event: FusionEvent;
  ticketProvider: string | undefined | null;
}

export const EventEmbed: React.FC<EventEmbedProps> = ({
  event,
  ticketProvider,
}) => {
  if (new Date(event.date) > new Date()) {
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
