import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./schemaTypes";

const globalSchemaTypes = [
  { title: "Homepage Content", name: "homepageContent" },
  { title: "About Fusion", name: "about" },
  { title: "Code of Conduct", name: "codeOfConduct" },
];

const config = defineConfig({
  name: "default",
  title: "fusion-meetup-web",

  projectId: "6io4al7p",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Fusion Web Content Base")
          .items([
            ...globalSchemaTypes.map((schemaType) =>
              S.listItem()
                .title(schemaType.title)
                .child(
                  S.document()
                    .schemaType(schemaType.name)
                    .documentId(schemaType.name),
                ),
            ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) =>
                !globalSchemaTypes
                  .map((x) => x.name)
                  .includes(item.getId() ?? "no id"),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },
});

export default config;
