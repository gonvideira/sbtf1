import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { proteinEfficiency } from "@/data/content"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/FadeIn"

export function ProteinEfficiency() {
  return (
    <section id="protein-efficiency" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-ice-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="mb-10 md:mb-16">
          <p className="text-atlantic-teal font-mono text-xs md:text-sm tracking-wider uppercase mb-2">
            Section 04
          </p>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-3 md:mb-4">
            {proteinEfficiency.headline}
          </h2>
          <p className="font-body text-sm md:text-lg text-deep-navy/70 max-w-2xl">
            {proteinEfficiency.subheadline}
          </p>
        </FadeIn>

        {/* Resource Efficiency Stats */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {proteinEfficiency.landWaterUsage.stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="bg-atlantic-teal/10 border border-atlantic-teal/20 rounded-lg p-4 md:p-6 text-center">
                <p className="font-mono text-3xl md:text-5xl font-bold text-atlantic-teal mb-1 md:mb-2">
                  {stat.metric}
                </p>
                <p className="font-body text-deep-navy/70 text-xs md:text-sm">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* FCR Comparison Chart */}
          <FadeIn delay={0.2}>
            <div className="bg-white border border-glacier-blue rounded-lg p-4 md:p-6 shadow-sm">
              <h3 className="font-heading text-base md:text-lg font-semibold text-deep-navy mb-1">
                {proteinEfficiency.fcrComparison.title}
              </h3>
              <p className="text-xs md:text-sm text-deep-navy/60 mb-4 md:mb-6">
                {proteinEfficiency.fcrComparison.subtitle}
              </p>
              <div className="h-56 md:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={proteinEfficiency.fcrComparison.data}
                    layout="vertical"
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis
                      type="number"
                      domain={[0, 12]}
                      tick={{ fill: "#001F3F", fontSize: 10 }}
                    />
                    <YAxis
                      dataKey="protein"
                      type="category"
                      tick={{ fill: "#001F3F", fontSize: 10 }}
                      width={80}
                    />
                    <Tooltip
                      formatter={(value, name) => {
                        const labels: Record<string, string> = {
                          min: "Min FCR",
                          max: "Max FCR",
                          avg: "Avg FCR"
                        }
                        return [value, labels[String(name)] || name]
                      }}
                      contentStyle={{
                        backgroundColor: "#001F3F",
                        border: "none",
                        borderRadius: "8px",
                        color: "#F8FAFC",
                      }}
                    />
                    <Bar dataKey="avg" radius={[0, 4, 4, 0]}>
                      {proteinEfficiency.fcrComparison.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] md:text-xs text-deep-navy/50 mt-3 md:mt-4 text-center">
                Lower FCR = More efficient protein conversion
              </p>
            </div>
          </FadeIn>

          {/* Carbon Footprint Chart */}
          <FadeIn delay={0.3}>
            <div className="bg-white border border-glacier-blue rounded-lg p-4 md:p-6 shadow-sm">
              <h3 className="font-heading text-base md:text-lg font-semibold text-deep-navy mb-1">
                {proteinEfficiency.carbonFootprint.title}
              </h3>
              <p className="text-xs md:text-sm text-deep-navy/60 mb-4 md:mb-6">
                {proteinEfficiency.carbonFootprint.subtitle}
              </p>
              <div className="h-56 md:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={proteinEfficiency.carbonFootprint.data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis
                      dataKey="protein"
                      tick={{ fill: "#001F3F", fontSize: 10 }}
                    />
                    <YAxis
                      domain={[0, 30]}
                      tickFormatter={(value) => `${value}kg`}
                      tick={{ fill: "#001F3F", fontSize: 10 }}
                    />
                    <Tooltip
                      formatter={(value) => [`${value} kg CO2e`, "Carbon Footprint"]}
                      contentStyle={{
                        backgroundColor: "#001F3F",
                        border: "none",
                        borderRadius: "8px",
                        color: "#F8FAFC",
                      }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {proteinEfficiency.carbonFootprint.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Summary Box */}
        <FadeIn delay={0.4} className="mt-8 md:mt-12">
          <div className="bg-deep-navy rounded-lg p-6 md:p-8 text-center">
            <p className="font-heading text-base md:text-xl lg:text-2xl text-ice-white font-light leading-relaxed">
              Marine protein production requires up to{" "}
              <span className="text-atlantic-teal font-bold">225 times less</span>{" "}
              land and freshwater than terrestrial livestock, making it the most
              sustainable path to feeding 10 billion people.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
