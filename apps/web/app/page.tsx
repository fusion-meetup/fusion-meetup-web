import { notFound } from "next/navigation";

import {
  getAboutFusionInfo,
  getBlogPosts,
  getFusionEvents,
  getHomePageContent,
  getLatestFusionEvent,
} from "@fusion/sanity/queries";

import { Heading } from "@/components/atoms/Heading";
import { PastEventsOverview } from "@/components/events/PastEventsOverview";
import { AboutFusion } from "@/components/homepage/AboutFusion";
import { BlogPostsOverview } from "@/components/homepage/BlogPostsOverview";
import { HomepageAlert } from "@/components/homepage/HomepageAlert";
import { LatestEvent } from "@/components/homepage/LatestEvent";
import { LiveEvent } from "@/components/homepage/LiveEvent";
import { Layout } from "@/components/organisms/Layout";

import { getEventsPastAndUpcoming } from "./events/page";

const HomePage = async () => {
  const [latestEvent, about, blogPosts, eventsRaw, homepageContent] =
    await Promise.all([
      getLatestFusionEvent(),
      getAboutFusionInfo(),
      getBlogPosts(),
      getFusionEvents(),
      getHomePageContent(),
    ]);

  if (!about || !homepageContent) notFound();

  const events = getEventsPastAndUpcoming(eventsRaw);

  return (
    <Layout withHero>
      <div className="container mx-auto flex flex-col gap-10 px-4 py-4 md:gap-20">
        <HomepageAlert homepageContent={homepageContent} />

        <LiveEvent liveEvent={latestEvent} />

        <LatestEvent latestEvent={latestEvent} />

        <AboutFusion about={about} showLearnMoreButton />

        <div>
          <Heading level={2}>Fusion Blog</Heading>
          <BlogPostsOverview threeBlogPosts={blogPosts.slice(0, 3)} />
        </div>

        <div>
          <Heading level={2}>Past Events</Heading>
          <PastEventsOverview pastFourEvents={events.past.slice(0, 4)} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
