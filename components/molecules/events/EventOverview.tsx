import clsx from "clsx";
import dayjs from "dayjs";
import { MdCalendarToday, MdLocationPin, MdLunchDining } from "react-icons/md";
import { SiEventbrite, SiMeetup } from "react-icons/si";

import { FusionEvent } from "../../../types/cms/FusionEvent";
import { Button } from "../../atoms/Button";
import { FusionLogo } from "../../atoms/FusionLogo";
import { Heading } from "../../atoms/Heading";

interface EventOverviewProps {
  event: FusionEvent;
}

export const EventOverview: React.FC<EventOverviewProps> = ({ event }) => {
  const date = dayjs(event.date).format("Do MMMM, YYYY");

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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[3fr_2fr] gap-2 md:gap-4">
      <div className="order-1 md:order-2">
        <FusionLogo />
      </div>

      <div className="order-2 md:order-1 pt-4 md:pt-8">
        <Heading level={1}>Fusion {event.eventTypeDisplay}</Heading>

        <div className="flex flex-col gap-4 py-8">
          {details.map((detail) => (
            <div key={detail.key} className="flex flex-row items-center gap-2">
              <div className="text-2xl">{detail.icon}</div>
              <div>
                {detail.label?.split("\n").map((line) => (
                  <p key={line} className="text-lg">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-2">
            <Button
              href={event.eventbriteLink || undefined}
              targetBlank
              color={null}
              className="bg-[#d1410c] hover:bg-[#a33107] outline-[#d1410c80] text-white"
            >
              <SiEventbrite /> Eventbrite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
