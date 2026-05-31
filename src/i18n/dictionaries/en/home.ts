import type { HomeDictionary } from '@/i18n/types';

export const home: HomeDictionary = {
  homeHeader: {
    availability: 'Accepting new projects',
    titleLine1: 'Digital',
    titleLine2: 'Excellence.',
    description:
      'We are the agency merging minimalist design with cutting-edge engineering to build elite digital experiences.',
    cta: "Let's talk",
    modalTitle: 'Discovery Session',
    modalPhase: phase => `Phase ${phase} of 4`,
    contextTitle: 'Tell us about your context.',
    contextDescription:
      'Before we talk services, we want to understand your business reality.',
    q1: '1. What is the biggest bottleneck in your business right now?',
    q1Placeholder:
      'e.g. We get traffic, but no one converts. Or our sales cycle takes 6 months...',
    q2: '2. Where do you want the company to be in 12 months?',
    q2Placeholder:
      'e.g. Hit $1M ARR, completely automate lead gen, redesign the core product...',
    outcomesTitle: 'Select desired outcomes',
    outcomesDescription:
      'Which of these concrete results would help you achieve those goals?',
    planTitle: 'Your Action Plan',
    planDescription:
      'Based on your goals and desired outcomes, here are the exact services that map to your needs.',
    contactTitle: "Let's build this.",
    contactDescription:
      'Enter your details and our senior strategist will review your situation before we talk.',
    namePlaceholder: 'Full Name',
    emailPlaceholder: 'Work Email',
    companyPlaceholder: 'Company URL',
    back: 'Back',
    nextOutcomes: 'Next: Outcomes',
    analyzeMatches: 'Analyze Matches',
    continueContact: 'Continue to Contact',
    submitRequest: 'Submit Request',
    demoSubmitted: 'Submission received! (Demo)',
    match: 'Match',
    helpItems: [
      {
        serviceId: 'ppc',
        serviceName: 'PPC Management',
        serviceDesc: 'Data-driven pay-per-click scaling.',
        outcome: 'Scale ROAS and decrease Cost Per Acquisition.',
      },
      {
        serviceId: 'seo',
        serviceName: 'SEO Optimization',
        serviceDesc: 'Technical & content-driven optimization.',
        outcome: 'Dominate niche search terms with high-intent traffic.',
      },
      {
        serviceId: 'web',
        serviceName: 'Web Development',
        serviceDesc: 'High-performance marketing platforms.',
        outcome: 'A blazing-fast, premium marketing site.',
      },
      {
        serviceId: 'software',
        serviceName: 'Software Development',
        serviceDesc: 'Custom apps and internal tools.',
        outcome: 'Custom software that automates 90% of manual work.',
      },
      {
        serviceId: 'smm',
        serviceName: 'Social Media Management',
        serviceDesc: 'Organic community building & growth.',
        outcome: 'A highly engaged social media following.',
      },
      {
        serviceId: 'uiux',
        serviceName: 'UI/UX Design',
        serviceDesc: 'Premium interface and experience design.',
        outcome: 'A world-class user interface that drives conversions.',
      },
      {
        serviceId: 'lead',
        serviceName: 'Lead Generation',
        serviceDesc: 'Automated B2B outreach systems.',
        outcome: 'Automated meeting booking with qualified prospects.',
      },
      {
        serviceId: 'sales',
        serviceName: 'Sales Tools Set-Up',
        serviceDesc: 'CRM and pipeline architecture.',
        outcome: 'A crystal-clear CRM architecture and short sales cycles.',
      },
    ],
  },
  mainServices: {
    title: 'Core Services.',
    description:
      'Our focused expertise to accelerate your digital growth and operational efficiency.',
    cta: 'View All Capabilities',
    services: [
      {
        title: 'PPC',
        description:
          'Data-driven pay-per-click campaigns designed to maximize ROI, targeting the right audience at the perfect moment for your brand.',
      },
      {
        title: 'Web Development',
        description:
          'Ultra-fast, meticulously designed websites tailored for conversion, merging aesthetics with high-performance architectures.',
      },
      {
        title: 'Software Development',
        description:
          'Custom scalable applications and internal tools built from the ground up to solve complex business challenges securely.',
      },
      {
        title: 'On-Demand Lead Generation Systems',
        description:
          'Automated, predictable inbound lead engines that feed your sales pipeline 24/7 without manual prospecting.',
      },
    ],
  },
  why: {
    title: 'Why work\nwith us.',
    description:
      "We don't just deliver services; we build high-performance growth engines. Here is what sets our agency apart.",
    reasons: [
      {
        title: 'Data-Backed Strategies.',
        description:
          "We don't do guesswork. Every campaign, design choice, and line of code is driven by hard data and user behavior analysis to ensure predictable and scalable growth.",
      },
      {
        title: 'Uncompromising Quality.',
        description:
          'We believe in digital craftsmanship. No templates, no shortcuts. We build bespoke solutions that perform flawlessly and position your brand at the premium level.',
      },
      {
        title: 'True Partnership.',
        description:
          "We aren't just an agency; we act as an extension of your internal team. We offer transparent communication, aligned goals, and a shared commitment to dominating your market.",
      },
    ],
  },
  packages: {
    title: 'Engagement Models.',
    description:
      'Choose a standardized framework or build a bespoke engagement tailored precisely to your current scale and velocity.',
    levels: {
      foundation: 'Foundation',
      momentum: 'Momentum',
      apex: 'Apex',
      start: 'Start',
      medium: 'Medium',
      high: 'High',
      foundationDesc:
        'Essential digital infrastructure and core marketing initiatives designed for emerging brands ready to enter the market.',
      momentumDesc:
        'Aggressive growth strategies, advanced web development, and data-driven PPC scaling for operations gaining traction.',
      apexDesc:
        'Enterprise-grade solutions, omni-channel dominance, and dedicated elite teams for market leaders.',
      selectFoundation: 'Select Foundation',
      selectMomentum: 'Select Momentum',
      selectApex: 'Select Apex',
    },
    customLabel: 'Custom',
    customTitle: 'Make your own package',
    customDescription:
      "Don't fit into a box? Let's sit down and craft a completely bespoke retainer or project scope that aligns perfectly with your unique business logic, timeline, and internal resources.",
  },
  addons: {
    eyebrow: 'Enhancements',
    title: 'Add-On Services &\nGuarantees.',
    description:
      'Fortify any engagement model with enterprise-level security, dedicated top-tier human resources, and iron-clad SLAs.',
    items: [
      {
        title: 'SLA Guarantees',
        description:
          '99.9% guaranteed uptime and rigorous performance benchmarks, fully backed by financial penalties if we ever fall short.',
      },
      {
        title: 'Dedicated Account Manager',
        description:
          'A seasoned senior strategist acting as your single point of contact, ensuring perfect alignment, rapid execution, and complete transparency.',
      },
      {
        title: 'On-Page Engineer',
        description:
          'Direct access to elite technical talent for immediate architectural changes, custom code injections, and on-the-fly technical SEO.',
      },
      {
        title: 'Incident Response Time',
        description:
          'Guaranteed initial human response under 30 minutes for any critical issues, accessible via your direct priority communication channels.',
      },
      {
        title: 'Fast-Track Resolution Time',
        description:
          'Immediate priority queue placement ensuring that critical blockers are fully diagnosed and resolved, typically within 2-4 hours.',
      },
    ],
  },
  tiers: {
    eyebrow: 'Lightning Tiers',
    title: 'Collaboration Tiers.',
    description:
      'There are no published requirements. No public spending thresholds, and no minimum tenure to track. We monitor the partnership continuously. When the trust and scale reach their peak, you will be seamlessly upgraded.',
    levelOne: 'Level 01',
    levelTwo: 'Level 02',
    goldTitle: 'Gold Tier',
    goldDescription:
      'Priority access to experimental growth channels, significantly reduced retainer margins, and exclusive invitations to our private mastermind events.',
    platinumTitle: 'Platinum Tier',
    platinumDescription:
      'The absolute apex of our partnership. Zero-margin pass-through costs, dedicated board-level advisory, and complete operational integration.',
    status: 'Status',
    locked: 'Locked',
  },
  faq: {
    title: 'Frequently Asked.',
    items: [
      {
        question: 'Do you offer white-label services?',
        answer:
          'No. We believe in direct partnerships and total transparency. We work exclusively as an extension of your internal team, not as a hidden vendor behind another agency.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'We define success through concrete revenue growth and pipeline velocity, not vanity metrics like impressions or clicks. Every digital initiative we deploy is tied directly to your bottom line.',
      },
      {
        question: 'What is your typical onboarding timeline?',
        answer:
          'Our standard onboarding takes precisely 14 days from contract execution to full operational integration. This covers in-depth technical audits, access provisioning, and strategic alignment.',
      },
      {
        question: 'Do you work with early-stage startups?',
        answer:
          'We partner strictly with companies that have achieved clear product-market fit and are ready to scale rapidly. If you are in the pre-seed validation phase, our infrastructure might be too heavy for your current needs.',
      },
    ],
  },
  newsletter: {
    eyebrow: 'The Insight',
    title: 'Weekly intelligence.',
    description:
      'Join 5,000+ industry leaders who receive our unfiltered thoughts on digital scaling, technical execution, and agency operations.',
    placeholder: 'name@company.com',
    saving: 'Saving...',
    submit: 'Subscribe',
    error: 'The subscription could not be saved.',
    success: 'You are on the approved insight list.',
    note: 'No spam. Unsubscribe at any time.',
  },
};
