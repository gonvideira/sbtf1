import { leadership } from "@/data/content"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn"

export function Leadership() {
  return (
    <section id="team" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-ice-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="mb-12 md:mb-16 text-center">
          <p className="text-atlantic-teal font-mono text-xs md:text-sm tracking-wider uppercase mb-2">
            Section 06
          </p>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-3 md:mb-4">
            {leadership.headline}
          </h2>
          <p className="font-body text-sm md:text-lg text-deep-navy/70 max-w-2xl mx-auto">
            {leadership.subheadline}
          </p>
        </FadeIn>

        {/* STAG Firm Profile */}
        <FadeIn delay={0.1}>
          <div className="bg-deep-navy rounded-xl md:rounded-2xl p-6 md:p-12 mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
              <div>
                <h3 className="font-heading text-xl md:text-3xl font-bold text-ice-white mb-2">
                  {leadership.firmProfile.name}
                </h3>
                <p className="font-body text-sm md:text-base text-ice-white/70 max-w-lg">
                  {leadership.firmProfile.description}
                </p>
              </div>
              <div className="flex gap-6 md:gap-8">
                {leadership.firmProfile.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="font-mono text-2xl md:text-4xl font-bold text-atlantic-teal">
                      {stat.value}
                    </p>
                    <p className="text-ice-white/60 text-xs md:text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Team Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {leadership.team.map((member, index) => (
            <StaggerItem key={index}>
              <div className="bg-white border border-glacier-blue rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow h-full">
                {/* Photo */}
                <div className="aspect-[3/4] bg-gradient-to-br from-deep-navy/5 to-deep-navy/10 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-4 md:p-6">
                  <h4 className="font-heading text-base md:text-lg font-semibold text-deep-navy">
                    {member.name}
                  </h4>
                  <p className="text-atlantic-teal text-xs md:text-sm font-medium mb-3 md:mb-4">
                    {member.role}
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    {member.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-deep-navy/60 text-[11px] md:text-xs leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-atlantic-teal mt-0.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Contact CTA */}
        <FadeIn delay={0.4} className="mt-12 md:mt-16 text-center">
          <p className="font-body text-sm md:text-base text-deep-navy/70 mb-4">
            Interested in learning more about SBTF1?
          </p>
          <button className="inline-flex items-center gap-2 bg-atlantic-teal hover:bg-atlantic-teal/90 text-ice-white font-medium px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base">
            Request Information
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </FadeIn>
      </div>
    </section>
  )
}
