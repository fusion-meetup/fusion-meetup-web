export default {
  name: "sponsor",
  title: "Sponsor",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
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
    },
    {
      name: "content",
      title: "Page Content",
      type: "content",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "level",
      media: "logo",
    },
  },
};
