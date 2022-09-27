import type { GetStaticProps, NextPage } from "next";
import clsx from "clsx";
import dayjs from "dayjs";

import { FusionEvent } from "../../types/cms/FusionEvent";
import { CodeOfConduct } from "../../types/cms/CodeOfConduct";
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
import { Breadcrumbs } from "../../components/molecules/Breadcrumbs";
import { EventEmbed } from "../../components/events/EventEmbed";

interface EventPageProps {
  event: FusionEvent | undefined;
  codeOfConduct?: CodeOfConduct;
}

const EventPage: NextPage<EventPageProps> = ({ event, codeOfConduct }) => {
  if (!event) return null;

  const narrowContainerClassName = "max-w-[800px] xl:max-w-[960px] mx-auto";

  const formattedDate = dayjs(event.date).format("Do MMMM YYYY");
  const title = `${formattedDate} ${event.eventTypeDisplay}`;

  return (
    <Layout title={title} className="px-4" fancyBackground="colours">
      <div className={clsx(narrowContainerClassName, "pt-6 pb-4")}>
        <EventOverview event={event} codeOfConduct={codeOfConduct} />
      </div>

      <div
        className={clsx(narrowContainerClassName, "pb-4 flex flex-col gap-8")}
      >
        <Breadcrumbs params={{ slug: title }} />

        <SanityContent value={event.topContent} />
      </div>

      <div className={clsx(narrowContainerClassName, "py-6")}>
        <EventEmbed event={event} />
      </div>

      <div className={clsx(narrowContainerClassName, "py-6")}>
        <EventTalks talks={event.talks} />
      </div>

      <div className={clsx(narrowContainerClassName, "py-8")}>
        <EventSponsors sponsors={event.sponsors} />
      </div>

      <div className={clsx(narrowContainerClassName, "py-8")}>
        <SanityContent value={event.bottomContent} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<EventPageProps> = async (
  context
) => {
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
