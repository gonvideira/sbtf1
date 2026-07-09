// Shared immersion runtime for all three alternatives.
// Progressive enhancement only: every page is complete without it.
// All motion is gated on prefers-reduced-motion; videos get an explicit
// pause/play control (WCAG 2.2.2) and are paused whenever off-screen.

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- reveals ---------- */
export function initReveals(selector = '.reveal'): void {
  if (reduced || !('IntersectionObserver' in window)) return
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          io.unobserve(e.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  )
  document.querySelectorAll(selector).forEach((el) => {
    el.classList.add('will-reveal')
    io.observe(el)
  })
}

/* ---------- parallax + section scrub ---------- */
// [data-parallax="0.25"] → element translates at that fraction of scroll,
// relative to when its nearest [data-scene] (or itself) crosses the viewport.
// [data-scrub] sections receive --p (0..1 progress through the section).
export function initScroll(): void {
  if (reduced) return
  const pxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
  const scrubEls = Array.from(document.querySelectorAll<HTMLElement>('[data-scrub]'))
  if (pxEls.length === 0 && scrubEls.length === 0) return

  let ticking = false
  const update = () => {
    ticking = false
    const vh = window.innerHeight
    for (const el of pxEls) {
      const scene = (el.closest('[data-scene]') as HTMLElement) ?? el
      const r = scene.getBoundingClientRect()
      // progress of scene center through viewport: -1 (below) → 1 (above)
      const t = ((vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2)) || 0
      const speed = parseFloat(el.dataset.parallax || '0.2')
      el.style.transform = `translate3d(0, ${(t * speed * vh).toFixed(1)}px, 0)`
    }
    for (const el of scrubEls) {
      const r = el.getBoundingClientRect()
      const total = r.height - vh
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0
      el.style.setProperty('--p', p.toFixed(4))
      const out = el.querySelector<HTMLElement>('[data-depth-out]')
      if (out) {
        const max = parseFloat(out.dataset.depthMax || '1000')
        out.textContent = `−${Math.round(p * max)} m`
      }
    }
  }
  const onScroll = () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(update)
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  update()
}

/* ---------- count-up ---------- */
export function initCounters(): void {
  if (reduced || !('IntersectionObserver' in window)) return
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        io.unobserve(e.target)
        const el = e.target as HTMLElement
        const finalText = el.textContent ?? ''
        const m = finalText.match(/^([^0-9]*)([\d.,]+)(.*)$/)
        if (!m) continue
        const [, prefix, numStr, suffix] = m
        const decimalComma = numStr!.includes(',') && !numStr!.includes('.')
        const target = parseFloat(numStr!.replace(/\./g, '').replace(',', '.'))
        if (!isFinite(target)) continue
        const decimals = decimalComma
          ? (numStr!.split(',')[1]?.length ?? 0)
          : (numStr!.split('.')[1]?.length ?? 0)
        const t0 = performance.now()
        const dur = 1300
        const fmt = (v: number) => {
          let s = v.toFixed(decimals)
          if (decimalComma) s = s.replace('.', ',')
          return s
        }
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          el.textContent = `${prefix}${fmt(target * eased)}${suffix}`
          if (p < 1) requestAnimationFrame(tick)
          else el.textContent = finalText
        }
        requestAnimationFrame(tick)
      }
    },
    { threshold: 0.4 }
  )
  document.querySelectorAll('[data-count]').forEach((el) => io.observe(el))
}

/* ---------- ambient video management ---------- */
// video[data-ambient]: muted loop background footage.
//  - plays only while on screen (battery + bandwidth)
//  - never autoplays under prefers-reduced-motion (poster stays)
//  - a sibling button[data-video-toggle] pauses/resumes it (WCAG 2.2.2)
export function initVideos(): void {
  const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video[data-ambient]'))
  for (const video of videos) {
    let userPaused = reduced
    if (reduced) {
      video.removeAttribute('autoplay')
      video.pause()
    }
    const toggle = video.parentElement?.querySelector<HTMLButtonElement>('[data-video-toggle]')
    const setLabel = () => {
      if (!toggle) return
      const playing = !video.paused
      toggle.setAttribute('aria-pressed', String(!playing))
      toggle.dataset.state = playing ? 'playing' : 'paused'
      const play = toggle.dataset.labelPlay || 'Play'
      const pause = toggle.dataset.labelPause || 'Pause'
      toggle.setAttribute('aria-label', playing ? pause : play)
    }
    toggle?.addEventListener('click', () => {
      if (video.paused) {
        userPaused = false
        void video.play()
      } else {
        userPaused = true
        video.pause()
      }
      setTimeout(setLabel, 50)
    })
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting && !userPaused) void video.play()
            else video.pause()
            setTimeout(setLabel, 50)
          }
        },
        { threshold: 0.08 }
      )
      io.observe(video)
    }
    video.addEventListener('play', setLabel)
    video.addEventListener('pause', setLabel)
    setLabel()
  }
}

/* ---------- mobile nav ---------- */
export function initNav(): void {
  const nav = document.querySelector<HTMLElement>('.main-nav')
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle')
  toggle?.addEventListener('click', () => {
    const open = nav?.dataset.open === 'true'
    if (nav) nav.dataset.open = String(!open)
    toggle.setAttribute('aria-expanded', String(!open))
  })
  document.querySelectorAll('.nav-list a').forEach((a) =>
    a.addEventListener('click', () => {
      if (nav) nav.dataset.open = 'false'
      toggle?.setAttribute('aria-expanded', 'false')
    })
  )
}

export function initImmersive(): void {
  initNav()
  initReveals()
  initScroll()
  initCounters()
  initVideos()
}
