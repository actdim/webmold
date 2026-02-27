import { defineConfig, type PluginOption } from 'vite';
import path, { dirname, resolve } from 'path';
import fs from 'fs';
import react from '@vitejs/plugin-react-swc';

// import { basePath } from "@/config";
import tailwindcss from '@tailwindcss/vite';
// import { visualizer } from "rollup-plugin-visualizer";
import postcss from 'postcss';

const basePath = 'ui';

function joinWebPath(...parts: string[]) {
    return parts
        .map((p) => p.replace(/^\/+|\/+$/g, ''))
        .filter(Boolean)
        .join('/');
}

const rootPath = __dirname;
// const rootPath = dirname(fileURLToPath(import.meta.url));

const aliases = {
    '@': './src',
};

const resolvedAliases = Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [key, resolve(rootPath, value)])
);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        // presignUrls()
        // visualizer({
        //     filename: "bundle.html", // output file name
        //     template: "treemap", // options: "flamegraph" | "sunburst" | "network" | "treemap" | "raw-data" | "list"
        //     open: true // Automatically open the report in the browser
        // }) as PluginOption
    ],
    resolve: {
        alias: {
            ...resolvedAliases,
        },
    },
    server: {
        port: 5174,
        open: true,
        proxy: {
            "/api": "http://localhost:3000"
        },
        watch: {
            usePolling: true,
        },
    },
    base: '/',
    build: {
        rollupOptions: {
            input: {
                main:  resolve(rootPath, 'index.html'),
                tw:    resolve(rootPath, 'tw/index.html'),
                mui:   resolve(rootPath, 'mui/index.html'),
                prime: resolve(rootPath, 'prime/index.html'),
                daisy:  resolve(rootPath, 'daisy/index.html'),
                shadcn: resolve(rootPath, 'shadcn/index.html'),
            },
        },
    },
    define: {
        __DEBUG__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    },
});
