export default {
  name: "speaker",
  title: "Speaker",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "pronouns",
      title: "Pronouns",
      description: "Optional",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
    },
    {
      name: "bio",
      title: "Bio",
      type: "content",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "photo",
    },
  },
};
