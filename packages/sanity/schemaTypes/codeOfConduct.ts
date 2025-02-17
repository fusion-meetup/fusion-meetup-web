import { defineField, defineType } from "sanity";

export const codeOfConductType = defineType({
  name: "codeOfConduct",
  title: "Code of Conduct",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Code of Conduct Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Code of Conduct Content",
      type: "content",
    }),
    defineField({
      name: "linkText",
      title: "Link Text",
      type: "string",
    }),
  ],
});
