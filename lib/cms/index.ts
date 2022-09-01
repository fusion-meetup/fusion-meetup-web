import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import type { SanityImg } from "../../types/cms/Sanity";

export const cms = sanityClient({
  projectId: "6io4al7p",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-09-01",
});

export const sanityImageUrlBuilder = imageUrlBuilder(cms);

export const getSanityImgSrc = (source: SanityImg) => {
  return sanityImageUrlBuilder
    .image(source)
    .width(source.width)
    .height(source.height)
    .url();
};
