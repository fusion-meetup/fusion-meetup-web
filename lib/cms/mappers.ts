import { BlogPost, SanityBlogPost } from "../../types/cms/Blog";
import type { SanityImg, SanityImgMapped } from "../../types/cms/Sanity";
import type { SanityTeamMember, TeamMember } from "../../types/cms/TeamMember";
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
  image: mapSanityImg(x.image),
});

export const mapSanityBlogPost = (x: SanityBlogPost): BlogPost => ({
  key: x._id,
  slug: x.slug,
  title: x.title,
  publishedAt: x.publishedAt,
  author: x.author ? mapSanityTeamMember(x.author) : null,
  body: x.body || [],
});
