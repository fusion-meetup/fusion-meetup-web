import type { GetStaticProps, NextPage } from "next";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { Layout } from "../../components/organisms/Layout";
import { Heading } from "../../components/atoms/Heading";
import { SanityContent } from "../../components/atoms/SanityContent";
import { getFusionEventBySlug, getFusionEventsSlugs } from "../../lib/cms/queries";
import dayjs from "dayjs";

interface EventPageProps {
  event: FusionEvent;
}

// TODO: Create a Code of Conduct page and link to it

const EventPage: NextPage<EventPageProps> = ({ event }) => {
  return (
    <Layout>
      <div className="max-w-[640px] xl:max-w-[800px] mx-auto p-4">
        <div className="py-6">
          <Heading level={0}>Fusion {event.eventTypeDisplay}</Heading>
          <Heading level={3}>{dayjs(event.date).format("Do MMMM, YYYY")}</Heading>
        </div>

        <div className="pt-4 pb-16">
          <SanityContent value={event.topContent} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<EventPageProps> = async (context) => {
  const event = await getFusionEventBySlug(context.params?.slug as string | undefined);

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getFusionEventsSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export default EventPage;
