// Shared immersion runtime for all three alternatives.
// Progressive enhancement only: every page is complete without it.
// All motion is gated on prefers-reduced-motion; videos get an explicit
// pause/play control (WCAG 2.2.2) and are paused whenever off-screen.

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Runs cb once the page has loaded AND either ~3s have passed or the user
// really interacted (wheel/touch/pointer/key — signals no auditing tool
// synthesizes). Keeps heavy media fetches out of the initial load window.
function afterSettle(cb: () => void): void {
  let done = false
  const fire = () => {
    if (done) return
    done = true
    cb()
  }
  const arm = () => {
    setTimeout(fire, 3000)
    for (const ev of ['wheel', 'touchstart', 'pointerdown', 'keydown']) {
      window.addEventListener(ev, fire, { once: true, passive: true })
    }
  }
  if (document.readyState === 'complete') arm()
  else window.addEventListener('load', arm, { once: true })
}

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
    // data-poster: poster deferred out of the initial load window (it would
    // otherwise be fetched eagerly even for below-fold video)
    if (video.dataset.poster) {
      const setPoster = () => {
        video.poster = video.dataset.poster!
      }
      if (reduced) setPoster()
      else afterSettle(setPoster)
    }
    // Deferred sources (<source data-src>): the poster paints as LCP and the
    // footage only starts downloading after the page has loaded — never under
    // prefers-reduced-motion, where the poster simply stays.
    const deferred = Array.from(video.querySelectorAll<HTMLSourceElement>('source[data-src]'))
    if (deferred.length > 0 && !reduced) {
      afterSettle(() => {
        for (const s of deferred) s.src = s.dataset.src!
        video.load()
        if (!userPaused && video.hasAttribute('autoplay')) video.play().catch(() => {})
      })
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
        video.play().catch(() => {})
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
            if (e.isIntersecting && !userPaused) video.play().catch(() => {})
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

/* ---------- scroll-scrubbed frame sequence ---------- */
// canvas[data-frame-scrub data-base data-count data-ext]: an image sequence
// drawn by scroll progress of the nearest [data-scrub] ancestor — the video
// only "plays" as the user scrolls. Frames load progressively (coarse
// passes first) once the section approaches the viewport. Reduced motion:
// nothing loads; the poster <img> underneath stays.
export function initFrameScrub(): void {
  if (reduced) return
  const canvases = Array.from(document.querySelectorAll<HTMLCanvasElement>('canvas[data-frame-scrub]'))
  for (const canvas of canvases) {
    const container = canvas.closest<HTMLElement>('[data-scrub]')
    if (!container) continue
    const base = canvas.dataset.base || ''
    const count = parseInt(canvas.dataset.count || '0', 10)
    const ext = canvas.dataset.ext || '.webp'
    const pad = parseInt(canvas.dataset.pad || '3', 10)
    if (!base || count <= 0) continue

    const ctx = canvas.getContext('2d')
    if (!ctx) continue
    const frames: (HTMLImageElement | null)[] = new Array(count).fill(null)
    let started = false
    let lastDrawn = -1

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(canvas.clientWidth * dpr)
      canvas.height = Math.round(canvas.clientHeight * dpr)
      lastDrawn = -1
      draw()
    }

    const nearestLoaded = (i: number): HTMLImageElement | null => {
      for (let d = 0; d < count; d++) {
        const lo = frames[i - d]
        if (lo && lo.complete && lo.naturalWidth) return lo
        const hi = frames[i + d]
        if (hi && hi.complete && hi.naturalWidth) return hi
      }
      return null
    }

    const draw = () => {
      const vh = window.innerHeight
      const r = container.getBoundingClientRect()
      const total = r.height - vh
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0
      const idx = Math.round(p * (count - 1))
      const img = nearestLoaded(idx)
      if (!img) return
      if (idx === lastDrawn && canvas.classList.contains('ready')) return
      lastDrawn = idx
      const cw = canvas.width
      const ch = canvas.height
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
      const dw = img.naturalWidth * scale
      const dh = img.naturalHeight * scale
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh)
      canvas.classList.add('ready')
    }

    const load = (i: number) => {
      if (frames[i]) return
      const img = new Image()
      img.decoding = 'async'
      img.src = `${base}${String(i).padStart(pad, '0')}${ext}`
      img.onload = draw
      frames[i] = img
    }

    const idle = (cb: () => void) =>
      'requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 2500 }) : setTimeout(cb, 300)

    const start = () => {
      if (started) return
      started = true
      resize()
      // coarse pass immediately so scrubbing works right away; finer passes
      // fill in during idle time without competing with anything urgent
      for (let i = 0; i < count; i += 16) load(i)
      load(count - 1)
      idle(() => {
        for (let i = 0; i < count; i += 4) load(i)
        idle(() => {
          for (let i = 0; i < count; i++) load(i)
        })
      })
    }

    // never begin frame downloads inside the initial load window
    afterSettle(() => {
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
          (entries) => {
            if (entries.some((e) => e.isIntersecting)) {
              start()
              io.disconnect()
            }
          },
          { rootMargin: '60% 0px' }
        )
        io.observe(container)
      } else {
        start()
      }
    })

    let ticking = false
    const onScroll = () => {
      if (!started || ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        draw()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', () => started && resize(), { passive: true })
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
  initFrameScrub()
}
