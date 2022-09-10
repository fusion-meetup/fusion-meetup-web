import type { GetStaticProps, NextPage } from "next";
import clsx from "clsx";

import { Layout } from "../components/organisms/Layout";
import { Button } from "../components/atoms/Button";
import { Heading } from "../components/atoms/Heading";
import { FusionEvent } from "../types/cms/FusionEvent";
import { getNextFusionEvent } from "../lib/cms/queries";
import { EventCard } from "../components/molecules/events/EventCard";

interface HomePageProps {
  nextEvent: FusionEvent | undefined;
}

const HomePage: NextPage<HomePageProps> = ({ nextEvent }) => (
  <Layout withHero>
    <div className="container mx-auto p-4">
      {nextEvent ? (
        <div className="flex flex-col relative">
          <div className="p-2 pl-4 -mb-7">
            <h3
              className={clsx(
                "shadow font-bold w-max rounded-xl pt-1 px-3 pb-6 text-lg",
                "bg-white bg-opacity-50 backdrop-blur",
                "dark:bg-slate-700 dark:bg-opacity-50"
              )}
            >
              Next Event
            </h3>
          </div>
          <EventCard event={nextEvent} isFirst />
        </div>
      ) : null}

      <div className="py-8">
        <Heading level={2} className="py-4">
          About Fusion Meetup
        </Heading>

        <p className="pb-2">A quarterly tech meetup held in Birmingham city centre</p>
      </div>

      <div className="py-16">
        <Heading level={3} className="pb-4 text-center">
          Temporary Links
        </Heading>

        <div className="flex flex-row gap-4 flex-wrap justify-center">
          <Button href="/blog">Blog</Button>

          <Button href="/events" color="pink">
            Events
          </Button>

          <Button href="/about" color="yellow">
            About
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const nextEvent = await getNextFusionEvent();

  return {
    props: {
      nextEvent,
    },
  };
};

export default HomePage;
