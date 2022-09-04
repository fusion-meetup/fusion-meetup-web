import dayjs from "dayjs";

export default {
  name: "event",
  title: "Fusion Event",
  type: "document",
  fields: [
    {
      name: "eventType",
      title: "Event Type",
      type: "string",
      initialValue: "meetup",
      options: {
        list: [
          { title: "Meetup", value: "meetup" },
          { title: "Conference", value: "conference" },
        ],
        layout: "radio",
      },
    },
    {
      name: "date",
      title: "Event Date",
      type: "datetime",
    },
    {
      name: "slug",
      title: "Slug",
      description: "This will be used for the URL",
      type: "slug",
      options: {
        source: (doc) => {
          if (!doc.date) throw new Error("Missing event date");
          const date = dayjs(doc.date).format("YYYY-MM-DD");
          return `${doc.eventType || "unknown-type"}-${date}`;
        },
        maxLength: 96,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "location",
    },
    {
      name: "food",
      title: "Food",
      description: "Where the food is from",
      type: "string",
    },
    {
      name: "eventbriteLink",
      title: "Eventbrite Link",
      type: "url",
    },
    {
      name: "meetupLink",
      title: "Meetup Link",
      type: "url",
    },
    {
      name: "topContent",
      title: "Content (Top)",
      type: "content",
    },
    {
      name: "talks",
      title: "Talks",
      type: "array",
      of: [{ type: "talk" }],
    },
    {
      name: "sponsors",
      title: "Sponsors",
      type: "array",
      of: [{ type: "sponsor" }],
    },
    {
      name: "bottomContent",
      title: "Content (Bottom)",
      type: "content",
    },
  ],
  preview: {
    select: {
      eventType: "eventType",
      slug: "slug.current",
      date: "date",
    },
    prepare(selection) {
      const date = selection.date
        ? dayjs(selection.date).format("DD/MM/YYYY")
        : "Missing date";

      return Object.assign({}, selection, {
        title: `Fusion ${selection.eventType} - ${date}`,
        subtitle: selection.slug,
      });
    },
  },
};
