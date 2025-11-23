import { Config } from "tailwindcss";
// import { join } from 'path'
// import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // "./src/**/*.{html,md,js,ts,jsx,tsx,mdx}",
        "./@/**/*.{html,md,js,ts,jsx,tsx,mdx}"
        // join(__dirname, 'src/**/*.{html,md,js,ts,jsx,tsx,mdx}'),
    ],
    // corePlugins: {
    //     preflight: false
    // },
    plugins: [
        require("@tailwindcss/typography"),
        // require("daisyui")        
    ],
    safelist: [
        {
            // pattern: /./
            // variants: ['sm', 'md', 'lg', 'xl', '2xl'], // uncommenting this line makes next compile for too long
        },
    ],
    themes: {
        static: {
            colors: {
                primary: '#3b82f6',
                secondary: '#ef4444',
            },
            emitAll: true,
        },
    },

} as Config;