# BTF Marketing — final site (Cardume)

The chosen "Cardume" direction promoted to a standalone production app.
Astro 5 static output; canonical pages at `/pt/` and `/en/` (hreflang-paired),
root `/` redirects to `/pt/`.

## Run

```bash
cd marketing
npm install
npm run dev
npm run build      # astro check + production build → dist/
npm run preview
```

## Differences vs the /redesign prototype (client feedback round)

- **Hero copy**: "O mar já é nosso. / A escala é o próximo passo." — positive
  framing, quieter scale (Fraunces 500, smaller clamp), EN localized as
  "The sea has always been ours. / Scale is the next step."
- **Canyon return**: the European-context stats moved out of the thesis into
  a full-bleed dark band over a canyon still (`src/assets/photos/canyon-still.jpg`,
  frame at 9s of the dolphin footage), kicker "Regresso à profundidade" —
  breaking the white run inside the Fund exactly where the client asked.
- **Fund subnav**: hidden below 900px (it read oddly on mobile; anchors live
  in the main menu there).
- **Autoplay fix**: AV1 sources attach only when
  `navigator.mediaCapabilities.decodingInfo` *proves* decode support (some
  Safari builds claim AV1 then freeze on frame 1 — the "fish don't move"
  bug); playback retries on `canplay`, first real gesture, and tab-visible
  (covers autoplay policies / Low Power Mode).

Everything else (dive Hub, research slot, eras, full-bleed NaturaFish band,
navy terms, CMVM disclaimer, reduced-motion fallbacks) carries over from the
prototype. See `../redesign/README.md` for the machinery documentation.

Last verified: `astro check` 0 errors · axe 0 violations (PT + EN,
full-scroll) · Lighthouse mobile 95 perf / 100 a11y / 100 BP / 100 SEO,
CLS 0 on both pages.

## Deploy

Linked to the `btf-marketing` Vercel project (CLI deploys from this folder):

```bash
cd marketing && npx vercel deploy --prod --yes
```
