import path from "node:path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import swc from "unplugin-swc";
import { defineConfig, PluginOption } from "vite";
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: pkg.name,
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    emptyOutDir: true,
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies), "react/jsx-runtime"],
      output: {
        globals: {
          'react': 'React'
        }
      }
    },
  },
  plugins: [
    vanillaExtractPlugin(),
    react(),
    tsconfigPaths(),
    swc.vite(),
    swc.rollup({
      minify: true,
    }) as PluginOption,
    dts({ insertTypesEntry: true, include: ["src"] }),
  ],
});
