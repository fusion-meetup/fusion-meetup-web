import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Fusion Web Content Base")
    .items([
      S.listItem()
        .title("About Fusion")
        .child(S.document().schemaType("about").documentId("about")),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !["about"].includes(item.getId())),
    ]);
