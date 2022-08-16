import path from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import swc from "unplugin-swc";
import { defineConfig, PluginOption } from "vite";

import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: pkg.name,
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    emptyOutDir: true,
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies), "react/jsx-runtime"],
      // output: {
      //   globals: {
      //       react: 'React',
      //       'react-dom': 'ReactDOM',
      //       'styled-components': 'styled',
      //   },
      // },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              // ssr: true,
              // pure: true,
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    }),
    tsconfigPaths(),
    swc.vite(),
    swc.rollup({
      minify: true,
    }) as PluginOption,
    dts({ insertTypesEntry: true }),
  ],
});
