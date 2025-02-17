import { defineField, defineType } from "sanity";

export const speakerType = defineType({
  name: "speaker",
  title: "Speaker",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "pronouns",
      title: "Pronouns",
      description: "Optional",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "content",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "photo",
    },
  },
});
