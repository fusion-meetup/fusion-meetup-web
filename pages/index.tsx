import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

import { BlogPost } from "../types/cms/Blog";
import { FusionEvent } from "../types/cms/FusionEvent";
import { AboutFusionInfo } from "../types/cms/AboutFusionInfo";
import {
  getAboutFusionInfo,
  getBlogPosts,
  getFusionEvents,
  getLatestFusionEvent,
} from "../lib/cms/queries";
import { Layout } from "../components/organisms/Layout";
import { Heading } from "../components/atoms/Heading";
import { BlogPostsOverview } from "../components/homepage/BlogPostsOverview";
import { AboutFusion } from "../components/homepage/AboutFusion";
import { LatestEvent } from "../components/homepage/LatestEvent";
import { PastEventsOverview } from "../components/events/PastEventsOverview";

const LiveEvent = dynamic(() => import("../components/homepage/LiveEvent"), {
  ssr: false,
});

interface HomePageProps {
  latestEvent: FusionEvent | null;
  blogPosts: BlogPost[];
  about: AboutFusionInfo;
  pastEvents: FusionEvent[];
}

const HomePage: NextPage<HomePageProps> = ({
  latestEvent,
  blogPosts,
  about,
  pastEvents,
}) => (
  <Layout withHero>
    <div className="container mx-auto flex flex-col gap-10 md:gap-20 px-4 py-4">
      <LiveEvent liveEvent={latestEvent} />

      <LatestEvent latestEvent={latestEvent} />

      <AboutFusion about={about} showLearnMoreButton />

      <div>
        <Heading level={2}>Fusion Blog</Heading>
        <BlogPostsOverview blogPosts={blogPosts} />
      </div>

      <div>
        <Heading level={2}>Past Events</Heading>
        <PastEventsOverview pastEvents={pastEvents} />
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const [latestEvent, blogPosts, about, events] = await Promise.all([
    getLatestFusionEvent(),
    getBlogPosts(),
    getAboutFusionInfo(),
    getFusionEvents(),
  ]);

  return {
    props: {
      latestEvent,
      blogPosts,
      about,
      pastEvents: events.past,
    },
  };
};

export default HomePage;
