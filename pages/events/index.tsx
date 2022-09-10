import type { GetStaticProps, NextPage } from "next";

import { EventsUpcomingAndPast } from "../../types/cms/FusionEvent";
import { getFusionEvents } from "../../lib/cms/queries";
import { Layout } from "../../components/organisms/Layout";
import { Heading } from "../../components/atoms/Heading";
import { EventCard } from "../../components/molecules/events/EventCard";
import { EventsPageHeader } from "../../components/molecules/events/EventsPageHeader";

interface EventsPageProps {
  events: EventsUpcomingAndPast;
}

const EventsPage: NextPage<EventsPageProps> = ({ events }) => {
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
                  <EventCard key={event.key} event={event} isFirst={i === 0} />
                ))}
              </div>
            </div>
          ) : null}

          {events.past.length ? (
            <div>
              <EventsPageHeader>Past Events</EventsPageHeader>

              <div className="flex flex-col gap-8">
                {events.past.map((event) => (
                  <EventCard key={event.key} event={event} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
  const events = await getFusionEvents();

  return {
    props: {
      events,
    },
  };
};

export default EventsPage;
