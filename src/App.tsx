import { FrostCard } from "@/components/shared/FrostCard"
import { Badge } from "@/components/ui/badge"

function App() {
  return (
    <div className="min-h-screen bg-ice-white">
      {/* Hero Section - Placeholder */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
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
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo */}
          <img
            src="/assets/SBTF1-logo-ice-white.svg"
            alt="SBTF1 Logo"
            className="h-20 md:h-24 mx-auto mb-6"
          />

          {/* Fund Name */}
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-ice-white mb-4 tracking-tight">
            <span className="block font-light">Stag <span className="font-bold">Blue</span></span>
            <span className="block font-light">Transformation Fund 1</span>
          </h1>

          {/* Tagline */}
          <p className="font-heading text-lg md:text-xl text-ice-white/90 mb-4 tracking-tight">
            Investing in the Future of Global Food Security
          </p>

          <p className="font-body text-xl text-ice-white/80 mb-12 max-w-3xl mx-auto">
            A private equity strategy in Portugal's blue economy, designed to build and scale
            category-leading businesses capturing value at multiple points of the seafood chain.
          </p>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <FrostCard className="p-4 text-center">
              <p className="font-mono text-2xl font-bold text-deep-navy">€125M</p>
              <p className="text-sm text-deep-navy/70">Target Size</p>
            </FrostCard>
            <FrostCard className="p-4 text-center">
              <p className="font-mono text-2xl font-bold text-deep-navy">15-20%</p>
              <p className="text-sm text-deep-navy/70">Target IRR</p>
            </FrostCard>
            <FrostCard className="p-4 text-center">
              <p className="font-mono text-2xl font-bold text-deep-navy">10 Years</p>
              <p className="text-sm text-deep-navy/70">Term</p>
            </FrostCard>
            <FrostCard className="p-4 text-center">
              <Badge variant="teal">SDG 14</Badge>
              <p className="text-sm text-deep-navy/70 mt-1">Alignment</p>
            </FrostCard>
          </div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Coming Soon</Badge>
          <h2 className="font-heading text-3xl font-bold text-deep-navy mb-4">
            More Sections Under Development
          </h2>
          <p className="text-deep-navy/70">
            Macro Context • SDG 14 Funding Gap • Marine Protein Efficiency • European Deficit • Team
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
