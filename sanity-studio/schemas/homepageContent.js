export default {
  name: "homepageContent",
  title: "Homepage Content",
  type: "document",
  fields: [
    {
      name: "showAlert",
      title: "Show Alert?",
      type: "boolean",
    },
    {
      name: "alertContent",
      title: "Alert Content",
      type: "content",
    },
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
};
