export function MacroContext() {
  return (
    <section id="macro-context" className="relative">
      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row bg-ice-white">
        {/* Left - Hero Video */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
          <video
            src="/assets/dolphin-underwater-animated.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Dolphin swimming underwater - the future of sustainable marine protein"
          />
          {/* Top gradient for seamless Hero transition */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-deep-navy/80 to-transparent" />
          {/* Right gradient for content blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ice-white/30 lg:to-ice-white/50" />
        </div>

        {/* Right - Stats & Copy */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-24">
          {/* Section Label */}
          <p className="text-atlantic-teal font-mono text-sm tracking-wider uppercase mb-6">
            The Macro Context
          </p>

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-4">
            Global Seafood
          </h2>
          <p className="font-body text-xl text-deep-navy/60 mb-12 max-w-lg">
            Demand expands. Wild supply is capped. Value shifts to scalable systems.
          </p>

          {/* Hero Stats */}
          <div className="space-y-8 mb-12">
            {/* Stat 1 */}
            <div className="border-l-4 border-atlantic-teal pl-6">
              <p className="font-mono text-4xl md:text-5xl font-bold text-atlantic-teal">
                48.6%
              </p>
              <p className="font-body text-deep-navy/70 mt-2">
                More food needed by 2050 to feed the world
              </p>
            </div>

            {/* Stat 2 */}
            <div className="border-l-4 border-atlantic-teal pl-6">
              <p className="font-mono text-4xl md:text-5xl font-bold text-atlantic-teal">
                14 → 22kg
              </p>
              <p className="font-body text-deep-navy/70 mt-2">
                Per capita seafood consumption growth since 1990
              </p>
            </div>

            {/* Stat 3 */}
            <div className="border-l-4 border-atlantic-teal pl-6">
              <p className="font-mono text-4xl md:text-5xl font-bold text-atlantic-teal">
                57%
              </p>
              <p className="font-body text-deep-navy/70 mt-2">
                Of seafood now comes from aquaculture, not wild capture
              </p>
            </div>
          </div>

          {/* Investment Implication */}
          <div className="bg-glacier-blue/30 rounded-lg p-6 max-w-lg">
            <p className="font-body text-deep-navy/80 leading-relaxed">
              <span className="font-semibold text-deep-navy">The implication:</span>{" "}
              Scalable protein systems that grow output without expanding land and
              freshwater use are structurally advantaged.
            </p>
          </div>

          {/* Source */}
          <p className="text-xs text-deep-navy/40 mt-8">
            Source: FAO SOFIA 2024, UN Population Division
          </p>
        </div>
      </div>
    </section>
  )
}
