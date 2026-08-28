import type { SiteContent } from './types'

// Copy PT — verbatim da "Secção 2 · Copy completo por secção" do briefing de redesign.
// A ortografia pré-AO90 do briefing ("actual", "activos", "objectivo") é mantida intencionalmente.

export const pt: SiteContent = {
  locale: 'pt',
  htmlLang: 'pt-PT',

  nav: {
    pageTitle: 'Blue Transformation Fund · Economia Azul',
    metaDescription:
      'Crescer com o Mar — dar escala à economia azul. Fundo de private equity de €126M focado na economia azul portuguesa: aquacultura sustentável, transformação de seafood e BlueTech. Gerido pela STAG Fund Management, regulada pela CMVM.',
    items: [
      { label: 'Fundo', anchor: '#fundo' },
      { label: 'Hub', anchor: '#hub' },
      { label: 'Portfólio', anchor: '#portfolio' },
      { label: 'Verticais', anchor: '#verticais' },
      { label: 'Equipa', anchor: '#equipa' },
      { label: 'Investir', anchor: '#investir' },
    ],
    cta: { label: 'Investir', anchor: '#investir' },
    investorArea: { label: 'Área do Investidor', badge: 'Brevemente' },
  },

  hero: {
    kicker: 'STAG BLUE TRANSFORMATION FUND 1',
    headlineLine1: 'Crescer com o Mar',
    headlineLine2: 'dar escala à economia azul.',
    subheadline:
      'Uma estratégia de private equity focada na economia azul portuguesa — inovação incremental, escala e qualidade para os mercados europeus.',
    ctaPrimary: { label: 'Conhecer o Fundo', anchor: '#fundo' },
    ctaSecondary: { label: 'Aceder ao Hub', anchor: '#hub' },
    imageAlt:
      'Vista aérea dos tanques de aquacultura em estuário da NaturaFish, no Algarve — água azul-esverdeada entre diques dourados.',
  },

  hub: {
    sectionLabel: 'Hub',
    title: 'Hub da Economia Azul',
    intro:
      'Num sector com informação dispersa, queremos ser um recurso que centraliza informação relevante para quem opera, investe ou investiga na economia azul portuguesa ou europeia. Gostávamos de o fazer de forma colaborativa.',
    contribution: {
      prompt: 'Se tiver informação relevante que não encontra aqui, partilhe connosco através deste email:',
      email: 'hub@bluetransformationfund.com',
    },
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
    // All four cards open their own Observatory page. Order follows ACB's brief.
    // `category` resolves to the page path via observatoryHref(), so the links
    // cannot drift from the routes.
    resourceCards: [
      {
        category: 'reports',
        title: 'Relatórios de Referência',
        description: 'Informação relevante de fontes credíveis — relatórios e estatística do sector.',
        pageLabel: 'Abrir Observatório',
      },
      {
        category: 'portugal',
        title: 'Dados Portugal',
        description: 'A última informação disponível sobre o sector em Portugal — pescas, aquacultura e primeira venda.',
        pageLabel: 'Abrir Observatório',
      },
      {
        category: 'regulation',
        title: 'Regulação & Financiamento',
        description: 'Regulação da UE e nacional, e os programas de financiamento e certificação disponíveis.',
        pageLabel: 'Abrir Observatório',
      },
      {
        category: 'events',
        title: 'Eventos',
        description: 'Calendário de eventos do sector — investimento, política e ciência na economia azul.',
        pageLabel: 'Abrir Observatório',
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
      { label: 'Sustentabilidade', anchor: '#sustentabilidade' },
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

    sustainability: {
      sectionLabel: 'Sustentabilidade',
      title: 'Um fundo com impacto — não um fundo de impacto.',
      lede: 'O SBTF 1 é um fundo de investimento com impacto — não um fundo de impacto. O retorno financeiro é o objectivo primário e não está subordinado a critérios extra-financeiros. A sustentabilidade entra como disciplina de gestão: é medida, planeada e melhorada porque determina acesso a mercado, prémio de preço e valor na saída. A distinção é explícita porque tem consequências legais e comerciais.',
      pillars: [
        {
          title: 'Rating de entrada e saída',
          copy: 'Cada empresa é avaliada segundo uma metodologia própria de rating de sustentabilidade no momento da aquisição. A mesma metodologia é reaplicada à saída. O que muda entre os dois momentos é medido, não estimado — e é atribuível à gestão do fundo durante o período de detenção.',
        },
        {
          title: 'Dois planos, um investimento',
          copy: 'Nenhum investimento entra em carteira apenas com um plano financeiro. Cada participada tem também um plano de upgrade de sustentabilidade, com acções e prazos definidos, executado no mesmo horizonte e revisto na mesma cadência. Certificação, eficiência de recursos e rastreabilidade são trabalho de criação de valor — não relatório.',
        },
        {
          title: 'Verificação independente',
          copy: 'Os resultados de sustentabilidade atingidos são verificados por uma entidade terceira, independente do fundo e das participadas, e é essa verificação que sustenta a sua publicitação. O que não for verificável por terceiros não é apresentado aos investidores como resultado.',
        },
      ],
      note: 'A metodologia completa, o plano de upgrade de cada participada e os resultados verificados são apresentados aos investidores.',
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
            {
              name: 'Gonçalo Videira',
              role: 'Fund Advisor, SBTF 1',
              bio: 'Especialista em estratégia comercial e acesso a mercado no retalho alimentar. Apoia o crescimento comercial das participadas. Director na Sonae, com uma integração vertical em aquacultura de c. €40M aprovada em Conselho; antes na P&G, Microsoft e L’Oréal. MBA pelo INSEAD.',
              photo: 'goncalo-videira',
              linkedIn: 'https://www.linkedin.com/in/goncalovideira/',
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
