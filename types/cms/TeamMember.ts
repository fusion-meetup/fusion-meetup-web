import {
  SanityDocumentBase,
  SanityImg,
  SanityImgMapped,
  SanityObjectBase,
} from "./Sanity";

export interface SanityTeamMembers extends SanityDocumentBase {
  teamMembers: SanityTeamMember[];
}

export interface SanityTeamMember extends SanityObjectBase {
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
