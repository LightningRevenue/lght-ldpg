import React from 'react';
import type { ServicesDictionary } from '@/i18n/types';

export const services: ServicesDictionary = {
  ppc: {
    hero: {
      eyebrow: 'Performance Marketing',
      titleLine1: 'Scalare PPC',
      titleLine2: 'bazată pe date.',
      description:
        'Construim campanii paid search și paid social orientate spre conversie, cu optimizare riguroasă pentru ROAS.',
      cta: 'Auditează contul',
    },
    painPoints: {
      title: 'De la haos la predictibilitate.',
      description:
        'Majoritatea conturilor de ads pe care le audităm pierd buget prin probleme structurale. Înlocuim presupunerile cu certitudine matematică.',
      realityTitle: 'Realitatea comună',
      standardTitle: 'Standardul LightningRevenue',
      painPoints: [
        'Buget ars pe click-uri largi și necalificate.',
        'ROI imposibil de urmărit exact pe keyword sau campanie.',
        'Competitori cu bugete mai mari care ocupă pozițiile importante.',
        'Rate mici de conversie, deși traficul este mare.',
      ],
      outcomes: [
        'Campanii hiper-targetate care prind cumpărători cu intenție reală.',
        'Tracking granular în care fiecare dolar de venit este legat de sursă.',
        'Dominarea termenilor de căutare care contează, fără risipă de buget.',
        'Optimizări de landing page sincronizate care transformă click-urile în call-uri.',
      ],
    },
    about: {
      title: 'Anatomia unui PPC corect.',
      description:
        'Nu doar rulăm reclame. Construim motoare financiare. Fiecare campanie este gândită să reducă CAC-ul și să scaleze volumul.',
      cards: [
        {
          title: 'Tracțiune imediată',
          desc: 'Spre deosebire de metodele organice, campaniile PPC structurate corect îți duc oferta în fața traficului cu intenție mare încă din ziua lansării.',
        },
        {
          title: 'Audiențe hiper-targetate',
          desc: 'Targetăm pe intenție de căutare, interes față de competitori, job titles B2B sau date firmografice precise.',
        },
        {
          title: 'Control complet al costurilor',
          desc: 'Fiecare dolar este urmărit până la keyword-ul sau campania care a generat oportunitatea. Bugetele devin transparente.',
        },
        {
          title: 'Creative testate A/B',
          desc: 'Rulăm variații de copy, headline și vizual ca să identificăm exact mesajul care mișcă audiența ta.',
        },
        {
          title: 'Arhitectură de retargeting',
          desc: 'Construim funnel-uri cross-platform care mențin utilizatorii calificați în mișcare până la conversie.',
        },
        {
          title: 'Scalare pe date',
          desc: 'După ce stabilim un ROAS profitabil, creștem sistemic bugetul. Cumperi venit, nu doar click-uri.',
        },
      ],
      highlightEyebrow: 'Standardul LightningRevenue',
      highlightTitle: 'Cât poți crește cu PPC executat la nivel înalt?',
      highlightDescription: (
        <>
          Când tracking-ul conversiilor este curat, creativele sunt testate
          riguros, iar bidding-ul este automatizat inteligent, rezultatele se
          compun rapid. Un cont PPC auditat și restructurat corect vede de
          obicei o{' '}
          <strong className="text-white font-medium">
            creștere de 300% în volumul de lead-uri calificate
          </strong>{' '}
          în primele 60 de zile, în timp ce costul de achiziție scade.
        </>
      ),
      stats: [
        { value: '300%', label: 'Mai multe lead-uri' },
        { value: '-40%', label: 'CPA mai mic' },
      ],
    },
    advanced: {
      eyebrow: 'Toolkit avansat',
      title: 'Dincolo de campanii standard.',
      description:
        'Trecem peste targetarea de bază și integrăm scripturi custom, server-side tracking și atribuire multi-channel.',
      features: [
        {
          title: 'Geo-fencing precis',
          description:
            'Folosim geofencing hiper-local pentru trafic valoros din jurul competitorilor, conferințelor sau zonelor foarte specifice.',
        },
        {
          title: 'Server-Side Tracking (CAPI)',
          description:
            'Construim pipeline-uri server-to-server pentru date de conversie mai curate, chiar și cu ad blockers și restricții de privacy.',
        },
        {
          title: 'Automatizare predictivă a bid-urilor',
          description:
            'Scripturile ajustează bid-urile în timp real pe baza semnalelor externe, orelor de business sau comportamentului pieței.',
        },
        {
          title: 'Atribuire multi-touch',
          description:
            'Urmărim journey-ul pe Google, Meta și LinkedIn ca să vedem combinația exactă de touchpoint-uri care aduce venit.',
        },
      ],
    },
    contact: {
      title: 'Cere un audit gratuit al contului.',
      description:
        'Inginerii noștri seniori analizează setup-ul și identifică punctele exacte de leverage.',
      formTitle: 'Aplicație pentru audit',
      phaseLabel: phase => `Faza ${phase} din 4`,
      challengeTitle: 'Care este problema principală?',
      challengeDescription:
        'Înainte să ne uităm la cifre, spune-ne ce blochează creșterea.',
      challengePlaceholder:
        'ex. Avem trafic, dar CPA-ul este prea mare și calitatea lead-urilor scade...',
      spendTitle: 'Buget lunar de ads',
      spendDescription:
        'Ne ajută să alocăm strategul potrivit pentru audit.',
      spendOptions: [
        'Sub $5,000',
        '$5,000 - $20,000',
        '$20,000 - $50,000',
        '$50,000+',
      ],
      websiteTitle: 'Unde ajunge traficul?',
      websiteDescription:
        'Trimite URL-ul principal sau landing page-ul ca să putem analiza funnel-ul.',
      websitePlaceholder: 'https://companiata.com',
      contactTitle: 'Unde trimitem auditul?',
      contactDescription:
        'Îți analizăm setup-ul și îți trimitem un breakdown video direct.',
      namePlaceholder: 'Nume complet',
      emailPlaceholder: 'Email de business',
      back: 'Înapoi',
      nextStep: 'Pasul următor',
      submitting: 'Se trimite...',
      submit: 'Cere auditul',
      error: 'Cererea nu a putut fi trimisă.',
      success: 'Cererea a fost trimisă.',
    },
    faq: {
      title: 'Logistica PPC.',
      items: [
        {
          question: 'De ce buget am nevoie ca să încep?',
          answer:
            'De regulă recomandăm minimum $5,000 buget lunar de ads, ca testele să aibă relevanță statistică și algoritmii să primească date suficiente.',
        },
        {
          question: 'Cât durează până vedem ROAS pozitiv?',
          answer:
            'Quick wins apar uneori în primele 14 zile prin corecții structurale, iar maturitatea algoritmică și profitabilitatea scalată apar de obicei între zilele 45 și 60.',
        },
        {
          question: 'Gestionați și creativele?',
          answer:
            'Da. Gestionăm bid-uri, copy, variații creative și protocoale de testare, ca mesajul să se potrivească intenției și comportamentului audienței.',
        },
        {
          question: 'Ce se întâmplă dacă o campanie nu performează?',
          answer:
            'Campaniile slabe sunt identificate și oprite înainte să consume buget. Fondurile se realocă rapid către variațiile câștigătoare.',
        },
      ],
    },
  },
  seo: {
    hero: {
      eyebrow: 'Optimizare pentru motoare de căutare',
      titleLine1: 'SEO',
      titleLine2: 'tehnic.',
      description:
        'Construim arhitecturi SEO performante, cu fundație tehnică solidă și conținut autoritar pentru trafic organic cu intenție reală.',
      cta: 'Auditează site-ul',
    },
    painPoints: {
      title: 'De la invizibilitate la autoritate.',
      description:
        'Majoritatea campaniilor SEO sunt construite pe presupuneri și vanity metrics. Noi construim arhitecturi de search care aduc venit real.',
      realityTitle: 'Realitatea comună',
      standardTitle: 'Standardul LightningRevenue',
      painPoints: [
        'Trafic organic care nu se transformă în pipeline real.',
        'Penalizări după update-uri de algoritm din cauza tacticilor vechi sau riscante.',
        'Blog posts publicate fără cerere reală în search.',
        'Poziții bune pe keyword-uri de imagine, fără intenție comercială.',
      ],
      outcomes: [
        'Captarea cumpărătorilor bottom-of-funnel care caută activ soluții.',
        'Fundație tehnică solidă, rezistentă la penalizări de algoritm.',
        'Clustere de conținut care domină sistematic topicuri întregi.',
        'Rankings pe termeni care au impact direct și măsurabil în venit.',
      ],
    },
    about: {
      title: 'Anatomia unui SEO corect.',
      description:
        'Nu construim doar link-uri și articole generice. Construim autoritate organică. Fiecare pagină și fiecare linie de cod sunt optimizate pentru intenție de căutare.',
      cards: [
        {
          title: 'Fundație tehnică',
          desc: 'Înainte de conținut, reparăm codul: crawl errors, Core Web Vitals și schema markup, ca Google să înțeleagă site-ul corect.',
        },
        {
          title: 'Mapare pe intenție',
          desc: 'Legăm fiecare keyword de etapa potrivită din buyer journey și urmărim intenție comercială, nu volum de dragul volumului.',
        },
        {
          title: 'Clustere de conținut',
          desc: 'În loc de articole random, construim clustere conectate în jurul topicurilor pilon pentru autoritate tematică.',
        },
        {
          title: 'NLP on-page',
          desc: 'Optimizăm entități semantice și formulări ca pagina să se potrivească așteptărilor sistemelor moderne de search.',
        },
        {
          title: 'Backlink-uri editoriale',
          desc: 'Fără link spam. Facem outreach manual pentru backlink-uri autoritare în industria ta.',
        },
        {
          title: 'Actualizări anti-decay',
          desc: 'Monitorizăm ranking-urile și refresh-uim conținutul vechi înainte să piardă poziții.',
        },
      ],
      highlightEyebrow: 'Standardul LightningRevenue',
      highlightTitle: 'Cât poți crește cu SEO executat la nivel înalt?',
      highlightDescription: (
        <>
          Când fundația tehnică este curată și conținutul se aliniază cu
          intenția de căutare, traficul organic devine un asset compus. O
          strategie SEO arhitectată corect produce de obicei o{' '}
          <strong className="text-white font-medium">
            creștere de 400% în traficul organic non-brand
          </strong>{' '}
          în 6 luni, reducând dependența pe termen lung de paid acquisition.
        </>
      ),
      stats: [
        { value: '400%', label: 'Mai mult trafic' },
        { value: 'Zero', label: 'Ad spend' },
      ],
    },
    advanced: {
      eyebrow: 'Toolkit avansat',
      title: 'Dincolo de conținut basic.',
      description:
        'Trecem peste blogging de suprafață și integrăm programmatic SEO, schema avansată și soluții de dynamic rendering.',
      features: [
        {
          title: 'Programmatic SEO',
          description:
            'Lansăm pagini targetate la scară pentru long-tail commercial intent pe locații, industrii sau variabile de produs.',
        },
        {
          title: 'Dynamic Rendering Logic',
          description:
            'Facem framework-urile JavaScript crawlable și indexable fără să sacrificăm experiența sau viteza frontend.',
        },
        {
          title: 'Arhitecturi Schema avansate',
          description:
            'Injectăm structured data JSON-LD pentru rich snippets, knowledge panels și rezultate cu CTR mai mare.',
        },
        {
          title: 'Analiză server logs',
          description:
            'Analizăm raw logs ca să vedem cum interacționează Googlebot cu site-ul și eliminăm crawl traps, orphan pages și redirect loops.',
        },
      ],
    },
    contact: {
      title: 'Cere un audit SEO tehnic.',
      description:
        'Inginerii noștri seniori îți crawlează site-ul și identifică punctele exacte de leverage.',
      formTitle: 'Aplicație pentru audit',
      phaseLabel: phase => `Faza ${phase} din 4`,
      challengeTitle: 'Care este principala problemă SEO?',
      challengeDescription:
        'Înainte să analizăm codul, spune-ne ce blochează creșterea organică.',
      challengePlaceholder:
        'ex. Am pierdut trafic după ultimul core update sau rankăm bine, dar nu avem lead-uri...',
      spendTitle: 'Buget lunar de marketing',
      spendDescription:
        'Ne ajută să alocăm strategul tehnic potrivit pentru audit.',
      spendOptions: [
        'Sub $5,000',
        '$5,000 - $15,000',
        '$15,000 - $30,000',
        '$30,000+',
      ],
      websiteTitle: 'Ce site analizăm?',
      websiteDescription:
        'Trimite URL-ul principal ca să rulăm analiza tehnică inițială.',
      websitePlaceholder: 'https://companiata.com',
      contactTitle: 'Unde trimitem auditul?',
      contactDescription:
        'Îți crawlează setup-ul și îți trimitem un breakdown video direct.',
      namePlaceholder: 'Nume complet',
      emailPlaceholder: 'Email de business',
      back: 'Înapoi',
      nextStep: 'Pasul următor',
      submitting: 'Se trimite...',
      submit: 'Cere auditul',
      error: 'Cererea nu a putut fi trimisă.',
      success: 'Cererea a fost trimisă.',
    },
    faq: {
      title: 'Logistica SEO.',
      items: [
        {
          question: 'Cât durează SEO cu adevărat?',
          answer:
            'SEO este un asset compus pe termen lung. De obicei vedem îmbunătățiri de crawl și rankings în primele 45 de zile, iar pipeline-ul semnificativ scalează între lunile 4 și 6.',
        },
        {
          question: 'Garantați prima pagină?',
          answer:
            'Nicio agenție serioasă nu garantează poziții exacte. Garantăm execuție tehnică, link acquisition editorial și conținut aliniat cu intenția de căutare.',
        },
        {
          question: 'Cine scrie conținutul?',
          answer:
            'Echipa noastră editorială lucrează cu experții tăi interni pentru conținut autoritar, corect tehnic și bazat pe expertiză reală.',
        },
        {
          question: 'Ce se întâmplă la un Google Core Update?',
          answer:
            'Pentru că lucrăm pe fundație tehnică solidă și autoritate white-hat, site-urile sunt poziționate să reziste update-urilor fără loopholes temporare.',
        },
      ],
    },
  },
  webDevelopment: {
    hero: {
      eyebrow: 'Web design & dezvoltare web',
      titleLine1: 'Experiențe',
      titleLine2: 'digitale.',
      description:
        'Construim aplicații web performante și site-uri de marketing care combină design premium cu cod modern, scalabil.',
      cta: 'Planifică build-ul',
    },
    painPoints: {
      title: 'De la template-uri la arhitectură.',
      description:
        'Majoritatea site-urilor sunt broșuri digitale lente, construite pe framework-uri vechi. Noi construim aplicații performante care susțin rezultate reale.',
      realityTitle: 'Realitatea comună',
      standardTitle: 'Standardul LightningRevenue',
      painPoints: [
        'Template-uri lente și încărcate care distrug experiența și conversiile.',
        'Cod dezordonat care se rupe la fiecare feature simplu.',
        'Design frumos care ignoră SEO-ul și fundamentele tehnice.',
        'Freelanceri care dispar săptămâni întregi și ratează launch-uri critice.',
      ],
      outcomes: [
        'Arhitecturi Next.js rapide, construite pentru încărcări sub o secundă.',
        'Cod modular și curat, care scalează odată cu businessul.',
        'Implementări pixel-perfect unde designul, performanța și SEO-ul coexistă.',
        'Sprinturi transparente cu ingineri seniori care comunică constant.',
      ],
    },
    about: {
      title: 'Anatomia unui web dev de elită.',
      description:
        'Nu facem doar website-uri. Construim produse digitale. Fiecare linie de cod este optimizată pentru viteză, scalabilitate și experiență impecabilă.',
      cards: [
        { title: 'Stack modern', desc: 'Construim pe Next.js, React și Tailwind CSS pentru aplicații rapide, sigure și scalabile.' },
        { title: 'Headless CMS', desc: 'Integrăm Sanity sau Contentful ca echipa de marketing să editeze conținutul fără să piardem controlul tehnic.' },
        { title: 'UX/UI pentru conversie', desc: 'Fiecare interfață este proiectată pentru acțiune și un user journey fără fricțiune.' },
        { title: 'Core Web Vitals', desc: 'Optimizăm imagini, caching și main-thread work pentru performanță reală, nu doar scoruri.' },
        { title: 'Integrări custom', desc: 'Conectăm platforma cu HubSpot, Salesforce, ERP-uri, payment flows sau API-uri custom.' },
        { title: 'Securitate & compliance', desc: 'Pattern-uri enterprise, infrastructură întărită, dependency hygiene și controale practice de securitate.' },
      ],
      highlightEyebrow: 'Standardul LightningRevenue',
      highlightTitle: 'Cât poți crește cu un site performant?',
      highlightDescription: (
        <>
          Când site-ul se încarcă instant și experiența utilizatorului este fără
          fricțiune, conversiile cresc natural. O platformă Next.js
          re-arhitectată corect produce de obicei o{' '}
          <strong className="text-white font-medium">
            creștere de 60% în rata de conversie pe mobile
          </strong>{' '}
          în prima lună, reducând costurile de achiziție pe canalele paid.
        </>
      ),
      stats: [
        { value: '60%', label: 'CVR mai mare' },
        { value: '< 1s', label: 'Load time' },
      ],
    },
    advanced: {
      eyebrow: 'Engineering avansat',
      title: 'Dincolo de template-uri basic.',
      description:
        'Trecem peste sisteme monolitice și integrăm arhitecturi headless, serverless functions și sincronizare de date în timp real.',
      features: [
        { title: 'Headless Commerce', description: 'Decuplăm Shopify sau BigCommerce și construim storefront-uri React rapide, fără limitări de platformă.' },
        { title: 'Serverless Edge Computing', description: 'Deploy la edge prin Vercel sau AWS Lambda pentru randare rapidă la nivel global.' },
        { title: 'Real-Time Data Pipelines', description: 'Integrăm WebSockets și API-uri custom pentru dashboard-uri, chat, inventar și interfețe dinamice.' },
        { title: 'Automated E2E Testing', description: 'Implementăm teste end-to-end ca funnel-urile, formularele și checkout-urile critice să nu se rupă în producție.' },
      ],
    },
    contact: {
      title: 'Cere o definire tehnică de scope.',
      description:
        'Inginerii noștri seniori îți analizează cerințele și mapează arhitectura exactă necesară.',
      formTitle: 'Aplicație proiect',
      phaseLabel: phase => `Faza ${phase} din 4`,
      challengeTitle: 'Care este provocarea principală?',
      challengeDescription:
        'Spune-ne ce vrei să construiești sau ce este stricat în setup-ul actual.',
      challengePlaceholder:
        'ex. Vrem să migrăm de pe un WordPress lent către o arhitectură headless Next.js...',
      spendTitle: 'Buget proiect',
      spendDescription:
        'Ne ajută să propunem soluția arhitecturală potrivită pentru scala ta.',
      spendOptions: ['Sub $10k', '$10k - $25k', '$25k - $50k', '$50k+'],
      websiteTitle: 'Site actual / inspirație',
      websiteDescription:
        'Trimite URL-ul actual sau un link către o funcționalitate pe care o apreciezi.',
      websitePlaceholder: 'https://companiata.com',
      contactTitle: 'Unde trimitem analiza?',
      contactDescription:
        'Analizăm brief-ul și îți trimitem un breakdown video direct.',
      namePlaceholder: 'Nume complet',
      emailPlaceholder: 'Email de business',
      back: 'Înapoi',
      nextStep: 'Pasul următor',
      submitting: 'Se trimite...',
      submit: 'Trimite brief-ul',
      error: 'Cererea nu a putut fi trimisă.',
      success: 'Cererea a fost trimisă.',
    },
    faq: {
      title: 'Logistica dezvoltării.',
      items: [
        { question: 'Ce tech stack folosiți?', answer: 'Construim în principal arhitecturi headless moderne cu Next.js, React și Tailwind CSS, plus Sanity, Shopify sau API-uri Node.js custom în funcție de proiect.' },
        { question: 'Cât durează un build custom?', answer: 'Un site de marketing performant durează de obicei 4-6 săptămâni. Aplicațiile web complexe sau headless commerce ajung frecvent la 8-12 săptămâni.' },
        { question: 'Oferiți mentenanță?', answer: 'Da. Avem retainere cu SLA pentru monitoring, update-uri de dependencies, tuning de performanță și optimizare continuă.' },
        { question: 'Cine deține codul?', answer: 'Tu. După plata finală, codul sursă, repo-urile, asset-urile și proprietatea intelectuală sunt transferate organizației tale.' },
      ],
    },
  },
  softwareDevelopment: {
    hero: {
      eyebrow: 'Inginerie software',
      titleLine1: 'Sisteme',
      titleLine2: 'custom.',
      description:
        'Construim aplicații software personalizate și arhitecturi scalabile, transformând logica de business complexă în produse cloud-native sigure și fiabile.',
      cta: 'Definește proiectul',
    },
    painPoints: {
      title: 'De la limitări la infrastructură.',
      description:
        'Multe businessuri sunt blocate de sisteme vechi sau tool-uri SaaS rigide. Construim software custom care devine avantaj operațional real.',
      realityTitle: 'Realitatea comună',
      standardTitle: 'Standardul LightningRevenue',
      painPoints: [
        'Dependență de SaaS-uri standard care te forțează să schimbi logica businessului.',
        'Technical debt acumulat în codebase-uri vechi pe care nimeni nu vrea să le atingă.',
        'Sisteme critice care nu comunică și creează silozuri de date.',
        'Agenții care promit MVP-uri rapide, dar livrează produse instabile și greu de scalat.',
      ],
      outcomes: [
        'Aplicații custom construite exact în jurul workflow-urilor operaționale.',
        'Codebase-uri moderne, documentate și ușor de menținut pe termen lung.',
        'Arhitecturi API care conectează stack-ul de business intelligence.',
        'QA riguros și pipeline-uri CI/CD pentru deployment-uri predictibile.',
      ],
    },
    about: {
      title: 'Anatomia sistemelor custom.',
      description:
        'Nu lipim scripturi rapide. Construim software enterprise-grade. Fiecare componentă este proiectată pentru securitate, concurență mare și mentenanță pe termen lung.',
      cards: [
        { title: 'Stack enterprise', desc: 'Construim sisteme reziliente cu Node.js, Go, Python și React, astfel încât backend-ul să susțină concurență mare iar frontend-ul să rămână fluid.' },
        { title: 'Arhitectură cloud', desc: 'Deploy pe AWS sau Google Cloud cu infrastructură scalabilă, tolerantă la erori, auto-scaling și baze de date managed.' },
        { title: 'Microservicii & API-uri', desc: 'Spargem monoliți în servicii clare și construim API-uri REST sau GraphQL pentru echipe interne și parteneri externi.' },
        { title: 'Pipeline-uri CI/CD', desc: 'Automatizăm livrarea software ca echipa să poată lansa cod sigur, repetabil și fără risc manual.' },
        { title: 'Security by design', desc: 'Implementăm zero-trust, autentificare JWT, criptare at rest și scanare automată de vulnerabilități.' },
        { title: 'QA automatizat', desc: 'Scriem teste unitare, de integrare și end-to-end ca bug-urile critice să fie prinse înainte de producție.' },
      ],
      highlightEyebrow: 'Standardul LightningRevenue',
      highlightTitle: 'Cât de fiabilă este o arhitectură de elită?',
      highlightDescription: (
        <>
          Când software-ul critic cade, venitul se oprește imediat. Prin
          Kubernetes, infrastructură cloud cu auto-scaling și pipeline-uri
          CI/CD stricte, platformele custom pot fi proiectate pentru{' '}
          <strong className="text-white font-medium">99.99% uptime</strong>{' '}
          și zero pierdere operațională de date.
        </>
      ),
      stats: [
        { value: '99.99%', label: 'Uptime' },
        { value: '0%', label: 'Data loss' },
      ],
    },
    advanced: {
      eyebrow: 'Engineering avansat',
      title: 'Dincolo de aplicații standard.',
      description:
        'Construim soluții deep-tech cu Kubernetes, logică AI și arhitecturi event-driven asincrone.',
      features: [
        { title: 'Orchestrare Kubernetes', description: 'Containerizăm aplicațiile cu Docker și le gestionăm prin Kubernetes ca microserviciile să scaleze la vârfuri de trafic.' },
        { title: 'Integrare Machine Learning', description: 'Conectăm software-ul custom la LLM-uri sau deployăm modele ML Python direct în pipeline-uri de producție.' },
        { title: 'Arhitecturi event-driven', description: 'Folosim Apache Kafka sau AWS EventBridge pentru sisteme reziliente care reacționează instant la schimbări de date.' },
        { title: 'Pipeline-uri ETL Big Data', description: 'Construim workflow-uri ETL care mută volume mari de date în warehouse-uri structurate precum Snowflake.' },
      ],
    },
    contact: {
      title: 'Cere o definire de arhitectură.',
      description:
        'Arhitecții noștri de sisteme îți analizează logica de business și mapează infrastructura exactă necesară.',
      formTitle: 'Scoping tehnic',
      phaseLabel: phase => `Faza ${phase} din 4`,
      challengeTitle: 'Care este provocarea de bază?',
      challengeDescription:
        'Descrie problema de business, blocajul sau sistemul pe care vrei să îl construim.',
      challengePlaceholder:
        'ex. Avem nevoie de un dashboard intern custom care trage date din 3 API-uri diferite...',
      spendTitle: 'Nivel buget proiect',
      spendDescription:
        'Asta ne ajută să calibrăm echipa și arhitectura pe care o putem propune.',
      spendOptions: ['Sub $25k', '$25k - $50k', '$50k - $150k', '$150k+'],
      websiteTitle: 'Tech stack actual',
      websiteDescription:
        'Există limbaje, baze de date sau cloud providers cu care trebuie să integrăm?',
      websitePlaceholder: 'ex. AWS, PostgreSQL, React, Python...',
      contactTitle: 'Unde trimitem propunerea?',
      contactDescription:
        'Analizăm brief-ul și îți trimitem un breakdown video direct.',
      namePlaceholder: 'Nume complet',
      emailPlaceholder: 'Email de business',
      back: 'Înapoi',
      nextStep: 'Pasul următor',
      submitting: 'Se trimite...',
      submit: 'Trimite brief-ul',
      error: 'Cererea nu a putut fi trimisă.',
      success: 'Cererea a fost trimisă.',
    },
    faq: {
      title: 'Logistica engineeringului.',
      items: [
        { question: 'Preluați codebase-uri legacy existente?', answer: 'Da, dar doar după un audit tehnic riguros. Dacă debt-ul este sever, recomandăm o rescriere graduală în loc să construim peste o fundație stricată.' },
        { question: 'Ce metodologie de dezvoltare folosiți?', answer: 'Lucrăm în sprinturi agile cu checkpoint-uri clare, note de progres și backlog transparent.' },
        { question: 'Cum tratați securitatea și compliance-ul?', answer: 'Securitatea este proiectată din prima zi prin criptare, access controls, scanare de vulnerabilități și verificări de deployment.' },
        { question: 'Deținem proprietatea intelectuală?', answer: 'Da. După factura finală, codul sursă, diagramele de arhitectură, mediile cloud și IP-ul sunt transferate companiei tale.' },
      ],
    },
  },
  uiUx: {
    hero: {
      eyebrow: 'Design UI/UX',
      titleLine1: 'Arhitectură',
      titleLine2: 'de conversie.',
      description:
        'Nu facem doar interfețe frumoase. Construim flow-uri psihologice care combină estetică premium cu journey-uri fără fricțiune pentru venit real.',
      cta: 'Auditează UX-ul',
    },
    painPoints: {
      title: 'De la artă la engineering.',
      description:
        'Majoritatea agențiilor livrează imagini frumoase. Noi construim produse digitale cu conversie mare, eliminând fricțiunea și construind încredere la fiecare touchpoint.',
      realityTitle: 'Realitatea comună',
      standardTitle: 'Standardul LightningRevenue',
      painPoints: [
        'Designuri "frumoase" care confundă utilizatorii și duc la bounce rate mare și zero conversii.',
        'Interfețe pe template care fac un brand premium să arate ca orice competitor ieftin.',
        'Experiențe mobile ignorate, deși acolo se întâmplă mare parte din decizie.',
        'Decizii de design bazate pe feeling artistic, nu pe date despre comportamentul utilizatorilor.',
      ],
      outcomes: [
        'Interfețe construite pe psihologie comportamentală ca utilizatorii să fie ghidați natural spre acțiune.',
        'Design systems custom care poziționează brandul ca autoritate premium.',
        'Arhitecturi mobile-first cu experiențe fluide pe orice dimensiune de ecran.',
        'A/B testing și heat-map analysis pentru validarea deciziilor importante de design.',
      ],
    },
    about: {
      title: 'Anatomia unui UI/UX de elită.',
      description:
        'Fiecare pixel are un scop. Combinăm principii psihologice cu analiză de date ca să construim interfețe care par simple și convertesc agresiv.',
      cards: [
        { title: 'Psihologie comportamentală', desc: 'Proiectăm pentru pattern-uri cognitive reale. Poziția butoanelor, contrastul și ierarhia vizuală sunt alese pentru acțiuni concrete.' },
        { title: 'Wireframing & prototyping', desc: 'Mapăm user journey-urile în Figma înainte de cod, validând flow-uri complexe fără technical debt.' },
        { title: 'Micro-interacțiuni', desc: 'Adăugăm feedback subtil și motion care fac produsul să pară mai rapid, mai premium și mai ușor de înțeles.' },
        { title: 'Design systems', desc: 'Construim biblioteci de componente tokenizate ca brandul să rămână consistent pe măsură ce produsul scalează.' },
        { title: 'Accesibilitate WCAG', desc: 'Proiectăm pentru contrast, screen readers, navigare din tastatură și acces incluziv pe toată platforma.' },
        { title: 'Conversion Rate Optimization', desc: 'Folosim heatmaps, A/B tests și date comportamentale pentru landing pages și flow-uri critice.' },
      ],
      highlightEyebrow: 'Standardul LightningRevenue',
      highlightTitle: 'Cât venit se ascunde în design prost?',
      highlightDescription: (
        <>
          Când utilizatorii sunt confuzi, pleacă. Când interfața pare premium
          și intuitivă, încrederea crește rapid. Un redesign UX arhitectat
          corect produce de obicei o{' '}
          <strong className="text-white font-medium">
            creștere de 35% în rata de conversie la checkout
          </strong>{' '}
          în primele 60 de zile, în timp ce identitatea vizuală devine
          consistentă pe toate platformele.
        </>
      ),
      stats: [
        { value: '35%', label: 'CVR mai mare' },
        { value: '100%', label: 'Consistență' },
      ],
    },
    advanced: {
      eyebrow: 'Metodologii avansate',
      title: 'Dincolo de mockup-uri basic.',
      description:
        'Trecem peste wireframe-uri standard și integrăm testare biometrică, tehnologii web 3D și experiențe predictive.',
      features: [
        { title: 'Testare biometrică', description: 'Folosim eye-tracking și facial coding ca să vedem unde privesc utilizatorii și cum reacționează emoțional.' },
        { title: 'Integrare 3D & WebGL', description: 'Implementăm experiențe Spline sau Three.js pentru prezentări de produs interactive și memorabile.' },
        { title: 'Predictive UX Automation', description: 'Folosim logică ML pentru adaptarea conținutului și interfeței în funcție de comportamentul și intenția utilizatorului.' },
        { title: 'Evaluări euristice', description: 'Audităm interfețele după principiile de usability ale lui Jakob Nielsen ca să eliminăm fricțiunea cognitivă.' },
      ],
    },
    contact: {
      title: 'Cere un audit UX.',
      description:
        'Designerii noștri seniori îți analizează interfața actuală și mapează o arhitectură orientată spre conversie.',
      formTitle: 'Scoping design',
      phaseLabel: phase => `Faza ${phase} din 4`,
      challengeTitle: 'Care este principala problemă de interfață?',
      challengeDescription:
        'Spune-ne ce este stricat în experiența actuală sau în estetica brandului.',
      challengePlaceholder:
        'ex. Utilizatorii abandonează la checkout sau aplicația arată ca și cum a fost făcută în 2012...',
      spendTitle: 'Buget design',
      spendDescription:
        'Asta determină profunzimea design system-ului și a prototipării.',
      spendOptions: ['Sub $5k', '$5k - $10k', '$10k - $25k', '$25k+'],
      websiteTitle: 'URL aplicație/site actual',
      websiteDescription:
        'Trimite link-ul platformei actuale sau un fișier Figma dacă există.',
      websitePlaceholder: 'https://companiata.com',
      contactTitle: 'Unde trimitem auditul?',
      contactDescription:
        'Analizăm interfața și îți trimitem un breakdown video direct.',
      namePlaceholder: 'Nume complet',
      emailPlaceholder: 'Email de business',
      back: 'Înapoi',
      nextStep: 'Pasul următor',
      submitting: 'Se trimite...',
      submit: 'Cere auditul',
      error: 'Cererea nu a putut fi trimisă.',
      success: 'Cererea a fost trimisă.',
    },
    faq: {
      title: 'Logistica designului.',
      items: [
        { question: 'Ce software folosiți?', answer: 'Figma este sursa principală pentru wireframing, prototyping și design systems. Folosim și Spline pentru elemente 3D și tool-uri comportamentale după lansare.' },
        { question: 'Scrieți și codul?', answer: 'Da. Putem livra doar fișiere Figma, dar echipa de design lucrează direct cu engineeringul ca implementarea să păstreze fidelitatea vizuală.' },
        { question: 'Câte revizii avem?', answer: 'Lucrăm în cicluri agile de review, nu cu limite arbitrare de revizii. Feedback-ul este integrat constant pe parcursul proiectului.' },
        { question: 'Puteți redesena doar o pagină?', answer: 'Uneori, dar UX-ul este holistic. O singură pagină rareori repară un funnel rupt, de aceea preferăm să analizăm întregul journey.' },
      ],
    },
  },
  smm: {
    hero: {
      eyebrow: 'Social Media Management',
      titleLine1: 'Autoritate',
      titleLine2: 'de brand.',
      description:
        'Nu doar postăm conținut. Construim atenție, ecosisteme virale și comunități solide pe fiecare canal digital relevant.',
      cta: 'Auditează brandul',
    },
    painPoints: {
      title: 'De la zgomot la dominanță.',
      description:
        'Majoritatea brandurilor sunt invizibile pe social media. Construim framework-uri de conținut care lucrează cu algoritmii și capturează atenția în nișa ta.',
      realityTitle: 'Realitatea comună',
      standardTitle: 'Standardul LightningRevenue',
      painPoints: [
        'Conținut corporate generic care nu primește engagement și slăbește percepția brandului.',
        'Aceeași abordare pe toate platformele, fără să ții cont de diferențele dintre TikTok, Instagram și LinkedIn.',
        'Vanity metrics urmărite obsesiv, fără impact real în pipeline sau venit.',
        'Calendar de postare inconsistent care face algoritmii să îngroape reach-ul organic.',
      ],
      outcomes: [
        'Conținut cu retenție mare, construit nativ pentru cultura fiecărei platforme.',
        'Strategii specifice pe platformă, aliniate cu regulile actuale de distribuție.',
        'Funnel-uri social gândite să transforme atenția brută în lead-uri calificate.',
        'Un motor constant de conținut care menține brandul vizibil tot anul.',
      ],
    },
    about: {
      title: 'Anatomia creșterii virale.',
      description:
        'Nu ne bazăm pe noroc. Viralitatea este un sistem. Fiecare postare este gândită pentru retenție, distribuție algoritmică și venit măsurabil.',
      cards: [
        { title: 'Dominare short-form', desc: 'Scriptăm, edităm și distribuim conținut TikTok, Reels și Shorts cu retenție mare și potențial organic real.' },
        { title: 'Copywriting nativ pe platformă', desc: 'Fără copy-paste. LinkedIn, X, Instagram și TikTok primesc conținut scris pentru audiența și formatul lor.' },
        { title: 'Trend hacking algoritmic', desc: 'Monitorizăm micro-trenduri, audio signals și schimbări de platformă ca brandul să se miște înaintea competitorilor.' },
        { title: 'Community management', desc: 'Gestionăm comentarii, DM-uri și conversații ca spectatorii să devină membri activi ai comunității.' },
        { title: 'Influencer seeding', desc: 'Identificăm și negociem cu creatori de nișă care pot amplifica mesajul prin voci externe de încredere.' },
        { title: 'Motor de repurposing', desc: 'Transformăm un asset principal în multiple micro-assets optimizate pentru distribuție pe canalele relevante.' },
      ],
      highlightEyebrow: 'Standardul LightningRevenue',
      highlightTitle: 'Cât de repede poți scala prin atenție organică?',
      highlightDescription: (
        <>
          Când un brand oprește conținutul corporate gol și livrează valoare
          nativă pe platformă, algoritmii îl recompensează. Un ecosistem social
          gestionat corect vede de obicei un{' '}
          <strong className="text-white font-medium">
            multiplicator 10x în reach organic
          </strong>{' '}
          în 90 de zile, urmat de engagement direct mai puternic în comunitate.
        </>
      ),
      stats: [
        { value: '10x', label: 'Reach organic' },
        { value: '300%', label: 'Engagement' },
      ],
    },
    advanced: {
      eyebrow: 'Distribuție avansată',
      title: 'Dincolo de postări basic.',
      description:
        'Trecem peste calendare simple de conținut și integrăm employee advocacy, creator whitelisting și social listening avansat.',
      features: [
        { title: 'Social Listening APIs', description: 'Monitorizăm sentimentul de brand și interceptăm plângerile despre competitori în timp real ca să găsim utilizatori care caută soluția ta.' },
        { title: 'Employee Advocacy Programs', description: 'Transformăm leadershipul și echipele interne într-o rețea sincronizată de distribuție pe LinkedIn, fără dependență exclusivă de ads.' },
        { title: 'Micro-Targeted Whitelisting', description: 'Rulăm paid social prin handle-uri de creatori ca să creștem încrederea și să reducem costurile de achiziție.' },
        { title: 'Cross-Platform Pixel Tracking', description: 'Mapăm journey-uri de la view-uri organice până la deal-uri închise, ca impactul social să fie măsurabil.' },
      ],
    },
    contact: {
      title: 'Cere un audit de conținut.',
      description:
        'Directorii noștri creativi îți analizează prezența social actuală și mapează un framework de creștere virală.',
      formTitle: 'Aplicație audit',
      phaseLabel: phase => `Faza ${phase} din 4`,
      challengeTitle: 'Care este principala problemă pe social?',
      challengeDescription:
        'Înainte să analizăm feed-urile, spune-ne ce blochează creșterea organică.',
      challengePlaceholder:
        'ex. Postăm constant pe LinkedIn dar nu avem engagement sau vrem să lansăm TikTok și nu știm cum...',
      spendTitle: 'Buget lunar SMM',
      spendDescription:
        'Asta determină volumul de producție de conținut pe care îl putem susține.',
      spendOptions: [
        'Sub $2,500',
        '$2,500 - $5,000',
        '$5,000 - $10,000',
        '$10,000+',
      ],
      websiteTitle: 'Unde este audiența principală?',
      websiteDescription:
        'Trimite link-ul către profilul social principal: LinkedIn, TikTok sau Instagram.',
      websitePlaceholder: 'https://linkedin.com/company/brandultau',
      contactTitle: 'Unde trimitem auditul?',
      contactDescription:
        'Analizăm conținutul și îți trimitem un breakdown video direct.',
      namePlaceholder: 'Nume complet',
      emailPlaceholder: 'Email de business',
      back: 'Înapoi',
      nextStep: 'Pasul următor',
      submitting: 'Se trimite...',
      submit: 'Cere auditul',
      error: 'Cererea nu a putut fi trimisă.',
      success: 'Cererea a fost trimisă.',
    },
    faq: {
      title: 'Logistica social media.',
      items: [
        { question: 'Filmați voi conținutul video?', answer: 'Da. În funcție de scope, filmăm on-site sau setăm workflow-uri remote pentru experții interni și gestionăm post-producția.' },
        { question: 'De câte ori pe săptămână postați?', answer: 'Volumul depinde de platformă. TikTok și Shorts cer frecvență mai mare, iar LinkedIn cere profunzime și calitate. Optimizăm pentru reach, nu pentru cote arbitrare.' },
        { question: 'Putem aproba postările înainte să intre live?', answer: 'Da. Folosim workflow-uri colaborative de aprobare ca fiecare copy și creative să poată fi verificat înainte de publicare.' },
        { question: 'Cât durează până devenim virali?', answer: 'Viralitatea vine din consistență. Creșterea de bază ar trebui să se vadă în 30 de zile, iar breakout moments apar de obicei între lunile 3 și 6.' },
      ],
    },
  },
};
