import type { GetStaticProps, NextPage } from "next";
import dayjs from "dayjs";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { Layout } from "../../components/organisms/Layout";
import { Heading } from "../../components/atoms/Heading";
import { getFusionEvents } from "../../lib/cms/queries";

interface EventsPageProps {
  events: FusionEvent[];
}

const EventsPage: NextPage<EventsPageProps> = ({ events }) => (
  <Layout>
    <div className="container mx-auto p-4">
      <Heading level={2} className="py-4">
        Fusion Events
      </Heading>

      <div className="flex flex-col gap-4 py-4">
        {events.map((event) => (
          <a
            key={event.key}
            href={`/events/${event.slug}`}
            className="group bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-md p-6 border-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {event.eventTypeDisplay}
              </h2>
              <p>{dayjs(event.date).format("Do MMMM, YYYY")}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
  const events = await getFusionEvents();

  return {
    props: {
      events,
    },
  };
};

export default EventsPage;
