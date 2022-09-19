import clsx from "clsx";
import dayjs from "dayjs";
import Link from "next/link";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdCalendarToday, MdLocationPin, MdLunchDining } from "react-icons/md";
import { SiEventbrite } from "react-icons/si";

import { CodeOfConduct } from "../../types/cms/CodeOfConduct";
import { FusionEvent } from "../../types/cms/FusionEvent";
import { Button } from "../atoms/Button";
import { GradientText } from "../atoms/GradientText";

interface EventDetailsProps {
  event: FusionEvent;
  displayLinks?: boolean;
  codeOfConduct?: CodeOfConduct;
  small?: boolean;
}

/**
 * Returns the actual date or easily read indicators
 * @param dateString String represenation of the date from Sanity
 * @returns The date-kinda
 */
const dateOutput = (dateString: string): string | JSX.Element => {
  const date = dayjs(dateString);
  if (date.isToday()) {
    return <GradientText className="text-xl">Today!</GradientText>;
  }
  if (date.isTomorrow()) {
    return <GradientText className="text-xl">Tomorrow</GradientText>;
  }
  return date.format("Do MMMM, YYYY");
};

export const EventDetails: React.FC<EventDetailsProps> = ({
  event,
  displayLinks,
  codeOfConduct,
  small,
}) => {
  const date = dateOutput(event.date);

  const details = [
    {
      key: "date",
      icon: <MdCalendarToday />,
      label: date,
    },
    {
      key: "location",
      icon: <MdLocationPin />,
      label: event.location.address,
      link: event.location.googleMapsLink,
    },
    {
      key: "lunch",
      icon: <MdLunchDining />,
      label: event.food,
    },
  ];

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
          <Button
            href={event.eventbriteLink || undefined}
            targetBlank
            color={null}
            className="bg-[#d1410c] hover:bg-[#a33107] outline-[#d1410c80] text-white"
          >
            <SiEventbrite /> Eventbrite
          </Button>

          <Link href="/code-of-conduct">
            <a
              className={clsx(
                "flex flex-row items-center gap-2 h-10 px-3 w-max",
                "rounded-md border-2 border-slate-400 dark:border-slate-600",
                "hover:bg-slate-400 hover:bg-opacity-30 hover:shadow",
                "dark:hover:bg-slate-700 dark:hover:bg-opacity-70"
              )}
            >
              <IoMdInformationCircleOutline />{" "}
              {codeOfConduct?.linkText || "Code of Conduct"}
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
};
