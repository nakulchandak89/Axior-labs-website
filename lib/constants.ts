export const SITE_META = {
  title:
    "Axior Labs — Operational Intelligence for Physical Systems",
  description:
    "Axior Labs builds the intelligence layer that makes physical operations observable, measurable, and data-driven. RFID, IoT, AI-powered operational platforms.",
};

export const NAV_LINKS = [
  { label: "Products", href: "#platform" },
  { label: "Industries", href: "#industries" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export const HUB_NODES = [
  { id: "assets", label: "Assets", angle: 0, color: "#2563EB" },
  { id: "people", label: "Personnel", angle: 60, color: "#2563EB" },
  {
    id: "equipment",
    label: "Equipment",
    angle: 120,
    color: "#4F46E5",
  },
  {
    id: "facilities",
    label: "Facilities",
    angle: 180,
    color: "#4F46E5",
  },
  { id: "workflows", label: "Workflows", angle: 240, color: "#2563EB" },
  {
    id: "analytics",
    label: "Analytics",
    angle: 300,
    color: "#22D3EE",
  },
];

export const PROBLEM_CARDS = [
  {
    title: "Operational Blind Spots",
    icon: "EyeOff",
    body: "People move. Assets move. Equipment operates. Processes interact. But most organizations have no real-time window into any of it. Decisions get made on assumptions, not data.",
  },
  {
    title: "Reactive Management",
    icon: "Clock",
    body: "Without live visibility, problems compound before anyone knows they started. Resources get wasted. Decisions arrive too late. Reactive management is expensive and preventable.",
  },
  {
    title: "Fragmented Systems",
    icon: "Puzzle",
    body: "IoT here. Spreadsheets there. Manual reports everywhere. The data exists — it's locked inside disconnected tools that were never designed to work together.",
  },
];

export const FRAMEWORK_STEPS = [
  {
    id: "01",
    title: "Observe",
    icon: "Radio",
    body: "Connect sensors, RFID infrastructure, IoT devices, and enterprise systems into a continuous stream of real-world operational data. From every zone, every asset, every activity.",
  },
  {
    id: "02",
    title: "Understand",
    icon: "BarChart3",
    body: "Axior's intelligence layer processes raw operational signals into structured insights. Track patterns. Surface inefficiencies. Understand how operations actually behave, not how you assume.",
  },
  {
    id: "03",
    title: "Optimize",
    icon: "Zap",
    body: "Real-time intelligence shifts teams from reactive firefighting to proactive decisions. Automate workflows. Reduce waste. Move toward predictive and eventually autonomous operations.",
  },
];

export const PLATFORM_CARDS = [
  {
    title: "Asset Intelligence",
    status: { label: "Active", variant: "active" },
    icon: "Package",
    body: "Real-time tracking and monitoring of physical assets across facilities, zones, and operational environments. Always know where your assets are and how they're being used.",
  },
  {
    title: "Workforce Visibility",
    status: { label: "Active", variant: "active" },
    icon: "Users",
    body: "Monitor personnel movement, zone occupancy, and attendance across complex multi-zone environments. No manual processes. No guesswork. Live operational awareness.",
  },
  {
    title: "Facility Intelligence",
    status: { label: "Monitoring", variant: "monitoring" },
    icon: "Building2",
    body: "Understand how your spaces are actually used. Room occupancy, equipment utilization, energy consumption — all visible in real time. Manage facilities with evidence, not estimation.",
  },
  {
    title: "Operational Analytics",
    status: { label: "Processing", variant: "processing" },
    icon: "TrendingUp",
    body: "Transform raw operational data into actionable dashboards. Identify inefficiencies, forecast resource needs, and report with confidence. Intelligence that compounds over time.",
  },
] as const;

export const INDUSTRIES = [
  {
    title: "Education & Institutions",
    live: true,
    features:
      "Campus intelligence, access management, asset tracking, facility visibility.",
  },
  {
    title: "Manufacturing & Industry 4.0",
    live: false,
    features:
      "Production visibility, equipment monitoring, workflow automation, operational intelligence.",
  },
  {
    title: "Logistics & Supply Chain",
    live: false,
    features:
      "Asset tracking, inventory visibility, operational coordination, distribution intelligence.",
  },
  {
    title: "Enterprise & Corporate",
    live: false,
    features:
      "Workforce intelligence, operational analytics, process automation, facility management.",
  },
  {
    title: "Smart Infrastructure",
    live: false,
    features:
      "Connected facility systems, infrastructure monitoring, resource optimization.",
  },
  {
    title: "Healthcare & Institutional",
    live: false,
    features:
      "Asset management, personnel tracking, compliance monitoring, operational visibility.",
  },
];

export const TECH_STACK = [
  "RFID",
  "IoT",
  "Cloud",
  "AI / ML",
  "Analytics",
  "Enterprise Software",
];

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "#" },
    { label: "Vision", href: "#vision" },
    { label: "Contact", href: "#" },
  ],
  solutions: [
    { label: "Asset Intelligence", href: "#" },
    { label: "Workforce Visibility", href: "#" },
    { label: "Facility Intelligence", href: "#" },
    { label: "Operational Analytics", href: "#" },
  ],
  connect: [
    { label: "Book a Discovery Call", href: "#" },
    { label: "hello@axiorlabs.com", href: "mailto:hello@axiorlabs.com" },
    { label: "LinkedIn", href: "#" },
  ],
};
