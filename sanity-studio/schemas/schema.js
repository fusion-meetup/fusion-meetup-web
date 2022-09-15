import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// General
import about from "./about";
import codeOfConduct from "./codeOfConduct";

// Documents
import event from "./event";
import teamMember from "./teamMember";
import blogPost from "./blogPost";
import blogCategory from "./blogCategory";

// Objects
import talk from "./talk";
import speaker from "./speaker";
import sponsor from "./sponsor";
import location from "./location";
import content from "./content";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    about,
    codeOfConduct,
    event,
    teamMember,
    blogPost,
    blogCategory,
    talk,
    speaker,
    sponsor,
    location,
    content,
  ]),
});
