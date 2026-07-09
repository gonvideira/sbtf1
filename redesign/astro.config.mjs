// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// i18n is handled explicitly in routes and BaseLayout (hreflang alternates):
// during the design-review phase the three alternatives live at /a/, /b/, /c/,
// each with /pt/ + /en/ subroutes. The chosen alternative gets promoted to
// root /pt/ + /en/ at ship time.
export default defineConfig({
  site: 'https://bluetransformationfund.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // the review index is an internal artifact, not for crawlers
      filter: (page) => !page.endsWith('bluetransformationfund.com/'),
    }),
  ],
  image: {
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
})
