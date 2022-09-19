import type { GetStaticProps, NextPage } from "next";

import { BlogPost } from "../types/cms/Blog";
import { FusionEvent } from "../types/cms/FusionEvent";
import { AboutFusionInfo } from "../types/cms/AboutFusionInfo";
import {
  getAboutFusionInfo,
  getBlogPosts,
  getFusionEvents,
  getNextFusionEvent,
} from "../lib/cms/queries";
import { Layout } from "../components/organisms/Layout";
import { Heading } from "../components/atoms/Heading";
import { BlogPostsOverview } from "../components/homepage/BlogPostsOverview";
import { AboutFusion } from "../components/homepage/AboutFusion";
import { NextEvent } from "../components/homepage/NextEvent";
import { PastEventsOverview } from "../components/events/PastEventsOverview";

interface HomePageProps {
  nextEvent: FusionEvent | undefined;
  blogPosts: BlogPost[];
  about: AboutFusionInfo;
  pastEvents: FusionEvent[];
}

const HomePage: NextPage<HomePageProps> = ({
  nextEvent,
  blogPosts,
  about,
  pastEvents,
}) => (
  <Layout withHero>
    <div className="container mx-auto flex flex-col gap-20 px-4 py-4">
      <NextEvent nextEvent={nextEvent} />

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
  const [nextEvent, blogPosts, about, events] = await Promise.all([
    getNextFusionEvent(),
    getBlogPosts(),
    getAboutFusionInfo(),
    getFusionEvents(),
  ]);

  return {
    props: {
      nextEvent,
      blogPosts,
      about,
      pastEvents: events.past,
    },
  };
};

export default HomePage;
