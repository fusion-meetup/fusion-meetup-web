import Link from "next/link";

import dayjs from "dayjs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoTicket } from "react-icons/io5";
import {
  MdCalendarToday,
  MdHome,
  MdLocationPin,
  MdLunchDining,
} from "react-icons/md";
import { SiEventbrite } from "react-icons/si";

import { Event, GetCodeOfConductQueryResult } from "@fusion/sanity/types";

import { cn } from "@ui/lib/utils";

import { Button } from "../atoms/Button";
import { GradientText } from "../atoms/GradientText";

interface EventDetailsProps {
  event: Event;
  displayLinks?: boolean;
  codeOfConduct?: GetCodeOfConductQueryResult;
  small?: boolean;
  ticketProvider?: string;
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

          <div className={cn({ "text-sm opacity-50": todayOrTomorrow })}>
            {eventDate.format("ddd Do MMMM, YYYY")}
          </div>
        </div>
      ),
    },
    {
      key: "location",
      icon:
        event.location?.address?.toLowerCase() !== "virtual" ? (
          <MdLocationPin />
        ) : (
          <MdHome />
        ),
      label: event.location?.address,
      link: event.location?.googleMapsLink,
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
            <div className={cn(small ? "text-lg" : "text-2xl")}>
              {detail.icon}
            </div>

            <div className={cn(small ? "text-sm" : "text-lg")}>
              {typeof detail.label === "string"
                ? detail.label
                    ?.split("\n")
                    .map((line) => <p key={line}>{line}</p>)
                : detail.label}
            </div>
          </div>
        ))}

      {displayLinks ? (
        <div className="flex flex-row flex-wrap items-center gap-4 pt-2">
          {event.eventbriteLink ? (
            <Button
              href={event.eventbriteLink || undefined}
              targetBlank
              className={cn({
                "bg-[#d1410c] text-white outline-[#d1410c80] hover:bg-[#a33107]":
                  isEventbrite,
              })}
            >
              {isEventbrite ? <SiEventbrite /> : <IoTicket />} Tickets
            </Button>
          ) : (
            <Button disabled={true}>Tickets coming soon</Button>
          )}

          <Link
            href="/code-of-conduct"
            className="flex h-10 w-max flex-row items-center gap-2 rounded-md border-2 border-slate-600 px-3 hover:bg-slate-700 hover:bg-opacity-70 hover:shadow"
          >
            <IoMdInformationCircleOutline />{" "}
            {codeOfConduct?.linkText || "Code of Conduct"}
          </Link>
        </div>
      ) : null}
    </div>
  );
};
