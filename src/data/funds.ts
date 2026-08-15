export type Holding = {
  name: string;
  percentage: number;
  sector: string;
  /** Fair value in USD when disclosed (e.g. RVII N-2/A) */
  fairValueUsd?: number;
};

export type SectorWeight = {
  name: string;
  percentage: number;
};

export type Fund = {
  id: string;
  ticker: string;
  name: string;
  manager: string;
  structure: string;
  exchange: string;
  /** Total annual expense ratio (%), as disclosed */
  expenseRatio: number;
  /** Stated management fee (%) */
  managementFee: number;
  expenseNote?: string;
  /** Latest reported NAV per share */
  nav: number;
  navDate: string;
  /**
   * Market price placeholder — wire to a live quote API later.
   * Values are illustrative recent levels for UI development.
   */
  price: number;
  priceAsOf: string;
  aum: string;
  /** Numeric AUM (USD) used for estimated holding values */
  aumUsd: number;
  inception: string;
  status: "listed" | "ipo_pending";
  logoColor: string;
  description: string;
  website: string;
  holdingsAsOf: string;
  holdingsSource: string;
  holdings: Holding[];
};

/** Aggregate company-level exposure for DXYZ (multiple SPVs rolled up). */
function rollupHoldings(raw: Holding[]): Holding[] {
  const map = new Map<string, Holding>();
  for (const h of raw) {
    const existing = map.get(h.name);
    if (existing) {
      existing.percentage = Number((existing.percentage + h.percentage).toFixed(2));
    } else {
      map.set(h.name, { ...h });
    }
  }
  return [...map.values()].sort((a, b) => b.percentage - a.percentage);
}

export const funds: Fund[] = [
  {
    id: "rvi",
    ticker: "RVI",
    name: "Robinhood Ventures Fund I",
    manager: "Robinhood Ventures",
    structure: "Closed-end fund",
    exchange: "NYSE",
    expenseRatio: 3.13,
    managementFee: 2.0,
    expenseNote:
      "Net expense ratio 2.13% through Aug 27, 2026 while management fee is waived from 2% to 1%.",
    nav: 25.02,
    navDate: "2026-06-30",
    price: 26.4,
    priceAsOf: "Yahoo Finance",
    aum: "$655M",
    aumUsd: 655000000,
    inception: "2026-03-06",
    status: "listed",
    logoColor: "#00C805",
    description:
      "Concentrated portfolio of late-stage private “frontier” companies, listed for daily NYSE trading with no accreditation requirement.",
    website: "https://robinhood.com/us/en/ventures/rvi/",
    holdingsAsOf: "2026-06-30",
    holdingsSource: "Robinhood fund detail / schedule of investments",
    holdings: [
      { name: "Databricks", percentage: 12.71, sector: "Data Infrastructure" },
      { name: "OpenAI", percentage: 11.0, sector: "Artificial Intelligence" },
      { name: "Mercor", percentage: 7.84, sector: "Artificial Intelligence" },
      { name: "Revolut", percentage: 7.31, sector: "Fintech" },
      { name: "Ramp", percentage: 4.89, sector: "Fintech" },
      { name: "Airwallex", percentage: 4.71, sector: "Fintech" },
      { name: "Stripe", percentage: 4.33, sector: "Fintech" },
      { name: "Boom Supersonic", percentage: 3.95, sector: "Aerospace & Defense" },
      { name: "Canva", percentage: 3.67, sector: "Software" },
      { name: "Oura", percentage: 3.64, sector: "Healthcare" },
      { name: "ElevenLabs", percentage: 2.93, sector: "Artificial Intelligence" },
      { name: "SpaceX", percentage: 1.25, sector: "Aerospace & Defense" },
      { name: "Cash & Equivalents", percentage: 31.77, sector: "Cash" },
    ],
  },
  {
    id: "rvii",
    ticker: "RVII",
    name: "Robinhood Ventures Fund II",
    manager: "Robinhood Ventures",
    structure: "BDC / Closed-end fund",
    exchange: "NYSE",
    expenseRatio: 4.18,
    managementFee: 2.0,
    expenseNote:
      "Expected total annual expenses 4.18%. Also charges a 20% incentive fee on realized capital gains (net of losses).",
    nav: 25.0,
    navDate: "IPO / listing",
    price: 23.63,
    priceAsOf: "Yahoo Finance",
    aum: "~$20.6M seed portfolio",
    aumUsd: 20650000,
    inception: "2026-08-13",
    status: "listed",
    logoColor: "#0B5F1A",
    description:
      "Early-stage private companies with a focus on current and former Y Combinator participants — 80 portfolio companies seeded mostly via SAFEs. Listed on the NYSE.",
    website: "https://robinhood.com/us/en/newsroom/introducing-rvii/",
    holdingsAsOf: "2026-08-03",
    holdingsSource: "SEC Form N-2/A portfolio companies table (File No. 333-297168)",
    holdings: [
      { name: "Shortwave Communications", percentage: 4.90, sector: "Artificial Intelligence", fairValueUsd: 1000000 },
      { name: "Limrun", percentage: 1.45, sector: "Data Infrastructure", fairValueUsd: 298376.65 },
      { name: "Adialante", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Agentic Fabriq", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Amboras", percentage: 1.21, sector: "Consumer", fairValueUsd: 250000 },
      { name: "Anoria", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Apex Flux", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Apollo Atomics", percentage: 1.21, sector: "Aerospace & Defense", fairValueUsd: 250000 },
      { name: "Arga Labs", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Arzana", percentage: 1.21, sector: "Hardware", fairValueUsd: 250000 },
      { name: "Aseon Labs", percentage: 1.21, sector: "Hardware", fairValueUsd: 250000 },
      { name: "Asimov Robotics", percentage: 1.21, sector: "Hardware", fairValueUsd: 250000 },
      { name: "Autumn AI", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Avea Robotics", percentage: 1.21, sector: "Hardware", fairValueUsd: 250000 },
      { name: "AxionOrbital Space", percentage: 1.21, sector: "Aerospace & Defense", fairValueUsd: 250000 },
      { name: "BioStack Platforms", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Caretta", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Jinba", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "CatchBack Cards", percentage: 1.21, sector: "Consumer", fairValueUsd: 250000 },
      { name: "CellType", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Complir", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Crosslayer Labs", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Crow", percentage: 1.21, sector: "Consumer", fairValueUsd: 250000 },
      { name: "Cumulus Compute Labs", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Daymi", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Didit Identity", percentage: 1.21, sector: "Fintech", fairValueUsd: 250000 },
      { name: "DroneTector", percentage: 1.21, sector: "Hardware", fairValueUsd: 250000 },
      { name: "Eden Robotics", percentage: 1.21, sector: "Hardware", fairValueUsd: 250000 },
      { name: "Expanse Compute", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Formative Intelligence", percentage: 1.21, sector: "Consumer", fairValueUsd: 250000 },
      { name: "Synthetic Sciences", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "InstaAgent", percentage: 1.21, sector: "Consumer", fairValueUsd: 250000 },
      { name: "JigsawStack", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "KelAI Tech", percentage: 1.21, sector: "Fintech", fairValueUsd: 250000 },
      { name: "Keyframe Labs", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Klaimee Labs", percentage: 1.21, sector: "Fintech", fairValueUsd: 250000 },
      { name: "Known Quantity Labs", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Lambda Systems", percentage: 1.21, sector: "Fintech", fairValueUsd: 250000 },
      { name: "Laminar Run", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "LegalOS", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Lumius Imaging", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Matforge", percentage: 1.21, sector: "Hardware", fairValueUsd: 250000 },
      { name: "Maywood AI", percentage: 1.21, sector: "Fintech", fairValueUsd: 250000 },
      { name: "AutoSitu", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Opalite Health", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Ornadyne", percentage: 1.21, sector: "Aerospace & Defense", fairValueUsd: 250000 },
      { name: "Oxus AI", percentage: 1.21, sector: "Fintech", fairValueUsd: 250000 },
      { name: "Panta Insurance Solutions", percentage: 1.21, sector: "Fintech", fairValueUsd: 250000 },
      { name: "Plena", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Prana AI", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Prototyping", percentage: 1.21, sector: "Hardware", fairValueUsd: 250000 },
      { name: "Qomplement", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "ReasonBlocks", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Relay Innovations", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Replicas Group", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "RMJ Labs", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Rudus", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Ruma", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Samora AI", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Sarah AI", percentage: 1.21, sector: "Consumer", fairValueUsd: 250000 },
      { name: "Second Stage Labs", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "SharedGenes", percentage: 1.21, sector: "Healthcare", fairValueUsd: 250000 },
      { name: "Shotwell", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Silmaril Security", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Smol Machines", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Sparkley", percentage: 1.21, sector: "Consumer", fairValueUsd: 250000 },
      { name: "Speedtrain", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "SpotPay", percentage: 1.21, sector: "Fintech", fairValueUsd: 250000 },
      { name: "Surtr Defense Systems", percentage: 1.21, sector: "Aerospace & Defense", fairValueUsd: 250000 },
      { name: "Tenet Industries", percentage: 1.21, sector: "Aerospace & Defense", fairValueUsd: 250000 },
      { name: "Terminal Use", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "The General Aviation Company", percentage: 1.21, sector: "Aerospace & Defense", fairValueUsd: 250000 },
      { name: "Unifold", percentage: 1.21, sector: "Fintech", fairValueUsd: 250000 },
      { name: "Unilabs", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Veriad", percentage: 1.21, sector: "Artificial Intelligence", fairValueUsd: 250000 },
      { name: "Visibl Semiconductors", percentage: 1.21, sector: "Hardware", fairValueUsd: 250000 },
      { name: "Voxel Energy", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Voygr Tech", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Workable Solutions", percentage: 1.21, sector: "Data Infrastructure", fairValueUsd: 250000 },
      { name: "Luel", percentage: 0.48, sector: "Artificial Intelligence", fairValueUsd: 100000 },
    ],
  },
  {
    id: "dxyz",
    ticker: "DXYZ",
    name: "Destiny Tech100",
    manager: "DX Advisors",
    structure: "Closed-end fund",
    exchange: "NYSE",
    expenseRatio: 4.56,
    managementFee: 2.5,
    expenseNote:
      "Management fee is 2.50% of average gross assets (≈2.18% of net assets in fee table). Total annual expenses ~4.56%.",
    nav: 24.56,
    navDate: "2026-03-31",
    price: 32.9,
    priceAsOf: "Yahoo Finance",
    aum: "~$743M portfolio",
    aumUsd: 743000000,
    inception: "2024-03-26 (listed)",
    status: "listed",
    logoColor: "#1A1A2E",
    description:
      "Exchange-listed closed-end fund seeking exposure to top venture-backed private technology companies across AI, aerospace, defense, and fintech.",
    website: "https://destiny.xyz/tech100",
    holdingsAsOf: "2026-03-31",
    holdingsSource: "SEC prospectus supplement (424B3) schedule of investments",
    holdings: rollupHoldings([
      { name: "Anthropic", percentage: 18.1, sector: "Artificial Intelligence" },
      { name: "SpaceX", percentage: 9.6, sector: "Aerospace & Defense" },
      { name: "SpaceX", percentage: 2.8, sector: "Aerospace & Defense" },
      { name: "SpaceX", percentage: 2.0, sector: "Aerospace & Defense" },
      { name: "OpenAI", percentage: 1.0, sector: "Artificial Intelligence" },
      { name: "OpenAI", percentage: 4.7, sector: "Artificial Intelligence" },
      { name: "OpenEvidence", percentage: 4.6, sector: "Artificial Intelligence" },
      { name: "Shield AI", percentage: 4.2, sector: "Aerospace & Defense" },
      { name: "Chaos Industries", percentage: 2.1, sector: "Hardware" },
      { name: "Beast Industries", percentage: 2.0, sector: "Consumer" },
      { name: "Hermeus", percentage: 2.0, sector: "Aerospace & Defense" },
      { name: "Tenstorrent", percentage: 1.7, sector: "Hardware" },
      { name: "Revolut", percentage: 1.6, sector: "Fintech" },
      { name: "General Intuition", percentage: 1.5, sector: "Artificial Intelligence" },
      { name: "Databricks", percentage: 1.4, sector: "Data Infrastructure" },
      { name: "Databricks", percentage: 1.1, sector: "Data Infrastructure" },
      { name: "Skild AI", percentage: 1.4, sector: "Artificial Intelligence" },
      { name: "Monzo", percentage: 0.8, sector: "Fintech" },
      { name: "Redwood Materials", percentage: 0.7, sector: "Energy" },
      { name: "Vast", percentage: 0.7, sector: "Aerospace & Defense" },
      { name: "Astranis", percentage: 0.3, sector: "Aerospace & Defense" },
      { name: "Astranis", percentage: 0.7, sector: "Aerospace & Defense" },
      { name: "Payward (Kraken)", percentage: 0.6, sector: "Fintech" },
      { name: "Stripe", percentage: 0.4, sector: "Fintech" },
      { name: "Vercel", percentage: 0.3, sector: "Software" },
      { name: "ClassDojo", percentage: 0.3, sector: "Software" },
      { name: "Axiom Space", percentage: 0.6, sector: "Aerospace & Defense" },
      { name: "Boom Technology", percentage: 0.2, sector: "Aerospace & Defense" },
      { name: "Chime", percentage: 0.2, sector: "Fintech" },
      { name: "Supabase", percentage: 0.2, sector: "Software" },
      { name: "Cash & Equivalents", percentage: 31.4, sector: "Cash" },
    ]),
  },
  {
    id: "vcx",
    ticker: "VCX",
    name: "Fundrise Innovation Fund",
    manager: "Fundrise Advisors",
    structure: "Closed-end fund",
    exchange: "NYSE",
    expenseRatio: 2.57,
    managementFee: 1.85,
    expenseNote:
      "Management fee 1.85% of average daily net assets. FY2026 N-CSR ratio of net expenses ~2.57% (incl. interest).",
    nav: 18.97,
    navDate: "2026-03-31",
    price: 92.0,
    priceAsOf: "Yahoo Finance",
    aum: "~$679M",
    aumUsd: 679000000,
    inception: "2022-07-25 (listed 2026-03-19)",
    status: "listed",
    logoColor: "#0D7377",
    description:
      "Public venture capital fund focused on mid-to-late-stage private technology companies — especially AI, data infrastructure, and defense tech.",
    website: "https://fundrise.com/vcx",
    holdingsAsOf: "2026-02-15",
    holdingsSource: "Fundrise Innovation Fund holdings disclosure / SEC prospectus",
    holdings: [
      { name: "Anthropic", percentage: 20.7, sector: "Artificial Intelligence" },
      { name: "Databricks", percentage: 17.7, sector: "Data Infrastructure" },
      { name: "OpenAI", percentage: 9.9, sector: "Artificial Intelligence" },
      { name: "Anduril", percentage: 6.9, sector: "Aerospace & Defense" },
      { name: "Ramp", percentage: 5.1, sector: "Fintech" },
      { name: "SpaceX", percentage: 5.0, sector: "Aerospace & Defense" },
      { name: "Epic Games", percentage: 3.5, sector: "Gaming" },
      { name: "Flock Safety", percentage: 3.0, sector: "Software" },
      { name: "dbt / Fivetran", percentage: 2.8, sector: "Data Infrastructure" },
      { name: "Vanta", percentage: 1.9, sector: "Software" },
      { name: "Canva", percentage: 1.8, sector: "Software" },
      { name: "Loyal", percentage: 1.5, sector: "Healthcare" },
      { name: "ServiceTitan", percentage: 1.4, sector: "Software" },
      { name: "Inspectify", percentage: 1.1, sector: "Proptech" },
      { name: "Other holdings (<1% each)", percentage: 4.1, sector: "Software" },
      { name: "Cash & Other", percentage: 13.6, sector: "Cash" },
    ],
  },
  {
    id: "arkvx",
    ticker: "ARKVX",
    name: "ARK Venture Fund",
    manager: "ARK Investment Management",
    structure: "Closed-end interval fund",
    exchange: "Interval fund",
    expenseRatio: 2.9,
    managementFee: 2.75,
    expenseNote:
      "Net expense ratio 2.90% with fee waivers; gross 3.49%. Minimum investment $500. Quarterly liquidity up to 5% of NAV.",
    nav: 28.5,
    navDate: "2026-04 (approx.)",
    price: 28.5,
    priceAsOf: "Priced at NAV (interval fund)",
    aum: "~$711M",
    aumUsd: 711000000,
    inception: "2022-09-23",
    status: "listed",
    logoColor: "#5B21B6",
    description:
      "Actively managed interval fund investing in private and public equities tied to disruptive innovation. Not NYSE-listed; offers quarterly repurchase liquidity.",
    website: "https://www.ark-funds.com/funds/arkvx",
    holdingsAsOf: "2026-04-30",
    holdingsSource: "Morningstar / ARK Venture Fund holdings disclosure",
    holdings: [
      { name: "OpenAI", percentage: 8.77, sector: "Artificial Intelligence" },
      { name: "Figure AI", percentage: 5.8, sector: "Artificial Intelligence" },
      { name: "Ayar Labs", percentage: 2.96, sector: "Hardware" },
      { name: "Anthropic", percentage: 2.9, sector: "Artificial Intelligence" },
      { name: "SpaceX", percentage: 2.68, sector: "Aerospace & Defense" },
      { name: "Kalshi", percentage: 2.26, sector: "Fintech" },
      { name: "Neuralink", percentage: 2.19, sector: "Healthcare" },
      { name: "X-Energy", percentage: 1.91, sector: "Energy" },
      { name: "Hydra Host", percentage: 1.9, sector: "Software" },
      { name: "Other private & public holdings", percentage: 58.63, sector: "Software" },
      { name: "Cash & Money Market", percentage: 10.0, sector: "Cash" },
    ],
  },
];

export function getFundByTicker(ticker: string): Fund | undefined {
  return funds.find((f) => f.ticker.toLowerCase() === ticker.toLowerCase());
}

export function sectorsForFund(fund: Fund): SectorWeight[] {
  const map = new Map<string, number>();
  for (const h of fund.holdings) {
    map.set(h.sector, (map.get(h.sector) ?? 0) + h.percentage);
  }
  return [...map.entries()]
    .map(([name, percentage]) => ({
      name,
      percentage: Number(percentage.toFixed(2)),
    }))
    .sort((a, b) => b.percentage - a.percentage);
}

/** Equal-weight average of sector exposures across exchange-listed PE/VC wrappers. */
export function aggregateSectorExposure(sourceFunds: Fund[] = funds): SectorWeight[] {
  const listed = sourceFunds.filter((f) => f.status === "listed");
  const totals = new Map<string, number>();

  for (const fund of listed) {
    for (const s of sectorsForFund(fund)) {
      totals.set(s.name, (totals.get(s.name) ?? 0) + s.percentage);
    }
  }

  const n = listed.length || 1;
  return [...totals.entries()]
    .map(([name, sum]) => ({
      name,
      percentage: Number((sum / n).toFixed(2)),
    }))
    .sort((a, b) => b.percentage - a.percentage);
}


export type FundHoldingExposure = {
  fundId: string;
  ticker: string;
  fundName: string;
  percentage: number;
  valueUsd: number;
  valueIsExact: boolean;
};

/** Find every fund sleeve that holds this company (by name or aliases). */
export function getCompanyFundExposures(
  companyName: string,
  aliases: string[] = [],
): FundHoldingExposure[] {
  const names = new Set(
    [companyName, ...aliases].map((n) => n.toLowerCase()),
  );
  const out: FundHoldingExposure[] = [];

  for (const fund of funds) {
    for (const h of fund.holdings) {
      if (!names.has(h.name.toLowerCase())) continue;
      const exact = h.fairValueUsd != null;
      const valueUsd = exact
        ? h.fairValueUsd!
        : (fund.aumUsd * h.percentage) / 100;
      out.push({
        fundId: fund.id,
        ticker: fund.ticker,
        fundName: fund.name,
        percentage: h.percentage,
        valueUsd,
        valueIsExact: exact,
      });
    }
  }

  return out.sort((a, b) => b.valueUsd - a.valueUsd);
}

export function formatHoldingValue(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${Math.round(n).toLocaleString("en-US")}`;
}

export function premiumToNav(price: number, nav: number): number | null {
  if (!nav || nav <= 0) return null;
  return Number((((price - nav) / nav) * 100).toFixed(1));
}

export const SECTOR_COLORS: Record<string, string> = {
  "Artificial Intelligence": "#3DD68C",
  "Data Infrastructure": "#5B8DEF",
  Fintech: "#E8A06A",
  "Aerospace & Defense": "#94A3B8",
  Software: "#34D399",
  Healthcare: "#F472B6",
  Gaming: "#A78BFA",
  Consumer: "#FB923C",
  Hardware: "#A8A29E",
  Energy: "#FBBF24",
  Proptech: "#22D3EE",
  Cash: "#64748B",
};

export function colorForSector(sector: string, index = 0): string {
  if (SECTOR_COLORS[sector]) return SECTOR_COLORS[sector];
  const fallback = [
    "#3DD68C",
    "#5B8DEF",
    "#E8A06A",
    "#94A3B8",
    "#34D399",
    "#F472B6",
    "#A78BFA",
    "#FB923C",
  ];
  return fallback[index % fallback.length];
}
