import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const OUT = process.env.OUT
const PORT = 4896
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { cwd: process.cwd(), shell: true, stdio: 'pipe' })
await new Promise((res) => server.stdout.on('data', (d) => String(d).includes(String(PORT)) && res()))
const browser = await chromium.launch()

for (const alt of ['a', 'b', 'c']) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(`http://localhost:${PORT}/${alt}/pt/`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1600)
  await page.screenshot({ path: `${OUT}/${alt}-hero.png` })
  // mid-dive: scroll into second chapter of the hub
  const dive = page.locator('.dive')
  const box = await dive.boundingBox()
  await page.evaluate((y) => window.scrollTo(0, y), box.y + box.height * 0.38)
  await page.waitForTimeout(1600)
  await page.screenshot({ path: `${OUT}/${alt}-dive.png` })
  // eras / thesis
  await page.locator('#tese').scrollIntoViewIfNeeded()
  await page.evaluate(() => window.scrollBy(0, 200))
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `${OUT}/${alt}-eras.png` })
  // video toggle works
  const toggle = page.locator('.hero .video-toggle, .hero-media .video-toggle').first()
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(600)
  await toggle.click()
  const state = await toggle.getAttribute('data-state')
  const paused = await page.evaluate(() => document.querySelector('video')?.paused)
  console.log(`ALT ${alt}: video toggle state=${state} paused=${paused}`)
  await page.close()
}
await browser.close()
server.kill()
console.log('done')
process.exit(0)
