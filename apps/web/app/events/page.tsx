import { notFound } from "next/navigation";

import { getFusionEvents } from "@fusion/sanity/queries";
import type { Event, GetFusionEventsQueryResult } from "@fusion/sanity/types";

import { Heading } from "@/components/atoms/Heading";
import { EventCard } from "@/components/events/EventCard";
import { EventsPageHeader } from "@/components/events/EventsPageHeader";
import { Layout } from "@/components/organisms/Layout";

const Events = async () => {
  const events = getEventsPastAndUpcoming(await getFusionEvents());

  if (!events) notFound();

  const isOneFutureEvent = events.upcoming.length === 1;

  return (
    <Layout title="Events">
      <div className="container mx-auto p-4">
        <Heading level={1} className="py-4">
          Fusion Events
        </Heading>

        <div className="flex flex-col gap-6">
          {events.upcoming.length ? (
            <div>
              <EventsPageHeader>
                {isOneFutureEvent ? "Next Event" : "Upcoming Events"}
              </EventsPageHeader>

              <div className="flex flex-col gap-4">
                {events.upcoming.map((event, i) => (
                  <EventCard
                    key={event._id}
                    event={event}
                    highlight={i === 0}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {events.past.length ? (
            <div>
              <EventsPageHeader>Past Events</EventsPageHeader>

              <div className="flex flex-col gap-8">
                {events.past.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default Events;

export const getEventsPastAndUpcoming = (
  events: GetFusionEventsQueryResult,
) => {
  return events.reduce(
    (acc, event) => {
      if (event.date && new Date(event.date) < new Date()) {
        acc.past.push(event);
      } else {
        acc.upcoming.push(event);
      }
      return acc;
    },
    { upcoming: [] as Event[], past: [] as Event[] },
  );
};
