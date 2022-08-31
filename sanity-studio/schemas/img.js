export default {
  title: "Image",
  name: "img",
  type: "image",
  fields: [
    {
      name: "width",
      type: "number",
      title: "Width",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "height",
      type: "number",
      title: "Height",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alt",
      type: "string",
      title: "Alt text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
