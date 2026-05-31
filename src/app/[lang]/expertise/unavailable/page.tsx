import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { localizePath } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ lang: string }>;
};

const availableServices = [
  {
    title: 'PPC',
    description:
      'Management paid media, tracking de conversii și scalare orientată spre ROAS.',
    href: '/services/ppc',
  },
  {
    title: 'SEO',
    description:
      'SEO tehnic, conținut strategic și vizibilitate organică pentru achiziție durabilă.',
    href: '/services/seo',
  },
  {
    title: 'Web Development',
    description:
      'Site-uri rapide, landing pages și experiențe digitale construite pentru conversie.',
    href: '/services/web-development',
  },
  {
    title: 'Software Development',
    description:
      'Aplicații custom, tool-uri interne și arhitecturi software scalabile.',
    href: '/services/software-development',
  },
  {
    title: 'Social Media Management',
    description:
      'Conținut, comunitate și distribuție organică pentru branduri moderne.',
    href: '/services/smm',
  },
  {
    title: 'UI/UX Design',
    description:
      'Interfețe premium, design systems și user journeys orientate spre acțiune.',
    href: '/services/ui-ux',
  },
];

export const metadata: Metadata = {
  title: 'Expertiza indisponibila momentan in Romania | LightningRevenue',
  description:
    'SLA si Dedicated Account Manager nu sunt inca disponibile in Romania. Vezi serviciile disponibile momentan.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function RomanianUnavailableExpertisePage({
  params,
}: PageProps) {
  const { lang } = await params;

  if (lang !== 'ro') {
    redirect(localizePath('/', lang));
  }

  return (
    <main className="min-h-screen bg-[#fafafa] px-6 pb-28 pt-36 text-black sm:pt-44">
      <section className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-black/45">
            <span className="h-2 w-2 rounded-full bg-[#2f5b7c]" />
            Disponibilitate regională
          </div>

          <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight text-black sm:text-7xl lg:text-8xl">
            Secțiunea de expertiză nu este încă disponibilă în România.
          </h1>

          <div className="mt-10 grid gap-6 text-lg font-light leading-relaxed text-black/65 md:grid-cols-[1fr_0.85fr]">
            <p>
              SLA Guarantees și Dedicated Account Manager sunt componente de
              colaborare care cer infrastructură operațională, procese de
              suport și cadru contractual adaptat local. Momentan nu le
              activăm în România până când nu le putem susține complet.
            </p>
            <p>
              Dacă ai ajuns aici schimbând limba dintr-o pagină în engleză,
              redirect-ul este intenționat. Lucrăm la extinderea acestor
              beneficii pentru piața locală, dar preferăm să le lansăm doar
              când livrarea poate fi garantată corect.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-black p-8 text-white shadow-2xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                Ce putem livra acum
              </div>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Serviciile principale sunt disponibile pentru România.
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-white/60">
                Putem începe cu strategie, execuție și sisteme digitale unde
                avem deja framework-uri clare de livrare pentru piața locală.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {availableServices.map(service => (
                <Link
                  key={service.href}
                  href={localizePath(service.href, 'ro')}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-medium tracking-tight">
                      {service.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/65 transition-all duration-300 group-hover:border-white group-hover:text-white">
                      <svg
                        className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-white/55">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/ro/contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#2f5b7c]"
          >
            Discută cu noi
          </Link>
          <Link
            href="/ro"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-bold text-black transition-colors hover:border-black/25"
          >
            Înapoi la homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
