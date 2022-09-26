import { FusionEvent } from "../../types/cms/FusionEvent";
import YouTube from "../atoms/YouTube";
import Eventbrite from "../atoms/Eventbrite";

interface EventEmbedProps {
  event: FusionEvent;
}

const EventEmbed: React.FC<EventEmbedProps> = ({ event }) => {
  if (new Date(event.date) > new Date()) {
    return <Eventbrite eventbriteLink={event.eventbriteLink} />;
  } else {
    return <YouTube youTubeLink={event.youTubeLink} />;
  }
};
export default EventEmbed;
