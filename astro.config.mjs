import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const base = process.env.ASTRO_BASE ?? "/";

export default defineConfig({
  site: "https://pitline.cl",
  base,
  integrations: [tailwind()],
});
