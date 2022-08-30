export default {
  name: "content",
  title: "Content",
  type: "array",
  of: [
    {
      type: "block",
    },
    {
      type: "image",
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Alternative text",
          description: "Description of the image for accessibility",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};
