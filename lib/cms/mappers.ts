import { BlogPost, SanityBlogPost } from "../../types/cms/Blog";
import type { SanityImg, SanityImgMapped } from "../../types/cms/Sanity";
import type { SanityTeamMember, TeamMember } from "../../types/cms/TeamMember";
import { FusionEvent, SanityFusionEvent } from "../../types/cms/FusionEvent";
import { getSanityImgSrc } from ".";

// TODO: Replace with next-sanity-image
// https://www.sanity.io/plugins/next-sanity-image
const mapSanityImg = (img: SanityImg | undefined): SanityImgMapped | null => {
  if (!img) return null;

  return {
    src: getSanityImgSrc(img),
    alt: img.alt,
    width: img.width,
    height: img.height,
  };
};

export const mapSanityTeamMember = (x: SanityTeamMember): TeamMember => ({
  key: x._id,
  name: x.name,
  twitter: x.twitter || null,
  twitterUrl: x.twitter ? `https://twitter.com/${x.twitter}` : null,
  image: mapSanityImg(x.image),
});

export const mapSanityBlogPost = (x: SanityBlogPost): BlogPost => ({
  key: x._id,
  slug: x.slug,
  title: x.title,
  publishedAt: x.publishedAt,
  author: x.author ? mapSanityTeamMember(x.author) : null,
  body: x.body || [],
  mainImage: x.mainImage,
});

export const mapSanityFusionEvent = (x: SanityFusionEvent): FusionEvent => ({
  key: x._id,
  eventType: x.eventType,
  eventTypeDisplay: eventTypeDisplayMap[x.eventType] || "Unknown event type",
  date: x.date,
  slug: x.slug,
  location: x.location || {},
  food: x.food || null,
  eventbriteLink: x.eventbriteLink || null,
  topContent: x.topContent || null,
  talks: x.talks || [],
  sponsors: x.sponsors || [],
  bottomContent: x.bottomContent || null,
});

const eventTypeDisplayMap: Record<string, string> = {
  meetup: "Meetup",
  conference: "Conference",
};
