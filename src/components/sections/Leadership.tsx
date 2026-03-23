import { leadership } from "@/data/content"

export function Leadership() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 lg:px-24 bg-ice-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-atlantic-teal font-mono text-sm tracking-wider uppercase mb-2">
            Section 06
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-4">
            {leadership.headline}
          </h2>
          <p className="font-body text-lg text-deep-navy/70 max-w-2xl mx-auto">
            {leadership.subheadline}
          </p>
        </div>

        {/* STAG Firm Profile */}
        <div className="bg-deep-navy rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-ice-white mb-2">
                {leadership.firmProfile.name}
              </h3>
              <p className="font-body text-ice-white/70 max-w-lg">
                {leadership.firmProfile.description}
              </p>
            </div>
            <div className="flex gap-8">
              {leadership.firmProfile.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-mono text-3xl md:text-4xl font-bold text-atlantic-teal">
                    {stat.value}
                  </p>
                  <p className="text-ice-white/60 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.team.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-glacier-blue rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              <div className="aspect-[3/4] bg-gradient-to-br from-deep-navy/5 to-deep-navy/10 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h4 className="font-heading text-lg font-semibold text-deep-navy">
                  {member.name}
                </h4>
                <p className="text-atlantic-teal text-sm font-medium mb-4">
                  {member.role}
                </p>
                <ul className="space-y-2">
                  {member.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="text-deep-navy/60 text-xs leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-atlantic-teal mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="font-body text-deep-navy/70 mb-4">
            Interested in learning more about SBTF1?
          </p>
          <button className="inline-flex items-center gap-2 bg-atlantic-teal hover:bg-atlantic-teal/90 text-ice-white font-medium px-8 py-3 rounded-lg transition-colors">
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
        </div>
      </div>
    </section>
  )
}
