// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://kevintim.com",
  integrations: [tailwind(), react(), sitemap()],
  redirects: {
    "/": "/en",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "fr"],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  adapter: netlify(),
});
