import economyImg from "../assets/projects/economy.jpg";
import EuroImg from "../assets/projects/Euro(2024).jpg";
import CashCropImg from "../assets/projects/CashCrop.jpg";
import fintechImg from "../assets/projects/fintech.jpg";
import ClassFixImg from "../assets/projects/Classifix.jpg";
import hypertensionImg from "../assets/projects/hypertension.jpg";
import valueAIImg from "../assets/projects/Value.jpg";
export const projectsDB = [
  {
    id: "nigeria-economy",
    title: "NIGERIA’S ECONOMY: PERFORMANCE & WAY FORWARD",
    category: "Data Analysis",
    image: economyImg,
    description:
      "In-depth analysis of GDP, inflation, and company performance (2015–2024).",
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
`,

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
  }
},


{
    id: "Cashcrop",
    title: "Cash Crop Product Tracker (2014-2018)",
    category: "Dashboard",

    image: CashCropImg,

    description: "Interactive dashboard tracking cash crop production trends from 2014 to 2018. Allowing Users to explore production data across various crops and regions.creating visual insights into agricultural output over the years.",

    industry: "Agriculture, Supply Chain, Logistics, Finance",

    summary: "This dashboard visualizes cash crop production data from 2014 to 2018, enabling users to explore trends across different crops and regions. It provides insights into agricultural output and helps stakeholders make informed decisions about resource allocation and market strategies.",

    tools: ["Google Looker Studio"],

    links: {
      github: null,
      report: null,
      dashboard: "https://lookerstudio.google.com/reporting/852363fc-c48c-4028-a210-7f5ae4e6809e",
      liveDemo: null,
      Paper: null,
    },
  },


 {
  id: "hypertension-ml",
  title: "Determinants and Prediction of Hypertension",
  category: "Models",

  image: hypertensionImg,

  description:
    "A statistical and machine learning analysis aimed at identifying key risk factors for hypertension and developing predictive models for individual risk assessment.",

  industry: "Healthcare Analytics / Public Health",

  summary:
    "This project investigates the determinants of hypertension using a dataset of 1,985 adults, combining inferential statistics and machine learning techniques. Exploratory analysis and hypothesis testing identified age, BMI, stress score, smoking status, family history, sleep duration, and blood pressure history as significant predictors. Confirmatory factor analysis highlighted the relative importance of physiological and psycho-social factors. Optimized Random Forest and Gradient Boosting models were trained to predict hypertension risk, with Random Forest achieving the best performance at 84.9% accuracy. The project demonstrates a data-driven, statistically grounded framework for hypertension risk stratification in clinical and public health contexts.",

  tools: [
    "Python",
    "Pandas",
    "NumPy",
    "SciPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn"
  ],

  links: {
    github: "https://github.com/edwinomorowa33-Geek/MACHINE_LEARNING_MODEL/tree/main/Hypertension",
    report: "https://drive.google.com/file/d/1f_YFOwMwGjduDi7Eeji4NSU1RXXLR__d/view?usp=drive_link",
    dashboard: null,
    liveDemo: null,
        },
  },

  {
  id: "classfix-store-dashboard",
  title: "ClassFix Store Sales & Supply Dashboard",
  category: "Dashboard",

  image: ClassFixImg, // add Looker Studio screenshot when available

  description:
    "An interactive Looker Studio dashboard for monitoring sales, supply performance, and key retail KPIs across multiple locations.",

  industry: "Retail Analytics / Sales & Supply Intelligence",

  summary:
    "This project features a fully interactive Looker Studio dashboard built for ClassFix Store to support data-driven retail decisions. It tracks core KPIs such as total revenue, average product price, total items sold, number of buyers, discounts applied, and product-level profitability. Users can dynamically explore sales performance across locations, products, and time periods, enabling clear insights into demand trends, pricing effectiveness, and supply efficiency. The dashboard is designed to improve operational visibility, inventory planning, and revenue optimization.",

  tools: [
    "Looker Studio",
    "Google Sheets",
  ],

  links: {
    github: null,
    report: null,
    dashboard: "https://lookerstudio.google.com/reporting/0e8e16aa-9832-48f7-804f-6611abdd221f", 
    liveDemo: null,
  }
},

 {
  id: "fintech-trust-uk",
  title: "Consumer Trust and Security in FinTech Services (UK)",
  category: "Research",

  image: fintechImg, // you can add a cover image later if you want

  description:
    "An empirical study examining how trust, security awareness, and cyber risks influence consumer adoption of FinTech services in the UK.",

  industry: "Financial Technology / Consumer Research",

  summary:
    "This research investigates consumer trust in FinTech services in the UK, focusing on data security, privacy awareness, and the impact of cyber threats. Using survey data from 100 respondents and Likert-scale analysis, the study evaluates trust levels, influencing factors, and perceptions of data breaches. Results show generally high trust in FinTech services, particularly regarding data security, while also revealing concerns about cyber-attacks and limited consumer awareness of privacy rights. The findings highlight trust, security transparency, and education as critical drivers of FinTech adoption.",

  tools: [
    "Survey Research",
    "Quantitative Analysis",
    "Excel",
    "Likert Scale Modeling",
    "Statistical Analysis",
  ],

  links: {
    github: null,
    report: "https://drive.google.com/file/d/1xPSGh_Ks71VT11PXtcB-EniMIIVGNdh8/view?usp=drive_link",      
    dashboard: null,   // optional if you later visualize results
    liveDemo: null,
  },
},

{
  id: "value-ai-football",
  title: "Value.AI: Objective Football Player Valuation",
  category: "Models",

  image: valueAIImg, 

  description:
    "A machine learning framework for objectively estimating football player market value using measurable performance attributes.",

  industry: "Sports Analytics / Football Intelligence",

  summary:
    "Value.AI is a machine learning–driven framework designed to estimate football player market value based on quantifiable performance data rather than subjective market forces. Using cleaned multi-league player statistics, football-specific feature engineering, and ensemble learning models, the system produces statistically consistent valuations aligned with on-field ability. A tuned Gradient Boosting model explains approximately 89% of the variance in player market value, demonstrating that performance metrics alone can reliably drive valuation. The project supports data-driven scouting, recruitment, and financial decision-making while reducing bias from media exposure and reputation.",

  tools: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Machine Learning",
    "Gradient Boosting",
    "Random Forest",
    "Exploratory Data Analysis",
    "Feature Engineering",
  ],

  links: {
    github: "https://github.com/edwinomorowa33-Geek/MACHINE_LEARNING_MODEL/tree/main/Value_AI",
    report: "https://drive.google.com/file/d/18c0P1D-emoZWEmhTbLewcCjgiBrJuNpE/view?usp=drive_link",
    dashboard: null,
    Model: "https://github.com/edwinomorowa33-Geek/MACHINE_LEARNING_MODEL/blob/main/Value_AI/Value_model_Alpha.pkl",
  },
}
];
