import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";
import { patchCssModules } from "vite-css-modules";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    plugins: [patchCssModules(), react({ plugins: [["effector-swc-plugin", {}]] }), svgr()],
    css: {
      modules: {
        generateScopedName: isDev
          ? "[folder]__[local]__[hash:base64:5]"
          : "[hash:base64:5]"
      }
    },
    server: {
      port: 3000,
      host: true,
      hmr: false
    },
    build: {
      chunkSizeWarningLimit: 500
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      }
    }
  };
});

