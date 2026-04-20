import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://citadel-resources.com',
  server: { host: true },
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
