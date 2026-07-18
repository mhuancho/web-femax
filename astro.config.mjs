import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // TODO: reemplazar por el dominio real cuando se publique el sitio
  site: "https://femax.pe",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
