import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  esbuildPlugins: [vanillaExtractPlugin()],
  dts: true,
  // Include here the css files coming from external dependencies, which we
  // recommend to bundle in your design system package.
  noExternal: [
    "@buildo/bento-design-system/index.css",
    // e.g. here's how to include fonts from Fontsource, a popular library for self-hosting fonts
    // "@fontsource",

    // Uncomment the next line if you want to bundle all css files coming from external dependencies
    // NOTE: this may significantly slow down your build, depending on your setup.
    // /\.css$/,
  ],
});
