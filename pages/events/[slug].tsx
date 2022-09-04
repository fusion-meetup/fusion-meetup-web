import type { GetStaticProps, NextPage } from "next";
import clsx from "clsx";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { getFusionEventBySlug, getFusionEventsSlugs } from "../../lib/cms/queries";
import { Layout } from "../../components/organisms/Layout";
import { SanityContent } from "../../components/atoms/SanityContent";
import { EventTalks } from "../../components/molecules/events/EventTalks";
import { EventSponsors } from "../../components/molecules/events/EventSponsors";
import { EventOverview } from "../../components/molecules/events/EventOverview";

interface EventPageProps {
  event: FusionEvent | undefined;
}

// TODO: Create a Code of Conduct page and link to it

const EventPage: NextPage<EventPageProps> = ({ event }) => {
  if (!event) return null;

  const narrowContainerClassName = "max-w-[800px] xl:max-w-[960px] mx-auto";

  return (
    <Layout className="px-4">
      <div className={clsx(narrowContainerClassName, "pt-6 pb-4")}>
        <EventOverview event={event} />
      </div>

      <div className={clsx(narrowContainerClassName, "pt-2 pb-8")}>
        <SanityContent value={event.topContent} />
      </div>

      <div className="container mx-auto py-4">
        <EventTalks talks={event.talks} />
      </div>

      <div className={clsx(narrowContainerClassName, "py-8")}>
        <EventSponsors sponsors={event.sponsors} />
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
