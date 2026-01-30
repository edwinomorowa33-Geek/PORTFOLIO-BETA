import economyImg from "../assets/projects/economy.jpg";
import dashboardImg from "../assets/projects/dashboard.jpg";

export const projectsDB = [
  {
    id: "nigeria-economy",
    title: "NIGERIA’S ECONOMY: PERFORMANCE & WAY FORWARD",
    category: "Data Analysis",

    // Card image
    image: economyImg,

    // Short text for cards
    description:
      "In-depth analysis of GDP, inflation, and company performance (2015–2024).",

    // Detailed page data
    industry: "Macroeconomics / Public Policy/ Investment Analysis/ Finance",
    summary: `
This project examines Nigeria’s economic performance between 2015 and 2024 using
GDP, inflation, and company profit-after-tax data. Despite modest GDP growth of
15% over the decade, the economy remained constrained by structural challenges
including corruption, insecurity, and heavy dependence on crude oil exports.

The services sector emerged as the primary growth driver, led by finance and ICT,
while agriculture grew slowly and manufacturing and oil and gas declined. Inflation
rose sharply, eroding purchasing power and destabilizing real-sector performance.
Profitability was highly volatile, with finance and agriculture firms showing the
strongest resilience. The study provides policy and investor insights focused on
diversification, productivity, and macroeconomic stability.
`
,

    tools: ["Python", "Pandas", "Matplotlib", "googlesheet","google colab"],

    links: {
      github: "https://github.com/username/nigeria-economy-analysis",
      report: " https://drive.google.com/file/d/1EKCA1E83BIiAqkYsY9zQ3GFbSQbCe_py/view?usp=drive_link",
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
