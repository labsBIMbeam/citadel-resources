import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://citadel-resources.com',
  integrations: [sitemap()],
  server: { host: true },
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
