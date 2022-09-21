import dayjs from "dayjs";
import { FaYoutube } from "react-icons/fa";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { Button } from "../atoms/Button";

interface LiveEventProps {
  liveEvent: FusionEvent | undefined;
}

const LiveEvent: React.FC<LiveEventProps> = ({ liveEvent }) => {
  if (!liveEvent?.youTubeLink) return null;

  const date = dayjs(liveEvent.date);
  const eventIsLive = dayjs().isBetween(date, date.hour(22), "hour");

  const emulateEventIsLive = process.env.NEXT_PUBLIC_EMULATE_EVENT_IS_LIVE;
  if (!eventIsLive && !emulateEventIsLive) return null;

  const youTubeLink = new URL(liveEvent.youTubeLink);
  const youTubeID = youTubeLink.searchParams.get("v");

  // TODO: Use YouTube API to check if stream is live
  const streamIsLive = false;

  return (
    <div className="w-full max-w-[640px] xl:max-w-[800px] mx-auto pt-6 lg:pt-0">
      <div className="flex flex-col relative gap-8">
        <div className="relative overflow-hidden shadow rounded-xl height-64 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youTubeID}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {streamIsLive ? (
            <div className="absolute left-1/2 -translate-x-1/2 top-2 px-4 bg-[#c00] font-bold rounded-full shadow">
              LIVE
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 items-center">
          To take part in chat, join in on
          <div className="flex gap-2 items-center text-2xl">
            👉
            <Button color="youtube" href={liveEvent.youTubeLink} targetBlank>
              <FaYoutube /> YouTube
            </Button>
            👈
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEvent;
