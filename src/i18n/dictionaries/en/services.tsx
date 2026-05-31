import React from 'react';
import type { ServicesDictionary } from '@/i18n/types';

export const services: ServicesDictionary = {
  ppc: {
    hero: {
      eyebrow: 'Performance Marketing',
      titleLine1: 'Data-Driven',
      titleLine2: 'PPC Scaling.',
      description:
        'We engineer high-converting paid search and social campaigns. Maximizing return on ad spend through rigorous optimization.',
      cta: 'Audit my account',
    },
    painPoints: {
      title: 'From Chaos to Predictability.',
      description:
        'Most ad accounts we audit are leaking budget through structural flaws. We replace guesswork with mathematical certainty.',
      realityTitle: 'Common Reality',
      standardTitle: 'The LightningRevenue Standard',
      painPoints: [
        'Burning cash on broad, unqualified clicks.',
        'Impossible to track exact ROI per keyword or campaign.',
        'Competitors with bigger budgets stealing your top positions.',
        'Low conversion rates despite high traffic volumes.',
      ],
      outcomes: [
        'Hyper-targeted campaigns capturing pure high-intent buyers.',
        'Granular tracking where every dollar of revenue is traced to its origin.',
        'Dominating the exact search terms that matter, efficiently outbidding giants.',
        'Synchronized landing page optimizations that turn clicks into booked calls.',
      ],
    },
    about: {
      title: 'The Anatomy of Correct PPC.',
      description:
        'We do not just run ads. We engineer financial engines. Every campaign is built to lower your Customer Acquisition Cost while scaling your volume.',
      cards: [
        {
          title: 'Immediate Traction',
          desc: 'Unlike organic methods that take months, properly structured PPC campaigns put your offer at the top of Page 1 instantly. Capture high-intent traffic the day we launch.',
        },
        {
          title: 'Hyper-Targeted Audiences',
          desc: 'We target users based on precise search intent, specific competitor interests, B2B job titles, or exact firmographic data.',
        },
        {
          title: 'Complete Cost Control',
          desc: 'Every dollar is tracked down to the exact keyword that generated the sale. You have complete transparency over your daily budgets.',
        },
        {
          title: 'A/B Tested Creatives',
          desc: 'We run dozens of micro-variations of ad copy, headlines, and visuals simultaneously. The data tells us exactly what makes your audience click.',
        },
        {
          title: 'Retargeting Architecture',
          desc: 'We build aggressive, cross-platform retargeting funnels that keep qualified users moving until they convert.',
        },
        {
          title: 'Data-Driven Scaling',
          desc: 'Once we establish a profitable Return on Ad Spend, we systemically increase the budget. You buy revenue, not just clicks.',
        },
      ],
      highlightEyebrow: 'The LightningRevenue Standard',
      highlightTitle: 'How much can you grow with elite PPC?',
      highlightDescription: (
        <>
          When conversion tracking is flawless, creatives are rigorously tested,
          and bidding strategies are automated through machine learning, the
          results are exponential. A properly audited and restructured PPC
          account typically sees a{' '}
          <strong className="text-white font-medium">
            300% increase in qualified lead volume
          </strong>{' '}
          within the first 60 days, while simultaneously dropping the Cost Per
          Acquisition.
        </>
      ),
      stats: [
        { value: '300%', label: 'More Leads' },
        { value: '-40%', label: 'Lower CPA' },
      ],
    },
    advanced: {
      eyebrow: 'Advanced Toolkit',
      title: 'Beyond standard campaigns.',
      description:
        'We move past basic keyword targeting by integrating custom scripts, server-side tracking, and multi-channel attribution.',
      features: [
        {
          title: 'Precision Geo-Fencing',
          description:
            'We deploy hyper-local geofencing to intercept high-value traffic around competitor headquarters, industry conferences, or precise zip codes.',
        },
        {
          title: 'Server-Side Tracking (CAPI)',
          description:
            'We build server-to-server data pipelines to feed advertising algorithms with accurate conversion data despite ad blockers and privacy restrictions.',
        },
        {
          title: 'Predictive Bid Automation',
          description:
            'Custom scripts manipulate bids in real time based on external signals, business hours, market behavior, or local context.',
        },
        {
          title: 'Multi-Touch Attribution',
          description:
            'We track the user journey across Google, Meta, and LinkedIn to identify the exact touchpoint mix that drives revenue.',
        },
      ],
    },
    contact: {
      title: 'Request a Free Account Audit.',
      description:
        'Our senior engineers will dive into your setup and find exact points of leverage.',
      formTitle: 'Audit Application',
      phaseLabel: phase => `Phase ${phase} of 4`,
      challengeTitle: "What's the main issue?",
      challengeDescription:
        "Before we look at the numbers, tell us what's hurting your growth.",
      challengePlaceholder:
        'e.g. We get traffic, but CPAs are too high and lead quality is dropping...',
      spendTitle: 'Monthly Ad Spend',
      spendDescription:
        'This helps us assign the right strategist to your audit.',
      spendOptions: [
        'Under $5,000',
        '$5,000 - $20,000',
        '$20,000 - $50,000',
        '$50,000+',
      ],
      websiteTitle: 'Where is traffic going?',
      websiteDescription:
        'Drop your main URL or landing page so we can review the funnel.',
      websitePlaceholder: 'https://yourcompany.com',
      contactTitle: 'Where should we send it?',
      contactDescription:
        'We will review your setup and email you a direct video breakdown.',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Work Email',
      back: 'Back',
      nextStep: 'Next Step',
      submitting: 'Submitting...',
      submit: 'Request Audit',
      error: 'The request could not be submitted.',
      success: 'Request submitted.',
    },
    faq: {
      title: 'PPC Logistics.',
      items: [
        {
          question: 'How much budget do I need to start?',
          answer:
            'We typically require a minimum monthly ad spend of $5,000. This gives tests enough statistical significance and gives ad algorithms enough data to optimize efficiently.',
        },
        {
          question: 'How long until we see a positive ROAS?',
          answer:
            'We often see quick wins within the first 14 days from structural fixes, while true algorithmic maturity and scaled profitability usually appear between days 45 and 60.',
        },
        {
          question: 'Do you manage the creative assets too?',
          answer:
            'Yes. We manage bids, copy, creative variations, and testing protocols so the message matches search intent and audience behavior.',
        },
        {
          question: 'What happens if a campaign underperforms?',
          answer:
            'Underperforming ads are identified and paused before they drain budget. Funds are reallocated quickly to winning variations.',
        },
      ],
    },
  },
  seo: {
    hero: {
      eyebrow: 'Search Engine Optimization',
      titleLine1: 'Technical',
      titleLine2: 'SEO.',
      description:
        'We engineer high-performance SEO architectures. Dominating organic search through technical excellence and authoritative content.',
      cta: 'Audit my site',
    },
    painPoints: {
      title: 'From Obscurity to Authority.',
      description:
        'Most SEO campaigns are built on blind guesswork and vanity metrics. We engineer authoritative search architectures that drive actual revenue.',
      realityTitle: 'Common Reality',
      standardTitle: 'The LightningRevenue Standard',
      painPoints: [
        'Paying for organic traffic that never converts into actual pipeline.',
        'Getting penalized by algorithm updates due to shady, outdated tactics.',
        'Publishing endless blog posts that nobody actually searches for or reads.',
        'Ranking for vanity keywords with absolutely zero commercial intent.',
      ],
      outcomes: [
        'Capturing high-intent, bottom-of-funnel buyers actively seeking solutions.',
        'Building an ironclad technical foundation immune to core algorithm penalties.',
        'Deploying content clusters that systematically dominate entire industry topics.',
        'Ranking for search terms that have a direct, measurable impact on revenue.',
      ],
    },
    about: {
      title: 'The Anatomy of Correct SEO.',
      description:
        'We do not just build links or write generic blogs. We engineer organic authority. Every piece of content and line of code is optimized to capture pure search intent.',
      cards: [
        {
          title: 'Technical Foundation',
          desc: 'Before scaling content, we fix the code. We eliminate crawl errors, optimize core web vitals, and implement schema markup so Google understands your site.',
        },
        {
          title: 'Intent Mapping',
          desc: 'We map every keyword to a specific stage of the buyer journey and target commercial intent, not vanity volume.',
        },
        {
          title: 'Content Clusters',
          desc: 'Instead of random blog posts, we build interconnected clusters around pillar topics to signal topical authority.',
        },
        {
          title: 'On-Page NLP',
          desc: 'We optimize semantic entities and phrasing so your content matches what search systems expect for top rankings.',
        },
        {
          title: 'Editorial Backlinks',
          desc: 'No spammy links. We execute manual PR outreach to secure authoritative backlinks in your specific industry.',
        },
        {
          title: 'Iterative Decay Updates',
          desc: 'We monitor rankings and refresh older content proactively so strong pages keep their position over time.',
        },
      ],
      highlightEyebrow: 'The LightningRevenue Standard',
      highlightTitle: 'How much can you grow with elite SEO?',
      highlightDescription: (
        <>
          When technical foundations are flawless and content aligns with search
          intent, organic traffic becomes a compounding asset. A properly
          architected SEO strategy typically yields a{' '}
          <strong className="text-white font-medium">
            400% increase in non-branded organic traffic
          </strong>{' '}
          within 6 months, while reducing long-term dependence on paid
          acquisition.
        </>
      ),
      stats: [
        { value: '400%', label: 'More Traffic' },
        { value: 'Zero', label: 'Ad Spend' },
      ],
    },
    advanced: {
      eyebrow: 'Advanced Toolkit',
      title: 'Beyond basic content.',
      description:
        'We move past surface-level blogging by integrating programmatic SEO, advanced schema logic, and dynamic rendering solutions.',
      features: [
        {
          title: 'Programmatic SEO',
          description:
            'Deploy targeted landing pages at scale to capture long-tail commercial search intent across locations, industries, or product variables.',
        },
        {
          title: 'Dynamic Rendering Logic',
          description:
            'Make JavaScript-heavy frameworks crawlable and indexable without sacrificing user experience or frontend speed.',
        },
        {
          title: 'Advanced Schema Architectures',
          description:
            'Inject nested JSON-LD structured data to win rich snippets, knowledge panels, and product carousel placements.',
        },
        {
          title: 'Server Log File Analysis',
          description:
            'Analyze raw server logs to see how Googlebot interacts with your site and remove crawl traps, orphan pages, and redirect loops.',
        },
      ],
    },
    contact: {
      title: 'Request a Technical SEO Audit.',
      description:
        'Our senior engineers will crawl your site and identify exact points of leverage.',
      formTitle: 'Audit Application',
      phaseLabel: phase => `Phase ${phase} of 4`,
      challengeTitle: "What's the main SEO issue?",
      challengeDescription:
        "Before we look at the code, tell us what's hurting your organic growth.",
      challengePlaceholder:
        'e.g. We lost traffic after the last core update, or we rank well but get zero leads...',
      spendTitle: 'Monthly Marketing Budget',
      spendDescription:
        'This helps us assign the right technical strategist to your audit.',
      spendOptions: [
        'Under $5,000',
        '$5,000 - $15,000',
        '$15,000 - $30,000',
        '$30,000+',
      ],
      websiteTitle: 'Where should we crawl?',
      websiteDescription:
        'Drop your main URL so we can run an initial technical analysis.',
      websitePlaceholder: 'https://yourcompany.com',
      contactTitle: 'Where should we send it?',
      contactDescription:
        'We will crawl your setup and email you a direct video breakdown.',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Work Email',
      back: 'Back',
      nextStep: 'Next Step',
      submitting: 'Submitting...',
      submit: 'Request Audit',
      error: 'The request could not be submitted.',
      success: 'Request submitted.',
    },
    faq: {
      title: 'SEO Logistics.',
      items: [
        {
          question: 'How long does SEO actually take?',
          answer:
            'SEO is a compounding long-term asset. We usually see crawl and ranking improvements in the first 45 days, while meaningful pipeline tends to scale between months 4 and 6.',
        },
        {
          question: 'Do you guarantee first-page rankings?',
          answer:
            'No credible agency guarantees specific rankings. We guarantee technical execution, editorial link acquisition, and content that matches search intent.',
        },
        {
          question: 'Who writes the actual content?',
          answer:
            'Our editorial team works with your subject matter experts to produce authoritative, technically accurate content that demonstrates real expertise.',
        },
        {
          question: 'What happens during a Google Core Update?',
          answer:
            'Because we build on technical excellence and white-hat authority, clients are positioned to withstand updates without relying on temporary loopholes.',
        },
      ],
    },
  },
  webDevelopment: {
    hero: {
      eyebrow: 'Web Design & Development',
      titleLine1: 'Digital',
      titleLine2: 'Experiences.',
      description:
        'We build high-performance web applications and marketing sites. Marrying world-class aesthetic design with modern, scalable code.',
      cta: 'Plan my build',
    },
    painPoints: {
      title: 'From Templates to Architecture.',
      description:
        'Most websites are just digital brochures built on slow, outdated frameworks. We engineer high-performance applications that drive actual business outcomes.',
      realityTitle: 'Common Reality',
      standardTitle: 'The LightningRevenue Standard',
      painPoints: [
        'Slow, bloated templates that ruin user experience and kill conversion rates.',
        'Spaghetti code that breaks every time you try to add a simple new feature.',
        'Beautiful designs that completely ignore SEO and technical fundamentals.',
        'Freelancers who go silent for weeks and miss critical launch deadlines.',
      ],
      outcomes: [
        'Lightning-fast Next.js architectures built for sub-second page loads.',
        'Clean, modular codebases that scale effortlessly as your business grows.',
        'Pixel-perfect implementations where design, performance, and SEO coexist.',
        'Transparent, agile sprints with senior engineers communicating daily.',
      ],
    },
    about: {
      title: 'The Anatomy of Elite Web Dev.',
      description:
        'We do not just make websites. We engineer digital products. Every line of code is optimized for speed, scalability, and a flawless user experience.',
      cards: [
        { title: 'Modern Tech Stack', desc: 'We build on Next.js, React, and Tailwind CSS so your application is fast, secure, and ready to scale.' },
        { title: 'Headless CMS', desc: 'We integrate Sanity or Contentful so marketing can edit content while developers keep full code control.' },
        { title: 'Conversion UX/UI', desc: 'Every interface is designed to drive action with a frictionless user journey.' },
        { title: 'Core Web Vitals', desc: 'We optimize images, caching, and main-thread work to keep Lighthouse and real-user performance strong.' },
        { title: 'Custom Integrations', desc: 'We connect your platform with HubSpot, Salesforce, ERPs, payment flows, or bespoke APIs.' },
        { title: 'Security & Compliance', desc: 'Enterprise-grade patterns, hardened infrastructure, dependency hygiene, and practical security controls.' },
      ],
      highlightEyebrow: 'The LightningRevenue Standard',
      highlightTitle: 'How much can you grow with a performance site?',
      highlightDescription: (
        <>
          When a website loads instantly and the user experience is
          frictionless, conversion rates naturally climb. A properly
          re-architected Next.js platform typically yields a{' '}
          <strong className="text-white font-medium">
            60% increase in mobile conversion rates
          </strong>{' '}
          within the first month, while reducing acquisition costs on paid
          channels.
        </>
      ),
      stats: [
        { value: '60%', label: 'Higher CVR' },
        { value: '< 1s', label: 'Load Time' },
      ],
    },
    advanced: {
      eyebrow: 'Advanced Engineering',
      title: 'Beyond basic templates.',
      description:
        'We move past monolithic systems by integrating headless architectures, serverless functions, and real-time data synchronization.',
      features: [
        { title: 'Headless Commerce', description: 'Decouple Shopify or BigCommerce backends and build fast custom React storefronts without platform limitations.' },
        { title: 'Serverless Edge Computing', description: 'Deploy code to the edge through Vercel or AWS Lambda for low-latency global rendering.' },
        { title: 'Real-Time Data Pipelines', description: 'Integrate WebSockets and custom APIs for dashboards, chat, inventory, and dynamic interfaces.' },
        { title: 'Automated E2E Testing', description: 'Implement end-to-end tests so critical funnels, forms, and checkouts do not break in production.' },
      ],
    },
    contact: {
      title: 'Request a Technical Scoping.',
      description:
        'Our senior engineers will review your requirements and map out the exact architecture needed.',
      formTitle: 'Project Application',
      phaseLabel: phase => `Phase ${phase} of 4`,
      challengeTitle: "What's the main challenge?",
      challengeDescription:
        "Tell us what you're trying to build or what's broken with your current setup.",
      challengePlaceholder:
        'e.g. We need to migrate off a slow WordPress site to a headless Next.js architecture...',
      spendTitle: 'Project Budget',
      spendDescription:
        'This helps us propose the right architectural solutions for your scale.',
      spendOptions: ['Under $10k', '$10k - $25k', '$25k - $50k', '$50k+'],
      websiteTitle: 'Current Site / Inspiration',
      websiteDescription:
        'Drop your current URL or a link to a site with functionality you admire.',
      websitePlaceholder: 'https://yourcompany.com',
      contactTitle: 'Where should we send it?',
      contactDescription:
        'We will review your brief and email you a direct video breakdown.',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Work Email',
      back: 'Back',
      nextStep: 'Next Step',
      submitting: 'Submitting...',
      submit: 'Submit Brief',
      error: 'The request could not be submitted.',
      success: 'Request submitted.',
    },
    faq: {
      title: 'Development Logistics.',
      items: [
        { question: 'What tech stack do you use?', answer: 'We primarily build modern headless architectures using Next.js, React, and Tailwind CSS, with Sanity, Shopify, or custom Node.js APIs depending on the project.' },
        { question: 'How long does a custom build take?', answer: 'A high-performance marketing site typically takes 4-6 weeks. Complex web applications or headless commerce builds usually range from 8 to 12 weeks.' },
        { question: 'Do you provide ongoing maintenance?', answer: 'Yes. We offer SLA-backed retainers for monitoring, dependency updates, performance tuning, and continuous optimization.' },
        { question: 'Who owns the code?', answer: 'You do. Upon final payment, source code, repositories, assets, and intellectual property are transferred to your organization.' },
      ],
    },
  },
  softwareDevelopment: {
    hero: {
      eyebrow: 'Software Engineering',
      titleLine1: 'Custom',
      titleLine2: 'Systems.',
      description:
        'We engineer bespoke software applications and scalable architectures. Turning complex business logic into reliable, secure, cloud-native products.',
      cta: 'Scope project',
    },
    painPoints: {
      title: 'From Limitations to Infrastructure.',
      description:
        'Most businesses are bottlenecked by legacy systems or rigid third-party tools. We build custom software that becomes your greatest competitive moat.',
      realityTitle: 'Common Reality',
      standardTitle: 'The LightningRevenue Standard',
      painPoints: [
        'Relying on off-the-shelf SaaS that forces you to change your business logic.',
        'Drowning in technical debt from legacy codebases that nobody wants to touch.',
        "Suffering from critical data silos because your core systems can't communicate.",
        'Hiring agencies that over-promise and deliver buggy, unscalable MVPs.',
      ],
      outcomes: [
        'Bespoke applications engineered perfectly around your exact operational workflows.',
        'Clean, heavily documented, modern codebases designed for long-term maintainability.',
        'Seamless API architectures that connect your entire business intelligence stack.',
        'Rigorous QA testing and CI/CD pipelines ensuring completely flawless deployments.',
      ],
    },
    about: {
      title: 'The Anatomy of Custom Systems.',
      description:
        'We do not hack together quick scripts. We engineer enterprise-grade software. Every component is designed for strict security, high concurrency, and long-term maintainability.',
      cards: [
        { title: 'Enterprise Tech Stack', desc: 'We build resilient systems using Node.js, Go, Python, and React, so the backend handles concurrency while the frontend stays smooth.' },
        { title: 'Cloud Architecture', desc: 'We deploy scalable, fault-tolerant infrastructure on AWS or Google Cloud with auto-scaling and managed databases.' },
        { title: 'Microservices & APIs', desc: 'We break down monoliths into robust REST and GraphQL APIs for internal teams and external partners.' },
        { title: 'CI/CD Pipelines', desc: 'We automate delivery pipelines so teams can release code safely, repeatedly, and without manual deployment risk.' },
        { title: 'Security by Design', desc: 'We implement zero-trust patterns, JWT authentication, encryption at rest, and automated vulnerability scanning.' },
        { title: 'Automated QA', desc: 'We write unit, integration, and end-to-end tests so critical bugs are caught before production.' },
      ],
      highlightEyebrow: 'The LightningRevenue Standard',
      highlightTitle: 'How reliable is elite architecture?',
      highlightDescription: (
        <>
          When business-critical software goes offline, revenue stops
          immediately. With Kubernetes orchestration, auto-scaling cloud
          infrastructure, and strict CI/CD pipelines, custom platforms can be
          engineered toward{' '}
          <strong className="text-white font-medium">99.99% uptime</strong>{' '}
          and zero operational data loss.
        </>
      ),
      stats: [
        { value: '99.99%', label: 'Uptime' },
        { value: '0%', label: 'Data Loss' },
      ],
    },
    advanced: {
      eyebrow: 'Advanced Engineering',
      title: 'Beyond standard applications.',
      description:
        'We engineer deep-tech solutions by integrating Kubernetes orchestration, AI logic, and asynchronous event-driven architectures.',
      features: [
        { title: 'Kubernetes Orchestration', description: 'Containerize applications with Docker and manage them with Kubernetes so specific microservices can scale during traffic spikes.' },
        { title: 'Machine Learning Integration', description: 'Connect custom software to LLMs or deploy proprietary Python-based ML models directly into production pipelines.' },
        { title: 'Event-Driven Architectures', description: 'Use Apache Kafka or AWS EventBridge to build resilient systems that react instantly to data changes.' },
        { title: 'Big Data ETL Pipelines', description: 'Engineer ETL workflows that move large datasets into structured warehouses like Snowflake.' },
      ],
    },
    contact: {
      title: 'Request an Architecture Scoping.',
      description:
        'Our systems architects will review your business logic and map out the exact infrastructure needed.',
      formTitle: 'Technical Scoping',
      phaseLabel: phase => `Phase ${phase} of 4`,
      challengeTitle: "What's the core challenge?",
      challengeDescription:
        'Describe the business problem, the bottleneck, or the system you need built.',
      challengePlaceholder:
        'e.g. We need to build a custom internal dashboard that pulls data from 3 different APIs...',
      spendTitle: 'Project Budget Tier',
      spendDescription:
        'This determines the scale of the team and architecture we can deploy.',
      spendOptions: ['Under $25k', '$25k - $50k', '$50k - $150k', '$150k+'],
      websiteTitle: 'Current Tech Stack',
      websiteDescription:
        'Are there any specific languages, databases, or cloud providers we must integrate with?',
      websitePlaceholder: 'e.g. AWS, PostgreSQL, React, Python...',
      contactTitle: 'Where should we send the proposal?',
      contactDescription:
        'We will review your brief and email you a direct video breakdown.',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Work Email',
      back: 'Back',
      nextStep: 'Next Step',
      submitting: 'Submitting...',
      submit: 'Submit Brief',
      error: 'The request could not be submitted.',
      success: 'Request submitted.',
    },
    faq: {
      title: 'Engineering Logistics.',
      items: [
        { question: 'Do you take over existing legacy codebases?', answer: 'Yes, but only after a rigorous technical audit. If debt is severe, we recommend a gradual rewrite pattern instead of building on a broken foundation.' },
        { question: 'What development methodology do you use?', answer: 'We work in agile sprints with clear delivery checkpoints, daily progress notes, and transparent backlog management.' },
        { question: 'How do you handle security and data compliance?', answer: 'Security is designed from day one through encryption, access controls, vulnerability scanning, and deployment checks.' },
        { question: 'Do we own the intellectual property?', answer: 'Yes. After final invoice settlement, source code, architecture diagrams, cloud environments, and IP are transferred to your company.' },
      ],
    },
  },
  uiUx: {
    hero: {
      eyebrow: 'UI/UX Design',
      titleLine1: 'Conversion',
      titleLine2: 'Architecture.',
      description:
        'We do not just make things look pretty. We engineer psychological flows, marrying world-class aesthetics with frictionless user journeys to drive revenue.',
      cta: 'Audit my UX',
    },
    painPoints: {
      title: 'From Art to Engineering.',
      description:
        'Most agencies create pretty pictures. We build high-conversion digital products, eliminating friction and engineering trust at every touchpoint.',
      realityTitle: 'Common Reality',
      standardTitle: 'The LightningRevenue Standard',
      painPoints: [
        '"Gorgeous" designs that confuse users, leading to sky-high bounce rates and zero conversions.',
        'Template-based interfaces that make your premium brand look exactly like every cheap competitor.',
        'Ignoring mobile users, resulting in broken experiences on the devices that matter most.',
        'Design decisions based on artistic feeling instead of behavioral analytics.',
      ],
      outcomes: [
        'Interfaces engineered around behavioral psychology to naturally guide users toward action.',
        'Bespoke design systems that instantly establish your brand as the premium authority.',
        'Mobile-first architectures with native-app-like experiences on every screen size.',
        'A/B testing and heat-map analysis to validate every important design decision.',
      ],
    },
    about: {
      title: 'The Anatomy of Elite UI/UX.',
      description:
        'Every pixel serves a purpose. We combine psychological principles with rigorous data analysis to build interfaces that feel effortless and convert ruthlessly.',
      cards: [
        { title: 'Behavioral Psychology', desc: 'We design for human cognitive patterns. Button placement, contrast, and hierarchy are chosen to drive specific actions.' },
        { title: 'Wireframing & Prototyping', desc: 'We map user journeys in Figma before code is written, validating flows without technical debt.' },
        { title: 'Micro-Interactions', desc: 'We add subtle feedback and motion that make products feel responsive, premium, and easier to understand.' },
        { title: 'Design Systems', desc: 'We build tokenized component libraries so your brand remains consistent as the product scales.' },
        { title: 'WCAG Accessibility', desc: 'We design for contrast, screen readers, keyboard navigation, and inclusive access across the platform.' },
        { title: 'Conversion Rate Optimization', desc: 'We use heatmaps, A/B tests, and behavioral data to improve landing pages and key flows.' },
      ],
      highlightEyebrow: 'The LightningRevenue Standard',
      highlightTitle: 'How much revenue is hidden in bad design?',
      highlightDescription: (
        <>
          When users are confused, they leave. When an interface feels premium
          and intuitive, trust rises quickly. A properly architected UX redesign
          typically yields a{' '}
          <strong className="text-white font-medium">
            35% higher checkout conversion rate
          </strong>{' '}
          within the first 60 days while unifying visual identity across every
          platform.
        </>
      ),
      stats: [
        { value: '35%', label: 'Higher CVR' },
        { value: '100%', label: 'Consistency' },
      ],
    },
    advanced: {
      eyebrow: 'Advanced Methodologies',
      title: 'Beyond basic mockups.',
      description:
        'We move past standard wireframes by integrating biometric testing, immersive 3D web technologies, and predictive user experiences.',
      features: [
        { title: 'Biometric User Testing', description: 'Use eye-tracking and facial coding software to understand where users look and how they react emotionally.' },
        { title: '3D & WebGL Integration', description: 'Implement Spline or Three.js experiences for immersive, interactive product showcases.' },
        { title: 'Predictive UX Automation', description: 'Use machine learning logic to adapt content and interface states based on user behavior and inferred intent.' },
        { title: 'Heuristic Evaluations', description: "Audit interfaces against Jakob Nielsen's usability principles to remove cognitive friction." },
      ],
    },
    contact: {
      title: 'Request a UX Audit.',
      description:
        'Our lead designers will review your current interface and map out a high-conversion architecture.',
      formTitle: 'Design Scoping',
      phaseLabel: phase => `Phase ${phase} of 4`,
      challengeTitle: "What's the main interface issue?",
      challengeDescription:
        'Tell us what is broken about the current user experience or brand aesthetic.',
      challengePlaceholder:
        'e.g. Users keep dropping off at checkout, or our app looks like it was built in 2012...',
      spendTitle: 'Design Budget',
      spendDescription:
        'This determines the depth of the design system and prototyping we can deploy.',
      spendOptions: ['Under $5k', '$5k - $10k', '$10k - $25k', '$25k+'],
      websiteTitle: 'Current App/Site URL',
      websiteDescription:
        'Drop a link to your current platform or a Figma file if you have one.',
      websitePlaceholder: 'https://yourcompany.com',
      contactTitle: 'Where should we send the audit?',
      contactDescription:
        'We will review your interface and email you a direct video breakdown.',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Work Email',
      back: 'Back',
      nextStep: 'Next Step',
      submitting: 'Submitting...',
      submit: 'Request Audit',
      error: 'The request could not be submitted.',
      success: 'Request submitted.',
    },
    faq: {
      title: 'Design Logistics.',
      items: [
        { question: 'What software do you use?', answer: 'Figma is our source of truth for wireframing, prototyping, and design systems. We also use Spline for 3D web elements and behavioral tools after launch.' },
        { question: 'Do you also write the code?', answer: 'Yes. We can hand off Figma files, but our design team also works directly with engineering to preserve fidelity through implementation.' },
        { question: 'How many revisions do we get?', answer: 'We work in agile review cycles instead of arbitrary revision limits, so feedback is handled continuously throughout the project.' },
        { question: 'Can you just redesign one page?', answer: 'Sometimes, but UX is holistic. A single landing page rarely fixes a broken funnel, so we prefer to review the full journey.' },
      ],
    },
  },
  smm: {
    hero: {
      eyebrow: 'Social Media Management',
      titleLine1: 'Brand',
      titleLine2: 'Authority.',
      description:
        'We do not just post content. We engineer attention, building viral ecosystems and durable communities across every digital frontier.',
      cta: 'Audit my brand',
    },
    painPoints: {
      title: 'From Noise to Dominance.',
      description:
        'Most brands are invisible on social media. We engineer content frameworks that work with algorithms and monopolize attention in your niche.',
      realityTitle: 'Common Reality',
      standardTitle: 'The LightningRevenue Standard',
      painPoints: [
        'Posting generic corporate content that gets no engagement and weakens brand perception.',
        'Treating every platform the same while ignoring the algorithmic differences between TikTok, Instagram, and LinkedIn.',
        'Chasing vanity metrics that never translate into pipeline or revenue.',
        'Inconsistent posting schedules that cause algorithms to bury organic reach.',
      ],
      outcomes: [
        "Scroll-stopping, high-retention content that fits each platform's native culture.",
        'Platform-specific strategies aligned with current distribution rules.',
        'Social funnels designed to turn raw attention into qualified leads.',
        'A consistent content engine that keeps the brand visible throughout the year.',
      ],
    },
    about: {
      title: 'The Anatomy of Viral Growth.',
      description:
        'We do not rely on luck. Virality is a system. Every post is engineered to maximize retention, trigger distribution, and drive measurable revenue.',
      cards: [
        { title: 'Short-Form Dominance', desc: 'We script, edit, and distribute high-retention TikTok, Reels, and Shorts content that earns organic reach.' },
        { title: 'Platform-Native Copywriting', desc: 'No copy-paste posting. LinkedIn, X, Instagram, and TikTok each get content written for their audience and format.' },
        { title: 'Algorithmic Trend Hacking', desc: 'We monitor micro-trends, audio signals, and platform changes so your brand can move before competitors react.' },
        { title: 'Community Management', desc: 'We manage comments, DMs, and conversations so viewers turn into active community members.' },
        { title: 'Influencer Seeding', desc: 'We identify and negotiate with niche creators who can amplify your message through trusted third-party voices.' },
        { title: 'Content Repurposing Engine', desc: 'We turn one core asset into many optimized micro-assets for distribution across every relevant channel.' },
      ],
      highlightEyebrow: 'The LightningRevenue Standard',
      highlightTitle: 'How fast can you scale with organic attention?',
      highlightDescription: (
        <>
          When a brand stops posting corporate filler and starts delivering
          platform-native value, algorithms reward it. A properly managed
          social ecosystem typically sees a{' '}
          <strong className="text-white font-medium">
            10x multiplier in organic reach
          </strong>{' '}
          within 90 days, followed by stronger direct community engagement.
        </>
      ),
      stats: [
        { value: '10x', label: 'Organic Reach' },
        { value: '300%', label: 'Engagement' },
      ],
    },
    advanced: {
      eyebrow: 'Advanced Distribution',
      title: 'Beyond basic posting.',
      description:
        'We move past standard content calendars by integrating employee advocacy, creator whitelisting, and advanced social listening APIs.',
      features: [
        { title: 'Social Listening APIs', description: 'Monitor brand sentiment and intercept competitor complaints in real time to find users actively looking for your solution.' },
        { title: 'Employee Advocacy Programs', description: 'Turn leadership and internal teams into a synchronized LinkedIn distribution network without relying only on ad spend.' },
        { title: 'Micro-Targeted Whitelisting', description: 'Run paid social campaigns through creator handles to increase trust and reduce acquisition costs.' },
        { title: 'Cross-Platform Pixel Tracking', description: 'Map journeys from organic social views to closed deals so social contribution is measurable.' },
      ],
    },
    contact: {
      title: 'Request a Content Audit.',
      description:
        'Our creative directors will review your current social presence and map out a viral growth framework.',
      formTitle: 'Audit Application',
      phaseLabel: phase => `Phase ${phase} of 4`,
      challengeTitle: "What's the main social struggle?",
      challengeDescription:
        "Before we look at the feeds, tell us what's hurting your organic growth.",
      challengePlaceholder:
        "e.g. We post constantly on LinkedIn but get no engagement, or we want to launch TikTok but don't know how...",
      spendTitle: 'Monthly SMM Budget',
      spendDescription:
        'This determines the volume of content production we can deploy.',
      spendOptions: [
        'Under $2,500',
        '$2,500 - $5,000',
        '$5,000 - $10,000',
        '$10,000+',
      ],
      websiteTitle: 'Where is your main audience?',
      websiteDescription:
        'Drop a link to your primary social profile, such as LinkedIn, TikTok, or Instagram.',
      websitePlaceholder: 'https://linkedin.com/company/yourbrand',
      contactTitle: 'Where should we send the audit?',
      contactDescription:
        'We will review your content and email you a direct video breakdown.',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Work Email',
      back: 'Back',
      nextStep: 'Next Step',
      submitting: 'Submitting...',
      submit: 'Request Audit',
      error: 'The request could not be submitted.',
      success: 'Request submitted.',
    },
    faq: {
      title: 'Social Logistics.',
      items: [
        { question: 'Do you shoot the video content?', answer: 'Yes. Depending on scope, we either shoot on-site or set up remote recording workflows for internal experts and handle post-production.' },
        { question: 'How many times a week do you post?', answer: 'Volume depends on the platform. TikTok and Shorts require higher frequency, while LinkedIn needs depth and quality. We optimize for reach, not arbitrary quotas.' },
        { question: 'Can we approve posts before they go live?', answer: 'Yes. We use collaborative approval workflows so every piece of copy and creative can be reviewed before publishing.' },
        { question: 'How long until we go viral?', answer: 'Virality comes from consistency. Expect stronger baseline growth within 30 days, while larger breakout moments usually happen between months 3 and 6.' },
      ],
    },
  },
};
