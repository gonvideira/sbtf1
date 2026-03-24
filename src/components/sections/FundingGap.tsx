import { fundingGap } from "@/data/content"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn"

export function FundingGap() {
  const { required, current, gap } = fundingGap.scorecard

  return (
    <section id="funding-gap" className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/dolphins-group.png"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-navy/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="mb-10 md:mb-16 text-center">
          <p className="text-atlantic-teal font-mono text-xs md:text-sm tracking-wider uppercase mb-2">
            Section 03
          </p>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-ice-white mb-3 md:mb-4">
            {fundingGap.headline}
          </h2>
          <p className="font-body text-sm md:text-lg text-ice-white/70 max-w-2xl mx-auto">
            {fundingGap.subheadline}
          </p>
        </FadeIn>

        {/* SDG 14 Scorecard */}
        <FadeIn delay={0.2}>
          <div className="bg-white/5 backdrop-blur-sm border border-ice-white/10 rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
              {/* Required */}
              <div className="text-center">
                <p className="text-ice-white/60 font-body text-xs md:text-sm uppercase tracking-wider mb-2">
                  Required Annually
                </p>
                <p className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-ice-white">
                  €{required}B
                </p>
                <p className="text-ice-white/40 text-xs md:text-sm mt-2">per year to achieve SDG 14</p>
              </div>

              {/* Divider */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-atlantic-teal/50 to-transparent" />
              </div>

              {/* Current */}
              <div className="text-center">
                <p className="text-ice-white/60 font-body text-xs md:text-sm uppercase tracking-wider mb-2">
                  Current Investment
                </p>
                <p className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-ice-white/50">
                  €{current}B
                </p>
                <p className="text-ice-white/40 text-xs md:text-sm mt-2">annual investment today</p>
              </div>
            </div>

            {/* Gap Highlight */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-ice-white/10 text-center">
              <p className="text-atlantic-teal font-mono text-xs md:text-sm uppercase tracking-wider mb-2">
                Annual Funding Gap
              </p>
              <p className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold text-atlantic-teal">
                €{gap}B
              </p>
              <p className="text-ice-white/60 text-sm md:text-lg mt-3 md:mt-4 max-w-xl mx-auto">
                A massive opportunity for impact-aligned capital deployment
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Ocean Stats */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {fundingGap.oceanStats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="bg-white/5 backdrop-blur-sm border border-ice-white/10 rounded-lg p-4 md:p-6 text-center">
                <p className="font-mono text-3xl md:text-4xl font-bold text-atlantic-teal mb-1 md:mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-ice-white/70 text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Supporting Copy */}
        <FadeIn delay={0.4} className="mt-10 md:mt-16 max-w-3xl mx-auto">
          <div className="space-y-3 md:space-y-4">
            {fundingGap.copyPoints.map((point, index) => (
              <p
                key={index}
                className="font-body text-ice-white/80 text-sm md:text-base text-center leading-relaxed"
              >
                {point}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
