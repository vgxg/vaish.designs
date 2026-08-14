export const BRAND = "vaishak.designs";
export const NAME = "Vaishak";
export const TITLE = "AI & Automation Product Developer";
export const EMAIL = "Vaishak.designs@gmail.com";
export const PHONE = "7899014649";
export const PHONE_HREF = "tel:+917899014649";
export const INSTAGRAM = "https://www.instagram.com/its.phoenix0";
export const LINKEDIN = "https://linkedin.com/in/vaishak-designs";
export const GITHUB = "https://github.com/vaishak-designs";

export const skillGroups = [
  {
    title: "AI & LLM Systems",
    items: [
      { label: "Prompt Engineering", value: 95 },
      { label: "LangChain / Agents", value: 88 },
      { label: "RAG Pipelines", value: 85 },
      { label: "OpenAI & Gemini APIs", value: 92 },
    ],
  },
  {
    title: "Automation",
    items: [
      { label: "n8n", value: 95 },
      { label: "Make.com", value: 88 },
      { label: "Zapier", value: 85 },
      { label: "Webhooks & Integrations", value: 92 },
    ],
  },
  {
    title: "Product & Design",
    items: [
      { label: "Figma", value: 92 },
      { label: "UX Systems", value: 90 },
      { label: "Rapid Prototyping", value: 94 },
    ],
  },
  {
    title: "Development",
    items: [
      { label: "React", value: 88 },
      { label: "Next.js", value: 85 },
      { label: "TypeScript", value: 84 },
      { label: "Node.js", value: 82 },
    ],
  },
  {
    title: "Data & Backend",
    items: [
      { label: "Supabase", value: 88 },
      { label: "PostgreSQL", value: 82 },
      { label: "Vector Databases", value: 80 },
      { label: "REST APIs", value: 90 },
    ],
  },
  {
    title: "Ops & Tooling",
    items: [
      { label: "Git & GitHub", value: 90 },
      { label: "Vercel", value: 90 },
      { label: "Docker", value: 76 },
      { label: "Analytics & Tracking", value: 82 },
    ],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Research",
    body: "I start by understanding the business goal, the people involved, and the manual work that is quietly costing time.",
  },
  {
    n: "02",
    title: "Design",
    body: "Mapping flows, interfaces, and agent logic into a clean system that is obvious to use and cheap to run.",
  },
  {
    n: "03",
    title: "Build",
    body: "Shipping the product and the automations together — AI where it adds leverage, plain code where it is safer.",
  },
  {
    n: "04",
    title: "Deploy",
    body: "Testing, guardrails, monitoring, and handover, followed by iteration once real usage data comes in.",
  },
];

export const projects = [
  {
    n: "01",
    flagship: true,
    title: "AutoPilot Ops",
    body: "AutoPilot Ops — an end-to-end AI operations layer for service businesses. It ingests emails, forms, and CRM events, routes them through agentic workflows, drafts replies, updates records, and reports back to the team in Slack. Built with Next.js, n8n, OpenAI, Supabase, PostgreSQL, and vector search for company-wide context retrieval.",
    tags: ["Next.js", "n8n", "OpenAI", "Supabase", "PostgreSQL", "pgvector", "Slack API", "Vercel"],
    links: [{ label: "Case Study", href: "#contact" }, { label: "Demo Coming Soon", href: "#", muted: true }],
  },
  {
    n: "02",
    title: "LeadGenie",
    body: "An AI lead qualification product that scores inbound enquiries, enriches them from public data, and books calls automatically — cutting first-response time from hours to under a minute.",
    tags: ["React", "Node.js", "Gemini", "Make.com", "REST API"],
    links: [{ label: "Case Study", href: "#contact" }, { label: "Live Demo", href: "#", primary: true }],
  },
  {
    n: "03",
    title: "DocuMind RAG",
    body: "A private knowledge assistant that turns messy company documents into a searchable, cited answer engine. Chunking, embeddings, hybrid retrieval, and a chat interface designed for non-technical teams.",
    tags: ["RAG", "LangChain", "Vector DB", "TypeScript", "Supabase"],
    links: [{ label: "Case Study", href: "#contact" }],
  },
];

export const creative = [
  {
    icon: "🎬",
    stat: "40+ Systems Shipped",
    title: "Automation Builds",
    body: "Workflow systems that quietly run sales, ops, and reporting for founders while they sleep.",
    cta: "View Work",
  },
  {
    icon: "🤖",
    stat: "12+ AI Agents",
    title: "AI Agents",
    body: "Task-specific agents with tools, memory, and guardrails — built to be reliable, not just impressive.",
    cta: "View Work",
  },
  {
    icon: "🧩",
    stat: "Product Design",
    title: "Interface Design",
    body: "Clean, opinionated product interfaces designed in Figma and shipped straight into React.",
    cta: "View Work",
  },
  {
    icon: "⚡",
    stat: "Personal Projects",
    title: "Experiments",
    body: "Small tools, prototypes, and weird ideas that push what automation and AI can actually do.",
    cta: "View Work",
  },
];

export const experience = [
  {
    period: "2025 — Present",
    kind: "Freelance",
    role: "AI & Automation Product Developer",
    org: "vaishak.designs · India · Worldwide",
    skills: ["AI Product Strategy", "Agent Design", "Workflow Automation", "Full Stack Delivery"],
    tech: ["n8n", "OpenAI", "Next.js", "Supabase"],
  },
  {
    period: "2024 — 2025",
    kind: "Contract",
    role: "Automation Consultant",
    org: "Startups & Agencies",
    skills: ["Process Mapping", "Systems Integration", "Data Pipelines", "Team Enablement"],
    tech: ["Make.com", "Zapier", "Airtable", "REST APIs"],
  },
  {
    period: "2023 — 2024",
    kind: "Product",
    role: "Product Designer & Frontend Developer",
    org: "Independent Studio",
    skills: ["UI Systems", "Prototyping", "Design to Code", "Brand Identity"],
    tech: ["Figma", "React", "TypeScript", "Tailwind"],
  },
];

export const activities = [
  {
    tag: "Community",
    title: "AI Builders Community, India",
    role: "Workshop Host",
    body: "Running hands-on sessions on agent design and automation for founders and early-career developers.",
  },
  {
    tag: "Mentorship",
    title: "No-Code to Real-Code Cohort",
    role: "Mentor",
    body: "Guiding makers from no-code tools into production-grade automation and product engineering.",
  },
  {
    tag: "Open Source",
    title: "Automation Templates Library",
    role: "Maintainer",
    body: "Publishing reusable n8n and agent templates that teams can drop into their own stack.",
  },
  {
    tag: "Speaking",
    title: "Product & AI Meetups",
    role: "Speaker",
    body: "Talks on shipping AI features that survive contact with real users, budgets, and edge cases.",
  },
  {
    tag: "Writing",
    title: "Field Notes on Automation",
    role: "Author",
    body: "Breaking down real client systems into practical write-ups on what worked and what quietly failed.",
  },
];

export const certifications = [
  { icon: "🤖", title: "Generative AI with LLMs", org: "DeepLearning.AI" },
  { icon: "⚙️", title: "n8n Advanced Automation", org: "n8n" },
  { icon: "☁️", title: "Cloud Fundamentals", org: "Google Cloud" },
  { icon: "🧠", title: "Prompt Engineering", org: "OpenAI" },
  { icon: "🎨", title: "Product Design Certification", org: "Figma" },
  { icon: "📊", title: "Data Foundations", org: "Supabase" },
];

export const softSkills = [
  { icon: "🧭", title: "Systems Thinking", body: "Seeing the whole process, not just the screen in front of me." },
  { icon: "💬", title: "Communication", body: "Explaining AI and automation to people who do not want a lecture." },
  { icon: "🤝", title: "Client Partnership", body: "Working alongside teams instead of throwing deliverables over a wall." },
  { icon: "🧩", title: "Problem Solving", body: "Breaking messy business problems into clean, automatable pieces." },
  { icon: "⚡", title: "Speed", body: "Shipping a working v1 fast, then hardening it with real usage data." },
  { icon: "🌟", title: "Adaptability", body: "New models, new tools, same discipline — pick what actually helps." },
  { icon: "🎨", title: "Craft", body: "Interfaces and systems that feel considered, not assembled." },
  { icon: "⏰", title: "Ownership", body: "Deadlines, scope, and follow-through handled without chasing." },
];
