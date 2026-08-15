export type CompanyProfile = {
  id: string;
  name: string;
  website: string;
  founded: string;
  valuation: string;
  series: string;
  description: string;
  /** Alternate holding names that map to this profile */
  aliases?: string[];
};

/**
 * Profiles for private (and recently public) companies held by these funds.
 * Valuations / rounds are from public reporting as of mid-2026 and may change.
 */
export const companies: CompanyProfile[] = [
  {
    id: "openai",
    name: "OpenAI",
    website: "https://openai.com",
    founded: "2015",
    valuation: "~$852B",
    series: "March 2026 round",
    description:
      "Builds frontier foundation models and products including ChatGPT, the API platform, and enterprise AI tooling used by developers and businesses worldwide.",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    website: "https://www.anthropic.com",
    founded: "2021",
    valuation: "~$900B",
    series: "Series H / IPO track",
    description:
      "AI safety and research company behind the Claude family of models, focused on reliable, steerable assistants for consumers and enterprises.",
  },
  {
    id: "databricks",
    name: "Databricks",
    website: "https://www.databricks.com",
    founded: "2013",
    valuation: "~$134B",
    series: "Series L",
    description:
      "Unified lakehouse platform for data engineering, analytics, and AI/ML workloads—helping enterprises store, govern, and train models on their data.",
  },
  {
    id: "spacex",
    name: "SpaceX",
    website: "https://www.spacex.com",
    founded: "2002",
    valuation: "~$1.75T (IPO)",
    series: "Public (SPCX, Jun 2026)",
    description:
      "Designs, manufactures, and launches rockets and spacecraft; operates Starlink broadband and is expanding into large-scale AI compute.",
  },
  {
    id: "stripe",
    name: "Stripe",
    website: "https://stripe.com",
    founded: "2010",
    valuation: "~$159B",
    series: "Tender / late-stage",
    description:
      "Financial infrastructure for the internet—payments, billing, treasury, and money-movement APIs used by startups through large enterprises.",
  },
  {
    id: "anduril",
    name: "Anduril",
    website: "https://www.anduril.com",
    founded: "2017",
    valuation: "~$61B",
    series: "Series H",
    description:
      "Defense technology company building autonomous systems, sensors, and software (Lattice) for national security and border missions.",
  },
  {
    id: "ramp",
    name: "Ramp",
    website: "https://ramp.com",
    founded: "2019",
    valuation: "~$32B",
    series: "Series E+",
    description:
      "Corporate finance platform combining cards, expense management, bill pay, travel, and treasury to help finance teams control spend.",
  },
  {
    id: "revolut",
    name: "Revolut",
    website: "https://www.revolut.com",
    founded: "2015",
    valuation: "~$75B",
    series: "Late-stage / S-1 track",
    description:
      "Global neobank offering accounts, cards, FX, savings, and investing to consumers and businesses across dozens of countries.",
  },
  {
    id: "mercor",
    name: "Mercor",
    website: "https://mercor.com",
    founded: "2023",
    valuation: "~$10–20B",
    series: "Series C / D talks",
    description:
      "AI talent marketplace that connects domain experts with labs and enterprises to train, evaluate, and improve frontier models.",
  },
  {
    id: "airwallex",
    name: "Airwallex",
    website: "https://www.airwallex.com",
    founded: "2015",
    valuation: "~$11B",
    series: "Series F+",
    description:
      "Cross-border payments and financial platform for businesses—multi-currency accounts, cards, payouts, and embedded finance APIs.",
  },
  {
    id: "boom",
    name: "Boom Supersonic",
    website: "https://boomsupersonic.com",
    founded: "2014",
    valuation: "~$1.5B",
    series: "Series C+",
    description:
      "Building the Overture supersonic airliner and Symphony engines, with adjacent turbine tech aimed at powering AI data centers.",
    aliases: ["Boom Technology", "Boom Supersonic"],
  },
  {
    id: "canva",
    name: "Canva",
    website: "https://www.canva.com",
    founded: "2012",
    valuation: "~$42–75B",
    series: "Late-stage secondary",
    description:
      "Visual communication platform that lets individuals and teams design presentations, social content, video, and marketing assets.",
  },
  {
    id: "oura",
    name: "Oura",
    website: "https://ouraring.com",
    founded: "2013",
    valuation: "~$5B+",
    series: "Series D+",
    description:
      "Maker of the Oura Ring—wearable hardware and software for sleep, recovery, and readiness insights.",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    website: "https://elevenlabs.io",
    founded: "2022",
    valuation: "~$6B+",
    series: "Series C",
    description:
      "AI voice research company offering lifelike speech synthesis, voice cloning, and conversational voice agents in 70+ languages.",
  },
  {
    id: "epic",
    name: "Epic Games",
    website: "https://www.epicgames.com",
    founded: "1991",
    valuation: "~$32B",
    series: "Late-stage / secondary",
    description:
      "Creator of Unreal Engine and Fortnite; builds games, creator tools, and the Epic Games Store ecosystem.",
  },
  {
    id: "flock",
    name: "Flock Safety",
    website: "https://www.flocksafety.com",
    founded: "2017",
    valuation: "~$7B+",
    series: "Series F+",
    description:
      "Public-safety technology company deploying license-plate readers, cameras, and drones used by police and private communities.",
  },
  {
    id: "vanta",
    name: "Vanta",
    website: "https://www.vanta.com",
    founded: "2018",
    valuation: "~$4B+",
    series: "Series C+",
    description:
      "Automated security and compliance platform that helps companies achieve and maintain SOC 2, ISO, HIPAA, and similar frameworks.",
  },
  {
    id: "loyal",
    name: "Loyal",
    website: "https://www.loyal.com",
    founded: "2019",
    valuation: "~$425M (est.)",
    series: "Series C ($100M, Feb 2026)",
    description:
      "Veterinary biotech developing medicines aimed at extending healthy lifespan in dogs.",
  },
  {
    id: "servicetitan",
    name: "ServiceTitan",
    website: "https://www.servicetitan.com",
    founded: "2012",
    valuation: "Public (TTAN)",
    series: "Public (2024)",
    description:
      "Software platform for residential and commercial trade contractors—scheduling, CRM, payments, and operations.",
  },
  {
    id: "dbt",
    name: "dbt / Fivetran",
    website: "https://www.getdbt.com",
    founded: "2016 / 2012",
    valuation: "Combined private marks",
    series: "Late-stage",
    description:
      "Data infrastructure pair: dbt for analytics engineering transforms and Fivetran for automated data pipelines into warehouses.",
  },
  {
    id: "inspectify",
    name: "Inspectify",
    website: "https://www.inspectify.com",
    founded: "2019",
    valuation: "Private (early)",
    series: "Series A+",
    description:
      "Proptech marketplace coordinating property inspections for real-estate transactions and portfolios.",
  },
  {
    id: "shield-ai",
    name: "Shield AI",
    website: "https://shield.ai",
    founded: "2015",
    valuation: "~$12.7B",
    series: "Series G",
    description:
      "Defense AI company building Hivemind autonomy software and aircraft such as V-BAT and X-BAT for GPS-denied missions.",
  },
  {
    id: "openevidence",
    name: "OpenEvidence",
    website: "https://www.openevidence.com",
    founded: "2021",
    valuation: "~$12B",
    series: "Series D ($250M, Jan 2026)",
    description:
      "Medical AI search and clinical decision support used by physicians to query peer-reviewed medical literature.",
  },
  {
    id: "chaos",
    name: "Chaos Industries",
    website: "https://www.chaosindustries.com",
    founded: "2022",
    valuation: "~$4.5B",
    series: "Series D ($510M, Nov 2025)",
    description:
      "Defense hardware company building advanced sensing and electronic-warfare systems for national security customers.",
  },
  {
    id: "beast",
    name: "Beast Industries",
    website: "https://www.beastindustries.com",
    founded: "2022",
    valuation: "Undisclosed (~$675M raised)",
    series: "Later-stage VC ($225M, Mar 2026)",
    description:
      "Consumer media and commerce company tied to MrBeast’s brand ecosystem across digital content and products.",
  },
  {
    id: "hermeus",
    name: "Hermeus",
    website: "https://www.hermeus.com",
    founded: "2018",
    valuation: "~$1B+",
    series: "Series C",
    description:
      "Hypersonic aircraft company developing Mach-capable planes for defense and eventual commercial routes.",
  },
  {
    id: "tenstorrent",
    name: "Tenstorrent",
    website: "https://tenstorrent.com",
    founded: "2016",
    valuation: "~$2B+",
    series: "Series D / notes",
    description:
      "AI hardware company designing RISC-V based chips and systems for training and inference workloads.",
  },
  {
    id: "general-intuition",
    name: "General Intuition",
    website: "https://www.generalintuition.com",
    founded: "2024",
    valuation: "Private (early)",
    series: "Series A",
    description:
      "Early-stage AI company building systems aimed at general reasoning and agentic capabilities.",
  },
  {
    id: "skild",
    name: "Skild AI",
    website: "https://www.skild.ai",
    founded: "2023",
    valuation: "~$4B+",
    series: "Series C",
    description:
      "Robotics foundation-model company training general-purpose brains for robots across form factors.",
  },
  {
    id: "monzo",
    name: "Monzo",
    website: "https://monzo.com",
    founded: "2015",
    valuation: "~$8B",
    series: "Late-stage / IPO track",
    description:
      "UK digital bank offering consumer and business accounts, cards, budgeting tools, and lending.",
  },
  {
    id: "redwood",
    name: "Redwood Materials",
    website: "https://www.redwoodmaterials.com",
    founded: "2017",
    valuation: "~$5B+",
    series: "Series D+",
    description:
      "Battery recycling and materials company recovering lithium, cobalt, nickel, and copper for the EV supply chain.",
  },
  {
    id: "vast",
    name: "Vast",
    website: "https://www.vastspace.com",
    founded: "2021",
    valuation: "Private",
    series: "Series A",
    description:
      "Space company developing Haven-1 and next-generation commercial space stations.",
  },
  {
    id: "astranis",
    name: "Astranis",
    website: "https://www.astranis.com",
    founded: "2015",
    valuation: "~$1.6B+",
    series: "Series D / E",
    description:
      "Builds small geostationary satellites that deliver broadband to underserved regions and enterprises.",
  },
  {
    id: "kraken",
    name: "Payward (Kraken)",
    website: "https://www.kraken.com",
    founded: "2011",
    valuation: "~$15B+",
    series: "Late-stage",
    description:
      "Cryptocurrency exchange and financial services platform for trading, custody, and crypto banking products.",
  },
  {
    id: "vercel",
    name: "Vercel",
    website: "https://vercel.com",
    founded: "2015",
    valuation: "~$3.25B+",
    series: "Series E",
    description:
      "Frontend cloud platform for deploying web apps—best known for Next.js, edge networking, and developer experience.",
  },
  {
    id: "classdojo",
    name: "ClassDojo",
    website: "https://www.classdojo.com",
    founded: "2011",
    valuation: "~$1B+",
    series: "Series D",
    description:
      "Education communication platform connecting teachers, students, and families with classroom tools and messaging.",
  },
  {
    id: "axiom",
    name: "Axiom Space",
    website: "https://www.axiomspace.com",
    founded: "2016",
    valuation: "~$2B+",
    series: "Series C",
    description:
      "Commercial space company building private space stations and flying astronaut missions to low Earth orbit.",
  },
  {
    id: "chime",
    name: "Chime",
    website: "https://www.chime.com",
    founded: "2013",
    valuation: "~$25B+",
    series: "Late-stage",
    description:
      "U.S. neobank offering fee-light checking and savings accounts, debit cards, and early direct deposit for consumers.",
  },
  {
    id: "supabase",
    name: "Supabase",
    website: "https://supabase.com",
    founded: "2020",
    valuation: "~$2B+",
    series: "Series C",
    description:
      "Open-source Firebase alternative providing Postgres databases, auth, storage, and realtime APIs for developers.",
  },
  {
    id: "figure",
    name: "Figure AI",
    website: "https://www.figure.ai",
    founded: "2022",
    valuation: "~$39B+",
    series: "Series C+",
    description:
      "Humanoid robotics company building general-purpose robots for manufacturing, logistics, and labor automation.",
  },
  {
    id: "ayar",
    name: "Ayar Labs",
    website: "https://www.ayarlabs.com",
    founded: "2015",
    valuation: "~$1B+",
    series: "Series C+",
    description:
      "Optical I/O chip company replacing copper interconnects with light-based links for AI and HPC systems.",
  },
  {
    id: "kalshi",
    name: "Kalshi",
    website: "https://kalshi.com",
    founded: "2018",
    valuation: "~$2B+",
    series: "Series C+",
    description:
      "CFTC-regulated event exchange where users trade contracts on economic indicators, politics, and real-world outcomes.",
  },
  {
    id: "neuralink",
    name: "Neuralink",
    website: "https://neuralink.com",
    founded: "2016",
    valuation: "~$9B+",
    series: "Series D+",
    description:
      "Brain–computer interface company developing implantable devices to restore communication and control for patients.",
  },
  {
    id: "xenergy",
    name: "X-Energy",
    website: "https://x-energy.com",
    founded: "2009",
    valuation: "~$3B+",
    series: "Late-stage",
    description:
      "Advanced nuclear company designing Xe-100 small modular reactors and TRISO-X fuel for clean power generation.",
  },
  {
    id: "hydra",
    name: "Hydra Host",
    website: "https://hydra.host",
    founded: "2023",
    valuation: "Private (early)",
    series: "Seed / Series A",
    description:
      "Distributed GPU cloud aggregating underutilized compute for AI training and inference workloads.",
  },
  {
    id: "rvii-shortwave-communications",
    name: "Shortwave Communications",
    website: "https://tasklet.ai",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "AI chatbots can answer questions, but they can't do your work — they aren't connected to your tools, can't take actions, and stop running when you close the tab. Meanwhile, knowledge workers are still spending most of their day switching between dozens of SaaS apps, manually stitching together workflows that should be automated. Tasklet is the AI agent that actually does the work. It connects to every tool you use — via thousands of built-in…",
  },
  {
    id: "rvii-limrun",
    name: "Limrun",
    website: "https://lim.run",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "Series Seed-7 Preferred · YC Spring 2026",
    description:
      "Coding agents in the cloud don't work for majority of teams who require native capabilities; they lack XCode for iOS, Emulator for Android, Unity for game development teams. We are on a mission to cloudify every local development utility so that regardless of where it runs, your agent can compose an ideal set of capabilities on the fly so you don't need to run it on your laptop. Today, we provide remote services such as XCode, iOS & Android…",
  },
  {
    id: "rvii-adialante",
    name: "Adialante",
    website: "http://www.adialante.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "We know how to improve cancer outcomes by 8x-10x: you catch it early. MRI is the most robust and powerful cancer-detection tool in the world, yet systems cost millions to purchase, take months to install, and require high levels of technical skill to operate. We've redesigned MRI from the ground up with new physics, algorithms, and hardware, all to bring cancer screening to the entire world. Our mobile MRI is an imaging clinic on wheels. No…",
  },
  {
    id: "rvii-agentic-fabriq",
    name: "Agentic Fabriq",
    website: "https://www.agenticfabriq.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Agentic Fabriq helps companies securely manage what AI agents can access and do across business tools, data, and teams. We give each agent an identity, scoped permissions, approval flows, and audit logs, so employees and customer-facing workflows can use agents without relying on shared API keys, overbroad service accounts, or one-off integrations.",
  },
  {
    id: "rvii-amboras",
    name: "Amboras",
    website: "https://amboras.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Amboras puts your entire e-commerce on autopilot. It builds your store, continuously optimizes it, reads your analytics, and learns what converts - all autonomously. No developers. No agencies. No guessing. Today it sells to humans. Tomorrow it sells to AI agents.",
  },
  {
    id: "rvii-anoria",
    name: "Anoria",
    website: "https://www.anoria.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "We've spent decades tracking everything. Sleep. Recovery. Steps. All proxies for how we feel. Performance is 90% mental. And yet no one has built the feedback loop for our emotions. We close that loop by designing a device that understands how you feel, tells you why, and what you can do about it. Emotional intelligence becomes trainable, so you can better connect and create with those around you.",
  },
  {
    id: "rvii-apex-flux",
    name: "Apex Flux",
    website: "https://apexflux.ai",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE",
    description:
      "AI agents for complex scheduling coordination.",
  },
  {
    id: "rvii-apollo-atomics",
    name: "Apollo Atomics",
    website: "https://apolloatomics.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "We make the most compact nuclear reactors.",
  },
  {
    id: "rvii-arga-labs",
    name: "Arga Labs",
    website: "https://www.argalabs.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "We build environments to test your app and agents against the real world. Deploy your code/agent into a sandbox that runs against replicas of external services (Stripe, Slack, Google Drive, etc.). Twins support the same APIs, MCP tool calls & SDKs as the real software, and you can spin up thousands of instances in parallel and seed them using natural language. Run real workflows, surface edge cases, and observe how your code/agents actually…",
  },
  {
    id: "rvii-arzana",
    name: "Arzana",
    website: "https://www.arzana.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Arzana trains custom models on manufacturers' operational data to automate their quoting, order entry, invoicing, and other repetitive office work. We've saved our customers over $1.5M in avoided staff costs. In the future, we'll expand into shop-floor automation, sending instructions to machinery and robots to produce the orders that our office agents processed. By 2035, we aim to fully automate 10,000 American factories.",
  },
  {
    id: "rvii-aseon-labs",
    name: "Aseon Labs",
    website: "https://www.aseonlabs.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Aseon Labs builds robotic pitstops for self-driving cars. Autonomous vehicles can drive themselves, but they still rely on humans and centralized depots for charging, cleaning and servicing multiple times per day. As fleets scale, the operational layer makes up 70% of the cost of the service and is of the largest barrier to uptime, profitability and market expansion. Aseon Pods are robotic micro-depots that can be deployed directly within…",
  },
  {
    id: "rvii-asimov-robotics",
    name: "Asimov Robotics",
    website: "https://tryasimov.ai/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Asimov collects real-world human movement data from households and businesses to train humanoid robots. Unlike factory datasets that capture the same tasks in the same environments, we deliver the full diversity of real human environments, thousands of hours a day to leading labs.",
  },
  {
    id: "rvii-autumn-ai",
    name: "Autumn AI",
    website: "https://autumnai.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Autumn is building the first real-time signal intelligence platform for GTM teams. We monitor posts, commits, blogs, and announcements, surfacing buying signals the moment they appear. Define your ICP and the signals that matter, and we deliver a condensed, real-time feed filtered by intents.",
  },
  {
    id: "rvii-avea-robotics",
    name: "Avea Robotics",
    website: "https://www.avearobotics.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "We built the fastest software to control robots from anywhere in the world. We make it possible for robotics companies to keep their robots at 100% uptime, and intervene instantly when a failure occurs.",
  },
  {
    id: "rvii-axionorbital-space",
    name: "AxionOrbital Space",
    website: "https://axionorbital.space/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "AxionOrbital Space builds foundation models that enable continuous visibility through clouds and darkness. Legacy optical satellites are rendered useless 70% of the time by weather and night cycles, while Synthetic Aperture Radar (SAR) produces data that is unintelligible to humans and breaks standard vision pipelines. We solve this by translating raw radar backscatter into analysis-ready optical imagery in real-time. Our proprietary…",
  },
  {
    id: "rvii-biostack-platforms",
    name: "BioStack Platforms",
    website: "https://www.getbiostack.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "BioStack is building the data engine for healthcare and drug discovery AI. The bottleneck is not models. It is access to high-quality biological data. Clinical and experimental data is fragmented, unstructured, and locked inside hospitals, labs, and CROs, while generating new data is slow and expensive. BioStack fixes this with proprietary clinical and preclinical data pipelines that turn real biomedical workflows into ML-ready training…",
  },
  {
    id: "rvii-caretta",
    name: "Caretta",
    website: "https://www.caretta.so",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Caretta is a Sales Intelligence for revenue teams. It joins reps in live calls, helping them handle information requests, questions, and objections in real time. Caretta lives in Slack to join the team conversation. Caretta gets smarter automatically: every call expands its knowledge base and objection library, turning conversations into compounding organizational advantage.",
  },
  {
    id: "rvii-jinba",
    name: "Jinba",
    website: "https://jinba.io",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Jinba lets enterprise teams vibe-code AI workflows instead of drag and drop. Describe what you need in plain language, and your whole company can start using it immediately. No engineers required. Enterprise-grade permissions, audit logging, and on-prem deployment built in. We serve 40,000 enterprise users at major financial institutions. Build something your colleagues want.",
  },
  {
    id: "rvii-catchback-cards",
    name: "CatchBack Cards",
    website: "https://catchbackcards.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "CatchBack Cards is a mobile app and website platform for maximizing the thrill of collecting Pokemon and Sports cards. We allow collectors to create custom mystery packs with personalized chases and customized odds with cryptographically trusted tooling. Users can rip open digital packs and get physical cards shipped to them, receive buyback offers on cards pulled from their mystery packs sent straight to Venmo and PayPal, and buy/sell cards…",
  },
  {
    id: "rvii-celltype",
    name: "CellType",
    website: "https://www.celltype.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "CellType is building an agentic drug company. AI agents that run the full drug discovery pipeline on top of biological foundation models that simulate human biology. Our core technology, developed with Google DeepMind, has already discovered and validated a new cancer treatment signal. We’re working with Top 10 pharma.",
  },
  {
    id: "rvii-complir",
    name: "Complir",
    website: "https://complir.io/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "AI-powered product compliance platform that makes it easy for retailers to launch and scale products across borders without drowning in regulatory work. Complir's AI agents handle the regulations and documentation across every market you sell in - and keep your entire catalogue audit-ready.",
  },
  {
    id: "rvii-crosslayer-labs",
    name: "Crosslayer Labs",
    website: "https://www.crosslayerlabs.com/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Crosslayer Labs detects impersonation attacks on websites and APIs. We provide \"outside-in\" monitoring of customer infrastructure, comprehensively discovering and monitoring all Internet dependencies, including DNS, BGP, TLS certs, Javascript. We correlate signals from different layers of the Internet stack to identify attack patterns. Our alerts are actionable and contain root cause analysis/remediation recommendations. Our founding team…",
  },
  {
    id: "rvii-crow",
    name: "Crow",
    website: "https://www.usecrow.ai/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "AI for commercial real estate — works with CRE operators to find manual workflows, build practical AI systems, and improve how property teams, owners, and back offices get work done.",
  },
  {
    id: "rvii-cumulus-compute-labs",
    name: "Cumulus Compute Labs",
    website: "https://cumuluslabs.io",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Cumulus Labs lets engineering teams ship AI in production without needing a dedicated ML platform team. Right now, companies building AI products are forced to stitch together separate vendors for routing, observability, evaluation, fine-tuning, and inference. This fragmented approach is brittle, expensive, and is a common reason enterprises fail with AI. We replace that entire stack with a single unified platform. Developers can keep their…",
  },
  {
    id: "rvii-daymi",
    name: "Daymi",
    website: "https://www.pollen.cx/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Pollen is building AI agents that autonomously improve retention. Pollen monitors every customer account to detect back-tested churn and upsell signals by connecting to your communications, support tickets, product usage, and CRM. Then, Pollen tells your team exactly which accounts need attention today and decides what to do next.",
  },
  {
    id: "rvii-didit-identity",
    name: "Didit Identity",
    website: "https://didit.me/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "One API for KYC, KYB, AML, biometrics, and fraud — powered by 1,000+ data sources, 200+ signals, and in-house AI models. Global coverage. Integrate in minutes, pay as you go, 500 free checks/month. Start free at business.didit.me.",
  },
  {
    id: "rvii-dronetector",
    name: "DroneTector",
    website: "https://milliray.com/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "We make radars that can see small drones. As drones evolve faster than air defenses, detection has fallen behind. Even $50 drones now present a major threat to airports, critical infrastructure, and front-line defense. We solve this by building high-frequency radar systems, designed from the ground up to detect even the most challenging low-signature targets. This allows us to identify and track nano drones like no other solution, letting you…",
  },
  {
    id: "rvii-eden-robotics",
    name: "Eden Robotics",
    website: "https://www.edenrobotics.ai",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "We're building robots that just work and use them to deliver autonomous services at scale. Our first use case is semi-humanoid robots for manufacturing and logistics. Unlike traditional robotics companies, we don't sell robots, we provide physical agents for hire where companies pay for the robots based on usage, decreasing the barrier to entry and expanding the robotics market as a whole.",
  },
  {
    id: "rvii-expanse-compute",
    name: "Expanse Compute",
    website: "https://expanse.sh",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Expanse unlocks wasted GPU capacity. We recover idle compute through three capabilities: resource prediction (right-sizing job submissions before they reach the scheduler), optimisation suggestions (code and config changes researchers can apply themselves), and failure prediction (catching jobs that will fail before they consume hours of GPU time). We’re four engineers. We ran HPC and GPU training workloads at the largest quant funds and…",
  },
  {
    id: "rvii-formative-intelligence",
    name: "Formative Intelligence",
    website: "https://formativeintelligence.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE",
    description:
      "Fan-subscription platform for AI- original films and series.",
  },
  {
    id: "rvii-synthetic-sciences",
    name: "Synthetic Sciences",
    website: "https://syntheticsciences.ai/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "We're building the infrastructure for the era of autonomous science. Our core thesis: scientific foundation models with real research \"taste\" require two things, built in parallel. A product that captures high-quality organic research-process data at scale, and the training and research to turn that data into models with genuine scientific \"taste\". We're building both.",
  },
  {
    id: "rvii-instaagent",
    name: "InstaAgent",
    website: "https://instaagent.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "InstaAgent helps consumer brands scale a single campaign across hundreds of specific audiences on Meta and TikTok, each with its own content, voice, and targeting. Traction: $1M Ann. Run Rate in 10 months, and doubled to $2M in 4 months during YC. From one brief, we create personalized creatives, distribute them through paid channels and niche social accounts, and use performance data to learn what works, scale winners, and improve every…",
  },
  {
    id: "rvii-jigsawstack",
    name: "JigsawStack",
    website: "https://interfaze.ai",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Interfaze is an AI model built on a new architecture that merges specialized DNN/CNN models with transformers for tasks that require deterministic output and high consistency like Document intelligence, Object detection, Classification, Audio understanding and more. Interfaze outperforms large lab models like Gemini flash, Claude Sonnet and the GPT-5.4 mini series Architecture paper: https://arxiv.org/abs/2602.04101 Full open benchmarks:…",
  },
  {
    id: "rvii-kelai-tech",
    name: "KelAI Tech",
    website: "https://kelaitech.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Founded by former WorldQuant portfolio manager & head of event driven systematic strategies Jeremie Cohen, KelAI is building the autonomous alpha engine for hedge funds, traders and institutional investors. Investment teams now have more data, tools and compute than ever, but research still runs across siloed systems and inefficient workflows. KelAI turns that fragmented process into a compounding AI-native engine that continuously finds,…",
  },
  {
    id: "rvii-keyframe-labs",
    name: "Keyframe Labs",
    website: "https://keyframelabs.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Our real-time foundation models turn AI into lifelike video calls. Add the world's best AI avatars to your agents and applications in minutes with a few lines of embed code. Photorealism, emotion, and scale for as low as $0.06 per minute.",
  },
  {
    id: "rvii-klaimee-labs",
    name: "Klaimee Labs",
    website: "https://www.klaimee.ai",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Klaimee is the first insurance for your AI agents. It covers what traditional E&O and cyber explicitly carve out, so you can deploy agentic AI at scale with real peace of mind. Built for companies deploying agentic AI, self-serve from day one. The problem: AI agents are taking actions autonomously buying, emailing, modifying sensitive data. AB 316 already holds deployers liable. EU AI Act enforces in August. Cyber and E&O insurance are…",
  },
  {
    id: "rvii-known-quantity-labs",
    name: "Known Quantity Labs",
    website: "https://www.oddpool.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Oddpool is a platform that helps quant funds and trading desks harness the power of prediction markets. We make it easy to access, search, and analyze every venue from one place. Avi and Ritesh have been roommates since freshman year at Georgia Tech. Avi has a Master's in ML and saved Microsoft $6M/year by building a more accurate model on half the hardware. Ritesh has a Master's in Distributed Systems and made buy-side trading systems at…",
  },
  {
    id: "rvii-lambda-systems",
    name: "Lambda Systems",
    website: "https://trymaven.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "We enable AI voice agents to collect payments over the phone through a single API call, handling card processing and PCI compliance across all payment gateways.",
  },
  {
    id: "rvii-laminar-run",
    name: "Laminar Run",
    website: "https://laminar.com",
    founded: "2024",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Fall 2024",
    description:
      "Laminar analyzes, builds, and governs the systems that run your business, from SMBs to Fortune 10 Enterprise orgs. Powered by Implementation Intelligence™.",
  },
  {
    id: "rvii-legalos",
    name: "LegalOS",
    website: "https://www.legalos.ai",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "LegalOS is an AI-native immigration law firm that combines cutting-edge technology with 40+ years of legal expertise. We’ve studied 12,000 successful petitions to design our process - which allows us to deliver top-quality visa applications in as quickly as 48 hours. Our specialized AI agents draft petition narratives, compile evidence, and anticipate USCIS objections - work that traditionally takes attorneys weeks, if not months. Every case…",
  },
  {
    id: "rvii-lumius-imaging",
    name: "Lumius Imaging",
    website: "https://www.lumius-imaging.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Ultrasound today is still mostly 2D. Clinicians have to imagine the 3D anatomy in their head while also moving the probe at the same time. This makes procedures like vascular access hard to learn and perform consistently, especially for beginners. ~50% fail on their first attempt. Hospitals also spend millions each year on 2D ultrasound training. Meanwhile, existing 3D ultrasound devices can cost >10× as much. Lumius is building fast, smart,…",
  },
  {
    id: "rvii-matforge",
    name: "Matforge",
    website: "https://discoveredmaterials.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "We use AI to discover new materials for the semiconductor industry - specifically datacenters and fabs. Finding novel materials today takes 10+ years of lab work. We aim to compress that timeline to months, using a swarm of AI agents. Akash completed his PhD at Stanford on material discovery for semiconductors. The materials he discovered for nanoscale interconnects have been adopted into the roadmaps of Intel and TSMC. Advaith was the…",
  },
  {
    id: "rvii-maywood-ai",
    name: "Maywood AI",
    website: "https://maywoodai.com/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Maywood is the first finance-compliant proactive AI that runs 24/7, working across your network, pipeline, and active processes, running constantly in the background and surfacing things you'd otherwise miss. It tracks relationships and sector context to flag when a target is gearing up for a process (and drafts the outreach in your voice), watches network activity across LinkedIn, news, and conference follow-ups, and surfaces where active…",
  },
  {
    id: "rvii-autositu",
    name: "AutoSitu",
    website: "https://autositu.com/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "At AutoSitu, we’re building coordinated AI agents that live inside cities’ cross-department development review workflows—doing the heavy lifting, escalating judgment calls, and letting staff focus where human expertise actually matters. AutoSitu provides expert-level guidance and catch issues in minutes, helping cities and design firms/developers navigate an increasingly complex and fragmented regulatory environment. We serve as a strategic…",
  },
  {
    id: "rvii-opalite-health",
    name: "Opalite Health",
    website: "http://opalitehealth.com/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Opalite makes it easy for healthcare providers to communicate with non-English speaking patients. We’re built to work inside existing clinical workflows, so providers can communicate in real time without waiting for an interpreter or delaying care. Opalite is available instantly, 24/7, and replaces traditional interpretation services with software that’s more reliable and saves millions of dollars per year. We've built a voice AI system that…",
  },
  {
    id: "rvii-ornadyne",
    name: "Ornadyne",
    website: "https://ornadyne.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Ornadyne builds flapping-wing drones for reconnaissance that look, fly, and sound like birds. Today’s drones are easy to detect acoustically, visually, and electronically. As counter-UAS systems improve, traditional quadcopters and fixed-wing UAS systems are becoming increasingly ineffective for close-range surveillance. Flapping-wing aircraft have existed for years, but have lacked the performance, endurance, and control required for…",
  },
  {
    id: "rvii-oxus-ai",
    name: "Oxus AI",
    website: "https://oxus-ai.com/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Oxus automates internal audits for pre-IPO and public companies using AI. Companies including leading payroll providers and public biotech companies work with us to streamline audit workflows and get audits done 10x faster. Learn more at: https://www.oxus-ai.com/.",
  },
  {
    id: "rvii-panta-insurance-solutions",
    name: "Panta Insurance Solutions",
    website: "https://pantainsure.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Panta is a technology-enabled commercial insurance brokerage: we combine AI-powered internal workflows with licensed brokers to help businesses secure complex coverage faster than anyone in the world.",
  },
  {
    id: "rvii-plena",
    name: "Plena",
    website: "https://www.plena.health/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Plena is the AI operating system for specialty medical practices. We automate the administrative workflows that keep clinics running — referrals, fax intake, scheduling, procedure compliance, and collections — end to end, across all the systems a practice already uses. Unlike point solutions that cover a slice of the problem, Plena becomes the operating layer across the entire practice, connecting the systems, teams, and workflows that keep…",
  },
  {
    id: "rvii-prana-ai",
    name: "Prana AI",
    website: "https://pranadoc.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Prana replaces the reactive, 15-minute annual physical with continuous, proactive care. We connect to your medical records and wearables to watch for \"clinical drift,\" catching subtle declines in health that human doctors miss between visits. Most AI health apps are just chatbots. Prana is a full-stack medical provider. Our AI acts as a always-on physician that watches your data, explains your labs, and manages your prescriptions. Safety &…",
  },
  {
    id: "rvii-prototyping",
    name: "Prototyping",
    website: "https://www.prototyping.io",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Prototyping.io turns CAD designs into real mechanical parts through an AI-driven manufacturing system. We analyze designs for manufacturability and automate production workflows to deliver high-quality parts faster and at lower cost.",
  },
  {
    id: "rvii-qomplement",
    name: "Qomplement",
    website: "https://qomplement.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "qomplement is the agentic ERP for retail and logistics companies. Retail and logistics are the industries with the highest volume of transactions in the world. POs, freight invoices, inventory updates, and shipment confirmations. Every single one still requires a person to process it manually. Their only solution has been hiring more people. Legacy ERPs were built for humans. qomplement is the agentic ERP that cuts 95% of manual work and…",
  },
  {
    id: "rvii-reasonblocks",
    name: "ReasonBlocks",
    website: "https://reasonblocks.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "ReasonBlocks is the runtime layer that makes AI agents cheaper and more reliable. We correct agent reasoning and compress tokens mid-run, with gains compounding across runs. On SWE-Bench pro we have seen a 52% token reduction and 42% accuracy lift.",
  },
  {
    id: "rvii-relay-innovations",
    name: "Relay Innovations",
    website: "https://agentphone.ai/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "The $2T global telecom industry was built for humans. Agents can't act in the real world today because without a phone number, they lack identity. AgentPhone gives every AI agent its own phone number to reach people and businesses through messages and calls.",
  },
  {
    id: "rvii-replicas-group",
    name: "Replicas Group",
    website: "https://tryreplicas.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Replicas is a background coding agent that allows you to delegate tasks to Claude Code or Codex from Slack, Linear, GitHub, and more. Each task works inside of a sandboxed virtual machine, allowing teams to heavily parallelize work and burn through tickets. Replicas agents output higher quality PRs via feedback loops - each task automatically is notified and fixes CI failures and reads all code reviews. With Environments, engineering teams…",
  },
  {
    id: "rvii-rmj-labs",
    name: "RMJ Labs",
    website: "http://www.useandco.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Our agents retrieve and synthesize all the records law firms need to start a personal injury case. We get police reports, open insurance claims, and retrieve all the medical records and bills needed to build a case.",
  },
  {
    id: "rvii-rudus",
    name: "Rudus",
    website: "http://rudus.ai/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Rudus is an AI-powered takeoff and estimation platform enabling concrete contractors to win 3x more projects yearly. It automatically identifies every concrete structure like footings, walls, columns, and slabs on plans, eliminating the manual work and reducing estimation time by 70%. Concrete is the most-used material on earth after water, and demand is surging with the AI infrastructure boom.",
  },
  {
    id: "rvii-ruma",
    name: "Ruma",
    website: "https://rumacare.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Ruma Care automates all admin work for infusion clinics - starting with prior authorizations & copay assistance enrollment. Biologics are expensive medications that cost $80-$150K+ per year per patient, and often need to be administered in specific settings called infusion clinics. Medical providers buy these drugs up front to secure pricing deals and safer inventory - they are reimbursed for the cost of the medications through the patients’…",
  },
  {
    id: "rvii-samora-ai",
    name: "Samora AI",
    website: "https://samora.ai/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Samora runs multilingual voice operations for organizations with high-volume calling without requiring engineering teams, call centers, or AI expertise. Many important tasks still depend on phone calls, including customer support, outreach, follow-ups, screening, and intake. But voice AI often fails in production because real callers interrupt, go off-script, switch languages mid-sentence, and speak in local dialects. Teams also worry about…",
  },
  {
    id: "rvii-sarah-ai",
    name: "Sarah AI",
    website: "https://corvera.ai/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Corvera (YC W26) is the context layer for AI-native CPG brands. We help brands unlock the full potential of AI by making their unified data legible to any AI tool via MCP. As of mid-March 2026, we scaled from $0 to $33k in MRR in 4 weeks, are serving 12 brands, and are growing 130% week-on-week. With Corvera in place, brands can enable anyone in their organization to: - Rapidly deploy AI agents via tools such as Claude and ChatGPT, - Build…",
  },
  {
    id: "rvii-second-stage-labs",
    name: "Second Stage Labs",
    website: "https://primitive.dev",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Building the communication infrastructure needed for fully autonomous agents.",
  },
  {
    id: "rvii-sharedgenes",
    name: "SharedGenes",
    website: "https://junocompanion.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Juno is an AI personal health assistant for the 1B+ people living with chronic illness. Launched in October, Juno now supports 150,000+ patients globally.",
  },
  {
    id: "rvii-shotwell",
    name: "Shotwell",
    website: "http://shotwell.ai/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Robotics companies send Shotwell their video data and we detect failures. We do this for both their training data and for their deployments. We've developed models that can automatically produce these annotations with near-instant turnaround time.",
  },
  {
    id: "rvii-silmaril-security",
    name: "Silmaril Security",
    website: "https://silmaril.dev",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Silmaril is the first runtime security for AI that self-improves. It understands application context to block 2x as many threats as current SOTA defenses with 10x lower latency. Customers plug us into agentic frameworks like LangGraph with 5 lines of code. Silmaril has stopped $28M of damages for customers.",
  },
  {
    id: "rvii-smol-machines",
    name: "Smol Machines",
    website: "https://smolmachines.com/",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Smol machines solve the problem of \"but app works on my machine\" by shipping the machine. Smol machine enables devs to ship a lightweight virtual machine with any software, similar to how Electron ships an entire browser with the web app.",
  },
  {
    id: "rvii-sparkley",
    name: "Sparkley",
    website: "https://tryrobby.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Robby is an AI growth engine for home services businesses that uncovers revenue opportunities and collects additional data from every technician visit. Our AI combines customer and third party data to generate dozens of new leads every day, and then arms the technicians with talking points to increase close rates, giving GMs a single command center to manage and drive revenue. We have several paying customers that are each uncovering 6…",
  },
  {
    id: "rvii-speedtrain",
    name: "Speedtrain",
    website: "https://talkingcomputers.ai",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "We deploy fleets of AI Infrastructure Engineers to collaborate over week-long time horizons, run 100s of experiments in parallel, and learn from them to optimize your training/ inference infrastructure to your workloads. We've partnered with companies to speed up their GPU kernels to 6x SOTA, and improved the latency of voice models to twice the competition.",
  },
  {
    id: "rvii-spotpay",
    name: "SpotPay",
    website: "https://www.spotpay.ai/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "SpotPay is a global borderless neobank. We give users one account that works for everything payments related: receiving money from abroad, paying locally, spending anywhere with the SpotPay card and saving and earning on their balance.",
  },
  {
    id: "rvii-surtr-defense-systems",
    name: "Surtr Defense Systems",
    website: "https://surtrdefense.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Surtr builds ParallaxOS, the open operating system for counter-UAS. It takes sensor data from any radar, RF detector, camera, or acoustic array and fuses it into a single unified picture with AI-driven threat classification and engagement recommendations. One interface, any hardware, human in the loop.",
  },
  {
    id: "rvii-tenet-industries",
    name: "Tenet Industries",
    website: "https://www.tenetindustries.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Tenet Industries is building low-cost mass-producible defense systems, starting with attack drones. We're using design-for-manufacturing and first principles to reimagine how a defense product is developed and manufactured. We begin with the manufacturing, then solve all the inefficiencies and difficulties in the firmware/software. This allows us to hyperscale production in multiple defense categories such as strike drones, loitering…",
  },
  {
    id: "rvii-terminal-use",
    name: "Terminal Use",
    website: "https://www.terminaluse.com/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Create a living digital twin for your data center construction to deliver on time.",
  },
  {
    id: "rvii-the-general-aviation-company",
    name: "The General Aviation Company",
    website: "https://generalaviation.com",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "Fix ATC by connecting aircraft to the internet.",
  },
  {
    id: "rvii-unifold",
    name: "Unifold",
    website: "https://unifold.io",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Launch crypto deposits in minutes. Unifold is a developer-first API + SDK that makes it easy for any app to accept on-chain deposits – across any chain and token – with less than 10 lines of code. We handle the full deposit flow so teams can ship faster and give users a smooth experience that actually works. If you’re building a consumer-facing on-chain product and want best-in-class deposits (or want to support more chains fast), we’d love…",
  },
  {
    id: "rvii-unilabs",
    name: "Unilabs",
    website: "https://callab.ai",
    founded: "2026",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Spring 2026",
    description:
      "58% of the $400B call center industry runs on on-prem phone systems, and until now bringing AI voice automation to them meant ripping out their entire infrastructure first. That's the largest unserved segment in the market. Callab AI connects directly to legacy PBX systems like Avaya, Cisco UCM, and Mitel, and automates up to 70% of call volume with zero migration needed. We plug into these environments without requiring a rip-and-replace. We…",
  },
  {
    id: "rvii-veriad",
    name: "Veriad",
    website: "https://supafax.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Supafax is an AI agent that lives in your inbox and proactively manages your email and calendar.",
  },
  {
    id: "rvii-visibl-semiconductors",
    name: "Visibl Semiconductors",
    website: "https://visiblsemi.com",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Visibl makes custom chip development dramatically faster and lower cost for hardware companies. Today, most hardware companies that need a custom chip have bad options: sign a massive contract with an incumbent like Broadcom, pay a traditional design house millions of dollars and wait 18+ months, or keep using off-the-shelf chips and FPGAs that are not optimized for their product's cost, power, performance, size, or manufacturability. We…",
  },
  {
    id: "rvii-voxel-energy",
    name: "Voxel Energy",
    website: "https://voxelenergy.com/",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "The best grid connection is no grid connection. Voxel builds vertically integrated energy generation and storage systems for data centers that bypass utility connection delays. By leveraging the vast supply of second-life EV batteries and our novel DC microgrid architecture, Voxel generates datacenter power on site and drastically reduces system cost and time-to-power.",
  },
  {
    id: "rvii-voygr-tech",
    name: "Voygr Tech",
    website: "https://voygr.tech",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "VOYGR is a better maps API every agent and AI app will need. Google says '4.2 stars, open till 10 – VOYGR knows the chef left, wait times doubled, and locals moved on. Our intelligent local search combines accurate place data with fresh web context – news, articles, and events. We expand beyond 10-15 map attributes into infinite, queryable place profiles, enabling agents to reason and act in the real world. Maps are no longer browsed –…",
  },
  {
    id: "rvii-workable-solutions",
    name: "Workable Solutions",
    website: "https://dev.fast",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "/dev/fast is the AI-native code forge. Developers use it to drive token cost savings and cut mean time-in-review by 2x. Learn more at https://dev.fast.",
  },
  {
    id: "rvii-luel",
    name: "Luel",
    website: "https://luel.ai",
    founded: "2025",
    valuation: "Undisclosed (seed)",
    series: "SAFE · YC Winter 2026",
    description:
      "Luel is a sourcing and licensing platform for rights-cleared multimodal training data at scale. We work with frontier AI teams to provide high-quality bespoke data collections and off-the-shelf datasets.",
  },

];

const byName = new Map<string, CompanyProfile>();
for (const c of companies) {
  byName.set(c.name.toLowerCase(), c);
  for (const alias of c.aliases ?? []) {
    byName.set(alias.toLowerCase(), c);
  }
}

export function getCompanyByHoldingName(name: string): CompanyProfile | null {
  if (/^cash\b/i.test(name) || /other holdings/i.test(name)) {
    return null;
  }
  return byName.get(name.toLowerCase()) ?? null;
}

export function isSelectableHolding(name: string): boolean {
  return getCompanyByHoldingName(name) !== null;
}
