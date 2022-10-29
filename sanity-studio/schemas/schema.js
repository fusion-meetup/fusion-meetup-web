import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// General
import about from "./about";
import codeOfConduct from "./codeOfConduct";
import homepageContent from "./homepageContent";

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
    // General
    about,
    codeOfConduct,
    homepageContent,

    // Documents
    event,
    teamMember,
    blogPost,
    blogCategory,

    // Objects
    talk,
    speaker,
    sponsor,
    location,
    content,
  ]),
});
