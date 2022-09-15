import type { GetStaticProps, NextPage } from "next";
import clsx from "clsx";
import dayjs from "dayjs";

import { FusionEvent } from "../../types/cms/FusionEvent";
import {
  getCodeOfConduct,
  getFusionEventBySlug,
  getFusionEventsSlugs,
} from "../../lib/cms/queries";
import { Layout } from "../../components/organisms/Layout";
import { SanityContent } from "../../components/atoms/SanityContent";
import { EventTalks } from "../../components/events/EventTalks";
import { EventSponsors } from "../../components/events/EventSponsors";
import { EventOverview } from "../../components/events/EventOverview";
import { CodeOfConduct } from "../../types/cms/CodeOfConduct";

interface EventPageProps {
  event: FusionEvent | undefined;
  codeOfConduct?: CodeOfConduct;
}

const EventPage: NextPage<EventPageProps> = ({ event, codeOfConduct }) => {
  if (!event) return null;

  const narrowContainerClassName = "max-w-[800px] xl:max-w-[960px] mx-auto";

  return (
    <Layout
      title={dayjs(event.date).format("Do MMMM YYYY")}
      className="px-4"
      fancyBackground="colours"
    >
      <div className={clsx(narrowContainerClassName, "pt-6 pb-4")}>
        <EventOverview event={event} codeOfConduct={codeOfConduct} />
      </div>

      <div className={clsx(narrowContainerClassName, "pt-2 pb-8")}>
        <SanityContent value={event.topContent} />
      </div>

      <div className={clsx(narrowContainerClassName, "py-4")}>
        <EventTalks talks={event.talks} />
      </div>

      <div className={clsx(narrowContainerClassName, "py-8")}>
        <EventSponsors sponsors={event.sponsors} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<EventPageProps> = async (context) => {
  const [event, codeOfConduct] = await Promise.all([
    getFusionEventBySlug(context.params?.slug as string | undefined),
    getCodeOfConduct(),
  ]);

  return {
    props: {
      event,
      codeOfConduct,
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
