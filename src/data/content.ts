// SBTF1 Landing Page Content Data
// Source: SBTF1 Public Landing Page Development Brief

// =============================================================================
// SECTION 2: MACRO CONTEXT
// =============================================================================

export const macroContext = {
  headline: "Global Food Systems",
  subheadline: "Demand Growth, Resource Constraints, and Inefficiency",

  // Long-form copy for left column
  copy: {
    intro:
      "GLOBAL FOOD systems are entering a structural pressure cycle. The United Nations projects world population will reach ~9.7bn by 2050. FAO estimates that to meet demand, agriculture in 2050 will need to produce almost 50% more food, feed and biofuel than in 2012.",
    constraints:
      "This growth must occur under tighter constraints. Land and freshwater competition are rising, and FAO's long-term outlook stresses that climate volatility requires system-level productivity and resilience gains rather than \"business as usual\".",
    inefficiency:
      "The system also leaks value at scale. The World Bank estimates 30–40% of food produced is lost or goes uneaten, with economic costs often cited around ~US$1 trillion per year. Global prices remain shock-sensitive. FAO reports the Food Price Index averaged 13.7% lower in 2023 vs 2022, after the post-2022 spike.",
    implication:
      "The investment implication is clear. Food security is increasingly a productivity and resilience problem. Scalable protein systems that can grow output without expanding land and freshwater use are structurally advantaged.",
  },

  // Production gap table data (from slide)
  productionGap: {
    title: "Global Food Supply Gap",
    subtitle: "Increase in agricultural production required to match projected demand, 2005–2050 (percent)",
    data: [
      { region: "World", value2050: 159.6, growth0507: 14.8, growth1350: 48.6 },
      { region: "Sub-Saharan Africa & South Asia", value2050: 232.4, growth0507: 20.0, growth1350: 112.4 },
      { region: "Rest of World", value2050: 147.9, growth0507: 13.8, growth1350: 34.2 },
    ],
    source: "FAO Global Perspectives Studies, based on UN, 2015",
  },

  // Seafood section
  seafood: {
    headline: "Global Seafood",
    subheadline: "Demand Expands, Wild Supply is Capped, Value Shifts to Scalable Systems",
    copy: {
      intro:
        "SEAFOOD is already a core pillar of global nutrition and trade. FAO reports that total fisheries and aquaculture production reached a record 223.2m tons in 2022 (including aquatic animals and algae), valued at USD 472bn.",
      consumption:
        "Consumption continues to rise. FAO estimates apparent consumption of aquatic animal foods at ~165m tons in 2022, and projects it will reach ~184m tons by 2032.",
      supply:
        "On the supply side, the growth frontier is constrained in wild capture. FAO estimates that only 62.3% of marine fish stocks were within biologically sustainable levels in 2021, while 37.7% were fished at biologically unsustainable levels.",
      aquaculture:
        "As a result, scalable aquaculture and modern value chains become the primary path to meeting incremental demand. FAO notes aquaculture now provides over 57% of aquatic animal products used for direct human consumption.",
      value:
        "Value capture increasingly concentrates downstream. Reliability, processing yield, cold chain performance, and audit-ready traceability are becoming commercial requirements as the sector scales.",
    },
  },

  consumptionTrend: {
    title: "Global Per-Capita Seafood Consumption",
    subtitle: "kg per year",
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

  // Captures vs Aquaculture table (from slide)
  capturesVsAquaculture: {
    title: "Captures vs Aquaculture Projections",
    subtitle: "Thousand tons",
    data: [
      { region: "World", captures2022: 185442, captures2032: 204678, capturesVar: 10.4, aqua2022: 94413, aqua2032: 110827, aquaVar: 17.4 },
      { region: "Africa", captures2022: 12936, captures2032: 14165, capturesVar: 9.5, aqua2022: 2317, aqua2032: 2813, aquaVar: 21.4 },
      { region: "America", captures2022: 23023, captures2032: 24914, capturesVar: 8.2, aqua2022: 4958, aqua2032: 5569, aquaVar: 12.3 },
      { region: "Asia", captures2022: 130461, captures2032: 145790, capturesVar: 11.7, aqua2022: 83399, aqua2032: 98350, aquaVar: 17.9 },
      { region: "Europe", captures2022: 17173, captures2032: 18010, capturesVar: 4.9, aqua2022: 3503, aqua2032: 3819, aquaVar: 9.0 },
    ],
    source: "FAO SOFIA 2024; European Commission BlueInvest Investor Report (2023)",
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
      role: "Operating Partner",
      image: "/assets/team/antonio.png",
      linkedIn: "https://www.linkedin.com/in/ant%C3%B3nio-castel-branco-30a6181/",
      highlights: [
        "8+ years investment in Blue Economy",
        "Chairman of NaturaFish",
        "Former senior roles at Barclays Bank and BPI",
        "MBA from IE Business School",
      ],
    },
    {
      name: "João Reis",
      role: "Fund Advisor",
      image: "/assets/team/joao-reis.png",
      linkedIn: "https://www.linkedin.com/in/jo%C3%A3o-reis-7a181a362/",
      highlights: [
        "20+ years in Blue Economy",
        "Former Board Member at Docapesca Portos e Lotas",
        "Advisor to Secretary of State for Fisheries",
      ],
    },
    {
      name: "João Fialho",
      role: "IC Member",
      image: "/assets/team/joao-fialho.png",
      linkedIn: "https://www.linkedin.com/in/jo%C3%A3o-fialho-b13088a4/",
      highlights: [
        "10+ years in Structured Finance at Santander",
        "Managed collateralized portfolios exceeding €20B",
      ],
    },
    {
      name: "Manuel Abreu",
      role: "IC Member",
      image: "/assets/team/manuel.png",
      linkedIn: "https://www.linkedin.com/in/manuel-pinto-de-abreu-3760bbb0/",
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
