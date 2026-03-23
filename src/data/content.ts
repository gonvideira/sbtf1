// SBTF1 Landing Page Content Data
// Source: SBTF1 Public Landing Page Development Brief

// =============================================================================
// SECTION 2: MACRO CONTEXT
// =============================================================================

export const macroContext = {
  headline: "Global Food Systems & The Seafood Opportunity",

  productionGap: {
    title: "Production Gap by 2050",
    subtitle: "Required increase to meet population growth",
    data: [
      { region: "World", value: 48.6, fill: "#001F3F" },
      { region: "Sub-Saharan Africa", value: 112.4, fill: "#00A8A8" },
    ],
  },

  consumptionTrend: {
    title: "Global Seafood Consumption",
    subtitle: "Per capita consumption (kg/year)",
    data: [
      { year: 1990, value: 14 },
      { year: 1995, value: 15.2 },
      { year: 2000, value: 16.4 },
      { year: 2005, value: 17.8 },
      { year: 2010, value: 19.2 },
      { year: 2015, value: 20.5 },
      { year: 2020, value: 22 },
    ],
  },

  aquacultureVsCaptures: {
    title: "The Great Divergence",
    subtitle: "Captures vs Aquaculture growth (million tonnes)",
    data: [
      { year: "2022", captures: 92, aquaculture: 94 },
      { year: "2032 (Proj.)", captures: 101, aquaculture: 110 },
    ],
    capturesGrowth: "10.4%",
    aquacultureGrowth: "17.4%",
  },

  copyPoints: [
    {
      metric: "48.6%",
      text: "Global agricultural production increase needed by 2050 to feed the world",
    },
    {
      metric: "30-40%",
      text: "Of food produced is lost or goes uneaten, costing ~US$1 trillion per year",
    },
    {
      metric: "22kg",
      text: "Per capita seafood consumption in 2020, up from 14kg in 1990",
    },
  ],
}

// =============================================================================
// SECTION 3: SDG 14 FUNDING GAP
// =============================================================================

export const fundingGap = {
  headline: "The SDG 14 Funding Gap",
  subheadline: "Harnessing the World's Purest Protein Source",

  scorecard: {
    required: 147,
    current: 21,
    gap: 126,
    unit: "billion",
    currency: "€",
    period: "per year",
  },

  oceanStats: [
    { value: "70%", label: "Earth's surface covered by ocean" },
    { value: "90%", label: "CO2 heat absorbed by oceans" },
    { value: "20%", label: "Global CO2 absorbed by oceans" },
  ],

  copyPoints: [
    "Achieving SDG 14 by 2030 requires ~€147 billion per year globally.",
    "Current annual investment is only ~€21 billion.",
    "This leaves an annual deficit of €126 billion — a massive opportunity for impact-aligned capital.",
  ],
}

// =============================================================================
// SECTION 4: MARINE PROTEIN EFFICIENCY
// =============================================================================

export const proteinEfficiency = {
  headline: "Marine Protein Efficiency",
  subheadline: "High-Yield, Low-Impact Food Systems",

  fcrComparison: {
    title: "Feed Conversion Ratio (FCR)",
    subtitle: "kg of feed per kg of protein produced",
    data: [
      { protein: "Aquaculture", min: 1.2, max: 1.5, avg: 1.35, fill: "#00A8A8" },
      { protein: "Chicken", min: 1.7, max: 2.0, avg: 1.85, fill: "#64748B" },
      { protein: "Pork", min: 2.7, max: 5.0, avg: 3.85, fill: "#64748B" },
      { protein: "Beef", min: 6.0, max: 10.0, avg: 8.0, fill: "#64748B" },
    ],
  },

  carbonFootprint: {
    title: "Carbon Footprint",
    subtitle: "kg CO2 equivalent per kg of protein",
    data: [
      { protein: "Farmed Fish", value: 5, fill: "#00A8A8" },
      { protein: "Chicken", value: 8, fill: "#64748B" },
      { protein: "Pork", value: 12, fill: "#64748B" },
      { protein: "Beef", value: 27, fill: "#94A3B8" },
    ],
  },

  landWaterUsage: {
    title: "Resource Efficiency",
    stats: [
      {
        metric: "225x",
        label: "Less land & freshwater than terrestrial livestock",
      },
      {
        metric: "90%",
        label: "Less land per kg of protein",
      },
      {
        metric: "98%",
        label: "Less freshwater per kg of protein",
      },
    ],
  },
}

// =============================================================================
// SECTION 5: EUROPEAN DEFICIT
// =============================================================================

export const europeanDeficit = {
  headline: "The European Deficit",
  subheadline: "A €22B Structural Trade Imbalance",

  selfSufficiency: {
    title: "EU Self-Sufficiency Decline",
    subtitle: "Percentage of domestic seafood demand met by EU production",
    data: [
      { year: 2014, value: 46.1 },
      { year: 2016, value: 44.2 },
      { year: 2018, value: 41.8 },
      { year: 2020, value: 39.5 },
      { year: 2022, value: 37.5 },
    ],
  },

  tradeDeficit: {
    title: "Trade Deficit Evolution",
    subtitle: "Billions of euros",
    data: [
      { year: 2014, value: 18.2 },
      { year: 2016, value: 19.1 },
      { year: 2018, value: 20.3 },
      { year: 2020, value: 20.8 },
      { year: 2022, value: 21.5 },
      { year: 2023, value: 22.0 },
    ],
  },

  globalConsumption: {
    title: "Global Seafood Consumption",
    data: [
      { name: "EU", value: 12, fill: "#00A8A8" },
      { name: "Rest of World", value: 88, fill: "#E2E8F0" },
    ],
  },

  copyPoints: [
    {
      metric: "46% → 37%",
      text: "EU self-sufficiency dropped from 46.1% in 2014 to just 37.5% in 2022",
    },
    {
      metric: "12% vs 3%",
      text: "Europe consumes 12% of global seafood but produces only 3%",
    },
    {
      metric: "€22B",
      text: "Structural trade deficit in 2023 — an opportunity for import substitution",
    },
  ],
}

// =============================================================================
// SECTION 6: EXECUTIVE LEADERSHIP
// =============================================================================

export const leadership = {
  headline: "Executive Leadership",
  subheadline: "Institutional Rigor & Blue Economy Expertise",

  firmProfile: {
    name: "STAG",
    description: "An independent large-scale asset manager regulated by the CMVM.",
    stats: [
      { value: "€400M+", label: "Assets Under Management" },
      { value: "150+", label: "Years Combined Experience" },
    ],
  },

  team: [
    {
      name: "António Castel-Branco",
      role: "Managing Partner",
      image: "/assets/team/antonio.jpg",
      highlights: [
        "8+ years investment in Blue Economy",
        "Chairman of NaturaFish",
        "Former senior roles at Barclays Bank and BPI",
        "MBA from IE Business School",
      ],
    },
    {
      name: "João Reis",
      role: "Operating Partner",
      image: "/assets/team/joao-reis.jpg",
      highlights: [
        "20+ years in Blue Economy",
        "Former Board Member at Docapesca Portos e Lotas",
        "Advisor to Secretary of State for Fisheries",
      ],
    },
    {
      name: "João Fialho",
      role: "IC Member",
      image: "/assets/team/joao-fialho.jpg",
      highlights: [
        "10+ years in Structured Finance at Santander",
        "Managed collateralized portfolios exceeding €20B",
      ],
    },
    {
      name: "Manuel Abreu",
      role: "IC Member",
      image: "/assets/team/manuel.jpg",
      highlights: [
        "10+ years international business development",
        "Experience across real estate, energy, and IT",
      ],
    },
  ],
}

// =============================================================================
// FUND METRICS (used in Hero and throughout)
// =============================================================================

export const fundMetrics = {
  targetSize: "€125M",
  targetIRR: "15-20%",
  term: "10 Years",
  alignment: "SDG 14",
}
