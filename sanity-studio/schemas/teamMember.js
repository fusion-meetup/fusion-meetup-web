export default {
  name: "teamMember",
  type: "object",
  title: "Team Member",
  preview: {
    select: {
      title: "name",
    },
    prepare(selection) {
      const { title } = selection;
      return { title };
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "twitter",
      type: "string",
      title: "Twitter username",
      description: "Twitter username without the @",
    },
    {
      name: "image",
      type: "img",
      title: "Image",
    },
  ],
};
