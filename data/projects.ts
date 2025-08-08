// data/projects.ts

export type Project = {
  slug: string;
  title: string;
  client?: string;
  period?: string;
  url?: string;
  summary: string;
  highlights?: string[];
  impact?: string;
  tags: string[];
  thumbnail?: string; // /projects/xxx.png
  logo?: string;      // /logos/xxx.png
  caseStudy?: string; // /work/xxx  (optional)
};

export const projects: Project[] = [
  {
    slug: "converse",
    title: "Nike (Converse Korea)",
    client: "Converse, Inc.",
    period: "Jan 2021 – May 2021",
    url: "https://www.converse.co.kr/",
    summary:
      "Built SSO, integrated SAP for inventory/accounting, and delivered raffle features tailored for high-demand drops.",
    highlights: [
      "End-to-end single sign-on (SSO)",
      "SAP integration (inventory & accounting)",
      "Raffle backend & frontend via APIs",
    ],
    impact: "Enabled stable high-traffic launches for limited releases.",
    tags: ["SSO", "SAP", "APIs", "High traffic"],
    thumbnail: "/projects/converse.png",
    logo: "/logos/converse.png",
    caseStudy: "/work/converse",
  },
  {
    slug: "cafe24-dev",
    title: "Cafe24 Developer Center",
    period: "May 2017 – Mar 2023",
    url: "https://developers.cafe24.com/",
    summary:
      "Core contributor to the open-API ecosystem: 300+ APIs, multi-lingual docs, and API reliability/control tower.",
    highlights: [
      "300+ APIs across commerce domains",
      "Changelog management & reliability ops",
      "Docs in English/Japanese/Korean",
    ],
    impact:
      "Launched an app-store model reducing customization costs by ~90% and growing market share by ~10%.",
    tags: ["APIs", "Platform", "Ecosystem", "Docs"],
    thumbnail: "/projects/cafe24-dev.png",
    logo: "/logos/cafe24-dev.png",
    caseStudy: "/work/cafe24-dev",
  },
  {
    slug: "spao",
    title: "E-Land (SPAO)",
    period: "Nov 2019 – May 2020",
    url: "https://spao.com/",
    summary:
      "Migrated e-commerce platform, introduced store-pickup delivery model, and implemented SSO.",
    highlights: ["Platform migration", "Pickup at local store (BOPIS)", "SSO across services"],
    impact: "Reduced delivery friction and supported omnichannel flows.",
    tags: ["Migration", "BOPIS", "SSO"],
    thumbnail: "/projects/spao.png",
    logo: "/logos/spao.png",
  },
  {
    slug: "olive-young",
    title: "CJ Olive Young (Global)",
    period: "Jan 2018 – Apr 2019",
    url: "https://global.oliveyoung.com/",
    summary:
      "Delivered APIs and integrated SAP for the first global version of the online store.",
    highlights: ["Global commerce APIs", "SAP integration"],
    impact: "Prepared the foundation for global expansion.",
    tags: ["APIs", "SAP", "Global"],
    thumbnail: "/projects/olive-young.png",
    logo: "/logos/olive-young.png",
  },
  {
    slug: "yg-select",
    title: "YG Entertainment",
    period: "Sep 2019 – Apr 2020",
    url: "https://en.ygselect.com/",
    summary:
      "Launched a new e-commerce site and implemented chatbot & high-traffic operations.",
    highlights: ["New e-commerce build", "Chatbot implementation"],
    impact: "Drove 35% of $430M annual revenue via album & merch sales.",
    tags: ["E-commerce", "Chatbot", "High traffic"],
    thumbnail: "/projects/yg-select.png",
    logo: "/logos/yg-select.png",
  },
  {
    slug: "smtown",
    title: "SM Entertainment",
    period: "Jan 2021 – May 2021",
    url: "https://global.shop.smtown.com/",
    summary:
      "Integrated chart sales between offline & online, implemented pre-order, and delivered SSO.",
    highlights: ["Chart data integration", "Pre-order system", "SSO"],
    impact: "Streamlined release operations across channels.",
    tags: ["Data integration", "Pre-order", "SSO"],
    thumbnail: "/projects/smtown.png",
    logo: "/logos/smtown.png",
  },
  {
    slug: "lamy",
    title: "LAMY",
    period: "Feb 2021 – Mar 2021",
    url: "https://lamyshop.kr/",
    summary: "Built a custom product configurator for personalized orders.",
    highlights: ["Configurator UX", "Order customization"],
    impact: "Increased perceived product value and AOV.",
    tags: ["Customization", "UX"],
    thumbnail: "/projects/lamy.png",
    logo: "/logos/lamy.png",
  },
  {
    slug: "dmall",
    title: "Dong-A Pharmaceutical (DMall)",
    period: "Jul 2019 – Dec 2019",
    url: "https://dmall.co.kr/",
    summary:
      "Bootstrapped e-commerce from scratch including design & development; built a referral system.",
    highlights: ["Greenfield build", "Referral backend & frontend"],
    impact: "Accelerated time-to-market for D2C channel.",
    tags: ["Greenfield", "Referral"],
    thumbnail: "/projects/dmall.png",
    logo: "/logos/dmall.png",
  },
];
