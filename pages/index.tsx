import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

import { BlogPost } from "../types/cms/Blog";
import { FusionEvent } from "../types/cms/FusionEvent";
import { AboutFusionInfo } from "../types/cms/AboutFusionInfo";
import { HomepageContent } from "../types/cms/HomepageContent";
import {
  getAboutFusionInfo,
  getBlogPosts,
  getFusionEvents,
  getHomePageContent,
  getLatestFusionEvent,
} from "../lib/cms/queries";
import { Layout } from "../components/organisms/Layout";
import { Heading } from "../components/atoms/Heading";
import { BlogPostsOverview } from "../components/homepage/BlogPostsOverview";
import { AboutFusion } from "../components/homepage/AboutFusion";
import { LatestEvent } from "../components/homepage/LatestEvent";
import { PastEventsOverview } from "../components/events/PastEventsOverview";
import { HomepageAlert } from "../components/homepage/HomepageAlert";
import { GetInvolved } from "../components/homepage/GetInvolved";

const LiveEvent = dynamic(() => import("../components/homepage/LiveEvent"), {
  ssr: false,
});

interface HomePageProps {
  latestEvent: FusionEvent | null;
  about: AboutFusionInfo;
  threeBlogPosts: BlogPost[];
  pastFourEvents: FusionEvent[];
  homepageContent: HomepageContent;
}

const HomePage: NextPage<HomePageProps> = ({
  latestEvent,
  about,
  threeBlogPosts,
  pastFourEvents,
  homepageContent,
}) => (
  <Layout withHero>
    <div className="container mx-auto flex flex-col gap-10 md:gap-20 px-4 py-4">
      <HomepageAlert homepageContent={homepageContent} />

      <LiveEvent liveEvent={latestEvent} />

      <LatestEvent latestEvent={latestEvent} />

      <AboutFusion about={about} showLearnMoreButton />

      <div>
        <Heading level={2}>Past Events</Heading>
        <PastEventsOverview pastFourEvents={pastFourEvents} />
      </div>

      <GetInvolved />

      <div>
        <Heading level={2}>Fusion Blog</Heading>
        <BlogPostsOverview threeBlogPosts={threeBlogPosts} />
      </div>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const [latestEvent, about, blogPosts, events, homepageContent] =
    await Promise.all([
      getLatestFusionEvent(),
      getAboutFusionInfo(),
      getBlogPosts(),
      getFusionEvents(),
      getHomePageContent(),
    ]);

  return {
    props: {
      latestEvent,
      about,
      threeBlogPosts: blogPosts.slice(0, 3),
      pastFourEvents: events.past.slice(0, 4),
      homepageContent,
    },
  };
};

export default HomePage;
