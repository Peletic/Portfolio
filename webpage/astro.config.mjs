import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig( /** @type {import('astro').AstroUserConfig} */
{
  site: 'http://localhost:3000/',
  integrations: [tailwind(), react()],
  vite: {
    assetsInclude: "**/*.glb"
  }
});