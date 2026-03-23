import { Layout } from "@/components/layout/Layout"
import { FrostCard } from "@/components/shared/FrostCard"
import { Badge } from "@/components/ui/badge"

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
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

      {/* Placeholder Sections */}
      <section id="macro-context" className="py-24 px-4 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Section 2</Badge>
          <h2 className="font-heading text-3xl font-bold text-deep-navy mb-4">
            Macro Context
          </h2>
          <p className="text-deep-navy/70">
            Global food systems face a structural protein deficit...
          </p>
        </div>
      </section>

      <section id="funding-gap" className="py-24 px-4 min-h-screen flex items-center bg-glacier-blue/20">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Section 3</Badge>
          <h2 className="font-heading text-3xl font-bold text-deep-navy mb-4">
            SDG 14 Funding Gap
          </h2>
          <p className="text-deep-navy/70">
            €126B annual deficit in ocean sustainability investment...
          </p>
        </div>
      </section>

      <section id="protein-efficiency" className="py-24 px-4 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Section 4</Badge>
          <h2 className="font-heading text-3xl font-bold text-deep-navy mb-4">
            Marine Protein Efficiency
          </h2>
          <p className="text-deep-navy/70">
            225x less land and freshwater than terrestrial livestock...
          </p>
        </div>
      </section>

      <section id="european-deficit" className="py-24 px-4 min-h-screen flex items-center bg-glacier-blue/20">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Section 5</Badge>
          <h2 className="font-heading text-3xl font-bold text-deep-navy mb-4">
            The European Deficit
          </h2>
          <p className="text-deep-navy/70">
            €22B structural trade imbalance in seafood...
          </p>
        </div>
      </section>

      <section id="team" className="py-24 px-4 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Section 6</Badge>
          <h2 className="font-heading text-3xl font-bold text-deep-navy mb-4">
            Executive Leadership
          </h2>
          <p className="text-deep-navy/70">
            Over 150 years of combined experience in Private Equity and Corporate Finance...
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default App
