import { defineField, defineType } from "sanity";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "This will be used for the URL",
      type: "slug",
      options: {
        source: (doc) => {
          if (!doc.name || typeof doc.name !== "string") {
            throw new Error("Missing event date");
          }

          return doc.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^0-9a-z-]/gi, "");
        },
        maxLength: 96,
      },
    }),
    defineField({
      name: "intro",
      title: "Intro",
      description: "Short intro about the team member",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "twitter",
      title: "Twitter username",
      description: "Twitter username without the @",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website URL",
      description: "(optional)",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      description: "(optional)",
      type: "string",
    }),
    defineField({
      name: "github",
      title: "GitHub username",
      description: "GitHub username without the @ (optional)",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram username",
      description: "Instagram username without the @ (optional)",
      type: "string",
    }),
    defineField({
      name: "twitch",
      title: "Twitch URL",
      description: "(optional)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    }),
  ],
});
