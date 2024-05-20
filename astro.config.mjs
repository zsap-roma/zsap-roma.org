import { defineConfig } from 'astro/config';

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://zsap-roma.github.io',
  base: 'zsap-roma/astro',
  integrations: [lit()],
  output: 'static',
  outDir: './dist',
  build: {
    assets: 'astro'
  }
});