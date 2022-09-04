export default {
  name: "location",
  title: "Location",
  type: "object",
  fields: [
    {
      name: "address",
      title: "Address",
      description: "The address of the location, ideally in a few lines",
      type: "text",
    },
    {
      name: "googleMapsLink",
      title: "Google Maps Link",
      description: "Link to the location on Google Maps",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "address",
      subtitle: "googleMapsLink",
    },
  },
};
