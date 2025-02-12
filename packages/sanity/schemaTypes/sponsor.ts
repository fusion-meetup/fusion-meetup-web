import { defineField, defineType } from "sanity";

export const sponsorType = defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Logo for Light Background",
      type: "image",
    }),
    defineField({
      name: "logoDark",
      title: "Logo for Dark Background",
      type: "image",
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      initialValue: "headline",
      options: {
        list: [
          { title: "Headline", value: "headline" },
          { title: "Platinum", value: "platinum" },
          { title: "Gold", value: "gold" },
          { title: "Silver", value: "silver" },
          { title: "Bronze", value: "bronze" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "content",
      title: "Page Content",
      type: "content",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "level",
      media: "logo",
    },
  },
});
