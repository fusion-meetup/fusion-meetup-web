import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import img from "./img";
import content from "./content";

import blogCategory from "./blogCategory";
import blogPost from "./blogPost";

import teamMember from "./teamMember";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([img, content, blogCategory, blogPost, teamMember]),
});
