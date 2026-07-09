// Screenshot dist/ pages at multiple breakpoints using Playwright.
// Usage: node scripts/shots.mjs <outDir> <path1> [path2 ...]
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import path from 'node:path'

const [outDir, ...pagePaths] = process.argv.slice(2)
if (!outDir || pagePaths.length === 0) {
  console.error('usage: node scripts/shots.mjs <outDir> <path...>')
  process.exit(1)
}
mkdirSync(outDir, { recursive: true })

const PORT = 4871
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
  cwd: process.cwd(),
  shell: true,
  stdio: 'pipe',
})

await new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('preview server timeout')), 30000)
  server.stdout.on('data', (d) => {
    if (String(d).includes(String(PORT))) {
      clearTimeout(t)
      resolve()
    }
  })
  server.stderr.on('data', (d) => process.stderr.write(d))
})

const browser = await chromium.launch()
const widths = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
]

for (const p of pagePaths) {
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w.width, height: w.height } })
    await page.goto(`http://localhost:${PORT}${p}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(600)
    // scroll through the page to trigger lazy-loaded images and reveals
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 120))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForLoadState('networkidle')
    // force reveal animations to complete for the screenshot
    await page.evaluate(() => {
      document.querySelectorAll('.will-reveal').forEach((el) => el.classList.add('in-view'))
    })
    // strip CSS filters: Chromium full-page capture rasterizes filtered
    // offscreen images as blank (capture artifact, not a site bug)
    await page.addStyleTag({ content: 'img { filter: none !important; }' })
    await page.waitForTimeout(900)
    const slug = p.replace(/\//g, '-').replace(/^-|-$/g, '') || 'index'
    const file = path.join(outDir, `${slug}--${w.name}.png`)
    await page.screenshot({ path: file, fullPage: true })
    console.log('shot', file)
    await page.close()
  }
}

await browser.close()
server.kill('SIGTERM')
process.exit(0)
