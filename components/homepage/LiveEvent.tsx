import dayjs from "dayjs";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { Button } from "../atoms/Button";

interface LiveEventProps {
  liveEvent: FusionEvent | undefined;
}

export const LiveEvent: React.FC<LiveEventProps> = ({ liveEvent }) => {
  if (!liveEvent) return null;
  if (!liveEvent.youTubeLink) return null;
  const date = dayjs(liveEvent.date);
  // @TODO make sure is negative before commit
  if (dayjs().isBetween(date.hour(19), date.hour(22), "hour")) return null;

  const youTubeLink = new URL(liveEvent.youTubeLink);
  const youTubeID = youTubeLink.searchParams.get("v");

  return (
    <div className="flex flex-col relative items-center">
      <iframe
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${youTubeID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Button className={"mt-10"} color={"blue"} href={liveEvent.youTubeLink}>
        To take part in chat, go to YouTube
      </Button>
    </div>
  );
};
