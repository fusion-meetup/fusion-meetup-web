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
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
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
