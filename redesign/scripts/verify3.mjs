import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const OUT = process.env.OUT
const PORT = 4897
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { cwd: process.cwd(), shell: true, stdio: 'pipe' })
await new Promise((res) => server.stdout.on('data', (d) => String(d).includes(String(PORT)) && res()))
const browser = await chromium.launch()

// A: fund sections (portfolio band, terms, CTA) + footer
const pa = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await pa.goto(`http://localhost:${PORT}/a/pt/`, { waitUntil: 'networkidle' })
for (const [sel, name, dy] of [['#portfolio', 'a-portfolio', 300], ['#estrutura', 'a-terms', 100], ['#investir .invest-cta', 'a-cta', -150], ['.site-footer', 'a-footer', 0], ['#stats', 'a-stats', -100]]) {
  await pa.locator(sel).first().scrollIntoViewIfNeeded()
  await pa.evaluate((y) => window.scrollBy(0, y), dy)
  await pa.waitForTimeout(1100)
  await pa.screenshot({ path: `${OUT}/${name}.png` })
}
await pa.close()

// B: fund shelf + footer
const pb = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await pb.goto(`http://localhost:${PORT}/b/pt/`, { waitUntil: 'networkidle' })
for (const [sel, name, dy] of [['#tese', 'b-thesis', 150], ['#estrutura', 'b-terms', 100], ['.site-footer', 'b-footer', 0]]) {
  await pb.locator(sel).first().scrollIntoViewIfNeeded()
  await pb.evaluate((y) => window.scrollBy(0, y), dy)
  await pb.waitForTimeout(1100)
  await pb.screenshot({ path: `${OUT}/${name}.png` })
}
await pb.close()

// C: scrub dive — check canvas becomes ready and frame changes with scroll
const pc = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await pc.goto(`http://localhost:${PORT}/c/pt/`, { waitUntil: 'networkidle' })
const dive = pc.locator('.dive')
const box = await dive.boundingBox()
await pc.evaluate((y) => window.scrollTo(0, y), box.y + box.height * 0.2)
await pc.waitForTimeout(2500)
const ready1 = await pc.evaluate(() => document.querySelector('.dive-canvas')?.classList.contains('ready'))
await pc.screenshot({ path: `${OUT}/c-scrub-20.png` })
const snap1 = await pc.locator('.dive-canvas').screenshot()
await pc.evaluate((y) => window.scrollTo(0, y), box.y + box.height * 0.7)
await pc.waitForTimeout(1500)
await pc.screenshot({ path: `${OUT}/c-scrub-70.png` })
const snap2 = await pc.locator('.dive-canvas').screenshot()
const differs = Buffer.compare(snap1, snap2) !== 0
console.log(`C scrub: canvas ready=${ready1} frame-changes-with-scroll=${differs}`)
await pc.close()

await browser.close()
server.kill()
console.log('done')
process.exit(0)
