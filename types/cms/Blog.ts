import { SanityDocumentBase } from "./Sanity";
import { SanityTeamMember, TeamMember } from "./TeamMember";

export interface SanityBlogPost extends SanityDocumentBase {
  title: string;
  slug: string;
  publishedAt: string;
  author?: SanityTeamMember;
  body: any;
}

export interface BlogPost {
  key: string;
  title: string;
  slug: string;
  publishedAt: string;
  author: TeamMember | null;
  body: any;
}
