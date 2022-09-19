import clsx from "clsx";
import dayjs from "dayjs";
import Link from "next/link";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { EventDetails } from "./EventDetails";
import { SpeakerImage } from "./SpeakerImage";

interface EventCardSmallProps {
  event: FusionEvent;
  className?: string;
}

export const EventCardSmall: React.FC<EventCardSmallProps> = ({
  event,
  className,
}) => {
  return (
    <Link href={`/events/${event.slug}`}>
      <a
        className={clsx(
          className,
          "group bg-white overflow-hidden rounded-xl box-border shadow p-6",
          "hover:border-4 hover:-m-1 hover:border-blue-600",
          "dark:bg-slate-800 dark:shadow-lg dark:hover:border-blue-400"
        )}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold uppercase group-hover:text-blue-700 dark:group-hover:text-blue-400">
            {dayjs(event.date).format("MMMM YYYY")}
          </h2>

          <div className="pt-2">
            <EventDetails event={event} small />
          </div>
        </div>

        <div className="py-4">
          <hr className="border-2 border-slate-800 dark:border-white rounded-full opacity-10" />
        </div>

        <div className="flex flex-col gap-2">
          {event.talks.map((talk) => (
            <div key={talk._key} className="flex flex-row gap-4">
              <div className="flex flex-row items-center gap-3">
                <SpeakerImage
                  speaker={talk.speaker}
                  className="w-8 h-8"
                  small
                />

                <div>
                  <p className="font-bold">{talk.speaker.name}</p>
                  <p className="text-sm opacity-50">{talk.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </a>
    </Link>
  );
};
