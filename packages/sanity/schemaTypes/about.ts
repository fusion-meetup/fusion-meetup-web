import { defineField, defineType } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About Fusion",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "About Fusion Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "content",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "content",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
  ],
});
