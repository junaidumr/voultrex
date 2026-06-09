export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  accent: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cync",
    name: "Cync",
    tagline: "Enterprise collaboration platform",
    problem:
      "Teams struggled with fragmented communication across departments and time zones.",
    solution:
      "Built a unified workspace with real-time sync, role-based permissions, and intelligent notifications.",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    metrics: [
      { label: "Active users", value: "12K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Load time", value: "<1.2s" },
    ],
    gradient: "from-cyan-600/30 via-blue-900/20 to-transparent",
    accent: "#3ec8e8",
  },
  {
    id: "foodai",
    name: "FoodAI",
    tagline: "AI-powered food recognition",
    problem:
      "Restaurants needed automated menu analysis and nutritional insights at scale.",
    solution:
      "Deployed computer vision pipeline with custom ML models and a responsive dashboard.",
    stack: ["React", "Python", "OpenAI", "AWS"],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Items processed", value: "2M+" },
      { label: "API latency", value: "180ms" },
    ],
    gradient: "from-emerald-600/30 via-green-900/20 to-transparent",
    accent: "#10b981",
  },
  {
    id: "metra",
    name: "Metra Fitness",
    tagline: "Fitness tracking ecosystem",
    problem:
      "Users wanted a seamless cross-device fitness experience with personalized coaching.",
    solution:
      "Developed mobile apps with wearable integration, progress analytics, and AI coaching.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
    metrics: [
      { label: "Downloads", value: "50K+" },
      { label: "Retention", value: "68%" },
      { label: "Rating", value: "4.8★" },
    ],
    gradient: "from-orange-600/30 via-red-900/20 to-transparent",
    accent: "#f97316",
  },
  {
    id: "goodleaf",
    name: "GoodLeaf",
    tagline: "Sustainable commerce platform",
    problem:
      "Eco-conscious brands lacked a dedicated marketplace with transparent supply chains.",
    solution:
      "Created a multi-vendor marketplace with carbon tracking and verified sustainability badges.",
    stack: ["Next.js", "Stripe", "MongoDB", "Vercel"],
    metrics: [
      { label: "Vendors", value: "200+" },
      { label: "GMV", value: "$1.2M" },
      { label: "Conversion", value: "3.4%" },
    ],
    gradient: "from-lime-600/30 via-green-900/20 to-transparent",
    accent: "#84cc16",
  },
  {
    id: "arhiboo",
    name: "Arhiboo",
    tagline: "Architecture visualization",
    problem:
      "Architects needed interactive 3D previews for client presentations without heavy software.",
    solution:
      "Built WebGL-powered 3D viewer with real-time material editing and sharing.",
    stack: ["Three.js", "React", "Node.js", "AWS S3"],
    metrics: [
      { label: "Projects", value: "800+" },
      { label: "Render time", value: "2.1s" },
      { label: "Client satisfaction", value: "96%" },
    ],
    gradient: "from-violet-600/30 via-purple-900/20 to-transparent",
    accent: "#8b5cf6",
  },
  {
    id: "merchbase",
    name: "MerchBase",
    tagline: "Merchandise management SaaS",
    problem:
      "Brands managed inventory, orders, and fulfillment across disconnected spreadsheets.",
    solution:
      "Unified inventory, order management, and fulfillment automation in one dashboard.",
    stack: ["Next.js", "Supabase", "Stripe", "Docker"],
    metrics: [
      { label: "Orders/month", value: "15K" },
      { label: "Time saved", value: "40hrs/wk" },
      { label: "Error reduction", value: "87%" },
    ],
    gradient: "from-pink-600/30 via-rose-900/20 to-transparent",
    accent: "#ec4899",
  },
  {
    id: "squis",
    name: "Squis",
    tagline: "Creative asset platform",
    problem:
      "Design teams needed centralized asset management with version control and approvals.",
    solution:
      "Delivered a collaborative DAM with smart tagging, version history, and approval workflows.",
    stack: ["React", "Firebase", "Cloudinary", "TypeScript"],
    metrics: [
      { label: "Assets managed", value: "500K+" },
      { label: "Teams", value: "120+" },
      { label: "Search speed", value: "<200ms" },
    ],
    gradient: "from-amber-600/30 via-yellow-900/20 to-transparent",
    accent: "#f59e0b",
  },
  {
    id: "talabna",
    name: "Talabna",
    tagline: "On-demand delivery network",
    problem:
      "Local businesses needed a reliable last-mile delivery solution with real-time tracking.",
    solution:
      "Engineered a dispatch system with route optimization, live tracking, and driver apps.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Deliveries/day", value: "3K+" },
      { label: "Avg delivery", value: "28min" },
      { label: "Coverage", value: "12 cities" },
    ],
    gradient: "from-sky-600/30 via-blue-900/20 to-transparent",
    accent: "#0ea5e9",
  },
  {
    id: "leadexchange",
    name: "LeadExchange",
    tagline: "B2B lead marketplace",
    problem:
      "Sales teams wasted time on unqualified leads with no transparent scoring system.",
    solution:
      "Built a lead exchange with ML scoring, CRM integrations, and real-time bidding.",
    stack: ["Next.js", "Python", "OpenAI", "AWS"],
    metrics: [
      { label: "Leads exchanged", value: "250K" },
      { label: "Close rate lift", value: "+34%" },
      { label: "ROI", value: "4.2x" },
    ],
    gradient: "from-indigo-600/30 via-blue-900/20 to-transparent",
    accent: "#6366f1",
  },
  {
    id: "vztur",
    name: "VZTur",
    tagline: "Travel booking platform",
    problem:
      "Travelers faced fragmented booking experiences across flights, hotels, and activities.",
    solution:
      "Created an all-in-one booking engine with dynamic pricing and personalized itineraries.",
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    metrics: [
      { label: "Bookings", value: "18K/mo" },
      { label: "Revenue", value: "$2.8M" },
      { label: "NPS", value: "72" },
    ],
    gradient: "from-teal-600/30 via-cyan-900/20 to-transparent",
    accent: "#14b8a6",
  },
];
