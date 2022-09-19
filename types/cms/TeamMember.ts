import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { SanityDocumentBase } from "./Sanity";

export interface SanityTeamMember extends SanityDocumentBase {
  name: string;
  slug: string;
  intro?: string;
  image?: SanityImageSource;
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
  slug: string;
  intro: string;
  image: SanityImageSource | null;
  twitter: string | null;
  twitterUrl: string | null;
  website: string | null;
  linkedin: string | null;
  github: string | null;
  instagram: string | null;
  twitch: string | null;
}
