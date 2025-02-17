/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindConfig: "./packages/ui/tailwind.config.ts",
  importOrder: [
    // server-only marker
    "^server-only$",
    // CSS imports
    "^(.*).css$",
    // Next (including next-auth) and React
    "^((@?next(.*))|(react))$",
    // Third-party modules
    "<THIRD_PARTY_MODULES>",
    // @fusion repo modules
    "^@fusion/(.*)$",
    // @ paths
    "^@(ui)?/(.*)$",
    // Relative imports
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
