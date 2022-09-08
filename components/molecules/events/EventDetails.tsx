import dayjs from "dayjs";
import { MdCalendarToday, MdLocationPin, MdLunchDining } from "react-icons/md";
import { SiEventbrite } from "react-icons/si";

import { FusionEvent } from "../../../types/cms/FusionEvent";
import { Button } from "../../atoms/Button";

interface EventDetailsProps {
  event: FusionEvent;
  displayLinks?: boolean;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ event, displayLinks }) => {
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
    <div className="flex flex-col gap-4">
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

      {displayLinks ? (
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
      ) : null}
    </div>
  );
};
