import { BlogPost, SanityBlogPost } from "../../types/cms/Blog";
import type { SanityTeamMember, TeamMember } from "../../types/cms/TeamMember";
import { FusionEvent, SanityFusionEvent } from "../../types/cms/FusionEvent";
import {
  AboutFusionInfo,
  SanityAboutFusionInfo,
} from "../../types/cms/AboutFusionInfo";
import {
  CodeOfConduct,
  SanityCodeOfConduct,
} from "../../types/cms/CodeOfConduct";
import {
  HomepageContent,
  SanityHomepageContent,
} from "../../types/cms/HomepageContent";

export const mapSanityTeamMember = (x: SanityTeamMember): TeamMember => ({
  key: x._id,
  name: x.name,
  slug: x.slug,
  intro: x.intro || "",
  image: x.image || null,
  twitter: x.twitter || null,
  twitterUrl: x.twitter ? `https://twitter.com/${x.twitter}` : null,
  website: x.website || null,
  linkedin: x.linkedin || null,
  github: x.github || null,
  instagram: x.instagram || null,
  twitch: x.twitch || null,
});

export const mapSanityBlogPost = (x: SanityBlogPost): BlogPost => ({
  key: x._id,
  slug: x.slug,
  title: x.title,
  publishedAt: x.publishedAt,
  author: x.author ? mapSanityTeamMember(x.author) : null,
  body: x.body || [],
  mainImage: x.mainImage,
  featured: x.featured || false,
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
  youTubeLink: x.youTubeLink || null,
});

const eventTypeDisplayMap: Record<string, string> = {
  meetup: "Meetup",
  conference: "Conference",
};

export const mapSanityAboutFusion = (
  x: SanityAboutFusionInfo
): AboutFusionInfo => ({
  key: x._id,
  title: x.title || "",
  description: x.description || [],
  quote: x.quote || [],
  sponsor: x.sponsor || [],
  buttonText: x.buttonText || "",
});

export const mapCodeOfConduct = (x: SanityCodeOfConduct): CodeOfConduct => ({
  key: x._id,
  title: x.title || "",
  content: x.content || [],
  linkText: x.linkText || "",
});

export const mapSanityHomepageContent = (
  x: SanityHomepageContent
): HomepageContent => {
  const showAlert = x.showAlert || false;

  return {
    key: x._id,
    showAlert,
    alertContent: showAlert ? x.alertContent || [] : [],
  };
};
