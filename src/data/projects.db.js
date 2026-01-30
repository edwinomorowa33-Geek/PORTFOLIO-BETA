import economyImg from "../assets/projects/economy.jpg";
import dashboardImg from "../assets/projects/dashboard.jpg";
import EuroImg from "../assets/projects/Euro(2024).jpg";

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
  id: "euro-2024",
  title: "UEFA EURO 2024 – Football & Financial Analysis",
  category: "Dashboard",

  image: EuroImg,

  description:
    "Interactive dashboard analyzing EURO 2024 teams, player distribution, club affiliations, and financial power across participating countries.",

  industry: "Football Analytics / Sports Finance",

  summary:
    `This project analyzes UEFA EURO 2024 through a football and financial lens,
    allowing fans and analysts to explore how national team performance aligns
    with player club distribution, league strength, and financial investment.
    The dashboard highlights the biggest spending countries, dominant clubs,
    player concentration across leagues, and top-value players on the continent.
    It provides an intuitive, data-driven way for football enthusiasts to
    understand the economic forces shaping international football.`,

  tools: ["Google Looker Studio"],

  links: {
    github: null,
    report: null,
    dashboard: "https://lookerstudio.google.com/s/hw12p8dNXyw",
    liveDemo: null,
  },
}

  
];
