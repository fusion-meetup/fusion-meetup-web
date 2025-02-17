import { defineField, defineType } from "sanity";

export const homepageContentType = defineType({
  name: "homepageContent",
  title: "Homepage Content",
  type: "document",
  fields: [
    defineField({
      name: "showAlert",
      title: "Show Alert?",
      type: "boolean",
    }),
    defineField({
      name: "alertContent",
      title: "Alert Content",
      type: "content",
    }),
  ],
  preview: {
    select: {
      showAlert: "showAlert",
    },
    prepare({ showAlert }) {
      return {
        title: "Homepage Content",
        subtitle: showAlert ? "Alert is enabled" : "Alert is disabled",
      };
    },
  },
});
