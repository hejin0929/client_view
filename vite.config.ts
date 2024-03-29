import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        // target: 'http://localhost:9200',
        changeOrigin: true,
        rewrite: (path: string) => {
          // console.log('http://ali.testops.top:9199' + path.replace(/^\/api/, ''));
          return path.replace(/^\/api/, "");
        },
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      styl: {
        additionalData: `$injectedColor ?= orange`,
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@myPages": path.resolve(__dirname, "src/pages"),
      "@store": path.resolve(__dirname, "src/store"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
});
