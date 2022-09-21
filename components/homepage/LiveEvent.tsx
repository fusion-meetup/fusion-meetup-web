import dayjs from "dayjs";
import { FaYoutube } from "react-icons/fa";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { Button } from "../atoms/Button";

interface LiveEventProps {
  liveEvent: FusionEvent | undefined;
}

export const LiveEvent: React.FC<LiveEventProps> = ({ liveEvent }) => {
  if (!liveEvent) return null;
  if (!liveEvent.youTubeLink) return null;
  const date = dayjs(liveEvent.date);
  if (!dayjs().isBetween(date, date.hour(22), "hour")) return null;

  const youTubeLink = new URL(liveEvent.youTubeLink);
  const youTubeID = youTubeLink.searchParams.get("v");

  return (
    <div className="flex flex-col relative gap-8">
      <div className="relative overflow-hidden shadow rounded-xl height-64 pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          width="1280"
          height="720"
          src={`https://www.youtube.com/embed/${youTubeID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex flex-col gap-2 items-center">
        To take part in chat, join in on
        <div className="flex gap-2 items-center text-2xl">
          👉
          <Button color="youtube" href={liveEvent.youTubeLink}>
            <FaYoutube /> YouTube
          </Button>
          👈
        </div>
      </div>
    </div>
  );
};
