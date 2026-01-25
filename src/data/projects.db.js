import economyImg from "../assets/projects/economy.jpg";
import dashboardImg from "../assets/projects/dashboard.jpg";

export const projectsDB = [
  {
    id: "nigeria-economy",
    title: "Nigeria’s Economy Analysis",
    category: "Data Analysis",

    // Card image
    image: economyImg,

    // Short text for cards
    description:
      "In-depth analysis of GDP, inflation, and company performance (2015–2024).",

    // Detailed page data
    industry: "Macroeconomics / Public Policy",
    summary:
      "This project analyzes Nigeria’s economic performance using GDP, inflation, and company profit-after-tax data from 2015 to 2024. The goal was to identify trends, risks, and opportunities for policymakers, analysts, and investors.",

    tools: ["Python", "Pandas", "Matplotlib", "Excel"],

    links: {
      github: "https://github.com/username/nigeria-economy-analysis",
      report: "https://drive.google.com/...",
      dashboard: null,
      liveDemo: null,
    },
  },

  {
    id: "sales-dashboard",
    title: "Interactive Sales Dashboard",
    category: "Dashboard",

    image: dashboardImg,

    description:
      "Dynamic dashboard for tracking KPIs and business insights.",

    industry: "Business Intelligence / Sales Analytics",
    summary:
      "An interactive Power BI dashboard designed to help decision-makers track sales performance, monitor KPIs, and identify revenue trends across regions and time periods.",

    tools: ["Power BI", "Excel"],

    links: {
      github: null,
      report: null,
      dashboard: "https://dashboard.link/...",
      liveDemo: null,
    },
  },
];
