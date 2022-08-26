import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import type { SanityImg } from "../../types/cms/Sanity";

export const cms = sanityClient({
  projectId: "6io4al7p",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(cms);

export const getSanityImgSrc = (source: SanityImg) =>
  builder.image(source).width(source.width).height(source.height).url();
