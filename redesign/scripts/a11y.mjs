// Run axe-core (WCAG 2.1 AA) against built pages via astro preview.
// Usage: node scripts/a11y.mjs <path1> [path2 ...]
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import { spawn } from 'node:child_process'

const pagePaths = process.argv.slice(2)
const PORT = 4874
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
  cwd: process.cwd(),
  shell: true,
  stdio: 'pipe',
})
await new Promise((res) => server.stdout.on('data', (d) => String(d).includes(String(PORT)) && res()))

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1366, height: 900 } })
let totalViolations = 0

for (const p of pagePaths) {
  const page = await context.newPage()
  await page.goto(`http://localhost:${PORT}${p}`, { waitUntil: 'networkidle' })
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()
  console.log(`\n=== ${p} — ${results.violations.length} violation type(s) ===`)
  for (const v of results.violations) {
    totalViolations++
    console.log(`  [${v.impact}] ${v.id}: ${v.help}`)
    for (const n of v.nodes.slice(0, 4)) {
      console.log(`      ${n.target.join(' ')}`)
    }
    if (v.nodes.length > 4) console.log(`      … +${v.nodes.length - 4} more`)
  }
  await page.close()
}

await browser.close()
server.kill()
console.log(`\nTOTAL violation types: ${totalViolations}`)
process.exit(0)
