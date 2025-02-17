import { defineField, defineType } from "sanity";

export const locationType = defineType({
  name: "location",
  title: "Location",
  type: "object",
  fields: [
    defineField({
      name: "address",
      title: "Address",
      description: "The address of the location, ideally in a few lines",
      type: "text",
    }),
    defineField({
      name: "googleMapsLink",
      title: "Google Maps Link",
      description: "Link to the location on Google Maps",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "address",
      subtitle: "googleMapsLink",
    },
  },
});
