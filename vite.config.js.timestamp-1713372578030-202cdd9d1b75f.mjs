// vite.config.js
import { defineConfig } from "file:///C:/Users/RatnaD/source/repos/DCAM_FLHealth_Component_Library/node_modules/.pnpm/vite@4.4.9_@types+node@20.3.1_less@4.2.0_sass@1.55.0/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/RatnaD/source/repos/DCAM_FLHealth_Component_Library/node_modules/.pnpm/@vitejs+plugin-react@4.0.4_vite@4.4.9/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "file:///C:/Users/RatnaD/source/repos/DCAM_FLHealth_Component_Library/node_modules/.pnpm/pathe@1.1.1/node_modules/pathe/dist/index.mjs";
import dts from "file:///C:/Users/RatnaD/source/repos/DCAM_FLHealth_Component_Library/node_modules/.pnpm/vite-plugin-dts@3.5.3_@types+node@20.3.1_typescript@5.2.2_vite@4.4.9/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\RatnaD\\source\\repos\\DCAM_FLHealth_Component_Library";
var vite_config_default = defineConfig({
  build: {
    cssTarget: "dist",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "dcam_flhealth_component_library",
      fileName: "dcam-flhealth-component-library",
      formats: ["es", "cjs", "umd", "iife"]
    },
    minify: false,
    rollupOptions: {
      external: [
        "react",
        "react-bootstrap",
        "react-dom",
        "react-hook-form",
        "react-table"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  plugins: [react(), dts({ insertTypesEntry: true, rollupTypes: true })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSYXRuYURcXFxcc291cmNlXFxcXHJlcG9zXFxcXERDQU1fRkxIZWFsdGhfQ29tcG9uZW50X0xpYnJhcnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFJhdG5hRFxcXFxzb3VyY2VcXFxccmVwb3NcXFxcRENBTV9GTEhlYWx0aF9Db21wb25lbnRfTGlicmFyeVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUmF0bmFEL3NvdXJjZS9yZXBvcy9EQ0FNX0ZMSGVhbHRoX0NvbXBvbmVudF9MaWJyYXJ5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhlXCI7XHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgY3NzVGFyZ2V0OiBcImRpc3RcIixcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxyXG4gICAgICBuYW1lOiBcImRjYW1fZmxoZWFsdGhfY29tcG9uZW50X2xpYnJhcnlcIixcclxuICAgICAgZmlsZU5hbWU6IFwiZGNhbS1mbGhlYWx0aC1jb21wb25lbnQtbGlicmFyeVwiLFxyXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiLCBcInVtZFwiLCBcImlpZmVcIl0sXHJcbiAgICB9LFxyXG4gICAgbWluaWZ5OiBmYWxzZSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICBcInJlYWN0XCIsXHJcbiAgICAgICAgXCJyZWFjdC1ib290c3RyYXBcIixcclxuICAgICAgICBcInJlYWN0LWRvbVwiLFxyXG4gICAgICAgIFwicmVhY3QtaG9vay1mb3JtXCIsXHJcbiAgICAgICAgXCJyZWFjdC10YWJsZVwiLFxyXG4gICAgICBdLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxyXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCksIGR0cyh7IGluc2VydFR5cGVzRW50cnk6IHRydWUsIHJvbGx1cFR5cGVzOiB0cnVlIH0pXSxcclxuICB9KTtcclxuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1gsU0FBUyxvQkFBb0I7QUFDL1ksT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFIaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsTUFBTSxPQUFPLE9BQU8sTUFBTTtBQUFBLElBQ3RDO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsa0JBQWtCLE1BQU0sYUFBYSxLQUFLLENBQUMsQ0FBQztBQUNyRSxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
