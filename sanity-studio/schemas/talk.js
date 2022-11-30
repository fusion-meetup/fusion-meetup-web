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
    {
      name: "isLightningTalk",
      title: "Lightning Talk",
      description: "Is this a lightning talk?",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "speaker.name",
      subtitle: "title",
      media: "speaker.photo",
      isLightningTalk: "isLightningTalk",
    },
    prepare({ title, subtitle, media, isLightningTalk }) {
      return {
        title,
        subtitle: `${isLightningTalk ? "LIGHTNING ⚡️ " : ""}${subtitle}`,
        media,
      };
    },
  },
};
