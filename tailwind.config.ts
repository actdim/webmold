import { Config } from "tailwindcss";
// import plugin from "tailwindcss/plugin";
// import { join } from 'path'
// import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            colors: {
                // accent: 'var(--accent)',
            },
        },
    },
    content: [
        // "./@/**/*.{html,md,js,ts,jsx,tsx,mdx}"
    ],
    // corePlugins: {
    //   preflight: false
    // },
    plugins: [
        // plugin(({ addVariant }) => {
        //     addVariant("children", "&>*");
        // }),
        require("@tailwindcss/typography"),
        // require("daisyui")
    ],
    safelist: [
        {
            // pattern: /./
            // variants: ['sm', 'md', 'lg', 'xl', '2xl'], // uncommenting this line makes next compile for too long
        },
    ],
} as Config;