import S from "@sanity/desk-tool/structure-builder";

const globalSchemaTypes = [
  {
    title: "About Fusion",
    name: "about",
  },
  {
    title: "Code of Conduct",
    name: "codeOfConduct",
  },
];

export default () =>
  S.list()
    .title("Fusion Web Content Base")
    .items([
      ...globalSchemaTypes.map((schemaType) =>
        S.listItem()
          .title(schemaType.title)
          .child(
            S.document().schemaType(schemaType.name).documentId(schemaType.name)
          )
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !globalSchemaTypes.map((x) => x.name).includes(item.getId())
      ),
    ]);
