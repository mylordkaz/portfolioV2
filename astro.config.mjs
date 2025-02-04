// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind(), react()],
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
