import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://robinwebc.github.io',
  base: '/nsedo-mobile',
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: false,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
