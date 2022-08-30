export default {
  name: "teamMember",
  type: "object",
  title: "Team Member",
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (rule) => rule.required().min(2).max(50),
    },
    {
      name: "image",
      type: "img",
      title: "Image",
    },
    {
      name: "twitter",
      type: "string",
      title: "Twitter username",
      description: "Twitter username without the @",
      validation: (rule) => rule.required().min(1).max(30),
    },
    {
      name: "website",
      type: "string",
      title: "Website URL",
      description: "(optional)",
    },
    {
      name: "linkedin",
      type: "string",
      title: "LinkedIn URL",
      description: "(optional)",
    },
    {
      name: "github",
      type: "string",
      title: "GitHub username",
      description: "GitHub username without the @ (optional)",
    },
    {
      name: "instagram",
      type: "string",
      title: "Instagram username",
      description: "Instagram username without the @ (optional)",
    },
    {
      name: "twitch",
      type: "string",
      title: "Twitch URL",
      description: "(optional)",
    },
  ],
};
