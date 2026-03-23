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

export function EuropeanDeficit() {
  return (
    <section id="european-deficit" className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/sharks-cover.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-atlantic-teal font-mono text-sm tracking-wider uppercase mb-2">
            Section 05
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ice-white mb-4">
            {europeanDeficit.headline}
          </h2>
          <p className="font-body text-lg text-ice-white/80 max-w-2xl">
            {europeanDeficit.subheadline}
          </p>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {europeanDeficit.copyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm border border-ice-white/30 rounded-lg p-6 shadow-sm"
            >
              <p className="font-mono text-2xl md:text-3xl font-bold text-atlantic-teal mb-2">
                {point.metric}
              </p>
              <p className="font-body text-deep-navy/70 text-sm leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Self-Sufficiency Chart */}
          <div className="bg-white border border-glacier-blue rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-deep-navy mb-1">
              {europeanDeficit.selfSufficiency.title}
            </h3>
            <p className="text-sm text-deep-navy/60 mb-6">
              {europeanDeficit.selfSufficiency.subtitle}
            </p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={europeanDeficit.selfSufficiency.data}
                  margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#001F3F", fontSize: 11 }}
                  />
                  <YAxis
                    domain={[30, 50]}
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: "#001F3F", fontSize: 11 }}
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

          {/* Trade Deficit Chart */}
          <div className="bg-white border border-glacier-blue rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-deep-navy mb-1">
              {europeanDeficit.tradeDeficit.title}
            </h3>
            <p className="text-sm text-deep-navy/60 mb-6">
              {europeanDeficit.tradeDeficit.subtitle}
            </p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={europeanDeficit.tradeDeficit.data}
                  margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#001F3F", fontSize: 11 }}
                  />
                  <YAxis
                    domain={[15, 25]}
                    tickFormatter={(value) => `€${value}B`}
                    tick={{ fill: "#001F3F", fontSize: 11 }}
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

          {/* Global Consumption Donut */}
          <div className="bg-white border border-glacier-blue rounded-lg p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-deep-navy mb-1">
              {europeanDeficit.globalConsumption.title}
            </h3>
            <p className="text-sm text-deep-navy/60 mb-6">
              EU share of global demand
            </p>
            <div className="h-56 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={europeanDeficit.globalConsumption.data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
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
                  <p className="font-mono text-2xl font-bold text-atlantic-teal">12%</p>
                  <p className="text-xs text-deep-navy/60">EU Share</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-atlantic-teal" />
                <span className="text-xs text-deep-navy/70">EU (12%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-glacier-blue" />
                <span className="text-xs text-deep-navy/70">Rest of World (88%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Opportunity Box */}
        <div className="mt-12 bg-white border border-glacier-blue rounded-lg p-8">
          <h3 className="font-heading text-xl font-semibold text-deep-navy mb-4">
            The Investment Opportunity
          </h3>
          <p className="font-body text-deep-navy/80 leading-relaxed">
            This deficit is not a market failure, but a{" "}
            <span className="font-semibold text-atlantic-teal">
              structural supply chain issue
            </span>
            . For investors, the signal is clear: there is a unique opportunity for
            import substitution and margin capture through scalable aquaculture and
            modern processing infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}
