import { SanityDocumentBase, SanityImg, SanityImgMapped } from "./Sanity";

export interface SanityTeamMember extends SanityDocumentBase {
  name: string;
  intro?: string;
  image?: SanityImg;
  twitter?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitch?: string;
}

export interface TeamMember {
  key: string;
  name: string;
  intro: string;
  image: SanityImgMapped | null;
  twitter: string | null;
  twitterUrl: string | null;
  website: string | null;
  linkedin: string | null;
  github: string | null;
  instagram: string | null;
  twitch: string | null;
}
