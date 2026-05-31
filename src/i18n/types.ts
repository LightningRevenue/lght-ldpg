import type React from 'react';

export type ServiceTranslation = {
  title: string;
  description: string;
};

export type CommonDictionary = {
  nav: {
    services: string;
    expertise: string;
    about: string;
    contact: string;
    startProject: string;
    language: string;
  };
  footer: {
    availability: string;
    headline: string;
    description: string;
    startProject: string;
    services: string;
    expertise: string;
    company: string;
    socials: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
};

export type HomeDictionary = {
  homeHeader: {
    availability: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
    modalTitle: string;
    modalPhase: (phase: number) => string;
    contextTitle: string;
    contextDescription: string;
    q1: string;
    q1Placeholder: string;
    q2: string;
    q2Placeholder: string;
    outcomesTitle: string;
    outcomesDescription: string;
    planTitle: string;
    planDescription: string;
    contactTitle: string;
    contactDescription: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    back: string;
    nextOutcomes: string;
    analyzeMatches: string;
    continueContact: string;
    submitRequest: string;
    demoSubmitted: string;
    match: string;
    helpItems: Array<{
      serviceId: string;
      serviceName: string;
      serviceDesc: string;
      outcome: string;
    }>;
  };
  mainServices: {
    title: string;
    description: string;
    cta: string;
    services: ServiceTranslation[];
  };
  why: {
    title: string;
    description: string;
    reasons: ServiceTranslation[];
  };
  packages: {
    title: string;
    description: string;
    levels: {
      foundation: string;
      momentum: string;
      apex: string;
      start: string;
      medium: string;
      high: string;
      foundationDesc: string;
      momentumDesc: string;
      apexDesc: string;
      selectFoundation: string;
      selectMomentum: string;
      selectApex: string;
    };
    customLabel: string;
    customTitle: string;
    customDescription: string;
  };
  addons: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceTranslation[];
  };
  tiers: {
    eyebrow: string;
    title: string;
    description: string;
    levelOne: string;
    levelTwo: string;
    goldTitle: string;
    goldDescription: string;
    platinumTitle: string;
    platinumDescription: string;
    status: string;
    locked: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  newsletter: {
    eyebrow: string;
    title: string;
    description: string;
    placeholder: string;
    saving: string;
    submit: string;
    error: string;
    success: string;
    note: string;
  };
};

export type AboutDictionary = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  stats: Array<[string, string]>;
  beliefEyebrow: string;
  beliefTitle: string;
  principles: Array<{ title: string; text: string }>;
  methodEyebrow: string;
  methodTitle: string;
  methodDescription: string;
  process: string[];
  nextEyebrow: string;
  nextTitle: string;
  cta: string;
};

export type ContactDictionary = {
  availability: string;
  title: string;
  titleGhost: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  direct: string;
  email: string;
  timezone: string;
  timezoneValue: string;
  bestFit: string;
  bestFitValue: string;
  form: {
    service: string;
    budget: string;
    timeline: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    serviceOptions: string[];
    budgetOptions: string[];
    timelineOptions: string[];
    error: string;
    success: string;
    submitting: string;
    submit: string;
  };
};

export type ServicePageDictionary = {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
  };
  painPoints: {
    title: string;
    description: string;
    realityTitle: string;
    standardTitle: string;
    painPoints: string[];
    outcomes: string[];
  };
  about: {
    title: string;
    description: string;
    cards: Array<{
      title: string;
      desc: string;
    }>;
    highlightEyebrow: string;
    highlightTitle: string;
    highlightDescription: React.ReactNode;
    stats: Array<{ value: string; label: string }>;
  };
  advanced: {
    eyebrow: string;
    title: string;
    description: string;
    features: ServiceTranslation[];
  };
  contact: {
    title: string;
    description: string;
    formTitle: string;
    phaseLabel: (phase: number) => string;
    challengeTitle: string;
    challengeDescription: string;
    challengePlaceholder: string;
    spendTitle: string;
    spendDescription: string;
    spendOptions: string[];
    websiteTitle: string;
    websiteDescription: string;
    websitePlaceholder: string;
    contactTitle: string;
    contactDescription: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    back: string;
    nextStep: string;
    submitting: string;
    submit: string;
    error: string;
    success: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
};

export type ServicesDictionary = {
  ppc: ServicePageDictionary;
  seo: ServicePageDictionary;
  webDevelopment: ServicePageDictionary;
  softwareDevelopment: ServicePageDictionary;
  uiUx: ServicePageDictionary;
  smm: ServicePageDictionary;
};
