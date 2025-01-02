/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

export default {
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 4,
  useTabs: true,
  bracketSpacing: true,
  trailingComma: 'all',
  importOrder: [
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "", // Empty line
    "^@plasmo/(.*)$",
    "",
    "^@plasmohq/(.*)$",
    "",
    "^@/(.*)$",
    "",
    "^[./]"
  ]
};
