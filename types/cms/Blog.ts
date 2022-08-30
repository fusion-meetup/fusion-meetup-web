import { SanityDocumentBase } from "./Sanity";

export interface SanityBlogPost extends SanityDocumentBase {
  title: string;
  publishedAt: string;
}

export interface BlogPost {
  key: string;
  title: string;
  publishedAt: string;
}
