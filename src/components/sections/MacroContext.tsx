import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { macroContext } from "@/data/content"

export function MacroContext() {
  return (
    <section id="macro-context" className="bg-deep-navy text-ice-white">
      {/* Part 1: Global Food Systems */}
      <div className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <p className="text-atlantic-teal font-mono text-sm tracking-wider uppercase mb-8">
            MACRO
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Copy */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-atlantic-teal">GL</span>
                <span className="relative">
                  O
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-atlantic-teal" />
                  </span>
                </span>
                <span>BAL</span> FOOD SYSTEMS
              </h2>
              <p className="font-body text-xl text-atlantic-teal mb-8">
                {macroContext.subheadline}
              </p>

              <div className="space-y-6 font-body text-ice-white/80 leading-relaxed">
                <p>
                  <span className="font-semibold text-ice-white">GLOBAL FOOD</span>{" "}
                  {macroContext.copy.intro.replace("GLOBAL FOOD ", "")}
                </p>
                <p>{macroContext.copy.constraints}</p>
                <p>
                  The system also leaks value at scale. The{" "}
                  <span className="font-semibold text-atlantic-teal">World Bank</span>{" "}
                  estimates 30–40% of food produced is lost or goes uneaten, with
                  economic costs often cited around ~US$1 trillion per year. Global
                  prices remain shock-sensitive. FAO reports the Food Price Index
                  averaged 13.7% lower in 2023 vs 2022, after the post-2022 spike.
                </p>
                <p>{macroContext.copy.implication}</p>
              </div>
            </div>

            {/* Right Column - Table */}
            <div>
              <div className="bg-deep-navy/50 border border-ice-white/10 rounded-lg p-6">
                <h3 className="font-heading text-lg font-semibold mb-1">
                  <span className="text-atlantic-teal">MAC</span>
                  <span className="relative">
                    R
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-atlantic-teal" />
                    </span>
                  </span>
                  <span>O</span>{" "}
                  <span className="text-ice-white/70">Global Food Supply Gap</span>
                </h3>
                <p className="text-sm text-ice-white/60 mb-6">
                  {macroContext.productionGap.subtitle}
                </p>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-ice-white/20">
                        <th className="text-left py-3 pr-4 font-semibold text-ice-white/70">
                          REGION
                        </th>
                        <th className="text-left py-3 pr-4 font-semibold text-ice-white/70">
                          DESCRIPTION
                        </th>
                        <th className="text-right py-3 pr-4 font-mono text-atlantic-teal">
                          2005/07
                        </th>
                        <th className="text-right py-3 pr-4 font-mono text-atlantic-teal">
                          2050
                        </th>
                        <th className="text-right py-3 pr-4 font-mono text-atlantic-teal">
                          2005/07–2012
                        </th>
                        <th className="text-right py-3 font-mono text-atlantic-teal">
                          2013–2050
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-ice-white/80">
                      <tr className="border-b border-ice-white/10">
                        <td className="py-3 pr-4 text-atlantic-teal">World</td>
                        <td className="py-3 pr-4 text-ice-white/60">As projected in AT2050</td>
                        <td className="py-3 pr-4 text-right font-mono">100</td>
                        <td className="py-3 pr-4 text-right font-mono">159.6</td>
                        <td className="py-3 pr-4 text-right font-mono">14.8</td>
                        <td className="py-3 text-right font-mono text-atlantic-teal">44.8</td>
                      </tr>
                      <tr className="border-b border-ice-white/10">
                        <td className="py-3 pr-4 text-atlantic-teal">World</td>
                        <td className="py-3 pr-4 text-ice-white/60">With updated population projections (UN, 2015)</td>
                        <td className="py-3 pr-4 text-right font-mono">100</td>
                        <td className="py-3 pr-4 text-right font-mono">163.4</td>
                        <td className="py-3 pr-4 text-right font-mono">14.8</td>
                        <td className="py-3 text-right font-mono text-atlantic-teal">48.6</td>
                      </tr>
                      <tr className="border-b border-ice-white/10">
                        <td className="py-3 pr-4 text-atlantic-teal">Sub-Saharan Africa and South Asia</td>
                        <td className="py-3 pr-4 text-ice-white/60">As projected in AT2050</td>
                        <td className="py-3 pr-4 text-right font-mono">100</td>
                        <td className="py-3 pr-4 text-right font-mono">224.9</td>
                        <td className="py-3 pr-4 text-right font-mono">20.0</td>
                        <td className="py-3 text-right font-mono text-atlantic-teal">104.9</td>
                      </tr>
                      <tr className="border-b border-ice-white/10">
                        <td className="py-3 pr-4 text-atlantic-teal">Sub-Saharan Africa and South Asia</td>
                        <td className="py-3 pr-4 text-ice-white/60">With updated population projections (UN, 2015)</td>
                        <td className="py-3 pr-4 text-right font-mono">100</td>
                        <td className="py-3 pr-4 text-right font-mono">232.4</td>
                        <td className="py-3 pr-4 text-right font-mono">20.0</td>
                        <td className="py-3 text-right font-mono text-atlantic-teal">112.4</td>
                      </tr>
                      <tr className="border-b border-ice-white/10">
                        <td className="py-3 pr-4 text-atlantic-teal">Rest of the world</td>
                        <td className="py-3 pr-4 text-ice-white/60">As projected in AT2050</td>
                        <td className="py-3 pr-4 text-right font-mono">100</td>
                        <td className="py-3 pr-4 text-right font-mono">144.9</td>
                        <td className="py-3 pr-4 text-right font-mono">13.8</td>
                        <td className="py-3 text-right font-mono text-atlantic-teal">31.2</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-atlantic-teal">Rest of the world</td>
                        <td className="py-3 pr-4 text-ice-white/60">With updated population projections (UN, 2015)</td>
                        <td className="py-3 pr-4 text-right font-mono">100</td>
                        <td className="py-3 pr-4 text-right font-mono">147.9</td>
                        <td className="py-3 pr-4 text-right font-mono">13.8</td>
                        <td className="py-3 text-right font-mono text-atlantic-teal">34.2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-ice-white/40 mt-4">
                  Source: {macroContext.productionGap.source}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Global Seafood */}
      <div className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-deep-navy to-deep-navy/95">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Copy */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-atlantic-teal">GL</span>
                <span className="relative">
                  O
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-atlantic-teal" />
                  </span>
                </span>
                <span>BAL</span> SEAFOOD
              </h2>
              <p className="font-body text-xl text-atlantic-teal mb-8">
                {macroContext.seafood.subheadline}
              </p>

              <div className="space-y-6 font-body text-ice-white/80 leading-relaxed">
                <p>
                  <span className="font-semibold text-ice-white">SEAFOOD</span>{" "}
                  {macroContext.seafood.copy.intro.replace("SEAFOOD ", "")}
                </p>
                <p>{macroContext.seafood.copy.consumption}</p>
                <p>{macroContext.seafood.copy.supply}</p>
                <p>{macroContext.seafood.copy.aquaculture}</p>
                <p>{macroContext.seafood.copy.value}</p>
              </div>
            </div>

            {/* Right Column - Charts & Table */}
            <div className="space-y-8">
              {/* Consumption Chart */}
              <div className="bg-deep-navy/50 border border-ice-white/10 rounded-lg p-6">
                <h3 className="font-heading text-lg font-semibold text-ice-white mb-1">
                  {macroContext.consumptionTrend.title}
                </h3>
                <p className="text-sm text-ice-white/60 mb-4">
                  {macroContext.consumptionTrend.subtitle}
                </p>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={macroContext.consumptionTrend.data}
                      margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(248,250,252,0.1)" />
                      <XAxis
                        dataKey="year"
                        tick={{ fill: "#F8FAFC", fontSize: 11 }}
                        axisLine={{ stroke: "rgba(248,250,252,0.2)" }}
                      />
                      <YAxis
                        domain={[0, 25]}
                        tick={{ fill: "#F8FAFC", fontSize: 11 }}
                        axisLine={{ stroke: "rgba(248,250,252,0.2)" }}
                      />
                      <Tooltip
                        formatter={(value) => [`${value} kg`, "Per Capita"]}
                        contentStyle={{
                          backgroundColor: "#001F3F",
                          border: "1px solid rgba(248,250,252,0.2)",
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
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Captures vs Aquaculture Table */}
              <div className="bg-deep-navy/50 border border-ice-white/10 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-ice-white/70 uppercase tracking-wider">
                      CAPTURES
                    </h3>
                    <p className="text-xs text-ice-white/50">(Thousand Ton)</p>
                  </div>
                  <div className="text-right">
                    <h3 className="font-heading text-sm font-semibold text-atlantic-teal uppercase tracking-wider">
                      AQUACULTURE
                    </h3>
                    <p className="text-xs text-ice-white/50">(Thousand Ton)</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-ice-white/20">
                        <th className="text-left py-2 pr-2 font-medium text-ice-white/70">Region</th>
                        <th className="text-right py-2 pr-2 font-mono text-ice-white/70">2022</th>
                        <th className="text-right py-2 pr-2 font-mono text-ice-white/70">2032</th>
                        <th className="text-right py-2 pr-4 font-mono text-ice-white/70">Var %</th>
                        <th className="text-right py-2 pr-2 font-mono text-atlantic-teal">2022</th>
                        <th className="text-right py-2 pr-2 font-mono text-atlantic-teal">2032</th>
                        <th className="text-right py-2 font-mono text-atlantic-teal">Var %</th>
                      </tr>
                    </thead>
                    <tbody className="text-ice-white/80">
                      {macroContext.capturesVsAquaculture.data.map((row, i) => (
                        <tr key={i} className="border-b border-ice-white/10">
                          <td className="py-2 pr-2 text-atlantic-teal">{row.region}</td>
                          <td className="py-2 pr-2 text-right font-mono">{row.captures2022.toLocaleString()}</td>
                          <td className="py-2 pr-2 text-right font-mono">{row.captures2032.toLocaleString()}</td>
                          <td className="py-2 pr-4 text-right font-mono">{row.capturesVar}</td>
                          <td className="py-2 pr-2 text-right font-mono text-atlantic-teal">{row.aqua2022.toLocaleString()}</td>
                          <td className="py-2 pr-2 text-right font-mono text-atlantic-teal">{row.aqua2032.toLocaleString()}</td>
                          <td className="py-2 text-right font-mono text-atlantic-teal">{row.aquaVar}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-ice-white/40 mt-4">
                  Source: {macroContext.capturesVsAquaculture.source}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
