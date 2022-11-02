import clsx from "clsx";
import dayjs from "dayjs";
import Link from "next/link";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { SiEventbrite } from "react-icons/si";
import { IoTicket } from "react-icons/io5";
import {
  MdCalendarToday,
  MdHome,
  MdLocationPin,
  MdLunchDining,
} from "react-icons/md";

import { CodeOfConduct } from "../../types/cms/CodeOfConduct";
import { FusionEvent } from "../../types/cms/FusionEvent";
import { Button } from "../atoms/Button";
import { GradientText } from "../atoms/GradientText";

interface EventDetailsProps {
  event: FusionEvent;
  displayLinks?: boolean;
  codeOfConduct?: CodeOfConduct;
  small?: boolean;
  ticketProvider: string;
}

export const EventDetails: React.FC<EventDetailsProps> = ({
  event,
  displayLinks,
  codeOfConduct,
  small,
  ticketProvider,
}) => {
  const eventDate = dayjs(event.date);
  let todayOrTomorrow = null;
  if (eventDate.isToday()) todayOrTomorrow = "Today!";
  if (eventDate.isTomorrow()) todayOrTomorrow = "Tomorrow";

  const details = [
    {
      key: "date",
      icon: <MdCalendarToday />,
      label: (
        <div className="">
          {todayOrTomorrow ? (
            <GradientText className="text-xl">{todayOrTomorrow}</GradientText>
          ) : null}

          <div className={clsx({ "text-sm opacity-50": todayOrTomorrow })}>
            {eventDate.format("ddd Do MMMM, YYYY")}
          </div>
        </div>
      ),
    },
    {
      key: "location",
      icon:
        event.location.address.toLowerCase() !== "virtual" ? (
          <MdLocationPin />
        ) : (
          <MdHome />
        ),
      label: event.location.address,
      link: event.location.googleMapsLink,
    },
    {
      key: "lunch",
      icon: <MdLunchDining />,
      label: event.food,
    },
  ];

  const isEventbrite = ticketProvider === "eventbrite";

  return (
    <div className="flex flex-col gap-2">
      {details
        .filter((d) => d.label)
        .map((detail) => (
          <div key={detail.key} className="flex flex-row items-center gap-2">
            <div className={clsx({ "text-lg": small, "text-2xl": !small })}>
              {detail.icon}
            </div>

            <div className={clsx("text-sm", { "text-lg": !small })}>
              {typeof detail.label === "string"
                ? detail.label
                    ?.split("\n")
                    .map((line) => <p key={line}>{line}</p>)
                : detail.label}
            </div>
          </div>
        ))}

      {displayLinks ? (
        <div className="pt-2 flex flex-row items-center flex-wrap gap-4">
          {event.eventbriteLink ? (
            <Button
              href={event.eventbriteLink || undefined}
              targetBlank
              className={clsx({
                "bg-[#d1410c] hover:bg-[#a33107] outline-[#d1410c80] text-white":
                  isEventbrite,
              })}
            >
              {isEventbrite ? <SiEventbrite /> : <IoTicket />} Tickets
            </Button>
          ) : (
            ""
          )}

          <Link
            href="/code-of-conduct"
            className={clsx(
              "flex flex-row items-center gap-2 h-10 px-3 w-max",
              "rounded-md border-2 border-slate-400 dark:border-slate-600",
              "hover:bg-slate-400 hover:bg-opacity-30 hover:shadow",
              "dark:hover:bg-slate-700 dark:hover:bg-opacity-70"
            )}
          >
            <IoMdInformationCircleOutline />{" "}
            {codeOfConduct?.linkText || "Code of Conduct"}
          </Link>
        </div>
      ) : null}
    </div>
  );
};
