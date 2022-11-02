import { FusionEvent } from "../../types/cms/FusionEvent";
import { YouTubeVideo } from "../atoms/YouTube";
import { Eventbrite } from "../atoms/Eventbrite";
import { Tito } from "../atoms/Tito";

interface EventEmbedProps {
  event: FusionEvent;
}

export const EventEmbed: React.FC<EventEmbedProps> = ({ event }) => {
  if (new Date(event.date) > new Date()) {
    const { hostname } = new URL(String(event.eventbriteLink));
    switch (hostname) {
      case "www.eventbrite.co.uk":
      case "www.eventbrite.com":
        return <Eventbrite eventbriteLink={event.eventbriteLink} />;
      case "ti.to":
        return <Tito titoLink={event.eventbriteLink} />;
      default:
        return <></>;
    }
  } else {
    return <YouTubeVideo youTubeLink={event.youTubeLink} />;
  }
};
