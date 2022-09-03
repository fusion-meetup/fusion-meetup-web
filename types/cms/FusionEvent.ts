import { SanityDocumentBase, SanityObjectBase } from "./Sanity";

type EventType = "meetup" | "conference";

export interface SanityFusionEvent extends SanityDocumentBase {
  eventType: EventType;
  date: string;
  slug: string;
  eventbriteLink: string;
  meetupLink: string;
  topContent: any;
  talks: SanityTalk[];
  food: any;
  sponsors: SanitySponsor[];
  bottomContent: any;
}

export interface FusionEvent {
  key: string;
  eventType: EventType;
  eventTypeDisplay: string;
  date: string;
  slug: string;
  eventbriteLink: string | null;
  meetupLink: string | null;
  topContent: any | null;
  talks: SanityTalk[];
  food: any;
  sponsors: SanitySponsor[];
  bottomContent: any | null;
}

export interface SanityTalk extends SanityObjectBase {
  title: string;
  overview: any;
  speaker: SanitySpeaker;
}

export interface SanitySpeaker extends SanityObjectBase {
  name: string;
  // TODO: Image type
  photo: any;
  bio: any;
}

export type SponsorLevel = "headline" | "platinum" | "gold" | "silver" | "bronze";

export interface SanitySponsor extends SanityObjectBase {
  name: string;
  link?: string;
  // TODO: Image type
  logo: any;
  level: SponsorLevel;
  content: any;
}
