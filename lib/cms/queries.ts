import { cms } from ".";
import { BlogPost, SanityBlogPost } from "../../types/cms/Blog";
import { SanityTeamMember, TeamMember } from "../../types/cms/TeamMember";

import { mapSanityBlogPost, mapSanityTeamMember } from "./mappers";

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
    | order(publishedAt desc)`
  );
  return blogPostsSanity.map(mapSanityBlogPost);
};

export const getBlogPostBySlug = async (slug: string | undefined): Promise<BlogPost> => {
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
