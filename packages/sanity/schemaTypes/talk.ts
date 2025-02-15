import { defineField, defineType } from "sanity";

export const talkType = defineType({
  name: "talk",
  title: "Talk",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Talk Title",
      type: "string",
    }),
    defineField({
      name: "overview",
      title: "Talk Overview",
      type: "content",
    }),
    defineField({
      name: "speaker",
      title: "Speaker",
      type: "speaker",
    }),
    defineField({
      name: "isLightningTalk",
      title: "Lightning Talk",
      description: "Is this a lightning talk?",
      type: "boolean",
    }),
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
        subtitle: `${isLightningTalk ? "LIGHTNING ⚡️ " : ""}${subtitle || "No title"}`,
        media,
      };
    },
  },
});
