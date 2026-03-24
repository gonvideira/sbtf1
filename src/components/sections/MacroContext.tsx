import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn"

export function MacroContext() {
  return (
    <section id="macro-context" className="relative">
      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row bg-ice-white">
        {/* Left - Hero Video (Desktop only) */}
        <div className="hidden lg:block lg:w-1/2 relative lg:min-h-screen">
          <video
            src="/assets/dolphin-underwater-animated.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/dolphin-underwater.png"
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Dolphin swimming underwater - the future of sustainable marine protein"
          />
          {/* Top gradient for seamless Hero transition */}
          <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-deep-navy/80 to-transparent" />
          {/* Right/Bottom gradient for content blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ice-white/50" />
        </div>

        {/* Right - Stats & Copy */}
        <div className="lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-24">
          {/* Section Label */}
          <FadeIn delay={0}>
            <p className="text-atlantic-teal font-mono text-xs md:text-sm tracking-wider uppercase mb-4 md:mb-6">
              The Macro Context
            </p>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-3 md:mb-4">
              Global Seafood
            </h2>
            <p className="font-body text-base md:text-xl text-deep-navy/60 mb-8 max-w-lg">
              Demand expands. Wild supply is capped. Value shifts to scalable systems.
            </p>
          </FadeIn>

          {/* Mobile Video - Shows between copy and stats */}
          <FadeIn delay={0.15} className="lg:hidden mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
                src="/assets/dolphin-underwater-animated.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/assets/dolphin-underwater.png"
                className="w-full h-full object-cover"
                aria-label="Dolphin swimming underwater - the future of sustainable marine protein"
              />
            </div>
          </FadeIn>

          {/* Hero Stats */}
          <StaggerContainer staggerDelay={0.15} className="space-y-6 md:space-y-8 mb-10 md:mb-12">
            {/* Stat 1 */}
            <StaggerItem>
              <div className="border-l-4 border-atlantic-teal pl-4 md:pl-6">
                <p className="font-mono text-3xl md:text-5xl font-bold text-atlantic-teal">
                  48.6%
                </p>
                <p className="font-body text-sm md:text-base text-deep-navy/70 mt-1 md:mt-2">
                  More food needed by 2050 to feed the world
                </p>
              </div>
            </StaggerItem>

            {/* Stat 2 */}
            <StaggerItem>
              <div className="border-l-4 border-atlantic-teal pl-4 md:pl-6">
                <p className="font-mono text-3xl md:text-5xl font-bold text-atlantic-teal">
                  14 → 22kg
                </p>
                <p className="font-body text-sm md:text-base text-deep-navy/70 mt-1 md:mt-2">
                  Per capita seafood consumption growth since 1990
                </p>
              </div>
            </StaggerItem>

            {/* Stat 3 */}
            <StaggerItem>
              <div className="border-l-4 border-atlantic-teal pl-4 md:pl-6">
                <p className="font-mono text-3xl md:text-5xl font-bold text-atlantic-teal">
                  57%
                </p>
                <p className="font-body text-sm md:text-base text-deep-navy/70 mt-1 md:mt-2">
                  Of seafood now comes from aquaculture, not wild capture
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Investment Implication */}
          <FadeIn delay={0.4}>
            <div className="bg-glacier-blue/30 rounded-lg p-6 max-w-lg">
              <p className="font-body text-deep-navy/80 leading-relaxed">
                <span className="font-semibold text-deep-navy">The implication:</span>{" "}
                Scalable protein systems that grow output without expanding land and
                freshwater use are structurally advantaged.
              </p>
            </div>
          </FadeIn>

          {/* Source */}
          <FadeIn delay={0.5}>
            <p className="text-xs text-deep-navy/40 mt-8">
              Source: FAO SOFIA 2024, UN Population Division
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
