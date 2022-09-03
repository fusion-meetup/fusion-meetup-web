import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import img from "./img";
import content from "./content";

import teamMember from "./teamMember";

import blogCategory from "./blogCategory";
import blogPost from "./blogPost";

import event from "./event";
import talk from "./talk";
import speaker from "./speaker";
import sponsor from "./sponsor";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    img,
    content,
    teamMember,
    blogCategory,
    blogPost,
    event,
    talk,
    speaker,
    sponsor,
  ]),
});
