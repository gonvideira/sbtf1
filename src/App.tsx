import { Layout } from "@/components/layout/Layout"
import {
  MacroContext,
  FundingGap,
  ProteinEfficiency,
  EuropeanDeficit,
  Leadership,
} from "@/components/sections"

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy to-deep-navy/80">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="/assets/fish-vortex-improved.png"
          >
            <source src="/assets/fish-vortex-animated-improved.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 xl:px-32 pb-20">
          <div className="max-w-6xl mx-auto w-full">
            {/* Title Row */}
            <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">
              {/* Brand House */}
              <div className="flex items-center">
                <span className="font-heading text-lg md:text-2xl lg:text-3xl text-ice-white/70 tracking-widest uppercase">
                  STAG
                </span>
              </div>
              {/* Vertical Divider */}
              <div className="h-10 md:h-16 lg:h-20 w-px bg-atlantic-teal/60" />
              {/* Fund Name */}
              <div>
                <h1 className="font-heading text-2xl md:text-5xl lg:text-6xl text-ice-white tracking-tight font-bold">
                  BLUE
                </h1>
                <h1 className="font-heading text-base md:text-3xl lg:text-4xl text-ice-white tracking-tight font-light">
                  TRANSFORMATION FUND 1
                </h1>
              </div>
            </div>

            {/* Copy with Logo Divider */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Column - Tagline (smaller) */}
              <div className="lg:col-span-4 order-2 lg:order-1">
                <h2 className="font-heading text-lg md:text-2xl lg:text-3xl text-ice-white font-light leading-tight">
                  Investing in the Future
                </h2>
                <h2 className="font-heading text-lg md:text-2xl lg:text-3xl text-atlantic-teal font-medium leading-tight">
                  of Global Food Security
                </h2>
              </div>

              {/* Center - Logo */}
              <div className="lg:col-span-2 flex justify-center order-1 lg:order-2">
                <img
                  src="/assets/SBTF1-logo-ice-white.svg"
                  alt="SBTF1 Logo"
                  className="h-16 md:h-24 lg:h-28"
                />
              </div>

              {/* Right Column - Description */}
              <div className="lg:col-span-6 order-3">
                <p className="font-body text-sm md:text-lg text-ice-white/80 leading-relaxed max-w-xl">
                  A platform-led private equity strategy in Portugal's blue economy,
                  designed to build and scale category-leading businesses capturing
                  value at multiple points of the seafood chain.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Mobile only */}
        <div className="absolute bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 z-10 md:hidden animate-bounce">
          <div className="flex flex-col items-center text-ice-white/60">
            <span className="text-[10px] uppercase tracking-wider mb-2">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Bottom - Transparent Metric Pills */}
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-12 lg:right-24 z-10">
          <div className="grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-8">
            <div className="text-center">
              <p className="font-mono text-lg md:text-xl font-bold text-ice-white">€125M</p>
              <p className="text-[10px] text-ice-white/60 uppercase tracking-wider">Target Size</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-lg md:text-xl font-bold text-ice-white">15-20%</p>
              <p className="text-[10px] text-ice-white/60 uppercase tracking-wider">Target IRR</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-lg md:text-xl font-bold text-ice-white">10 Years</p>
              <p className="text-[10px] text-ice-white/60 uppercase tracking-wider">Term</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-lg md:text-xl font-bold text-atlantic-teal">SDG 14</p>
              <p className="text-[10px] text-ice-white/60 uppercase tracking-wider">Alignment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <MacroContext />
      <FundingGap />
      <ProteinEfficiency />
      <EuropeanDeficit />
      <Leadership />
    </Layout>
  )
}

export default App
