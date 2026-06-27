export type Project = {
  slug: string;
  title: string;
  category: "Full-Stack" | "Data Engineering" | "Data Science" | "AI / ML";
  summary: string;
  problem: string;
  solution: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  year: string;
  // Edit these links when you have your real deployed project URLs.
  // demo = live app / hosted dashboard / notebook preview
  // repo = GitHub source code
  repo?: string;
  demo?: string;
  features?: string[];
  challenges?: { title: string; body: string }[];
  results?: string[];
  architecture?: { nodes: string[]; flow: string };
};

const githubBase = "https://github.com/yohbee";
const portfolioLive = "https://james-ngatia-tech-portfolio.brian-ngatia.workers.dev";

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Professional Tech Portfolio Website",
    category: "Full-Stack",
    summary:
      "A recruiter-focused engineering portfolio built with React, TypeScript, TanStack Start, Tailwind CSS, SSR and Cloudflare Workers deployment.",
    problem:
      "Most beginner portfolios only list skills. This project presents work as professional engineering case studies with architecture, outcomes, source links and live project access.",
    solution: [
      "Built a polished responsive portfolio with reusable project data",
      "Added detailed case-study pages for each featured project",
      "Added live demo and GitHub buttons so visitors can open every project",
      "Deployed the site to Cloudflare Workers and pushed source code to GitHub",
    ],
    stack: ["React 19", "TypeScript", "TanStack Start", "Vite", "Tailwind CSS", "Framer Motion", "Cloudflare Workers"],
    metrics: [
      { label: "Featured projects", value: "3" },
      { label: "Build time", value: ">3 weeks" },
      { label: "Deployment", value: "Edge" },
    ],
    year: "2026",
    repo: `${githubBase}/brianngatia-portfolio`,
    demo: portfolioLive,
    features: [
      "Professional hero section with clear positioning",
      "Project cards with Case Study, Live Project and Source Code buttons",
      "Dedicated case-study route for each project",
      "Responsive layout for mobile, tablet and desktop",
      "SEO metadata and Open Graph cover support",
      "Cloudflare Workers production deployment",
    ],
    challenges: [
      {
        title: "Turning a template into a professional brand",
        body: "The portfolio was customized from a generic template into a focused personal brand for Brian Ngatia, with only the most important projects shown.",
      },
      {
        title: "Making projects easy to open",
        body: "Each project now has editable repo and demo fields in src/lib/portfolio-data.ts, and those links are surfaced clearly on the project cards and case-study pages.",
      },
      {
        title: "Deploying beyond localhost",
        body: "The site was built and deployed to Cloudflare Workers so recruiters can view it from a public URL, not only on a local machine.",
      },
    ],
    results: [
      "Clean GitHub repository ready for future commits",
      "Live portfolio URL ready to share with recruiters and clients",
      "Simple data structure for adding more projects later",
    ],
    architecture: {
      nodes: ["Visitor", "Cloudflare Worker", "TanStack Start SSR", "React UI", "Project Data", "Case Study Pages"],
      flow: "Visitor opens portfolio → Cloudflare serves SSR page → React hydrates → project cards link to live demos, source code and case-study pages",
    },
  },
  {
    slug: "churn-prediction",
    title: "Customer Churn Prediction",
    category: "Data Science",
    summary:
      "A machine-learning case study for predicting customers likely to leave, explaining the drivers, and helping a business prioritize retention outreach.",
    problem:
      "Businesses often react after customers have already left. The goal is to identify high-risk customers early and explain why they are likely to churn.",
    solution: [
      "Cleaned customer, billing and usage data",
      "Engineered behavioral features such as activity drop, support issues and payment patterns",
      "Trained and evaluated classification models using ROC-AUC, precision, recall and F1",
      "Presented predictions through a business-friendly dashboard/case study",
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Matplotlib", "Jupyter Notebook", "FastAPI"],
    metrics: [
      { label: "ROC-AUC", value: "0.89" },
      { label: "Model type", value: "Classifier" },
      { label: "Output", value: "Risk score" },
    ],
    year: "2026",
    repo: `${githubBase}/customer-churn-prediction`,
    demo: "https://github.com/yohbee/customer-churn-prediction",
    features: [
      "Data cleaning and missing-value handling",
      "Exploratory data analysis with churn drivers",
      "Feature engineering for customer behavior",
      "Model comparison and evaluation metrics",
      "Risk score interpretation for business users",
      "Ready to connect to a deployed Streamlit or FastAPI demo",
    ],
    challenges: [
      {
        title: "Imbalanced churn data",
        body: "Churn cases are usually fewer than active customers, so evaluation cannot rely on accuracy alone. Precision, recall, F1 and ROC-AUC are emphasized.",
      },
      {
        title: "Business explainability",
        body: "The project is written as a business case study, not just a notebook, so non-technical viewers can understand the value of the model.",
      },
      {
        title: "Deployment-ready structure",
        body: "The project can later be connected to a live Streamlit dashboard or API endpoint by changing only the demo link in portfolio-data.ts.",
      },
    ],
    results: [
      "Clear churn-risk scoring workflow",
      "Recruiter-friendly data science case study",
      "Editable project link system for source code and live demo",
    ],
    architecture: {
      nodes: ["CSV / Database", "Data Cleaning", "Feature Engineering", "ML Model", "Evaluation", "Dashboard / API"],
      flow: "Raw customer data → preprocessing → model training → churn probability → retention insight",
    },
  },
  {
    slug: "budgetflow",
    title: "BudgetFlow — Personal Finance App",
    category: "Full-Stack",
    summary:
      "A personal finance and budgeting application with authentication, transaction tracking, category analytics and a roadmap for forecasting and AI spending advice.",
    problem:
      "Many users struggle to understand where their money goes because expenses are scattered and not visualized clearly.",
    solution: [
      "Built a modern finance dashboard for income and expense tracking",
      "Added category-based transaction management",
      "Designed analytics cards for balance, spending and savings insights",
      "Prepared the architecture for forecasting and AI financial recommendations",
    ],
    stack: ["React", "TypeScript", "Firebase", "Firestore", "Tailwind CSS", "Vercel", "Charts"],
    metrics: [
      { label: "Core modules", value: "4" },
      { label: "Auth", value: "Firebase" },
      { label: "Status", value: "MVP" },
    ],
    year: "2026",
    repo: `${githubBase}/budgetflow`,
    demo: "https://github.com/yohbee/budgetflow",
    features: [
      "User authentication",
      "Income and expense entry",
      "Category-based transaction organization",
      "Financial summary dashboard",
      "Responsive interface",
      "Roadmap for forecasting and AI budgeting assistant",
    ],
    challenges: [
      {
        title: "Firebase authorized domain deployment issue",
        body: "The app required Firebase Authentication domain configuration so OAuth login could work correctly after deployment.",
      },
      {
        title: "Making finance data readable",
        body: "The UI focuses on simple summaries and categories so users can understand spending quickly instead of reading raw transactions.",
      },
      {
        title: "Designing for future AI features",
        body: "The project structure leaves room for spending predictions, savings recommendations and natural-language explanations later.",
      },
    ],
    results: [
      "Working budgeting MVP concept",
      "Clear foundation for a monetizable finance tool",
      "Professional full-stack project suitable for portfolio presentation",
    ],
    architecture: {
      nodes: ["React UI", "Firebase Auth", "Firestore", "Analytics Dashboard", "Forecasting Roadmap", "AI Assistant Roadmap"],
      flow: "User logs in → adds transactions → Firestore stores data → dashboard visualizes spending → future forecasting/AI layer explains behavior",
    },
  },
 {
  slug: "homeease-essentials",
  title: "HomeEase Essentials — E-commerce Catalogue",
  category: "Full-Stack",
  summary:
    "A modern product catalogue and e-commerce-style platform for HomeEase Essentials, helping customers browse home products, view categories, and place orders directly through WhatsApp.",
  problem:
    "Small businesses often rely on WhatsApp groups and social media posts to sell products, making it difficult for customers to browse items professionally, compare categories, and quickly understand what is available.",
  solution: [
    "Built a responsive online catalogue for home products",
    "Organized products into clear categories such as kitchenware, furniture and electronics",
    "Added a WhatsApp ordering flow so customers can start an order directly",
    "Designed a clean business-focused interface suitable for mobile shoppers",
    "Prepared the structure for future admin product management",
  ],
  stack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "WhatsApp Ordering",
    "Cloudflare",
  ],
  metrics: [
    { label: "Categories", value: "3+" },
    { label: "Order Flow", value: "WhatsApp" },
    { label: "Status", value: "MVP" },
  ],
  year: "2026",
  repo: `${githubBase}/homeease-essentials`,
  demo: "https://your-homeease-live-link.com",
  features: [
    "Product catalogue",
    "Category-based browsing",
    "Mobile-first responsive design",
    "WhatsApp order button",
    "Product detail sections",
    "Business contact section",
    "Clean modern shopping interface",
  ],
  challenges: [
    {
      title: "Turning a WhatsApp business into a structured catalogue",
      body: "The main challenge was designing a simple online experience that organizes products clearly while still keeping WhatsApp as the main ordering channel.",
    },
    {
      title: "Making the shopping flow mobile friendly",
      body: "The interface was designed around mobile users because most customers discover and order products through their phones.",
    },
    {
      title: "Preparing for future product management",
      body: "The project structure leaves room for adding an admin dashboard, inventory controls and product upload features later.",
    },
  ],
  results: [
    "Created a professional online presence for HomeEase Essentials",
    "Made products easier to browse by category",
    "Improved the customer order flow through WhatsApp",
    "Built a strong full-stack business project for portfolio presentation",
  ],
  architecture: {
    nodes: [
      "React UI",
      "Product Catalogue",
      "Category Filters",
      "Product Details",
      "WhatsApp Order Flow",
      "Future Admin Dashboard",
    ],
    flow: "Customer visits site → browses categories → views product details → clicks WhatsApp order button → business receives enquiry → future admin dashboard manages products",
  },
},
];

export const caseStudies = projects;

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  read: string;
  tag: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-crm",
    title: "How I built an AI-native CRM from scratch",
    date: "2025-09-14",
    read: "12 min",
    tag: "Engineering",
    excerpt:
      "Architecture, embeddings pipeline, and the tradeoffs of building a CRM around an LLM instead of bolting one on.",
  },
  {
    slug: "scalable-etl-pipelines",
    title: "Designing ETL pipelines that don't wake you up at 3 AM",
    date: "2025-07-02",
    read: "9 min",
    tag: "Data",
    excerpt:
      "Idempotency, backfills, schema evolution, and the operational hygiene that separates hobby pipelines from production.",
  },
  {
    slug: "rag-systems-in-production",
    title: "Shipping RAG systems to production",
    date: "2025-05-21",
    read: "11 min",
    tag: "AI",
    excerpt:
      "Chunking strategies, hybrid retrieval, reranking, evaluation harnesses, and the unsexy work that makes RAG actually useful.",
  },
  {
    slug: "postgres-performance",
    title: "Optimizing PostgreSQL for read-heavy workloads",
    date: "2025-03-08",
    read: "8 min",
    tag: "Databases",
    excerpt:
      "Indexes, partial indexes, materialized views, and a couple of EXPLAIN ANALYZE walkthroughs from real outages.",
  },
  {
    slug: "docker-for-data-engineers",
    title: "Docker for data engineers — beyond hello-world",
    date: "2025-01-19",
    read: "7 min",
    tag: "DevOps",
    excerpt:
      "Multi-stage builds, slim images, layer caching, and reproducible Spark/Airflow images for your team.",
  },
  {
    slug: "redis-patterns",
    title: "Five Redis patterns I reach for constantly",
    date: "2024-11-30",
    read: "6 min",
    tag: "Backend",
    excerpt:
      "Rate limiting, cache stampedes, leaderboards, distributed locks, and pub/sub — with production caveats.",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  id?: string;
};

export const certificates: Certificate[] = [
  { title: "Data Analysis", issuer: "African Leadership Group", year: "2025" },
  { title: "Python", issuer:"African Leadership Group", year: "2025" },
  { title: "Machine Learning", issuer: "African leadership Group", year: "2026" },
  { title: "Data Science", issuer: "African Leadership Group", year: "2026" },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack & AI Engineer",
    org: "Independent / Consulting",
    period: "2025 — Present",
    bullets: [
      
    ],
  },
 {
  role: "Software Development Intern",
  org: "Farmsky Ventures",
  period: "2026 — Present",
  bullets: [
    "Designed and developed a Customer Relationship Management (CRM) system to streamline customer and business operations.",
    "Created comprehensive system documentation, including user guides and technical documentation for future maintenance.",
    "Tested, debugged, and maintained the CRM system to ensure reliability, performance, and a seamless user experience.",
  ],
},
];

export const testimonials = [
  {
    quote:
      "Brian did an amazing job designing and developing our CRM system. He demonstrated professionalism throughout the project and produced clear, well-structured documentation that made the system easy to understand and maintain.",
    name: "Bonface Nyalwal",
    role: "CEO, Farmsky Ventures",
  },
];