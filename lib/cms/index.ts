import sanityClient from "@sanity/client";

export const cms = sanityClient({
  projectId: "6io4al7p",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
});
