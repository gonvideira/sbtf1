import type { SiteContent } from './types'

// Copy PT — verbatim da "Secção 2 · Copy completo por secção" do briefing de redesign.
// A ortografia pré-AO90 do briefing ("actual", "activos", "objectivo") é mantida intencionalmente.

export const pt: SiteContent = {
  locale: 'pt',
  htmlLang: 'pt-PT',

  nav: {
    pageTitle: 'Blue Transformation Fund · Economia Azul',
    metaDescription:
      'O mar já é nosso — a escala é o próximo passo. Fundo de private equity de €126M focado na economia azul portuguesa: aquacultura sustentável, transformação de seafood e BlueTech. Gerido pela STAG Fund Management, regulada pela CMVM.',
    items: [
      { label: 'Fundo', anchor: '#fundo' },
      { label: 'Hub', anchor: '#hub' },
      { label: 'Portfólio', anchor: '#portfolio' },
      { label: 'Verticais', anchor: '#verticais' },
      { label: 'Equipa', anchor: '#equipa' },
      { label: 'Investir', anchor: '#investir' },
    ],
    cta: { label: 'Investir', anchor: '#investir' },
  },

  hero: {
    kicker: 'STAG BLUE TRANSFORMATION FUND 1',
    headlineLine1: 'O mar já é nosso.',
    headlineLine2: 'A escala é o próximo passo.',
    subheadline:
      'Uma estratégia de private equity focada na economia azul portuguesa — inovação incremental, escala e qualidade para os mercados europeus.',
    ctaPrimary: { label: 'Conhecer o Fundo', anchor: '#fundo' },
    ctaSecondary: { label: 'Aceder ao Hub', anchor: '#hub' },
    imageAlt:
      'Vista aérea dos tanques de aquacultura em estuário da NaturaFish, no Algarve — água azul-esverdeada entre diques dourados.',
  },

  statBar: {
    stats: [
      { value: '€126M', label: 'Dimensão do fundo' },
      { value: '20%', label: 'IRR alvo¹' },
      { value: '3', label: 'Verticais — Aquacultura · Transformação · BlueTech' },
      { value: '1,7M km²', label: 'Zona Económica Exclusiva portuguesa (maior da UE)' },
    ],
    irrCaveat:
      '¹ Objectivo de rentabilidade, não garantido. O investimento envolve risco, incluindo a perda parcial ou total do capital investido.',
  },

  hub: {
    sectionLabel: 'Hub',
    title: 'Hub da Economia Azul',
    intro:
      'Este site é também um recurso para quem opera, investe ou investiga na economia azul portuguesa e europeia. Dados actualizados, regulação relevante e eventos do sector.',
    statCardsTitle: 'Dados do sector',
    statCards: [
      {
        value: '37,5%',
        label: 'Auto-suficiência da UE em seafood — em queda desde 2014 (era 46,1%)',
        source: 'EUMOFA',
        sourceUrl: 'https://www.eumofa.eu/',
        asOf: '2022',
      },
      {
        value: '€21,6B',
        label: 'Défice comercial da UE em seafood — a UE continua importadora líquida estrutural',
        source: 'EUMOFA',
        sourceUrl: 'https://www.eumofa.eu/',
        asOf: '2024',
      },
      {
        value: '57%',
        label: 'da produção mundial de seafood para consumo humano já vem de aquacultura',
        source: 'FAO SOFIA 2024',
        sourceUrl: 'https://www.fao.org/publications/home/fao-flagship-publications/the-state-of-world-fisheries-and-aquaculture/',
        asOf: '2024',
      },
      {
        value: '56 kg',
        label: 'consumo per capita em Portugal — 3× a média europeia, o maior da Europa',
        source: 'EUMOFA',
        sourceUrl: 'https://www.eumofa.eu/',
        asOf: '2022',
      },
      {
        value: '235 Mt',
        label: 'produção mundial recorde de pescas e aquacultura em 2024',
        source: 'FAO SOFIA 2026',
        sourceUrl: 'https://www.fao.org/publications/home/fao-flagship-publications/the-state-of-world-fisheries-and-aquaculture/',
        asOf: '2024',
      },
      {
        value: '1,2–1,5',
        label: 'FCR da aquacultura (kg de ração por kg de proteína) vs. 6–10 em carne bovina',
        source: 'FAO / BlueInvest',
        asOf: '2023',
      },
      {
        value: '~5 kg',
        label: 'CO₂e por kg de proteína em peixe de aquacultura vs. ~27 kg em carne bovina',
        source: 'FAO / BlueInvest',
        asOf: '2023',
      },
      {
        value: '€126B',
        label: 'défice anual de financiamento do ODS 14 (necessários €147B/ano; investidos €21B)',
        source: 'UNEP / ONU',
        asOf: '2023',
      },
    ],
    researchSlot: {
      title: 'Observatório — dados em actualização',
      note: 'Esta grelha é alimentada por relatórios de referência do sector (FAO, EUMOFA, Comissão Europeia, OCDE). Os dados são revistos e actualizados com cada nova edição.',
      updatedLabel: 'Actualizado',
    },
    chart: {
      title: 'Auto-suficiência da UE em seafood, 2014–2022',
      subtitle: 'Percentagem da procura interna satisfeita por produção da UE',
      sourceNote: 'Fonte: EUMOFA — dados públicos',
      yUnit: '%',
    },
    resourcesTitle: 'Recursos do sector',
    resourceCards: [
      {
        title: 'Dados do Sector',
        description:
          'Preços spot de seafood nos mercados europeus · Produção aquícola UE · Stocks FAO · Tracker do défice EUMOFA',
        links: [
          { label: 'EUMOFA', href: 'https://www.eumofa.eu/', external: true },
          { label: 'FAO FishStat', href: 'https://www.fao.org/fishery/en/statistics', external: true },
          { label: 'DGRM', href: 'https://www.dgrm.pt/', external: true },
        ],
      },
      {
        title: 'Regulação & Financiamento',
        description:
          'Mar2030 (programa nacional) · FEAMPA (Fundo Europeu dos Assuntos Marítimos, das Pescas e da Aquacultura) · BlueInvest · Certificações ASC / MSC',
        links: [
          { label: 'Mar2030', href: 'https://mar2030.pt/', external: true },
          { label: 'FEAMPA', href: 'https://oceans-and-fisheries.ec.europa.eu/funding/emfaf_en', external: true },
          { label: 'BlueInvest', href: 'https://blueinvest.ec.europa.eu/', external: true },
          { label: 'ASC', href: 'https://asc-aqua.org/', external: true },
        ],
      },
      {
        title: 'Relatórios de Referência',
        description:
          'FAO SOFIA 2024 · EU Blue Economy Report 2024 (DG MARE) · EUMOFA The EU Fish Market 2024 · BlueInvest Investor Report 2023 · OECD Blue Economy review Portugal',
        links: [
          {
            label: 'FAO SOFIA 2024',
            href: 'https://openknowledge.fao.org/handle/20.500.14283/cd0683en',
            external: true,
          },
          {
            label: 'EU Blue Economy Report',
            href: 'https://oceans-and-fisheries.ec.europa.eu/publications/eu-blue-economy-report-2024_en',
            external: true,
          },
          {
            label: 'EUMOFA Fish Market',
            href: 'https://www.eumofa.eu/the-eu-fish-market',
            external: true,
          },
        ],
      },
      {
        title: 'Eventos',
        description:
          'BlueInvest Forum (anual, Bruxelas) · Seafood Expo Global (Barcelona) · Portugal Blue Week · Aquaculture Europe',
        links: [
          { label: 'BlueInvest Forum', href: 'https://blueinvest.ec.europa.eu/', external: true },
          { label: 'Seafood Expo Global', href: 'https://www.seafoodexpo.com/global/', external: true },
          { label: 'Aquaculture Europe', href: 'https://www.aquaeas.org/', external: true },
        ],
      },
    ],
  },

  fund: {
    sectionLabel: 'O Fundo',
    title: 'O Fundo',
    subnav: [
      { label: 'Tese', anchor: '#tese' },
      { label: 'Verticais', anchor: '#verticais' },
      { label: 'Portfólio', anchor: '#portfolio' },
      { label: 'Estrutura', anchor: '#estrutura' },
      { label: 'Equipa', anchor: '#equipa' },
      { label: 'Investir', anchor: '#investir' },
    ],

    thesis: {
      sectionLabel: 'A Tese',
      title: 'O know-how já existe. Falta escala.',
      paragraphs: [
        'A economia azul portuguesa tem séculos de know-how artesanal: aquacultura em estuário, conservas de classe mundial, técnicas de processamento de bacalhau com 500 anos de história. Não é um sector emergente — é um sector maduro, sub-capitalizado.',
        'A Europa tem um défice comercial de €21,6 mil milhões em seafood por ano e a auto-suficiência da UE caiu para 37,5%. Portugal tem os activos, o clima e as espécies premium que os mercados nórdicos e centro-europeus não conseguem produzir. A oportunidade não é inventar algo novo — é modernizar, certificar e exportar o que já existe.',
        'O SBTF 1 é o veículo para essa transformação: capital institucional, integração vertical e tecnologia ao serviço do produto — não o contrário.',
      ],
      equation: {
        blocks: ['Know-how acumulado', 'Capital institucional', 'Inovação incremental'],
        result: 'Liderança europeia em qualidade',
      },
    },

    euContext: {
      title: 'A Europa precisa do que Portugal pode fornecer.',
      intro:
        'O mercado europeu de seafood tem um problema estrutural: consome 12% da produção mundial mas produz apenas 2%. A dependência de importações cresce todos os anos. Para Portugal, isso é uma oportunidade.',
      stats: [
        {
          value: '37,5%',
          label: 'Auto-suficiência da UE em seafood. Em queda desde 2014 (era 46,1%).',
          source: 'EUMOFA 2022',
        },
        {
          value: '€21,6B',
          label: 'Défice comercial da UE em seafood em 2024.',
          source: 'EUMOFA',
        },
        {
          value: '57%',
          label: 'da produção mundial de seafood para consumo humano já vem de aquacultura, não de capturas.',
          source: 'FAO SOFIA 2024',
        },
        {
          value: '56 kg',
          label: 'consumo per capita em Portugal, 3× a média europeia. O maior da Europa.',
          source: 'EUMOFA',
        },
      ],
    },

    verticals: {
      sectionLabel: 'Verticais',
      title: 'Três verticais, uma cadeia de valor.',
      intro:
        'O fundo investe ao longo de toda a cadeia de valor do seafood português, capturando margem em múltiplos pontos e criando sinergias entre verticais.',
      items: [
        {
          number: '01',
          title: 'Aquacultura Sustentável',
          allocationPct: 50,
          allocationLabel: '50% do fundo · €63M',
          copy: 'Plataforma de aquacultura em estuário ancorada na NaturaFish (Alvor + Arade, Algarve). Robalo europeu e dourada em ambiente natural, com rastreabilidade certificável e capacidade de bolt-on. Crescimento por aquisição selectiva de activos adjacentes, não por especulação de múltiplos.',
          bullets: [
            'Espécies premium com procura crescente nos mercados europeus',
            'Modelo estuary-pond com menor impacto ambiental que aquacultura intensiva',
            'Caminho para certificação ASC quando comercialmente justificado',
            'Capacidade combinada actual: ~1.200 toneladas/ano (Alvor + Arade)',
          ],
        },
        {
          number: '02',
          title: 'Transformação de Seafood',
          allocationPct: 35,
          allocationLabel: '35% do fundo · €44,1M',
          copy: 'Consolidação da camada industrial a jusante: conservas, processamento de bacalhau, cold chain e distribuição. O objectivo é transformar operadores de commodity — sub-escalados e sub-automatizados — em plataformas de exportação com margens sustentáveis e acesso a canais premium europeus.',
          bullets: [
            'Sector dominado por PME familiares com sucessão em aberto',
            'Modernização operacional como motor de expansão de EBITDA',
            'Portugal tem produto de referência mundial: sardinha, atum, bacalhau',
            'Pipeline activo: conserveiras (MBO em curso) + plataforma B2C (avaliação)',
          ],
        },
        {
          number: '03',
          title: 'BlueTech',
          allocationPct: 15,
          allocationLabel: '15% do fundo · €18,9M',
          copy: 'Tecnologia ao serviço do produto. IoT, sensores, IA, automação e rastreabilidade para melhorar rendimento, eficiência energética e qualidade nos Verticais 1 e 2. O BlueTech não é uma aposta tecnológica independente — é um multiplicador operacional do portfólio.',
          bullets: [
            'Monitorização e apoio à decisão em aquacultura (sensores + analytics)',
            'Rastreabilidade e compliance digital (chain-of-custody, audit-readiness)',
            'Automação de processamento e optimização de rendimento',
            'Optimização de cold chain e eficiência energética',
          ],
        },
      ],
    },

    portfolio: {
      sectionLabel: 'Portfólio',
      title: 'Portfólio em construção',
      anchorTitle: 'NaturaFish',
      anchorTag: 'Activo âncora · Primeiro investimento do fundo',
      copy: 'NaturaFish é a plataforma âncora do Vertical 1. Opera duas quintas de aquacultura em estuário no Algarve com infraestrutura integrada de produção e processamento. Capacidade combinada de ~1.200 toneladas/ano. Investimento: €16,1M.',
      farms: [
        { name: 'Alvor', specs: '19 ha · 19 tanques · ~550 t/ano' },
        { name: 'Arade', specs: '21 ha · 22 tanques · ~650 t/ano' },
      ],
      pipelineNote:
        'O fundo está a avaliar 2 aquisições adicionais no Vertical 1 e 2 alvos no Vertical 2 (incluindo consolidação de conserveiras e plataforma B2C). Detalhes disponíveis no CIM para investidores qualificados.',
      imageAlt:
        'Fotografia aérea das quintas de aquacultura da NaturaFish no estuário algarvio: tanques geométricos de água entre diques de terra dourada.',
    },

    terms: {
      sectionLabel: 'Estrutura',
      title: 'Estrutura e Termos',
      rows: [
        { label: 'Dimensão-alvo do fundo', value: '€126M', caveat: 'Classe A + B + C' },
        { label: 'Retorno anual alvo', value: '20% IRR¹' },
        { label: 'Prazo', value: '8 anos', caveat: '2026–2034' },
        { label: 'Verticais', value: '3', caveat: 'Aquacultura · Transformação · BlueTech' },
      ],
      managerLine:
        'Gerido pela STAG Fund Management · €450M AUM · +1.000 investidores · +50 nacionalidades · Regulado pela CMVM',
      irrCaveat:
        '¹ Objectivo de rentabilidade, não garantido. O investimento no SBTF 1 envolve riscos, incluindo o risco de perda parcial ou total do capital investido. Rentabilidades passadas não garantem rentabilidades futuras.',
    },

    team: {
      sectionLabel: 'Equipa',
      title: 'Equipa',
      photoPendingLabel: 'Fotografia em actualização',
      groups: [
        {
          title: 'Equipa SBTF 1',
          members: [
            {
              name: 'António Castel-Branco',
              role: 'Operating Partner, SBTF 1',
              bio: 'Experiência operacional no sector da aquacultura e economia azul. Responsável pela gestão e desenvolvimento do portfólio. Chairman da NaturaFish; anteriormente em funções sénior no Barclays Bank e BPI. MBA pelo IE Business School.',
              photo: 'antonio-castel-branco',
              linkedIn: 'https://www.linkedin.com/in/ant%C3%B3nio-castel-branco-30a6181/',
            },
            {
              name: 'João Reis',
              role: 'Fund Advisor, SBTF 1',
              bio: 'Especialista em estruturação de fundos de investimento e mercados de capitais. Suporte à estratégia e relação com investidores. +20 anos na economia azul; ex-membro do Conselho da Docapesca e assessor da Secretaria de Estado das Pescas.',
              photo: 'joao-reis',
              linkedIn: 'https://www.linkedin.com/in/jo%C3%A3o-reis-7a181a362/',
            },
          ],
        },
        {
          title: 'Comité de Investimento e Gestão STAG',
          members: [
            {
              name: 'Manuel Pinto de Abreu',
              role: 'IC Member, STAG',
              bio: '+10 anos de desenvolvimento de negócio internacional, com experiência em imobiliário, energia e tecnologia.',
              photo: 'manuel-abreu',
              linkedIn: 'https://www.linkedin.com/in/manuel-pinto-de-abreu-3760bbb0/',
            },
            {
              name: 'João Fialho',
              role: 'IC Member, STAG',
              bio: '+10 anos em financiamento estruturado no Santander, com gestão de carteiras colateralizadas superiores a €20B.',
              photo: 'joao-fialho',
              linkedIn: 'https://www.linkedin.com/in/jo%C3%A3o-fialho-b13088a4/',
            },
            {
              name: 'Diogo Saraiva Ponte',
              role: 'Partner e Co-CEO, STAG',
              bio: 'Co-lidera a STAG Fund Management, entidade gestora regulada pela CMVM com €450M em activos sob gestão.',
            },
            {
              name: 'António Pereira',
              role: 'Partner e Co-CEO, STAG',
              bio: 'Co-lidera a STAG Fund Management, com responsabilidade pela estratégia da sociedade gestora e relação com reguladores.',
            },
            {
              name: 'Gisela Martins',
              role: 'Board Member, STAG',
              bio: 'Membro do Conselho de Administração da STAG Fund Management.',
            },
            {
              name: 'Nathan Hellmann',
              role: 'Director of Business Development, STAG',
              bio: 'Responsável pelo desenvolvimento de negócio e relação com investidores institucionais e family offices.',
              photo: 'nathan',
            },
          ],
        },
      ],
    },

    process: {
      sectionLabel: 'Investir',
      title: 'Processo de Investimento',
      intro:
        'Todas as comunicações são tratadas com estrita confidencialidade. O processo de investimento está estruturado em 5 passos.',
      steps: [
        {
          title: 'Contacto inicial',
          description: 'Submeta o seu interesse através do formulário ou por e-mail directo.',
        },
        {
          title: 'Acesso ao CIM',
          description: 'Documentação completa disponível para investidores qualificados após validação.',
        },
        {
          title: 'Reuniões',
          description:
            'Sessões individuais com António Castel-Branco, João Reis e a equipa sénior STAG. Inclui Q&A técnico.',
        },
        {
          title: 'Due Diligence',
          description:
            'Verificação do track record auditado, revisão jurídica dos documentos do fundo e reuniões com empresas em portfólio (sujeito a confidencialidade).',
        },
        {
          title: 'Subscrição',
          description: 'Documentação de subscrição e comprometimento de capital.',
        },
      ],
      contact: {
        name: 'Nathan Hellmann',
        role: 'Director of Business Development',
        email: 'nh@stagfundmanagement.com',
        phone: '+351 924 819 128',
        generalEmail: 'investor.relations@stagfundmanagement.com',
      },
      ctaPrimary: 'Solicitar CIM',
      ctaSecondary: 'Marcar Reunião',
      formNote: 'Resposta em 2 dias úteis. Comunicações tratadas com estrita confidencialidade.',
    },
  },

  footer: {
    disclaimer:
      'Este website tem carácter meramente informativo e não constitui uma oferta, convite ou recomendação para subscrever unidades de participação ou tomar qualquer decisão de investimento. O investimento no SBTF 1 envolve riscos, incluindo o risco de perda parcial ou total do capital investido. Rentabilidades passadas não garantem rentabilidades futuras. A decisão de investir deve basear-se exclusivamente na análise do prospecto completo e da documentação oficial do fundo. STAG Fund Management, Lda. é uma entidade gestora de organismos de investimento colectivo regulada e supervisionada pela CMVM — Comissão do Mercado de Valores Mobiliários.',
    links: [
      { label: 'Política de Privacidade', href: '/pt/privacidade/' },
      { label: 'Termos de Utilização', href: '/pt/termos/' },
      { label: 'STAG Fund Management', href: 'https://www.stagfundmanagement.com', external: true },
      { label: 'CMVM', href: 'https://www.cmvm.pt', external: true },
    ],
    address: 'Rua Serpa Pinto 14A, 1º andar · 1200-445 Lisboa, Portugal',
    contactLine: 'investor.relations@stagfundmanagement.com · +351 218 530 236',
    copyright: '© 2026 STAG Fund Management, Lda. Todos os direitos reservados.',
  },

  a11y: {
    skipToContent: 'Saltar para o conteúdo',
    langSwitchLabel: 'Switch to English',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
  },
}
