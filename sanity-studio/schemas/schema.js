import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import img from "./img";

import teamMembers from "./teamMembers";
import teamMember from "./teamMember";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([img, teamMembers, teamMember]),
});
