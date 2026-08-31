import type { SiteContent } from './types'

// EN — professional localization of the Portuguese narrative for the
// institutional investor audience. Same structure, stats and tone.

export const en: SiteContent = {
  locale: 'en',
  htmlLang: 'en',

  nav: {
    pageTitle: 'Blue Transformation Fund · Blue Economy',
    metaDescription:
      "Growing with the sea — scaling the blue economy. A €126M private equity fund investing across Portugal's blue economy: sustainable aquaculture, seafood processing and BlueTech. Managed by STAG Fund Management, regulated by the CMVM.",
    items: [
      { label: 'Fund', anchor: '#fundo' },
      { label: 'Hub', anchor: '#hub' },
      { label: 'Portfolio', anchor: '#portfolio' },
      { label: 'Verticals', anchor: '#verticais' },
      { label: 'Team', anchor: '#equipa' },
      { label: 'Invest', anchor: '#investir' },
    ],
    cta: { label: 'Invest', anchor: '#investir' },
    investorArea: { label: 'Investor Area', badge: 'Coming soon' },
  },

  hero: {
    kicker: 'STAG BLUE TRANSFORMATION FUND 1',
    // Working translation of the PT claim — pending sign-off from ACB / Organica.
    headlineLine1: 'Growing with the sea',
    headlineLine2: 'scaling the blue economy.',
    subheadline:
      "A private equity strategy focused on Portugal's blue economy — incremental innovation, scale and quality for European markets.",
    ctaPrimary: { label: 'Discover the Fund', anchor: '#fundo' },
    ctaSecondary: { label: 'Enter the Hub', anchor: '#hub' },
    imageAlt:
      "Aerial view of NaturaFish's estuary aquaculture ponds in the Algarve — blue-green water framed by golden earth embankments.",
  },

  hub: {
    sectionLabel: 'Hub',
    title: 'Blue Economy Hub',
    intro:
      'In a sector where information sits scattered, we want to be the resource that brings it together for anyone operating, investing or researching in the Portuguese or European blue economy. We would like to do it collaboratively.',
    contribution: {
      prompt: 'If you have relevant information you cannot find here, share it with us at:',
      email: 'hub@bluetransformationfund.com',
    },
    statCardsTitle: 'Sector data',
    statCards: [
      {
        value: '37.5%',
        label: 'EU seafood self-sufficiency — declining since 2014 (was 46.1%)',
        source: 'EUMOFA',
        sourceUrl: 'https://www.eumofa.eu/',
        asOf: '2022',
      },
      {
        value: '€21.6B',
        label: 'EU seafood trade deficit — the EU remains a structural net importer',
        source: 'EUMOFA',
        sourceUrl: 'https://www.eumofa.eu/',
        asOf: '2024',
      },
      {
        value: '57%',
        label: 'of global seafood for human consumption now comes from aquaculture',
        source: 'FAO SOFIA 2024',
        sourceUrl: 'https://www.fao.org/publications/home/fao-flagship-publications/the-state-of-world-fisheries-and-aquaculture/',
        asOf: '2024',
      },
      {
        value: '56 kg',
        label: 'per-capita consumption in Portugal — 3× the European average, the highest in Europe',
        source: 'EUMOFA',
        sourceUrl: 'https://www.eumofa.eu/',
        asOf: '2022',
      },
      {
        value: '235 Mt',
        label: 'record global fisheries and aquaculture production in 2024',
        source: 'FAO SOFIA 2026',
        sourceUrl: 'https://www.fao.org/publications/home/fao-flagship-publications/the-state-of-world-fisheries-and-aquaculture/',
        asOf: '2024',
      },
      {
        value: '1.2–1.5',
        label: 'aquaculture feed conversion ratio (kg feed per kg protein) vs. 6–10 for beef',
        source: 'FAO / BlueInvest',
        asOf: '2023',
      },
      {
        value: '~5 kg',
        label: 'CO₂e per kg of protein for farmed fish vs. ~27 kg for beef',
        source: 'FAO / BlueInvest',
        asOf: '2023',
      },
      {
        value: '€126B',
        label: 'annual SDG 14 funding gap (€147B/yr required; €21B invested)',
        source: 'UNEP / UN',
        asOf: '2023',
      },
    ],
    researchSlot: {
      title: 'Observatory — data under review',
      note: 'This grid is fed by reference sector reports (FAO, EUMOFA, European Commission, OECD). Figures are reviewed and refreshed with each new edition.',
      updatedLabel: 'Updated',
    },
    chart: {
      title: 'EU seafood self-sufficiency, 2014–2022',
      subtitle: 'Share of domestic demand met by EU production',
      sourceNote: 'Source: EUMOFA — public data',
      yUnit: '%',
    },
    resourcesTitle: 'Sector resources',
    // All four cards open their own Observatory page. Order follows ACB's brief.
    // `category` resolves to the page path via observatoryHref(), so the links
    // cannot drift from the routes.
    resourceCards: [
      {
        category: 'reports',
        title: 'Reference Reports',
        description: 'Relevant information from credible sources — sector reports and statistics.',
        pageLabel: 'Open the Observatory',
      },
      {
        category: 'portugal',
        title: 'Portugal Data',
        description: 'The latest available information on the sector in Portugal — fisheries, aquaculture and first sale.',
        pageLabel: 'Open the Observatory',
      },
      {
        category: 'regulation',
        title: 'Regulation & Funding',
        description: 'EU and national regulation, and the available funding and certification programmes.',
        pageLabel: 'Open the Observatory',
      },
      {
        category: 'events',
        title: 'Events',
        description: 'The sector’s event calendar — investment, policy and science across the blue economy.',
        pageLabel: 'Open the Observatory',
      },
    ],
  },

  fund: {
    sectionLabel: 'The Fund',
    title: 'The Fund',
    subnav: [
      { label: 'Thesis', anchor: '#tese' },
      { label: 'Verticals', anchor: '#verticais' },
      { label: 'Portfolio', anchor: '#portfolio' },
      { label: 'Sustainability', anchor: '#sustentabilidade' },
      { label: 'Structure', anchor: '#estrutura' },
      { label: 'Team', anchor: '#equipa' },
      { label: 'Invest', anchor: '#investir' },
    ],

    thesis: {
      sectionLabel: 'The Thesis',
      title: 'The know-how already exists. What’s missing is scale.',
      paragraphs: [
        "Portugal's blue economy carries centuries of working knowledge: estuary aquaculture, world-class canning, cod-processing techniques with 500 years of history. This is not an emerging sector — it is a mature, under-capitalised one.",
        "Europe runs a €21.6 billion seafood trade deficit, and EU self-sufficiency has fallen to 37.5%. Portugal has the assets, the climate and the premium species that Nordic and Central European markets cannot produce. The opportunity is not to invent something new — it is to modernise, certify and export what already exists.",
        'SBTF 1 is the vehicle for that transformation: institutional capital, vertical integration and technology in service of the product — not the other way around. That work is what produces European leadership in quality.',
      ],
      equation: {
        blocks: ['Accumulated know-how', 'Institutional capital', 'Incremental innovation'],
        result: 'Value created, sustainability verified',
      },
    },

    euContext: {
      title: 'Europe needs what Portugal can supply.',
      intro:
        "The European seafood market has a structural problem: it consumes 12% of global production but produces only 2%. Import dependency grows every year. For Portugal, that is an opportunity.",
      stats: [
        {
          value: '37.5%',
          label: 'EU seafood self-sufficiency. Declining since 2014 (was 46.1%).',
          source: 'EUMOFA 2022',
        },
        {
          value: '€21.6B',
          label: 'EU seafood trade deficit in 2024.',
          source: 'EUMOFA',
        },
        {
          value: '57%',
          label: 'of global seafood for human consumption now comes from aquaculture, not wild capture.',
          source: 'FAO SOFIA 2024',
        },
        {
          value: '56 kg',
          label: 'per-capita consumption in Portugal, 3× the European average. The highest in Europe.',
          source: 'EUMOFA',
        },
      ],
    },

    verticals: {
      sectionLabel: 'Verticals',
      title: 'Three verticals, one value chain.',
      intro:
        'The fund invests along the entire Portuguese seafood value chain, capturing margin at multiple points and creating synergies between verticals.',
      items: [
        {
          number: '01',
          title: 'Sustainable Aquaculture',
          allocationPct: 50,
          allocationLabel: '50% of the fund · €63M',
          copy: 'An estuary aquaculture platform anchored by NaturaFish (Alvor + Arade, Algarve). European seabass and gilthead seabream raised in a natural environment, with certifiable traceability and bolt-on capacity. Growth through selective acquisition of adjacent assets — not multiple speculation.',
          bullets: [
            'Premium species with growing demand across European markets',
            'Estuary-pond model with lower environmental impact than intensive aquaculture',
            'Path to ASC certification when commercially justified',
            'Current combined capacity: ~1,200 tonnes/year (Alvor + Arade)',
          ],
        },
        {
          number: '02',
          title: 'Seafood Processing',
          allocationPct: 35,
          allocationLabel: '35% of the fund · €44.1M',
          copy: 'Consolidation of the downstream industrial layer: canning, cod processing, cold chain and distribution. The objective is to turn commodity operators — under-scaled and under-automated — into export platforms with sustainable margins and access to premium European channels.',
          bullets: [
            'A sector dominated by family-owned SMEs with open succession questions',
            'Operational modernisation as the engine of EBITDA expansion',
            'Portugal has world-reference product: sardine, tuna, cod',
            'Active pipeline: canneries (MBO underway) + B2C platform (under evaluation)',
          ],
        },
        {
          number: '03',
          title: 'BlueTech',
          allocationPct: 15,
          allocationLabel: '15% of the fund · €18.9M',
          copy: 'Technology in service of the product. IoT, sensors, AI, automation and traceability to improve yield, energy efficiency and quality across Verticals 1 and 2. BlueTech is not a standalone technology bet — it is an operational multiplier for the portfolio.',
          bullets: [
            'Aquaculture monitoring and decision support (sensors + analytics)',
            'Digital traceability and compliance (chain-of-custody, audit-readiness)',
            'Processing automation and yield optimisation',
            'Cold-chain optimisation and energy efficiency',
          ],
        },
      ],
    },

    portfolio: {
      sectionLabel: 'Portfolio',
      title: 'Portfolio under construction',
      anchorTitle: 'NaturaFish',
      anchorTag: "Anchor asset · The fund's first investment",
      copy: 'NaturaFish is the anchor platform of Vertical 1. It operates two estuary aquaculture farms in the Algarve with integrated production and processing infrastructure. Combined capacity of ~1,200 tonnes/year. Investment: €16.1M.',
      farms: [
        { name: 'Alvor', specs: '19 ha · 19 ponds · ~550 t/year' },
        { name: 'Arade', specs: '21 ha · 22 ponds · ~650 t/year' },
      ],
      pipelineNote:
        'The fund is evaluating 2 additional acquisitions in Vertical 1 and 2 targets in Vertical 2 (including cannery consolidation and a B2C platform). Details available in the CIM for qualified investors.',
      imageAlt:
        "Aerial photograph of NaturaFish's aquaculture farms in the Algarve estuary: geometric water ponds framed by golden earth embankments.",
    },

    sustainability: {
      sectionLabel: 'Sustainability',
      title: 'A fund with impact — not an impact fund.',
      lede: 'SBTF 1 is an investment fund with impact — not an impact fund. Financial return is the primary objective and is not subordinated to non-financial criteria. Sustainability is treated as management discipline: measured, planned and improved because it drives market access, price premium and exit value. We state the distinction plainly because it carries legal and commercial consequences.',
      pillars: [
        {
          title: 'Rated at entry and exit',
          copy: "Every company is assessed against a defined sustainability rating methodology at acquisition. The same methodology is applied again at exit. What changes between those two points is measured rather than estimated, and attributable to the fund's work over the holding period.",
        },
        {
          title: 'Two plans, one investment',
          copy: 'No investment enters the portfolio on a financial plan alone. Each company also carries a sustainability upgrade plan, with defined actions and timelines, executed over the same horizon and reviewed on the same cadence. Certification, resource efficiency and traceability are value-creation work — not reporting.',
        },
        {
          title: 'Independent verification',
          copy: 'Sustainability objectives achieved are verified by a third party independent of the fund and of its portfolio companies, and that verification is the basis on which results are published. What cannot be verified externally is not presented to investors as a result.',
        },
      ],
      note: "The full methodology, each company's upgrade plan and the verified results are presented to investors.",
    },

    terms: {
      sectionLabel: 'Structure',
      title: 'Structure & Terms',
      rows: [
        { label: 'Target fund size', value: '€126M', caveat: 'Class A + B + C' },
        { label: 'Target annual return', value: '20% IRR¹' },
        { label: 'Term', value: '8 years', caveat: '2026–2034' },
        { label: 'Verticals', value: '3', caveat: 'Aquaculture · Processing · BlueTech' },
      ],
      managerLine:
        'Managed by STAG Fund Management · €450M AUM · 1,000+ investors · 50+ nationalities · Regulated by the CMVM',
      irrCaveat:
        '¹ Target return, not guaranteed. Investing in SBTF 1 involves risk, including the risk of partial or total loss of invested capital. Past performance is not indicative of future results.',
    },

    team: {
      sectionLabel: 'Team',
      title: 'Team',
      photoPendingLabel: 'Photo forthcoming',
      groups: [
        {
          title: 'SBTF 1 Team',
          members: [
            {
              name: 'António Castel-Branco',
              role: 'Operating Partner, SBTF 1',
              bio: 'Operational experience across aquaculture and the blue economy. Responsible for portfolio management and development. Chairman of NaturaFish; previously senior roles at Barclays Bank and BPI. MBA, IE Business School.',
              photo: 'antonio-castel-branco',
              linkedIn: 'https://www.linkedin.com/in/ant%C3%B3nio-castel-branco-30a6181/',
            },
            {
              name: 'João Reis',
              role: 'Fund Advisor, SBTF 1',
              bio: 'Specialist in investment fund structuring and capital markets. Supports strategy and investor relations. 20+ years in the blue economy; former Board Member at Docapesca and advisor to the Secretary of State for Fisheries.',
              photo: 'joao-reis',
              linkedIn: 'https://www.linkedin.com/in/jo%C3%A3o-reis-7a181a362/',
            },
            {
              name: 'Gonçalo Videira',
              role: 'Fund Advisor, SBTF 1',
              bio: 'Specialist in commercial strategy and route to market in food retail. Supports the commercial growth of portfolio companies. Director at Sonae, with a c. €40M aquaculture vertical integration approved at board level; previously at P&G, Microsoft and L’Oréal. MBA, INSEAD.',
              photo: 'goncalo-videira',
              linkedIn: 'https://www.linkedin.com/in/goncalovideira/',
            },
          ],
        },
        {
          title: 'STAG Investment Committee & Management',
          members: [
            {
              name: 'Manuel Pinto de Abreu',
              role: 'IC Member, STAG',
              bio: '10+ years of international business development across real estate, energy and technology.',
              photo: 'manuel-abreu',
              linkedIn: 'https://www.linkedin.com/in/manuel-pinto-de-abreu-3760bbb0/',
            },
            {
              name: 'João Fialho',
              role: 'IC Member, STAG',
              bio: '10+ years in structured finance at Santander, managing collateralised portfolios exceeding €20B.',
              photo: 'joao-fialho',
              linkedIn: 'https://www.linkedin.com/in/jo%C3%A3o-fialho-b13088a4/',
            },
            {
              name: 'Diogo Saraiva Ponte',
              role: 'Partner & Co-CEO, STAG',
              bio: 'Co-leads STAG Fund Management, a CMVM-regulated management company with €450M in assets under management.',
            },
            {
              name: 'António Pereira',
              role: 'Partner & Co-CEO, STAG',
              bio: "Co-leads STAG Fund Management, responsible for the management company's strategy and regulatory relations.",
            },
            {
              name: 'Gisela Martins',
              role: 'Board Member, STAG',
              bio: 'Member of the Board of Directors of STAG Fund Management.',
            },
            {
              name: 'Nathan Hellmann',
              role: 'Director of Business Development, STAG',
              bio: 'Leads business development and relationships with institutional investors and family offices.',
              photo: 'nathan',
            },
          ],
        },
      ],
    },

    process: {
      sectionLabel: 'Invest',
      title: 'Investment Process',
      intro:
        'All communications are treated with strict confidentiality. The investment process is structured in 5 steps.',
      steps: [
        {
          title: 'Initial contact',
          description: 'Submit your interest through the form or by direct e-mail.',
        },
        {
          title: 'CIM access',
          description: 'Full documentation available to qualified investors after validation.',
        },
        {
          title: 'Meetings',
          description:
            'One-on-one sessions with António Castel-Branco, João Reis and the senior STAG team. Includes technical Q&A.',
        },
        {
          title: 'Due diligence',
          description:
            'Verification of the audited track record, legal review of fund documents and meetings with portfolio companies (subject to confidentiality).',
        },
        {
          title: 'Subscription',
          description: 'Subscription documentation and capital commitment.',
        },
      ],
      contact: {
        name: 'Nathan Hellmann',
        role: 'Director of Business Development',
        email: 'nh@stagfundmanagement.com',
        phone: '+351 924 819 128',
        generalEmail: 'investor.relations@stagfundmanagement.com',
      },
      ctaPrimary: 'Request the CIM',
      ctaSecondary: 'Book a Meeting',
      formNote: 'Response within 2 business days. All communications treated with strict confidentiality.',
    },
  },

  footer: {
    disclaimer:
      'This website is provided for information purposes only and does not constitute an offer, invitation or recommendation to subscribe for participation units or to make any investment decision. Investing in SBTF 1 involves risk, including the risk of partial or total loss of invested capital. Past performance is not indicative of future results. Any decision to invest must be based exclusively on the analysis of the full prospectus and the official fund documentation. STAG Fund Management, Lda. is a collective investment management company regulated and supervised by the CMVM — Comissão do Mercado de Valores Mobiliários (Portuguese Securities Market Commission).',
    links: [
      { label: 'Privacy Policy', href: '/en/privacy/' },
      { label: 'Terms of Use', href: '/en/terms/' },
      { label: 'STAG Fund Management', href: 'https://www.stagfundmanagement.com', external: true },
      { label: 'CMVM', href: 'https://www.cmvm.pt', external: true },
    ],
    address: 'Rua Serpa Pinto 14A, 1st floor · 1200-445 Lisbon, Portugal',
    contactLine: 'investor.relations@stagfundmanagement.com · +351 218 530 236',
    copyright: '© 2026 STAG Fund Management, Lda. All rights reserved.',
  },

  a11y: {
    skipToContent: 'Skip to content',
    langSwitchLabel: 'Mudar para Português',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
}
