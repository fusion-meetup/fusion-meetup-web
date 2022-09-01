import { SanityDocumentBase, SanityImg, SanityImgMapped } from "./Sanity";

export interface SanityTeamMember extends SanityDocumentBase {
  name: string;
  twitter?: string;
  image?: SanityImg;
}

export interface TeamMember {
  key: string;
  name: string;
  twitter: string | null;
  image: SanityImgMapped | null;
}
