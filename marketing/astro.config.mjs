// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Final marketing site — Cardume direction promoted to root.
// Canonical pages live at /pt/ and /en/ (crawlable, hreflang-paired);
// the root path redirects to the Portuguese page.
export default defineConfig({
  site: 'https://bluetransformationfund.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/': '/pt/',
  },
  image: {
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
})
