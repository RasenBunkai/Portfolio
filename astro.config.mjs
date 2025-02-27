import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing:{
      prefixDefaultLocale:true,
      redirectToDefaultLocale:true
    }
  },
  integrations: [tailwind()],
});
