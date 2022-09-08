import type { GetStaticProps, NextPage } from "next";
import dayjs from "dayjs";

import { EventsUpcomingAndPast } from "../../types/cms/FusionEvent";
import { getFusionEvents } from "../../lib/cms/queries";
import { Layout } from "../../components/organisms/Layout";
import { Heading } from "../../components/atoms/Heading";
import { EventCard } from "../../components/molecules/events/EventCard";

interface EventsPageProps {
  events: EventsUpcomingAndPast;
}

const EventsPage: NextPage<EventsPageProps> = ({ events }) => {
  const isOneFutureEvent = events.upcoming.length === 1;

  return (
    <Layout title="Events">
      <div className="container mx-auto p-4">
        <Heading level={2} className="py-4">
          Fusion Events
        </Heading>

        {events.upcoming.length ? (
          <div className="flex flex-col gap-4 py-4">
            <Heading level={3} className="py-4">
              {isOneFutureEvent ? "Next Event" : "Upcoming Events"}
            </Heading>

            {events.upcoming.map((event, i) => (
              <EventCard key={event.key} event={event} large isFirst={i === 0} />
            ))}
          </div>
        ) : null}

        {events.past.length ? (
          <div className="flex flex-col gap-4 py-4">
            <Heading level={3} className="py-4">
              Past Events
            </Heading>

            {events.past.map((event) => (
              <EventCard key={event.key} event={event} />
            ))}
          </div>
        ) : null}
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
