import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from 'vite-plugin-vue-layouts';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Layouts({
      layoutsDirs: 'src/layouts',
      pagesDirs: 'src/pages',
      defaultLayout: 'default'
    }),
    Pages({
      dirs: "./src/pages",
    }),
  ],
});
