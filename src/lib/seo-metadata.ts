import type { Metadata } from 'next';
import {
  defaultLanguage,
  isSupportedLanguage,
  localizePath,
  supportedLanguages,
  type SupportedLanguage,
} from '@/lib/i18n';

export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://lightning-revenue.com';

export type SeoRouteKey =
  | 'home'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'expertiseSla'
  | 'expertiseAccountManager'
  | 'servicePpc'
  | 'serviceSeo'
  | 'serviceSmm'
  | 'serviceUiUx'
  | 'serviceWebDevelopment'
  | 'serviceSoftwareDevelopment'
  | 'serviceLeadGeneration'
  | 'serviceSalesSetup';

type SeoCopy = { title: string; description: string };
type LocalizedSeoCopy = Record<SupportedLanguage, SeoCopy> &
  Partial<Record<string, SeoCopy>>;

export const seoRoutePaths: Record<SeoRouteKey, string> = {
  home: '/',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
  expertiseSla: '/expertise/sla',
  expertiseAccountManager: '/expertise/account-manager',
  servicePpc: '/services/ppc',
  serviceSeo: '/services/seo',
  serviceSmm: '/services/smm',
  serviceUiUx: '/services/ui-ux',
  serviceWebDevelopment: '/services/web-development',
  serviceSoftwareDevelopment: '/services/software-development',
  serviceLeadGeneration: '/services/lead-generation',
  serviceSalesSetup: '/services/sales-setup',
};

export const seoMetadata: Record<SeoRouteKey, LocalizedSeoCopy> = {
  home: {
    en: {
      title: 'LightningRevenue - Premium Digital Growth Agency',
      description:
        'Senior digital strategy, performance marketing, web development, automation, and revenue systems for ambitious teams.',
    },
    ro: {
      title: 'LightningRevenue - Agentie premium de crestere digitala',
      description:
        'Strategie digitala senior, performance marketing, dezvoltare web, automatizari si sisteme de venit pentru echipe ambitioase.',
    },
    it: {
      title: 'LightningRevenue - Agenzia premium per la crescita digitale',
      description:
        'Strategia digitale senior, performance marketing, sviluppo web, automazioni e sistemi di revenue per team ambiziosi.',
    },
    es: {
      title: 'LightningRevenue - Agencia premium de crecimiento digital',
      description:
        'Estrategia digital senior, performance marketing, desarrollo web, automatizacion y sistemas de ingresos para equipos ambiciosos.',
    },
  },
  about: {
    en: {
      title: 'About LightningRevenue',
      description:
        'Learn how LightningRevenue builds high-performance digital growth systems with senior strategy, design, engineering, and acquisition ownership.',
    },
    ro: {
      title: 'Despre LightningRevenue',
      description:
        'Afla cum LightningRevenue construieste sisteme digitale de crestere prin strategie, design, engineering si achizitie operate la nivel senior.',
    },
    it: {
      title: 'Chi e LightningRevenue',
      description:
        'Scopri come LightningRevenue costruisce sistemi digitali di crescita con strategia, design, engineering e acquisizione gestiti da senior.',
    },
    es: {
      title: 'Sobre LightningRevenue',
      description:
        'Conoce como LightningRevenue crea sistemas digitales de crecimiento con estrategia, diseno, ingenieria y adquisicion lideradas por seniors.',
    },
  },
  contact: {
    en: {
      title: 'Contact LightningRevenue',
      description:
        'Start a project with LightningRevenue and route your growth, web, software, PPC, SEO, or sales systems inquiry to the right strategist.',
    },
    ro: {
      title: 'Contact LightningRevenue',
      description:
        'Porneste un proiect cu LightningRevenue si trimite cererea ta de growth, web, software, PPC, SEO sau sales catre strategul potrivit.',
    },
    it: {
      title: 'Contatta LightningRevenue',
      description:
        'Avvia un progetto con LightningRevenue e indirizza la richiesta su growth, web, software, PPC, SEO o sales al consulente giusto.',
    },
    es: {
      title: 'Contacta con LightningRevenue',
      description:
        'Inicia un proyecto con LightningRevenue y dirige tu consulta de growth, web, software, PPC, SEO o ventas al estratega adecuado.',
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy and Cookies | LightningRevenue',
      description:
        'Read how LightningRevenue handles privacy, cookies, first-party analytics, attribution, forms, retention, security, and data rights.',
    },
    ro: {
      title: 'Politica de confidentialitate si cookies | LightningRevenue',
      description:
        'Vezi cum LightningRevenue gestioneaza confidentialitatea, cookies, analytics first-party, atribuire, formulare, retentie, securitate si drepturi.',
    },
    it: {
      title: 'Privacy Policy e Cookie | LightningRevenue',
      description:
        'Leggi come LightningRevenue gestisce privacy, cookie, analytics proprietari, attribuzione, form, conservazione, sicurezza e diritti.',
    },
    es: {
      title: 'Politica de privacidad y cookies | LightningRevenue',
      description:
        'Lee como LightningRevenue gestiona privacidad, cookies, analitica propia, atribucion, formularios, retencion, seguridad y derechos.',
    },
  },
  terms: {
    en: {
      title: 'Terms and Conditions | LightningRevenue',
      description:
        'LightningRevenue terms for site usage, inquiries, service descriptions, intellectual property, liability, disputes, and public digital touchpoints.',
    },
    ro: {
      title: 'Termeni si conditii | LightningRevenue',
      description:
        'Termenii LightningRevenue pentru utilizarea siteului, cereri, servicii, proprietate intelectuala, raspundere, dispute si touchpoint-uri publice.',
    },
    it: {
      title: 'Termini e condizioni | LightningRevenue',
      description:
        'Termini LightningRevenue per uso del sito, richieste, servizi, proprieta intellettuale, responsabilita, dispute e touchpoint digitali pubblici.',
    },
    es: {
      title: 'Terminos y condiciones | LightningRevenue',
      description:
        'Terminos de LightningRevenue para uso del sitio, consultas, servicios, propiedad intelectual, responsabilidad, disputas y puntos digitales publicos.',
    },
  },
  expertiseSla: {
    en: {
      title: 'SLA Guarantees | LightningRevenue',
      description:
        'Review LightningRevenue service level commitments for uptime, response times, escalation, security, incident handling, and handover.',
    },
    ro: {
      title: 'Garantii SLA | LightningRevenue',
      description:
        'Vezi angajamentele LightningRevenue pentru uptime, timpi de raspuns, escaladare, securitate, incidente si predare.',
    },
    it: {
      title: 'Garanzie SLA | LightningRevenue',
      description:
        'Consulta gli impegni LightningRevenue su uptime, tempi di risposta, escalation, sicurezza, incidenti e handover.',
    },
    es: {
      title: 'Garantias SLA | LightningRevenue',
      description:
        'Consulta los compromisos de LightningRevenue sobre uptime, tiempos de respuesta, escalacion, seguridad, incidentes y traspaso.',
    },
  },
  expertiseAccountManager: {
    en: {
      title: 'Dedicated Account Manager | LightningRevenue',
      description:
        'See how LightningRevenue account management gives each client senior ownership, clear communication, proactive reporting, and escalation paths.',
    },
    ro: {
      title: 'Account Manager dedicat | LightningRevenue',
      description:
        'Vezi cum account management-ul LightningRevenue ofera ownership senior, comunicare clara, raportare proactiva si cai de escaladare.',
    },
    it: {
      title: 'Account Manager dedicato | LightningRevenue',
      description:
        'Scopri come l account management LightningRevenue offre ownership senior, comunicazione chiara, reporting proattivo ed escalation.',
    },
    es: {
      title: 'Account Manager dedicado | LightningRevenue',
      description:
        'Conoce como el account management de LightningRevenue ofrece ownership senior, comunicacion clara, reporting proactivo y escalacion.',
    },
  },
  servicePpc: {
    en: {
      title: 'PPC Management | LightningRevenue',
      description:
        'Data-driven PPC management, paid search, paid social, conversion tracking, and performance scaling for growth-focused companies.',
    },
    ro: {
      title: 'Management PPC | LightningRevenue',
      description:
        'Management PPC bazat pe date, paid search, paid social, tracking de conversii si scalare pentru companii orientate spre crestere.',
    },
    it: {
      title: 'Gestione PPC | LightningRevenue',
      description:
        'Gestione PPC basata sui dati, paid search, paid social, tracciamento conversioni e scaling per aziende orientate alla crescita.',
    },
    es: {
      title: 'Gestion PPC | LightningRevenue',
      description:
        'Gestion PPC basada en datos, paid search, paid social, tracking de conversiones y escalado para empresas enfocadas en crecimiento.',
    },
  },
  serviceSeo: {
    en: {
      title: 'SEO Optimization | LightningRevenue',
      description:
        'Technical SEO, content architecture, organic growth systems, site performance, and search visibility built for durable acquisition.',
    },
    ro: {
      title: 'Optimizare SEO | LightningRevenue',
      description:
        'SEO tehnic, arhitectura de continut, sisteme de crestere organica, performanta site si vizibilitate in cautare pentru achizitie durabila.',
    },
    it: {
      title: 'Ottimizzazione SEO | LightningRevenue',
      description:
        'SEO tecnico, architettura dei contenuti, crescita organica, performance del sito e visibilita search per acquisizione duratura.',
    },
    es: {
      title: 'Optimizacion SEO | LightningRevenue',
      description:
        'SEO tecnico, arquitectura de contenido, crecimiento organico, rendimiento web y visibilidad en buscadores para adquisicion duradera.',
    },
  },
  serviceSmm: {
    en: {
      title: 'Social Media Management | LightningRevenue',
      description:
        'Social media management, content operations, community systems, brand cadence, and distribution workflows for modern growth teams.',
    },
    ro: {
      title: 'Social Media Management | LightningRevenue',
      description:
        'Management social media, operatiuni de continut, sisteme de comunitate, cadenta de brand si workflow-uri de distributie.',
    },
    it: {
      title: 'Social Media Management | LightningRevenue',
      description:
        'Gestione social media, operazioni content, sistemi community, ritmo del brand e workflow di distribuzione.',
    },
    es: {
      title: 'Social Media Management | LightningRevenue',
      description:
        'Gestion de redes sociales, operaciones de contenido, sistemas de comunidad, cadencia de marca y flujos de distribucion.',
    },
  },
  serviceUiUx: {
    en: {
      title: 'UI/UX Design | LightningRevenue',
      description:
        'Premium UI/UX design for conversion-focused websites, product interfaces, dashboards, user journeys, and design systems.',
    },
    ro: {
      title: 'Design UI/UX | LightningRevenue',
      description:
        'Design UI/UX premium pentru website-uri orientate spre conversie, interfete de produs, dashboard-uri, user journeys si design systems.',
    },
    it: {
      title: 'Design UI/UX | LightningRevenue',
      description:
        'Design UI/UX premium per siti orientati alla conversione, interfacce prodotto, dashboard, user journey e design system.',
    },
    es: {
      title: 'Diseno UI/UX | LightningRevenue',
      description:
        'Diseno UI/UX premium para webs enfocadas en conversion, interfaces de producto, dashboards, user journeys y design systems.',
    },
  },
  serviceWebDevelopment: {
    en: {
      title: 'Web Design and Development | LightningRevenue',
      description:
        'High-performance web development, marketing sites, landing pages, frontend systems, and conversion-focused digital experiences.',
    },
    ro: {
      title: 'Web design si dezvoltare web | LightningRevenue',
      description:
        'Dezvoltare web performanta, site-uri de marketing, landing pages, sisteme frontend si experiente digitale orientate spre conversie.',
    },
    it: {
      title: 'Web design e sviluppo web | LightningRevenue',
      description:
        'Sviluppo web ad alte performance, siti marketing, landing page, sistemi frontend ed esperienze digitali orientate alla conversione.',
    },
    es: {
      title: 'Diseno y desarrollo web | LightningRevenue',
      description:
        'Desarrollo web de alto rendimiento, sitios marketing, landing pages, sistemas frontend y experiencias digitales enfocadas en conversion.',
    },
  },
  serviceSoftwareDevelopment: {
    en: {
      title: 'Custom Software Engineering | LightningRevenue',
      description:
        'Custom software development, scalable architectures, internal tools, automation layers, and secure business applications.',
    },
    ro: {
      title: 'Software custom | LightningRevenue',
      description:
        'Dezvoltare software custom, arhitecturi scalabile, tool-uri interne, layere de automatizare si aplicatii business securizate.',
    },
    it: {
      title: 'Software custom | LightningRevenue',
      description:
        'Sviluppo software custom, architetture scalabili, tool interni, livelli di automazione e applicazioni business sicure.',
    },
    es: {
      title: 'Software a medida | LightningRevenue',
      description:
        'Desarrollo de software a medida, arquitecturas escalables, herramientas internas, automatizacion y aplicaciones business seguras.',
    },
  },
  serviceLeadGeneration: {
    en: {
      title: 'B2B Lead Generation | LightningRevenue',
      description:
        'B2B lead generation systems, outbound infrastructure, prospecting workflows, enrichment, qualification, and sales-ready pipelines.',
    },
    ro: {
      title: 'Lead generation B2B | LightningRevenue',
      description:
        'Sisteme de lead generation B2B, infrastructura outbound, prospectare, enrichment, calificare si pipeline-uri pregatite pentru sales.',
    },
    it: {
      title: 'Lead generation B2B | LightningRevenue',
      description:
        'Sistemi di lead generation B2B, infrastruttura outbound, prospecting, enrichment, qualifica e pipeline pronte per sales.',
    },
    es: {
      title: 'Lead generation B2B | LightningRevenue',
      description:
        'Sistemas de lead generation B2B, infraestructura outbound, prospeccion, enrichment, calificacion y pipelines listos para ventas.',
    },
  },
  serviceSalesSetup: {
    en: {
      title: 'CRM and Sales Operations | LightningRevenue',
      description:
        'CRM setup, sales operations, DNS configuration, automation workflows, reporting systems, and pipeline infrastructure.',
    },
    ro: {
      title: 'CRM si operatiuni sales | LightningRevenue',
      description:
        'Setup CRM, operatiuni sales, configurari DNS, workflow-uri automate, raportare si infrastructura de pipeline.',
    },
    it: {
      title: 'CRM e sales operations | LightningRevenue',
      description:
        'Setup CRM, sales operations, configurazioni DNS, workflow automatizzati, reporting e infrastruttura pipeline.',
    },
    es: {
      title: 'CRM y operaciones de ventas | LightningRevenue',
      description:
        'Setup CRM, operaciones de ventas, configuracion DNS, workflows automatizados, reporting e infraestructura de pipeline.',
    },
  },
};

export function normalizeLanguage(language: string): SupportedLanguage {
  return isSupportedLanguage(language) ? language : defaultLanguage;
}

export function getSeoCopy(routeKey: SeoRouteKey, language: string) {
  const languageCode = normalizeLanguage(language);
  return seoMetadata[routeKey][languageCode] || seoMetadata[routeKey][defaultLanguage];
}

export function getCanonicalPath(routeKey: SeoRouteKey, language: string) {
  return localizePath(seoRoutePaths[routeKey], normalizeLanguage(language));
}

export function getLanguageAlternates(routeKey: SeoRouteKey) {
  const languages = Object.fromEntries(
    supportedLanguages.map(language => [
      language,
      localizePath(seoRoutePaths[routeKey], language),
    ]),
  );

  return {
    ...languages,
    'x-default': localizePath(seoRoutePaths[routeKey], defaultLanguage),
  };
}

export function createPageMetadata(
  routeKey: SeoRouteKey,
  language: string,
): Metadata {
  const languageCode = normalizeLanguage(language);
  const copy = getSeoCopy(routeKey, languageCode);
  const canonical = getCanonicalPath(routeKey, languageCode);

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates(routeKey),
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonical,
      siteName: 'LightningRevenue',
      locale: languageCode,
      type: 'website',
    },
  };
}
