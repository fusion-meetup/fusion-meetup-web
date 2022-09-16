import { cms } from ".";
import {
  AboutFusionInfo,
  SanityAboutFusionInfo,
} from "../../types/cms/AboutFusionInfo";
import { BlogPost, SanityBlogPost } from "../../types/cms/Blog";
import {
  CodeOfConduct,
  SanityCodeOfConduct,
} from "../../types/cms/CodeOfConduct";
import {
  EventsUpcomingAndPast,
  FusionEvent,
  SanityFusionEvent,
} from "../../types/cms/FusionEvent";
import { SanityTeamMember, TeamMember } from "../../types/cms/TeamMember";

import {
  mapCodeOfConduct,
  mapSanityAboutFusion,
  mapSanityBlogPost,
  mapSanityFusionEvent,
  mapSanityTeamMember,
} from "./mappers";

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const sanityTeamMembers: SanityTeamMember[] = await cms.fetch(
    `*[_type == "teamMember"]
    | order(order asc)`
  );
  return sanityTeamMembers.map(mapSanityTeamMember);
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const blogPostsSanity: SanityBlogPost[] = await cms.fetch(
    `*[_type == "blogPost"]
    { ..., author->, 'slug': slug.current }
    | order(publishedAt desc)
    | order((featured == true) desc)`
  );
  return blogPostsSanity.map(mapSanityBlogPost);
};

export const getBlogPostBySlug = async (
  slug: string | undefined
): Promise<BlogPost> => {
  const sanityBlogPost: SanityBlogPost = await cms.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      ...,
      author->,
      'slug': slug.current,
    }`,
    { slug }
  );

  return mapSanityBlogPost(sanityBlogPost);
};

export const getBlogPostsSlugs = async (): Promise<string[]> => {
  return await cms.fetch(
    `*[_type == "blogPost" && defined(slug.current)][].slug.current`
  );
};

export const getFusionEvents = async (): Promise<EventsUpcomingAndPast> => {
  const eventsSanity: SanityFusionEvent[] = await cms.fetch(
    `*[_type == "event"]
    { ..., 'slug': slug.current }
    | order(date desc)`
  );
  const events = eventsSanity.map(mapSanityFusionEvent);

  return events.reduce(
    (acc, event) => {
      if (new Date(event.date) < new Date()) {
        acc.past.push(event);
      } else {
        acc.upcoming.push(event);
      }
      return acc;
    },
    { upcoming: [], past: [] } as EventsUpcomingAndPast
  );
};

export const getFusionEventBySlug = async (
  slug: string | undefined
): Promise<FusionEvent> => {
  const eventSanity: SanityFusionEvent = await cms.fetch(
    `*[_type == "event" && slug.current == $slug][0]
    { ..., 'slug': slug.current }`,
    { slug }
  );
  return mapSanityFusionEvent(eventSanity);
};

export const getFusionEventsSlugs = async (): Promise<string[]> => {
  return await cms.fetch(
    `*[_type == "event" && defined(slug.current)][].slug.current`
  );
};

export const getNextFusionEvent = async (): Promise<FusionEvent> => {
  const eventSanity: SanityFusionEvent = await cms.fetch(
    `*[_type == "event"]
    { ..., 'slug': slug.current }
    | order(date desc)[0]`
  );
  return mapSanityFusionEvent(eventSanity);
};

export const getAboutFusionInfo = async (): Promise<AboutFusionInfo> => {
  const sanityAboutFusion: SanityAboutFusionInfo = await cms.fetch(
    `*[_type == "about"][0]`
  );
  return mapSanityAboutFusion(sanityAboutFusion);
};

export const getCodeOfConduct = async (): Promise<CodeOfConduct> => {
  const sanityCodeOfConduct: SanityCodeOfConduct = await cms.fetch(
    `*[_type == "codeOfConduct"][0]`
  );
  return mapCodeOfConduct(sanityCodeOfConduct);
};
