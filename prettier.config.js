/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    printWidth: 100,
    jsxSingleQuote: true,
    // headwind?
    plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-classnames'],
    // plugins: [require("prettier-plugin-tailwindcss")],
};
