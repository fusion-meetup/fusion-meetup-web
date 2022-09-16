export default {
  name: "teamMember",
  type: "document",
  title: "Team Members",
  preview: {
    select: {
      title: "name",
      subtitle: "twitter",
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
      name: "slug",
      title: "Slug",
      description: "This will be used for the URL",
      type: "slug",
      options: {
        source: (doc) => {
          if (!doc.name) throw new Error("Missing event date");
          return doc.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^0-9a-z\-]/gi, "");
        },
        maxLength: 96,
      },
    },
    {
      name: "intro",
      type: "string",
      title: "Intro",
      description: "Short intro about the team member",
      validation: (rule) => rule.required().max(140),
    },
    {
      name: "image",
      type: "image",
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
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
