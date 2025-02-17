import { defineArrayMember, defineField, defineType } from "sanity";

export const contentType = defineType({
  name: "content",
  title: "Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
    }),
    defineArrayMember({
      type: "image",
      fields: [
        defineField({
          type: "text",
          name: "alt",
          title: "Alternative text",
          description: "Description of the image for accessibility",
        }),
      ],
    }),
  ],
});
