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
  about: AboutFusionInfo;
  threeBlogPosts: BlogPost[];
  pastFourEvents: FusionEvent[];
}

const HomePage: NextPage<HomePageProps> = ({
  latestEvent,
  about,
  threeBlogPosts,
  pastFourEvents,
}) => (
  <Layout withHero>
    <div className="container mx-auto flex flex-col gap-10 md:gap-20 px-4 py-4">
      <LiveEvent liveEvent={latestEvent} />

      <LatestEvent latestEvent={latestEvent} />

      <AboutFusion about={about} showLearnMoreButton />

      <div>
        <Heading level={2}>Fusion Blog</Heading>
        <BlogPostsOverview threeBlogPosts={threeBlogPosts} />
      </div>

      <div>
        <Heading level={2}>Past Events</Heading>
        <PastEventsOverview pastFourEvents={pastFourEvents} />
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const [latestEvent, about, blogPosts, events] = await Promise.all([
    getLatestFusionEvent(),
    getAboutFusionInfo(),
    getBlogPosts(),
    getFusionEvents(),
  ]);

  return {
    props: {
      latestEvent,
      about,
      threeBlogPosts: blogPosts.slice(0, 3),
      pastFourEvents: events.past.slice(0, 4),
    },
  };
};

export default HomePage;
