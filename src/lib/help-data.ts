export const helpData = [
  {
    serviceId: "ppc",
    serviceName: "PPC Management",
    serviceDesc: "Data-driven pay-per-click scaling.",
    painPoint: "High ad spend with low conversion rates.",
    outcome: "Scale ROAS and decrease Cost Per Acquisition.",
  },
  {
    serviceId: "seo",
    serviceName: "SEO Optimization",
    serviceDesc: "Technical & content-driven optimization.",
    painPoint: "Competitors consistently rank higher on Google.",
    outcome: "Dominate niche search terms with high-intent traffic.",
  },
  {
    serviceId: "web",
    serviceName: "Web Development",
    serviceDesc: "High-performance marketing platforms.",
    painPoint: "Website is slow, hard to manage, or looks outdated.",
    outcome: "A blazing-fast, premium marketing site.",
  },
  {
    serviceId: "software",
    serviceName: "Software Development",
    serviceDesc: "Custom apps and internal tools.",
    painPoint: "Internal operations rely on manual, broken processes.",
    outcome: "Custom software that automates 90% of manual work.",
  },
  {
    serviceId: "smm",
    serviceName: "Social Media Management",
    serviceDesc: "Organic community building & growth.",
    painPoint: "Zero organic presence or community engagement.",
    outcome: "A highly engaged social media following.",
  },
  {
    serviceId: "uiux",
    serviceName: "UI/UX Design",
    serviceDesc: "Premium interface and experience design.",
    painPoint: "High bounce rates and confusing user journeys.",
    outcome: "A world-class user interface that drives conversions.",
  },
  {
    serviceId: "lead",
    serviceName: "Lead Generation",
    serviceDesc: "Automated B2B outreach systems.",
    painPoint: "Sales pipeline is empty, lacking predictable B2B leads.",
    outcome: "Automated meeting booking with qualified prospects.",
  },
  {
    serviceId: "sales",
    serviceName: "Sales Tools Set-Up",
    serviceDesc: "CRM and pipeline architecture.",
    painPoint: "Closing takes too long and CRM data is a mess.",
    outcome: "A crystal-clear CRM architecture and short sales cycles.",
  },
] as const;

export type HelpServiceId = (typeof helpData)[number]["serviceId"];

export const helpServiceIds = helpData.map((item) => item.serviceId);
