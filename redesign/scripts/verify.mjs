import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const OUT = process.env.OUT
const PORT = 4891
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { cwd: process.cwd(), shell: true, stdio: 'pipe' })
await new Promise((res) => server.stdout.on('data', (d) => String(d).includes(String(PORT)) && res()))
const browser = await chromium.launch()

// 1) Mobile nav toggle works on each alternative
for (const alt of ['a', 'b', 'c']) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
  await page.goto(`http://localhost:${PORT}/${alt}/pt/`, { waitUntil: 'networkidle' })
  const toggle = page.locator('.nav-toggle')
  await toggle.click()
  const expanded = await toggle.getAttribute('aria-expanded')
  const menuVisible = await page.locator('#nav-list').isVisible()
  console.log(`ALT ${alt}: nav toggle expanded=${expanded} menuVisible=${menuVisible}`)
  if (alt === 'a') await page.screenshot({ path: `${OUT}/nav-open-a.png` })
  // language switch link present and correct
  const langHref = await page.locator('.nav-lang a').getAttribute('href')
  console.log(`ALT ${alt}: lang switch -> ${langHref}`)
  await page.close()
}

// 2) EN hero viewport shots + team section shots
for (const alt of ['a', 'b', 'c']) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto(`http://localhost:${PORT}/${alt}/en/`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  await page.screenshot({ path: `${OUT}/${alt}-en-hero.png` })
  await page.locator('#equipa').scrollIntoViewIfNeeded()
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `${OUT}/${alt}-en-team.png` })
  await page.close()
}

// 3) Review index
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' })
await page.screenshot({ path: `${OUT}/review-index.png` })
await page.close()

await browser.close()
server.kill()
console.log('done')
process.exit(0)
