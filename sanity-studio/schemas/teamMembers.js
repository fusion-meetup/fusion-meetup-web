export default {
  title: "Team members",
  name: "teamMembers",
  type: "document",
  fields: [
    {
      title: "Team Members",
      name: "teamMembers",
      type: "array",
      of: [{ type: "teamMember" }],
    },
  ],
  preview: {
    select: {
      teamMembers: "teamMembers",
    },
    prepare(selection) {
      return {
        title: "Team Members",
        subtitle: `${selection.teamMembers.length} team members`,
      };
    },
  },
};
