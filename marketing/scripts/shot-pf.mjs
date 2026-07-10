import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const OUT = process.env.OUT
const PORT = 4912
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { cwd: process.cwd(), shell: true, stdio: 'pipe' })
await new Promise((res) => server.stdout.on('data', (d) => String(d).includes(String(PORT)) && res()))
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto(`http://localhost:${PORT}/pt/`, { waitUntil: 'networkidle' })
await page.locator('#portfolio').scrollIntoViewIfNeeded()
await page.waitForTimeout(1500)
await page.screenshot({ path: `${OUT}/pf-fixed.png` })
await page.evaluate(() => window.scrollBy(0, 500))
await page.waitForTimeout(900)
await page.screenshot({ path: `${OUT}/pf-fixed-exit.png` })
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } })
await mob.goto(`http://localhost:${PORT}/pt/`, { waitUntil: 'networkidle' })
await mob.locator('#portfolio').scrollIntoViewIfNeeded()
await mob.waitForTimeout(1300)
await mob.screenshot({ path: `${OUT}/pf-fixed-mob.png` })
await browser.close()
server.kill()
console.log('done')
process.exit(0)
