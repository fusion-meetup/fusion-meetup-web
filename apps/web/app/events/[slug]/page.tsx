import { notFound } from "next/navigation";

import dayjs from "dayjs";

import {
  getCodeOfConduct,
  getFusionEventBySlug,
  getFusionEventsSlugs,
} from "@fusion/sanity/queries";

import { SanityContent } from "@/components/atoms/SanityContent";
import { EventEmbed } from "@/components/events/EventEmbed";
import {
  EventOverview,
  eventTypeDisplayMap,
} from "@/components/events/EventOverview";
import { EventSponsors } from "@/components/events/EventSponsors";
import { EventTalks } from "@/components/events/EventTalks";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { Layout } from "@/components/organisms/Layout";
import { cn } from "@ui/lib/utils";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

const EventPage = async (props: EventPageProps) => {
  const { slug } = await props.params;

  const [event, codeOfConduct] = await Promise.all([
    getFusionEventBySlug(slug),
    getCodeOfConduct(),
  ]);

  if (!event) notFound();

  const narrowContainerClassName = "max-w-[800px] xl:max-w-[960px] mx-auto";

  const formattedDate = dayjs(event.date).format("Do MMMM YYYY");
  const title = `${formattedDate} ${eventTypeDisplayMap[event.eventType ?? "meetup"]}`;

  let ticketProvider = "";
  if (event.eventbriteLink) {
    const { hostname } = new URL(String(event.eventbriteLink));
    switch (hostname) {
      case "www.eventbrite.co.uk":
      case "www.eventbrite.com":
        ticketProvider = "eventbrite";
        break;
      case "www.ti.to":
      case "ti.to":
        ticketProvider = "tito";
        break;
    }
  }

  return (
    <Layout title={title} className="px-4" fancyBackground="colours">
      <div className={cn(narrowContainerClassName, "pb-4 pt-6")}>
        <EventOverview
          event={event}
          ticketProvider={ticketProvider}
          codeOfConduct={codeOfConduct}
        />
      </div>

      <div className={cn(narrowContainerClassName, "flex flex-col gap-8 pb-4")}>
        <Breadcrumbs params={{ slug: title }} />

        <SanityContent content={event.topContent} />
      </div>

      <div className={cn(narrowContainerClassName, "py-6")}>
        <EventEmbed event={event} ticketProvider={ticketProvider} />
      </div>

      {event.talks?.length ? (
        <div className={cn(narrowContainerClassName, "py-6")}>
          <EventTalks talks={event.talks} />
        </div>
      ) : null}

      <div className={cn(narrowContainerClassName, "py-8")}>
        <EventSponsors sponsors={event.sponsors} />
      </div>

      <div className={cn(narrowContainerClassName, "py-8")}>
        <SanityContent content={event.bottomContent} />
      </div>
    </Layout>
  );
};

export async function generateStaticParams() {
  const slugs = await getFusionEventsSlugs();

  return slugs.map((slug) => ({ slug }));
}

export default EventPage;
