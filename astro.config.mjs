import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
