"use client";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { FaYoutube } from "react-icons/fa";

import { Event } from "@fusion/sanity/types";

import { Button } from "../atoms/Button";

interface LiveEventProps {
  liveEvent: Event | null;
}

dayjs.extend(isBetween);

export const LiveEvent: React.FC<LiveEventProps> = ({ liveEvent }) => {
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
    <div className="mx-auto w-full max-w-[640px] pt-6 lg:pt-0 xl:max-w-[800px]">
      <div className="relative flex flex-col gap-8">
        <div className="height-64 relative overflow-hidden rounded-xl pb-[56.25%] shadow">
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            src={`https://www.youtube.com/embed/${youTubeID}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {streamIsLive ? (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 rounded-full bg-[#c00] px-4 font-bold shadow">
              LIVE
            </div>
          ) : null}
        </div>

        <div className="flex flex-col items-center gap-2">
          To take part in chat, join in on
          <div className="flex items-center gap-2 text-2xl">
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
