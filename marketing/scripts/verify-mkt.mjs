import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const OUT = process.env.OUT
const PORT = 4910
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { cwd: process.cwd(), shell: true, stdio: 'pipe' })
await new Promise((res) => server.stdout.on('data', (d) => String(d).includes(String(PORT)) && res()))
const browser = await chromium.launch()

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto(`http://localhost:${PORT}/pt/`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1800)
await page.screenshot({ path: `${OUT}/mkt-hero.png` })
// check hero video attaches + plays after a real-ish gesture
await page.mouse.wheel(0, 10)
await page.waitForTimeout(2500)
const videoState = await page.evaluate(() => {
  const v = document.querySelector('.hero video')
  return { src: (v.currentSrc || '').split('/').pop(), paused: v.paused, time: v.currentTime.toFixed(2) }
})
console.log('hero video:', JSON.stringify(videoState))
// eu canyon band
await page.locator('.eu-band').scrollIntoViewIfNeeded()
await page.evaluate(() => window.scrollBy(0, -60))
await page.waitForTimeout(1300)
await page.screenshot({ path: `${OUT}/mkt-euband.png` })
await page.close()

// mobile: hero + fund top (subnav must be gone)
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } })
await mob.goto(`http://localhost:${PORT}/pt/`, { waitUntil: 'networkidle' })
await mob.waitForTimeout(1500)
await mob.screenshot({ path: `${OUT}/mkt-mob-hero.png` })
const subnavVisible = await mob.evaluate(() => {
  const el = document.querySelector('.fund-subnav')
  return el ? getComputedStyle(el).display !== 'none' : 'missing'
})
console.log('mobile subnav visible:', subnavVisible)
await mob.locator('#tese').scrollIntoViewIfNeeded()
await mob.waitForTimeout(1100)
await mob.screenshot({ path: `${OUT}/mkt-mob-tese.png` })
await mob.close()

await browser.close()
server.kill()
console.log('done')
process.exit(0)
