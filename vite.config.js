import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "pathe";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssTarget: "dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "dcam_flhealth_component_library",
      fileName: "dcam-flhealth-component-library",
      formats: ["es", "cjs", "umd", "iife"],
    },
    minify: false,
    rollupOptions: {
      external: [
        "react",
        "react-bootstrap",
        "react-dom",
        "react-hook-form",
        "react-table",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react(), dts({ insertTypesEntry: true, rollupTypes: true })],
  });

