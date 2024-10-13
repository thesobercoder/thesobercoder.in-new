import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import aws from "astro-sst";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  adapter: aws(),
});
