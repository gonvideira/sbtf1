import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { europeanDeficit } from "@/data/content"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn"

export function EuropeanDeficit() {
  return (
    <section id="european-deficit" className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/sharks-cover.png"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="mb-10 md:mb-16">
          <p className="text-atlantic-teal font-mono text-xs md:text-sm tracking-wider uppercase mb-2">
            Section 05
          </p>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-ice-white mb-3 md:mb-4">
            {europeanDeficit.headline}
          </h2>
          <p className="font-body text-sm md:text-lg text-ice-white/80 max-w-2xl">
            {europeanDeficit.subheadline}
          </p>
        </FadeIn>

        {/* Key Metrics Row */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {europeanDeficit.copyPoints.map((point, index) => (
            <StaggerItem key={index}>
              <div className="bg-white/70 backdrop-blur-sm border border-ice-white/30 rounded-lg p-4 md:p-6 shadow-sm h-full">
                <p className="font-mono text-xl md:text-3xl font-bold text-atlantic-teal mb-1 md:mb-2">
                  {point.metric}
                </p>
                <p className="font-body text-deep-navy/70 text-xs md:text-sm leading-relaxed">
                  {point.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Charts Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Self-Sufficiency Chart */}
          <StaggerItem>
            <div className="bg-white border border-glacier-blue rounded-lg p-4 md:p-6 shadow-sm">
              <h3 className="font-heading text-sm md:text-lg font-semibold text-deep-navy mb-1">
                {europeanDeficit.selfSufficiency.title}
              </h3>
              <p className="text-xs md:text-sm text-deep-navy/60 mb-4 md:mb-6">
                {europeanDeficit.selfSufficiency.subtitle}
              </p>
              <div className="h-48 md:h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={europeanDeficit.selfSufficiency.data}
                    margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: "#001F3F", fontSize: 10 }}
                    />
                    <YAxis
                      domain={[30, 50]}
                      tickFormatter={(value) => `${value}%`}
                      tick={{ fill: "#001F3F", fontSize: 10 }}
                    />
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Self-Sufficiency"]}
                      contentStyle={{
                        backgroundColor: "#001F3F",
                        border: "none",
                        borderRadius: "8px",
                        color: "#F8FAFC",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#001F3F"
                      strokeWidth={2}
                      fill="#001F3F"
                      fillOpacity={0.1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </StaggerItem>

          {/* Trade Deficit Chart */}
          <StaggerItem>
            <div className="bg-white border border-glacier-blue rounded-lg p-4 md:p-6 shadow-sm">
              <h3 className="font-heading text-sm md:text-lg font-semibold text-deep-navy mb-1">
                {europeanDeficit.tradeDeficit.title}
              </h3>
              <p className="text-xs md:text-sm text-deep-navy/60 mb-4 md:mb-6">
                {europeanDeficit.tradeDeficit.subtitle}
              </p>
              <div className="h-48 md:h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={europeanDeficit.tradeDeficit.data}
                    margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: "#001F3F", fontSize: 10 }}
                    />
                    <YAxis
                      domain={[15, 25]}
                      tickFormatter={(value) => `€${value}B`}
                      tick={{ fill: "#001F3F", fontSize: 10 }}
                    />
                    <Tooltip
                      formatter={(value) => [`€${value}B`, "Trade Deficit"]}
                      contentStyle={{
                        backgroundColor: "#001F3F",
                        border: "none",
                        borderRadius: "8px",
                        color: "#F8FAFC",
                      }}
                    />
                    <Bar dataKey="value" fill="#00A8A8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </StaggerItem>

          {/* Global Consumption Donut */}
          <StaggerItem>
            <div className="bg-white border border-glacier-blue rounded-lg p-4 md:p-6 shadow-sm">
              <h3 className="font-heading text-sm md:text-lg font-semibold text-deep-navy mb-1">
                {europeanDeficit.globalConsumption.title}
              </h3>
              <p className="text-xs md:text-sm text-deep-navy/60 mb-4 md:mb-6">
                EU share of global demand
              </p>
              <div className="h-48 md:h-56 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={europeanDeficit.globalConsumption.data}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {europeanDeficit.globalConsumption.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`]}
                      contentStyle={{
                        backgroundColor: "#001F3F",
                        border: "none",
                        borderRadius: "8px",
                        color: "#F8FAFC",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* Center Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-mono text-xl md:text-2xl font-bold text-atlantic-teal">12%</p>
                    <p className="text-[10px] md:text-xs text-deep-navy/60">EU Share</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 md:gap-6 mt-3 md:mt-4">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-atlantic-teal" />
                  <span className="text-[10px] md:text-xs text-deep-navy/70">EU (12%)</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-glacier-blue" />
                  <span className="text-[10px] md:text-xs text-deep-navy/70">Rest of World (88%)</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Investment Opportunity Box */}
        <FadeIn delay={0.4} className="mt-8 md:mt-12">
          <div className="bg-white border border-glacier-blue rounded-lg p-6 md:p-8">
            <h3 className="font-heading text-base md:text-xl font-semibold text-deep-navy mb-3 md:mb-4">
              The Investment Opportunity
            </h3>
            <p className="font-body text-sm md:text-base text-deep-navy/80 leading-relaxed">
              This deficit is not a market failure, but a{" "}
              <span className="font-semibold text-atlantic-teal">
                structural supply chain issue
              </span>
              . For investors, the signal is clear: there is a unique opportunity for
              import substitution and margin capture through scalable aquaculture and
              modern processing infrastructure.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
