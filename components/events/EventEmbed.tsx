import { FusionEvent } from "../../types/cms/FusionEvent";
import { YouTubeVideo } from "../atoms/YouTube";
import { Eventbrite } from "../atoms/Eventbrite";

interface EventEmbedProps {
  event: FusionEvent;
}

export const EventEmbed: React.FC<EventEmbedProps> = ({ event }) => {
  if (new Date(event.date) > new Date()) {
    return <Eventbrite eventbriteLink={event.eventbriteLink} />;
  } else {
    return <YouTubeVideo youTubeLink={event.youTubeLink} />;
  }
};
