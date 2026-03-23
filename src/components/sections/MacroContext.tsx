import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { macroContext } from "@/data/content"

export function MacroContext() {
  return (
    <section id="macro-context" className="py-24 px-6 md:px-12 lg:px-24 bg-ice-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-atlantic-teal font-mono text-sm tracking-wider uppercase mb-2">
            Section 02
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-4">
            {macroContext.headline}
          </h2>
          <p className="font-body text-lg text-deep-navy/70 max-w-2xl">
            Global food systems face a structural protein deficit as world demand
            for high-quality seafood continues to accelerate.
          </p>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {macroContext.copyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white border border-glacier-blue rounded-lg p-6 shadow-sm"
            >
              <p className="font-mono text-3xl md:text-4xl font-bold text-atlantic-teal mb-2">
                {point.metric}
              </p>
              <p className="font-body text-deep-navy/70 text-sm leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Production Gap Chart */}
          <div className="bg-white border border-glacier-blue rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-deep-navy mb-1">
              {macroContext.productionGap.title}
            </h3>
            <p className="text-sm text-deep-navy/60 mb-6">
              {macroContext.productionGap.subtitle}
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={macroContext.productionGap.data}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    type="number"
                    domain={[0, 120]}
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: "#001F3F", fontSize: 12 }}
                  />
                  <YAxis
                    dataKey="region"
                    type="category"
                    tick={{ fill: "#001F3F", fontSize: 12 }}
                    width={120}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Required Increase"]}
                    contentStyle={{
                      backgroundColor: "#001F3F",
                      border: "none",
                      borderRadius: "8px",
                      color: "#F8FAFC",
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {macroContext.productionGap.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Consumption Trend Chart */}
          <div className="bg-white border border-glacier-blue rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-deep-navy mb-1">
              {macroContext.consumptionTrend.title}
            </h3>
            <p className="text-sm text-deep-navy/60 mb-6">
              {macroContext.consumptionTrend.subtitle}
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={macroContext.consumptionTrend.data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#001F3F", fontSize: 12 }}
                  />
                  <YAxis
                    domain={[10, 25]}
                    tickFormatter={(value) => `${value}kg`}
                    tick={{ fill: "#001F3F", fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(value) => [`${value} kg/capita`, "Consumption"]}
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
                    stroke="#00A8A8"
                    strokeWidth={2}
                    fill="#00A8A8"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Aquaculture vs Captures Chart - Full Width */}
          <div className="lg:col-span-2 bg-white border border-glacier-blue rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="font-heading text-lg font-semibold text-deep-navy mb-1">
                  {macroContext.aquacultureVsCaptures.title}
                </h3>
                <p className="text-sm text-deep-navy/60">
                  {macroContext.aquacultureVsCaptures.subtitle}
                </p>
              </div>
              <div className="flex gap-6 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-deep-navy" />
                  <span className="text-sm text-deep-navy/70">
                    Captures ({macroContext.aquacultureVsCaptures.capturesGrowth})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-atlantic-teal" />
                  <span className="text-sm text-deep-navy/70">
                    Aquaculture ({macroContext.aquacultureVsCaptures.aquacultureGrowth})
                  </span>
                </div>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={macroContext.aquacultureVsCaptures.data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="year" tick={{ fill: "#001F3F", fontSize: 12 }} />
                  <YAxis
                    domain={[0, 120]}
                    tickFormatter={(value) => `${value}M`}
                    tick={{ fill: "#001F3F", fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}M tonnes`]}
                    contentStyle={{
                      backgroundColor: "#001F3F",
                      border: "none",
                      borderRadius: "8px",
                      color: "#F8FAFC",
                    }}
                  />
                  <Bar dataKey="captures" fill="#001F3F" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="aquaculture" fill="#00A8A8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
