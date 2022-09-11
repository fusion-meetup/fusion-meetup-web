import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const cms = sanityClient({
  projectId: "6io4al7p",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
});

export const sanityImageUrlBuilder = imageUrlBuilder(cms);
