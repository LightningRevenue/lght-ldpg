import type { HomeDictionary } from '@/i18n/types';

export const home: HomeDictionary = {
  homeHeader: {
    availability: 'Acceptăm proiecte noi',
    titleLine1: 'Creștere',
    titleLine2: 'Digitală.',
    description:
      'Suntem agenția care combină designul minimalist, strategia de growth și engineering-ul modern pentru experiențe digitale premium.',
    cta: 'Hai să vorbim',
    modalTitle: 'Sesiune de descoperire',
    modalPhase: phase => `Faza ${phase} din 4`,
    contextTitle: 'Spune-ne contextul tău.',
    contextDescription:
      'Înainte să discutăm servicii, vrem să înțelegem realitatea businessului tău.',
    q1: '1. Care este cel mai mare blocaj din business acum?',
    q1Placeholder:
      'ex. Avem trafic, dar nu convertim. Sau ciclul de vânzare durează 6 luni...',
    q2: '2. Unde vrei să fie compania în 12 luni?',
    q2Placeholder:
      'ex. Să ajungem la 1M ARR, să automatizăm lead generation-ul, să redesenăm produsul...',
    outcomesTitle: 'Alege rezultatele dorite',
    outcomesDescription:
      'Care dintre aceste rezultate concrete te-ar ajuta să ajungi acolo?',
    planTitle: 'Planul tău de acțiune',
    planDescription:
      'Pe baza obiectivelor tale, acestea sunt serviciile care se potrivesc cel mai bine.',
    contactTitle: 'Hai să construim asta.',
    contactDescription:
      'Lasă datele tale, iar un strateg senior va analiza situația înainte de prima discuție.',
    namePlaceholder: 'Nume complet',
    emailPlaceholder: 'Email de business',
    companyPlaceholder: 'URL companie',
    back: 'Înapoi',
    nextOutcomes: 'Următorul pas: rezultate',
    analyzeMatches: 'Analizează potrivirile',
    continueContact: 'Continuă către contact',
    submitRequest: 'Trimite cererea',
    demoSubmitted: 'Cererea a fost primită! (Demo)',
    match: 'Potrivire',
    helpItems: [
      {
        serviceId: 'ppc',
        serviceName: 'Management PPC',
        serviceDesc: 'Scalare pay-per-click bazată pe date.',
        outcome: 'Creșterea ROAS și scăderea costului de achiziție.',
      },
      {
        serviceId: 'seo',
        serviceName: 'Optimizare SEO',
        serviceDesc: 'Optimizare tehnică și strategie de conținut.',
        outcome: 'Vizibilitate pe căutări de nișă cu intenție mare.',
      },
      {
        serviceId: 'web',
        serviceName: 'Dezvoltare web',
        serviceDesc: 'Platforme de marketing rapide și performante.',
        outcome: 'Un site premium, rapid și construit pentru conversie.',
      },
      {
        serviceId: 'software',
        serviceName: 'Dezvoltare software',
        serviceDesc: 'Aplicații custom și tool-uri interne.',
        outcome: 'Software custom care automatizează munca manuală.',
      },
      {
        serviceId: 'smm',
        serviceName: 'Social Media Management',
        serviceDesc: 'Creștere organică și comunități relevante.',
        outcome: 'O prezență social media activă și angajată.',
      },
      {
        serviceId: 'uiux',
        serviceName: 'Design UI/UX',
        serviceDesc: 'Interfețe premium și experiențe fluide.',
        outcome: 'O interfață de nivel înalt care susține conversiile.',
      },
      {
        serviceId: 'lead',
        serviceName: 'Lead Generation',
        serviceDesc: 'Sisteme automate de outreach B2B.',
        outcome: 'Întâlniri automate cu prospecți calificați.',
      },
      {
        serviceId: 'sales',
        serviceName: 'Setup tool-uri sales',
        serviceDesc: 'Arhitectură CRM și pipeline comercial.',
        outcome: 'Un CRM clar, procese curate și cicluri de vânzare mai scurte.',
      },
    ],
  },
  mainServices: {
    title: 'Servicii principale.',
    description:
      'Expertiză concentrată pentru creștere digitală, eficiență operațională și sisteme comerciale mai clare.',
    cta: 'Vezi capabilitățile',
    services: [
      {
        title: 'PPC',
        description:
          'Campanii pay-per-click bazate pe date, construite pentru ROI, audiență corectă și decizii rapide.',
      },
      {
        title: 'Dezvoltare web',
        description:
          'Website-uri rapide, atent proiectate pentru conversie, cu arhitectură performantă și design premium.',
      },
      {
        title: 'Dezvoltare software',
        description:
          'Aplicații scalabile și tool-uri interne construite pentru probleme reale de business, cu securitate din start.',
      },
      {
        title: 'Sisteme de lead generation',
        description:
          'Motoare predictibile de lead-uri care alimentează pipeline-ul de vânzări fără prospectare manuală continuă.',
      },
    ],
  },
  why: {
    title: 'De ce să\nlucrezi cu noi.',
    description:
      'Nu livrăm doar servicii; construim sisteme de creștere care pot fi măsurate, operate și scalate.',
    reasons: [
      {
        title: 'Strategii bazate pe date.',
        description:
          'Nu lucrăm pe presupuneri. Campaniile, designul și codul sunt ghidate de date, comportament real și obiective comerciale clare.',
      },
      {
        title: 'Calitate fără compromis.',
        description:
          'Fără template-uri și scurtături. Construim soluții custom care performează și poziționează brandul la nivel premium.',
      },
      {
        title: 'Parteneriat real.',
        description:
          'Funcționăm ca o extensie a echipei tale: comunicare transparentă, obiective aliniate și responsabilitate comună pentru rezultate.',
      },
    ],
  },
  packages: {
    title: 'Modele de colaborare.',
    description:
      'Alege un framework standardizat sau construiește un engagement custom pentru stadiul și viteza companiei tale.',
    levels: {
      foundation: 'Foundation',
      momentum: 'Momentum',
      apex: 'Apex',
      start: 'Start',
      medium: 'Mediu',
      high: 'Avansat',
      foundationDesc:
        'Infrastructura digitală esențială și inițiativele de marketing de bază pentru branduri aflate la intrarea în piață.',
      momentumDesc:
        'Strategii agresive de creștere, dezvoltare web avansată și scalare PPC bazată pe date pentru operațiuni cu tracțiune.',
      apexDesc:
        'Soluții enterprise, dominanță omni-channel și echipe dedicate pentru lideri de piață.',
      selectFoundation: 'Alege Foundation',
      selectMomentum: 'Alege Momentum',
      selectApex: 'Alege Apex',
    },
    customLabel: 'Custom',
    customTitle: 'Construiește pachetul tău',
    customDescription:
      'Nu te potrivești într-o cutie? Putem construi un retainer sau scope de proiect adaptat logicii, timeline-ului și resurselor tale interne.',
  },
  addons: {
    eyebrow: 'Extensii',
    title: 'Servicii extra &\ngaranții.',
    description:
      'Întărește orice model de colaborare cu securitate, resurse senior dedicate și SLA-uri clare.',
    items: [
      {
        title: 'Garanții SLA',
        description:
          'Uptime garantat 99.9% și benchmark-uri clare de performanță, susținute prin penalizări financiare dacă nu livrăm.',
      },
      {
        title: 'Account Manager dedicat',
        description:
          'Un strateg senior ca punct unic de contact pentru aliniere, execuție rapidă și transparență completă.',
      },
      {
        title: 'Engineer disponibil pe pagină',
        description:
          'Acces direct la talent tehnic pentru schimbări arhitecturale, cod custom și ajustări tehnice SEO rapide.',
      },
      {
        title: 'Timp de răspuns la incidente',
        description:
          'Răspuns uman inițial garantat sub 30 de minute pentru probleme critice, prin canale prioritare.',
      },
      {
        title: 'Rezolvare fast-track',
        description:
          'Prioritizare imediată pentru blocaje critice, cu diagnostic și rezolvare accelerată.',
      },
    ],
  },
  tiers: {
    eyebrow: 'Niveluri Lightning',
    title: 'Niveluri de colaborare.',
    description:
      'Nu publicăm praguri fixe. Monitorizăm continuu parteneriatul, iar când încrederea și scala ajung la nivelul potrivit, upgrade-ul se face natural.',
    levelOne: 'Nivel 01',
    levelTwo: 'Nivel 02',
    goldTitle: 'Gold Tier',
    goldDescription:
      'Acces prioritar la canale experimentale de creștere, marje reduse de retainer și invitații la evenimente private.',
    platinumTitle: 'Platinum Tier',
    platinumDescription:
      'Vârful parteneriatului: costuri pass-through fără marjă, advisory la nivel de board și integrare operațională completă.',
    status: 'Status',
    locked: 'Blocat',
  },
  faq: {
    title: 'Întrebări frecvente.',
    items: [
      {
        question: 'Oferiți servicii white-label?',
        answer:
          'Nu. Preferăm parteneriate directe și transparență totală. Lucrăm ca extensie a echipei tale, nu ca furnizor ascuns în spatele altei agenții.',
      },
      {
        question: 'Cum măsurați succesul?',
        answer:
          'Prin creștere de venit, pipeline și viteză comercială, nu prin vanity metrics. Fiecare inițiativă digitală trebuie să aibă legătură cu rezultatul de business.',
      },
      {
        question: 'Cât durează onboarding-ul?',
        answer:
          'Onboarding-ul standard durează 14 zile de la semnare până la integrare operațională: audituri tehnice, acces, strategie și prioritizare.',
      },
      {
        question: 'Lucrați cu startup-uri early-stage?',
        answer:
          'Lucrăm cel mai bine cu echipe care au product-market fit și sunt pregătite să scaleze. Pentru validare pre-seed, infrastructura noastră poate fi prea grea.',
      },
    ],
  },
  newsletter: {
    eyebrow: 'The Insight',
    title: 'Inteligență săptămânală.',
    description:
      'Primește idei clare despre scalare digitală, execuție tehnică și operațiuni de agenție, fără zgomot de marketing.',
    placeholder: 'nume@companie.com',
    saving: 'Se salvează...',
    submit: 'Abonează-te',
    error: 'Abonarea nu a putut fi salvată.',
    success: 'Ești pe lista aprobată pentru insight-uri.',
    note: 'Fără spam. Te poți dezabona oricând.',
  },
};
