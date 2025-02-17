import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "6io4al7p",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
});
