import { fundingGap } from "@/data/content"

export function FundingGap() {
  const { required, current, gap } = fundingGap.scorecard

  return (
    <section id="funding-gap" className="py-24 px-6 md:px-12 lg:px-24 bg-deep-navy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-atlantic-teal font-mono text-sm tracking-wider uppercase mb-2">
            Section 03
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ice-white mb-4">
            {fundingGap.headline}
          </h2>
          <p className="font-body text-lg text-ice-white/70 max-w-2xl mx-auto">
            {fundingGap.subheadline}
          </p>
        </div>

        {/* SDG 14 Scorecard */}
        <div className="bg-white/5 backdrop-blur-sm border border-ice-white/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {/* Required */}
            <div className="text-center">
              <p className="text-ice-white/60 font-body text-sm uppercase tracking-wider mb-2">
                Required Annually
              </p>
              <p className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold text-ice-white">
                €{required}B
              </p>
              <p className="text-ice-white/40 text-sm mt-2">per year to achieve SDG 14</p>
            </div>

            {/* Divider */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-atlantic-teal/50 to-transparent" />
            </div>

            {/* Current */}
            <div className="text-center">
              <p className="text-ice-white/60 font-body text-sm uppercase tracking-wider mb-2">
                Current Investment
              </p>
              <p className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold text-ice-white/50">
                €{current}B
              </p>
              <p className="text-ice-white/40 text-sm mt-2">annual investment today</p>
            </div>
          </div>

          {/* Gap Highlight */}
          <div className="mt-12 pt-8 border-t border-ice-white/10 text-center">
            <p className="text-atlantic-teal font-mono text-sm uppercase tracking-wider mb-2">
              Annual Funding Gap
            </p>
            <p className="font-mono text-6xl md:text-7xl lg:text-8xl font-bold text-atlantic-teal">
              €{gap}B
            </p>
            <p className="text-ice-white/60 text-lg mt-4 max-w-xl mx-auto">
              A massive opportunity for impact-aligned capital deployment
            </p>
          </div>
        </div>

        {/* Ocean Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fundingGap.oceanStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-ice-white/10 rounded-lg p-6 text-center"
            >
              <p className="font-mono text-4xl font-bold text-atlantic-teal mb-2">
                {stat.value}
              </p>
              <p className="font-body text-ice-white/70 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Copy */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-y-4">
            {fundingGap.copyPoints.map((point, index) => (
              <p
                key={index}
                className="font-body text-ice-white/80 text-center leading-relaxed"
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
