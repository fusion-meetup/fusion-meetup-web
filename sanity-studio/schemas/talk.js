export default {
  name: "talk",
  title: "Talk",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Talk Title",
      type: "string",
    },
    {
      name: "overview",
      title: "Talk Overview",
      type: "content",
    },
    {
      name: "speaker",
      title: "Speaker",
      type: "speaker",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "speaker.name",
      media: "speaker.photo",
    },
  },
};
