import dayjs from "dayjs";
import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Fusion Events",
  type: "document",
  fields: [
    defineField({
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
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "datetime",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "This will be used for the URL",
      type: "slug",
      options: {
        source: (doc) => {
          if (!doc.date || !(doc.date instanceof Date)) {
            throw new Error("Missing event date");
          }

          const date = dayjs(doc.date).format("YYYY-MM-DD");
          return `${doc.eventType || "unknown-type"}-${date}`;
        },
        maxLength: 96,
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "location",
    }),
    defineField({
      name: "food",
      title: "Food",
      description: "Where the food is from",
      type: "string",
    }),
    defineField({
      name: "eventbriteLink",
      title: "Eventbrite Link",
      type: "url",
    }),
    defineField({
      name: "topContent",
      title: "Content (Top)",
      type: "content",
    }),
    defineField({
      name: "talks",
      title: "Talks",
      type: "array",
      of: [{ type: "talk" }],
    }),
    defineField({
      name: "sponsors",
      title: "Sponsors",
      type: "array",
      of: [{ type: "sponsor" }],
    }),
    defineField({
      name: "bottomContent",
      title: "Content (Bottom)",
      type: "content",
    }),
    defineField({
      name: "youTubeLink",
      title: "YouTube Session",
      type: "url",
    }),
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
});
