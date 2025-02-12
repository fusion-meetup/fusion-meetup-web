/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@fusion/eslint-config/react-internal.js",
    "@sanity/eslint-config-studio",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
