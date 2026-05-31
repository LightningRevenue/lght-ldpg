# Brief pentru modelul urmator: traduceri si pagini Next Services

## Context

Proiectul este un site Next.js 16 cu App Router si rute publice localizate sub `src/app/[lang]`.

Limbile active sunt:

- `en` - limba default
- `ro`
- `it`
- `es`

Default language este `en`. Root-ul `/` redirectioneaza spre `/en`, iar paginile publice vechi fara prefix de limba trebuie redirectionate spre varianta `/en/...`.

Admin-ul si API-urile nu se muta sub `[lang]`.

## Regula importanta Next.js

Acest proiect foloseste o versiune noua de Next.js cu schimbari fata de versiunile cunoscute. Inainte de modificari pe routing, metadata, sitemap, robots sau proxy/middleware, citeste documentatia locala din:

```txt
node_modules/next/dist/docs/
```

Nu presupune comportament vechi de Next.js.

## Structura i18n existenta

Nu adauga toate traducerile intr-un singur fisier mare.

Foloseste structura existenta:

```txt
src/i18n/
  config.ts
  types.ts
  get-common-dictionary.ts
  get-home-dictionary.ts
  get-about-dictionary.ts
  get-contact-dictionary.ts
  get-services-dictionary.ts
  dictionaries/
    en/
      common.ts
      home.ts
      about.ts
      contact.ts
      services.tsx
    ro/
      common.ts
      home.ts
      about.ts
      contact.ts
      services.tsx
```

Pentru paginile de servicii, foloseste `src/i18n/dictionaries/[lang]/services.tsx`.

Fisierul este `.tsx` pentru ca unele texte contin JSX, de exemplu `highlightDescription`.

## Pagini deja conectate la traduceri EN/RO

Aceste pagini sunt deja conectate la dictionarele separate:

- Home
- About
- Contact
- PPC
- SEO
- Web Development
- Software Development

Nu reface aceste pagini fara motiv. Daca le atingi, pastreaza pattern-ul existent.

## Urmatoarele servicii care trebuie facute

Serviciile ramase de conectat la traduceri EN/RO sunt:

- `/services/ui-ux`
- `/services/smm`
- `/services/lead-generation`
- `/services/sales-setup`

Componentele lor sunt in:

```txt
src/components/ui-ux-components/
src/components/smm-components/
src/components/leadgen-components/
src/components/sales-setup-components/
```

## Pattern obligatoriu pentru o pagina de serviciu

Pentru fiecare serviciu:

1. Adauga o cheie noua in `ServicesDictionary` din `src/i18n/types.ts`.
2. Adauga continutul EN in `src/i18n/dictionaries/en/services.tsx`.
3. Adauga continutul RO in `src/i18n/dictionaries/ro/services.tsx`.
4. Conecteaza componentele serviciului la dictionar.
5. Pastreaza layout-ul, animatiile, iconurile si CSS-ul existent.
6. Ruleaza `npm run build`.
7. Spune utilizatorului sa dea review pe ruta `/ro/services/...`.

Exemplu de cheie:

```ts
export type ServicesDictionary = {
  ppc: ServicePageDictionary;
  seo: ServicePageDictionary;
  webDevelopment: ServicePageDictionary;
  softwareDevelopment: ServicePageDictionary;
  uiUx: ServicePageDictionary;
};
```

## Pattern componenta client-side

Daca o componenta are texte hardcodate si trebuie sa citeasca limba din URL, foloseste:

```tsx
"use client";

import { usePathname } from 'next/navigation';
import { getLanguageFromPathname } from '@/i18n/config';
import { getServicesDictionary } from '@/i18n/get-services-dictionary';

export default function ComponentName() {
  const t = getServicesDictionary(
    getLanguageFromPathname(usePathname())
  ).serviceKey.sectionKey;

  return <>{/* foloseste t */}</>;
}
```

Pentru componente care au deja `useState`, `useEffect`, formulare sau scroll listeners, ele sunt deja client components. Doar adauga importurile si `t`.

## Structura dictionarului pentru servicii

Toate serviciile trebuie sa respecte `ServicePageDictionary`:

```ts
{
  hero: {
    eyebrow,
    titleLine1,
    titleLine2,
    description,
    cta
  },
  painPoints: {
    title,
    description,
    realityTitle,
    standardTitle,
    painPoints,
    outcomes
  },
  about: {
    title,
    description,
    cards,
    highlightEyebrow,
    highlightTitle,
    highlightDescription,
    stats
  },
  advanced: {
    eyebrow,
    title,
    description,
    features
  },
  contact: {
    title,
    description,
    formTitle,
    phaseLabel,
    challengeTitle,
    challengeDescription,
    challengePlaceholder,
    spendTitle,
    spendDescription,
    spendOptions,
    websiteTitle,
    websiteDescription,
    websitePlaceholder,
    contactTitle,
    contactDescription,
    namePlaceholder,
    emailPlaceholder,
    back,
    nextStep,
    submitting,
    submit,
    error,
    success
  },
  faq: {
    title,
    items
  }
}
```

## Cum se traduce

Nu face traducere mot-a-mot. Textul in romana trebuie sa sune natural, premium si comercial.

Tonul trebuie sa fie:

- clar
- direct
- orientat spre business
- fara glume
- fara marketing generic
- fara fraze goale de tip "solutii inovatoare pentru viitor"

Pastreaza termenii tehnici in engleza cand suna mai natural in industrie:

- funnel
- pipeline
- tracking
- dashboard
- landing page
- sprint
- stack
- framework
- deployment
- lead
- CRM
- API

Dar restul propozitiei trebuie sa fie romana naturala.

## Formulare servicii

Formularele de servicii trimit date prin `submitServiceRequest`.

Nu schimba numele campurilor fara sa verifici API-ul.

Exemple existente:

- PPC/SEO/Web Development folosesc `challenge`, `budget`, `website`, `name`, `email`.
- Software Development foloseste `challenge`, `budget`, `techStack`, `name`, `email`.

Daca o componenta foloseste un camp diferit, pastreaza campul existent si doar schimba label-urile/placeholder-ele.

## SEO si routing

Metadata este centralizata in:

```txt
src/lib/seo-metadata.ts
```

Sitemap-ul este generat automat in:

```txt
src/app/sitemap.ts
```

Robots este in:

```txt
src/app/robots.ts
```

Cand adaugi o pagina publica noua, verifica daca trebuie adaugata in metadata/routes ca sa intre corect in sitemap, canonical si hreflang.

Cand doar traduci o pagina de serviciu existenta, nu ar trebui sa fie nevoie sa modifici sitemap-ul.

## Verificare obligatorie

Dupa fiecare serviciu terminat:

```powershell
npm run build
```

Build-ul trebuie sa treaca.

In raspunsul final spune:

- ce serviciu ai terminat
- ce fisiere principale ai modificat
- daca build-ul trece
- ce ruta trebuie verificata manual
- care este urmatorul serviciu recomandat

## Recomandare de ordine

Continua in ordinea asta:

1. `ui-ux`
2. `smm`
3. `lead-generation`
4. `sales-setup`

Motiv: `ui-ux` si `smm` sunt mai apropiate ca structura de serviciile deja facute, apoi lead generation si sales setup pot avea formular/texte mai specifice.
