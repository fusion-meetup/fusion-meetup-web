import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fusion Meetup",
    short_name: "Fusion Meetup",
    description: "Fusion Meetup",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#0f172a",
  };
}
