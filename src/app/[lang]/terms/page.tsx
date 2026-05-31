import React from 'react';
import Link from 'next/link';
import { localizePath } from '@/lib/i18n';
import { createPageMetadata } from '@/lib/seo-metadata';

const updatedAt = 'May 30, 2026';

const touchpoints = [
  { id: 'overview', label: 'Overview' },
  { id: 'site-use', label: 'Site use' },
  { id: 'inquiries', label: 'Inquiries' },
  { id: 'services', label: 'Services' },
  { id: 'client-obligations', label: 'Client obligations' },
  { id: 'payments', label: 'Payments' },
  { id: 'ip', label: 'Intellectual property' },
  { id: 'third-parties', label: 'Third parties' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'warranties', label: 'Warranties' },
  { id: 'liability', label: 'Liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'disputes', label: 'Disputes' },
  { id: 'contact', label: 'Contact' },
];

const overviewClauses = [
  {
    title: 'These terms govern public site use',
    body: 'These Terms and Conditions govern access to and use of the LightningRevenue website, public pages, contact forms, newsletter interfaces, analytics-related disclosures, service inquiry flows, and other public digital touchpoints operated by LightningRevenue. They are intended to apply before any separate client agreement, statement of work, data processing agreement, or commercial contract is signed.',
  },
  {
    title: 'Separate written agreements control paid work',
    body: 'If LightningRevenue and a client sign a separate written agreement, statement of work, proposal, order form, master services agreement, data processing agreement, confidentiality agreement, or security exhibit, that signed document controls the specific paid engagement to the extent it directly conflicts with these website terms.',
  },
  {
    title: 'No automatic client relationship',
    body: 'Using the site, submitting a form, booking a call, sending an email, selecting a service, requesting pricing, or receiving a preliminary response does not create a client relationship, agency relationship, fiduciary duty, exclusivity obligation, partnership, joint venture, employment relationship, or commitment by LightningRevenue to accept, start, or complete any project.',
  },
  {
    title: 'Business-use orientation',
    body: 'The site is designed primarily for business-to-business audiences. If you use the site on behalf of a company, brand, employer, client, or organization, you represent that you have authority to do so and that your use does not violate any internal policy, third-party right, platform rule, confidentiality duty, or contractual obligation.',
  },
];

const useRules = [
  {
    title: 'Permitted use',
    body: 'You may access the site for lawful business evaluation, service research, inquiry submission, newsletter signup, privacy review, and ordinary browsing. You may share public links to the site so long as the sharing is not misleading, unlawful, defamatory, abusive, or designed to impersonate LightningRevenue.',
  },
  {
    title: 'Prohibited use',
    body: 'You may not scrape, attack, overload, probe, reverse engineer, bypass access controls, interfere with analytics consent mechanisms, exploit forms, submit malicious payloads, impersonate another person, misrepresent authority, upload unlawful material, harvest content at scale, or use the site in a way that could damage LightningRevenue, users, infrastructure, vendors, or clients.',
  },
  {
    title: 'Security and abuse controls',
    body: 'LightningRevenue may block traffic, rate-limit requests, disable sessions, preserve logs, remove submissions, suspend access, change functionality, or take other protective measures without notice if we believe the site is being abused, attacked, probed, misused, or used in a way that creates operational, legal, security, reputational, or commercial risk.',
  },
  {
    title: 'No reliance on uninterrupted availability',
    body: 'The site may be modified, unavailable, delayed, inaccurate, interrupted, deprecated, or removed at any time. LightningRevenue does not guarantee that the site will be continuously available, error-free, compatible with every device, free from downtime, or preserved in its current form.',
  },
];

const inquiryClauses = [
  {
    title: 'Submitted information must be accurate',
    body: 'When you submit an inquiry, diagnostic flow, engagement model selection, newsletter form, or contact request, you are responsible for ensuring the submitted information is accurate, current, relevant, and submitted with authority. LightningRevenue may rely on the information you provide when deciding whether and how to respond.',
  },
  {
    title: 'No sensitive data through public forms',
    body: "Unless separately agreed in writing, you must not submit protected health information, payment card data, passwords, private keys, government identifiers, regulated financial data, confidential client records, children's data, trade secrets, or other sensitive information through public site forms. If you submit such data anyway, you do so at your own risk and authorize LightningRevenue to process it only as reasonably necessary to receive, secure, review, respond to, delete, or document the submission.",
  },
  {
    title: 'LightningRevenue may decline any request',
    body: 'LightningRevenue may decline, ignore, archive, delete, or deprioritize any inquiry for any lawful reason, including poor fit, incomplete information, budget mismatch, unavailable capacity, suspicious activity, legal risk, conflict concerns, abusive communication, or services outside our current scope.',
  },
  {
    title: 'Preliminary communications are non-binding',
    body: 'Any early discussion, estimate, exploratory recommendation, diagnostic output, strategy comment, email, call, deck, or message before a signed written agreement is preliminary and non-binding. It should not be treated as a promise of results, final advice, reserved capacity, fixed pricing, legal commitment, or acceptance of responsibility.',
  },
];

const serviceClauses = [
  {
    title: 'Service descriptions are general',
    body: 'Descriptions of PPC, SEO, web development, software development, SMM, UI/UX, lead generation, sales setup, engagement models, packages, tiers, and related capabilities are general descriptions only. They do not guarantee that a specific service, feature, resource, timeline, strategy, deliverable, channel, integration, platform, or result will be included in a future engagement.',
  },
  {
    title: 'Scope must be written',
    body: 'Paid work only includes the scope expressly stated in a signed written agreement, statement of work, accepted proposal, or written change order. Anything not expressly included is excluded, even if discussed informally, implied by prior conversations, shown as an example, or visible on the public website.',
  },
  {
    title: 'No guaranteed commercial outcome',
    body: 'LightningRevenue may provide strategy, creative, development, marketing, analytics, infrastructure, and operational work, but does not guarantee revenue, profit, rankings, conversion rates, ROAS, account approval, platform acceptance, investor interest, specific traffic, lead volume, cost per lead, algorithmic visibility, uptime from third-party providers, or any other commercial outcome unless expressly stated in a signed written agreement.',
  },
  {
    title: 'Dependencies can affect delivery',
    body: "Timelines, quality, performance, and outcomes can depend on client inputs, approvals, assets, access, budgets, platform rules, third-party systems, market conditions, ad account history, data quality, content quality, engineering constraints, compliance review, and business decisions outside LightningRevenue's control.",
  },
];

const clientObligations = [
  'Provide timely, accurate, complete, and authorized information.',
  'Review deliverables, requests, drafts, and approvals within agreed timelines.',
  'Maintain ownership or permission for submitted assets, data, trademarks, accounts, credentials, content, and third-party materials.',
  'Comply with platform policies, advertising rules, privacy laws, employment obligations, sector regulations, and internal approval requirements.',
  'Avoid submitting illegal, infringing, misleading, discriminatory, harmful, deceptive, or unauthorized material.',
  'Maintain secure account access, password hygiene, administrative permissions, and internal controls for systems you ask LightningRevenue to work with.',
  'Notify LightningRevenue promptly about material changes, risk issues, compliance restrictions, stakeholder blockers, or platform warnings relevant to the work.',
];

const paymentClauses = [
  {
    title: 'Pricing requires written confirmation',
    body: 'Public package names, engagement labels, examples, ranges, or exploratory estimates are not final pricing. Fees, deposits, retainers, hourly rates, usage costs, third-party expenses, taxes, payment dates, and cancellation terms must be confirmed in writing.',
  },
  {
    title: 'Late or failed payment',
    body: 'If payment is late, disputed, reversed, declined, or incomplete, LightningRevenue may pause work, withhold deliverables, suspend access, delay launches, charge applicable fees, require prepayment, alter delivery priority, or terminate the engagement according to the relevant written agreement or applicable law.',
  },
  {
    title: 'Third-party costs',
    body: 'Ad spend, hosting, domains, SaaS tools, stock assets, fonts, plugins, APIs, data enrichment, CRMs, automation tools, compliance tools, analytics platforms, payment processors, and other third-party expenses are generally separate from LightningRevenue fees unless expressly included in writing.',
  },
];

const ipClauses = [
  {
    title: 'LightningRevenue site content',
    body: 'The website, visual design, copy, structure, layouts, components, service descriptions, brand elements, graphics, code patterns, and other public materials are owned by or licensed to LightningRevenue and may not be copied, scraped, republished, sold, cloned, or used to create confusingly similar services without permission.',
  },
  {
    title: 'Client materials',
    body: 'You retain ownership of materials you lawfully provide to LightningRevenue, subject to the rights you grant us to review, host, process, adapt, display, modify, and use them as necessary to evaluate inquiries or perform agreed services.',
  },
  {
    title: 'Reusable know-how',
    body: 'Unless a signed written agreement says otherwise, LightningRevenue retains ownership of pre-existing tools, frameworks, templates, methods, snippets, know-how, design systems, internal processes, strategic concepts, operational playbooks, and generalized learnings developed before, during, or after an engagement.',
  },
  {
    title: 'Portfolio rights',
    body: 'Unless restricted by a signed confidentiality or services agreement, LightningRevenue may reference public-facing work, outcomes, categories, anonymized learnings, or non-confidential engagement details in portfolios, proposals, case studies, sales materials, and internal training.',
  },
];

const thirdPartyClauses = [
  {
    title: 'Third-party platforms',
    body: 'LightningRevenue may recommend, configure, integrate, or work with third-party platforms, but does not control their availability, pricing, terms, APIs, moderation decisions, account suspensions, policy changes, algorithm updates, billing, outages, data handling, or security incidents.',
  },
  {
    title: 'Client accounts',
    body: 'Where work requires access to ad accounts, analytics properties, CRMs, domains, repositories, hosting, payment processors, email systems, or other client-controlled environments, you remain responsible for account ownership, permissions, billing, compliance, backups, access revocation, and internal approval.',
  },
  {
    title: 'No endorsement guarantee',
    body: 'Links, tools, integrations, references, or third-party names on the site are provided for context. They do not mean LightningRevenue endorses every third-party practice or that any third party endorses, sponsors, approves, or is responsible for LightningRevenue.',
  },
];

const riskClauses = [
  {
    title: 'Information is provided as-is',
    body: 'The site and its content are provided on an as-is and as-available basis. LightningRevenue does not warrant that the site content is complete, current, error-free, suitable for your specific circumstances, legally sufficient for your jurisdiction, or free from technical interruptions.',
  },
  {
    title: 'No professional advice by default',
    body: 'Public site content may discuss marketing, analytics, technology, privacy, security, growth, and operations, but it is not legal, tax, accounting, medical, investment, employment, or regulated professional advice. You should consult qualified professionals for your specific obligations.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the maximum extent permitted by law, LightningRevenue is not liable for indirect, incidental, special, consequential, punitive, exemplary, lost-profit, lost-revenue, lost-data, business interruption, reputational, platform, ranking, algorithmic, or opportunity damages arising from site use or reliance on public content.',
  },
  {
    title: 'Force majeure and external events',
    body: 'LightningRevenue is not responsible for delay or failure caused by events outside reasonable control, including outages, platform policy changes, cyber incidents, hosting failures, network disruptions, labor issues, legal changes, payment failures, vendor problems, force majeure events, or client-side delays.',
  },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-32 border-b border-black/10 py-16 last:border-b-0"
    >
      <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
        {eyebrow}
      </div>
      <h2 className="max-w-3xl text-4xl font-medium tracking-tight text-black sm:text-5xl">
        {title}
      </h2>
      <div className="mt-8 space-y-4 text-base font-light leading-relaxed text-black/62">
        {children}
      </div>
    </section>
  );
}

function Disclosure({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-3xl border border-black/10 bg-white p-5 open:shadow-[0_18px_60px_rgba(0,0,0,0.05)]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
        <span className="text-lg font-medium tracking-tight text-black">
          {title}
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-xl text-black/50 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-5 border-t border-black/10 pt-5 text-sm font-light leading-relaxed text-black/58">
        {children}
      </div>
    </details>
  );
}

function DisclosureGrid({
  items,
}: {
  items: Array<{ title: string; body: string }>;
}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map(item => (
        <Disclosure key={item.title} title={item.title}>
          <p>{item.body}</p>
        </Disclosure>
      ))}
    </div>
  );
}

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('terms', lang);
}

export default async function TermsPage({ params }: PageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen bg-[#fafafa] text-black">
      <section className="px-6 pt-40 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
                <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
                  Terms touchpoints
                </div>
                <nav className="grid grid-cols-1 gap-1">
                  {touchpoints.map(item => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="rounded-2xl px-4 py-3 text-sm font-medium text-black/55 transition-colors hover:bg-black hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 rounded-2xl bg-[#050505] p-5 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Last updated
                  </div>
                  <div className="mt-3 text-2xl font-medium tracking-tight">
                    {updatedAt}
                  </div>
                  <p className="mt-4 text-sm font-light leading-relaxed text-white/45">
                    These terms are written to cover website use, inquiries,
                    commercial discussions, public content, and pre-contract
                    interactions with LightningRevenue.
                  </p>
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-12">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#2f5b7c]"></span>
                  <span className="text-[13px] font-medium uppercase tracking-wide text-black/50">
                    Terms and Conditions
                  </span>
                </div>
                <h1 className="text-[4rem] font-medium leading-[0.86] tracking-[-0.04em] text-[#2f5b7c] sm:text-[6.5rem] lg:text-[8.5rem]">
                  Terms
                  <span className="block text-[#2f5b7c]/20">
                    and conditions.
                  </span>
                </h1>
                <p className="mt-10 max-w-3xl text-lg font-light leading-relaxed text-black/62">
                  These Terms and Conditions govern how you may use the
                  LightningRevenue website, submit inquiries, interact with
                  public service descriptions, and rely on information presented
                  before a formal written engagement exists.
                </p>
                <p className="mt-5 max-w-3xl text-sm font-light leading-relaxed text-black/45">
                  This page is intentionally detailed and protective. It is not
                  a substitute for formal legal advice and may be updated as our
                  site, services, contracts, operational model, vendors, or
                  legal requirements evolve.
                </p>
              </div>

              <Section
                id="overview"
                eyebrow="01 / Overview"
                title="Agreement to these terms."
              >
                <p>
                  By accessing the site, submitting information, using a
                  diagnostic flow, contacting LightningRevenue, reviewing
                  services, or interacting with public content, you agree to
                  these Terms and Conditions. If you do not agree, you should
                  stop using the site and should not submit information through
                  public forms.
                </p>
                <p>
                  These terms apply to public website interactions and
                  pre-contract communications. They do not force
                  LightningRevenue to provide services, accept a project,
                  reserve capacity, maintain any feature, respond to every
                  inquiry, preserve every submission, or continue operating the
                  website in its current form.
                </p>
                <DisclosureGrid items={overviewClauses} />
              </Section>

              <Section
                id="site-use"
                eyebrow="02 / Site use"
                title="Acceptable and prohibited use."
              >
                <p>
                  You may use the LightningRevenue site only for lawful purposes
                  and in a manner consistent with these terms, applicable laws,
                  third-party rights, platform rules, security norms, and
                  ordinary business evaluation. You are responsible for your own
                  device, network, browser, credentials, and conduct.
                </p>
                <p>
                  LightningRevenue may monitor site usage, security events, form
                  submissions, traffic patterns, and technical behavior to
                  protect the site, diagnose issues, enforce these terms,
                  preserve evidence, and improve performance.
                </p>
                <DisclosureGrid items={useRules} />
              </Section>

              <Section
                id="inquiries"
                eyebrow="03 / Inquiries"
                title="Forms, calls, and preliminary communications."
              >
                <p>
                  Public forms and inquiry flows exist to help LightningRevenue
                  understand whether there may be a reasonable business fit.
                  They are not intended for emergency requests, regulated
                  notices, legally binding instructions, formal procurement
                  commitments, sensitive disclosures, or time-critical
                  communications.
                </p>
                <p>
                  You should assume that any information submitted through
                  public forms may be reviewed by authorized LightningRevenue
                  personnel or service providers for qualification, routing,
                  response, security, analytics, recordkeeping, and abuse
                  prevention.
                </p>
                <DisclosureGrid items={inquiryClauses} />
              </Section>

              <Section
                id="services"
                eyebrow="04 / Services"
                title="Service descriptions and scope boundaries."
              >
                <p>
                  LightningRevenue may describe services, frameworks, packages,
                  tiers, strategic models, or outcomes on the website. These
                  descriptions are marketing and informational materials, not
                  standalone contractual commitments. Actual scope,
                  responsibilities, exclusions, timelines, acceptance criteria,
                  pricing, and deliverables must be written separately.
                </p>
                <p>
                  Any examples, screenshots, case-study style language,
                  performance language, positioning, service names, or
                  capability statements are contextual. They do not guarantee
                  that the same work, result, process, or resource mix will
                  apply to your organization.
                </p>
                <DisclosureGrid items={serviceClauses} />
              </Section>

              <Section
                id="client-obligations"
                eyebrow="05 / Client obligations"
                title="Your responsibilities when working with us."
              >
                <p>
                  If you become a client or prospective client,
                  LightningRevenue's ability to perform depends heavily on your
                  cooperation, accurate information, stakeholder alignment,
                  access permissions, budget approvals, platform compliance, and
                  timely review.
                </p>
                <p>
                  Delays, incomplete feedback, missing assets, inaccurate data,
                  unavailable stakeholders, legal review, technical blockers,
                  account restrictions, or internal decision changes may affect
                  timelines, quality, cost, and outcomes.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  {clientObligations.map(item => (
                    <li
                      key={item}
                      className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm text-black/60"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section
                id="payments"
                eyebrow="06 / Payments"
                title="Pricing, invoices, and third-party costs."
              >
                <p>
                  Nothing on the public website should be treated as a final
                  invoice, guaranteed quote, tax-inclusive price, financing
                  offer, or obligation to provide services at a listed or
                  implied rate. Commercial terms must be written and accepted
                  through the appropriate agreement or proposal process.
                </p>
                <p>
                  Where payment terms are agreed, you remain responsible for
                  timely payment, taxes where applicable, third-party costs,
                  chargeback avoidance, billing accuracy, and ensuring the
                  payment method is authorized.
                </p>
                <DisclosureGrid items={paymentClauses} />
              </Section>

              <Section
                id="ip"
                eyebrow="07 / Intellectual property"
                title="Ownership, licenses, and reusable work."
              >
                <p>
                  LightningRevenue protects its brand, public materials, design
                  language, site structure, code, templates, frameworks, and
                  internal methodology. You may not copy or repurpose
                  LightningRevenue materials in a way that competes with,
                  imitates, misrepresents, or dilutes LightningRevenue.
                </p>
                <p>
                  Ownership of paid deliverables, transfer timing, source files,
                  licenses, portfolio rights, reusable components, third-party
                  assets, and usage permissions must be defined in the relevant
                  written agreement. Public site language does not transfer
                  intellectual property rights.
                </p>
                <DisclosureGrid items={ipClauses} />
              </Section>

              <Section
                id="third-parties"
                eyebrow="08 / Third parties"
                title="Platforms, vendors, and external systems."
              >
                <p>
                  Many modern growth and software workflows depend on
                  third-party systems. These can include advertising platforms,
                  search engines, social networks, hosting providers, analytics
                  tools, APIs, payment processors, automation systems, CRMs,
                  email providers, repositories, design tools, and domain
                  registrars.
                </p>
                <p>
                  LightningRevenue is not responsible for third-party actions or
                  failures outside its reasonable control. You remain
                  responsible for reviewing and complying with third-party
                  terms, billing rules, platform policies, data rules, and
                  access requirements.
                </p>
                <DisclosureGrid items={thirdPartyClauses} />
              </Section>

              <Section
                id="confidentiality"
                eyebrow="09 / Confidentiality"
                title="Confidentiality and public submissions."
              >
                <p>
                  Public site forms are not a secure channel for highly
                  confidential, regulated, or commercially sensitive material.
                  Unless a separate written confidentiality agreement is signed,
                  LightningRevenue's receipt of an unsolicited submission does
                  not create a broad confidentiality duty beyond reasonable
                  handling practices described in our Privacy Policy.
                </p>
                <p>
                  If confidential treatment is required, ask for appropriate
                  written terms before sending sensitive materials.
                  LightningRevenue may delete, ignore, archive, or return
                  unsolicited confidential material without accepting
                  obligations beyond those required by law.
                </p>
                <Disclosure title="Unsolicited ideas and proposals">
                  <p>
                    If you submit unsolicited ideas, concepts, strategies,
                    feature suggestions, brand ideas, product concepts, copy,
                    designs, or business proposals, you acknowledge that
                    LightningRevenue may already be developing similar ideas and
                    is not restricted from using independently developed or
                    generally known concepts.
                  </p>
                </Disclosure>
                <Disclosure title="Mutual written agreements">
                  <p>
                    Specific confidentiality, data protection, security, or
                    non-disclosure obligations may be created only through a
                    signed written agreement. Those obligations apply only to
                    the parties, scope, data, and period described in that
                    agreement.
                  </p>
                </Disclosure>
              </Section>

              <Section
                id="warranties"
                eyebrow="10 / Warranties"
                title="Disclaimers and no reliance."
              >
                <p>
                  Public website content is informational and may change. You
                  should not rely on the site as the only basis for business,
                  legal, financial, technical, compliance, hiring, investment,
                  or operational decisions.
                </p>
                <p>
                  To the maximum extent permitted by law, LightningRevenue
                  disclaims all warranties not expressly stated in a signed
                  written agreement, including implied warranties of
                  merchantability, fitness for a particular purpose,
                  non-infringement, accuracy, availability, compatibility, and
                  uninterrupted operation.
                </p>
                <DisclosureGrid items={riskClauses.slice(0, 2)} />
              </Section>

              <Section
                id="liability"
                eyebrow="11 / Liability"
                title="Liability limits and risk allocation."
              >
                <p>
                  Site use is at your own risk. LightningRevenue is not
                  responsible for losses caused by your reliance on public
                  content, inaccurate submissions, unauthorized use, third-party
                  systems, platform decisions, security events outside our
                  control, or decisions made before written commercial terms are
                  finalized.
                </p>
                <p>
                  Some jurisdictions do not allow certain limitations, so parts
                  of these limitations may not apply to you. Where limitations
                  are restricted by law, they apply to the fullest extent
                  permitted.
                </p>
                <DisclosureGrid items={riskClauses.slice(2)} />
                <Disclosure title="Maximum liability for public site use">
                  <p>
                    To the maximum extent permitted by law, LightningRevenue's
                    total liability arising from public site use, public
                    content, or pre-contract interactions is limited to the
                    greater of the amount you paid LightningRevenue specifically
                    for the affected public site interaction, if any, or one
                    hundred US dollars. This limit does not expand any separate
                    contract unless that contract expressly says so.
                  </p>
                </Disclosure>
              </Section>

              <Section
                id="termination"
                eyebrow="12 / Termination"
                title="Suspension, termination, and changes."
              >
                <p>
                  LightningRevenue may suspend, restrict, modify, or terminate
                  access to the site, forms, admin areas, diagnostics, content,
                  or any public feature at any time without notice where we
                  believe doing so is useful for security, operations, legal
                  compliance, business changes, abuse prevention, maintenance,
                  or risk reduction.
                </p>
                <p>
                  We may update these terms by publishing a revised version on
                  the site. Continued use after changes means you accept the
                  revised terms. If a change is material to a signed client
                  agreement, the signed agreement controls unless amended
                  according to its own terms.
                </p>
                <Disclosure title="Survival">
                  <p>
                    Provisions relating to intellectual property,
                    confidentiality, disclaimers, liability limits, payment
                    obligations, dispute handling, data handling, security, and
                    any obligations that by nature should survive will survive
                    termination or discontinued site use.
                  </p>
                </Disclosure>
              </Section>

              <Section
                id="disputes"
                eyebrow="13 / Disputes"
                title="Disputes and interpretation."
              >
                <p>
                  If a concern arises, contact LightningRevenue first so the
                  issue can be reviewed in context. Many issues involving
                  submissions, billing expectations, account access, content
                  interpretation, or scope assumptions can be resolved faster
                  through direct written communication.
                </p>
                <p>
                  These terms should be interpreted to preserve their protective
                  purpose to the maximum extent permitted by law. If one
                  provision is unenforceable, the remaining provisions remain
                  effective, and the unenforceable provision should be modified
                  only as much as necessary to make it enforceable.
                </p>
                <Disclosure title="No waiver">
                  <p>
                    LightningRevenue's failure to enforce a provision
                    immediately does not waive the right to enforce it later. A
                    waiver must be written and signed by an authorized
                    LightningRevenue representative to be effective.
                  </p>
                </Disclosure>
                <Disclosure title="Assignment">
                  <p>
                    You may not assign rights or obligations related to these
                    terms without LightningRevenue's written consent.
                    LightningRevenue may assign or transfer rights and
                    obligations in connection with business restructuring,
                    ownership changes, asset transfers, or operational
                    continuity.
                  </p>
                </Disclosure>
              </Section>

              <Section
                id="contact"
                eyebrow="14 / Contact"
                title="Questions about these terms."
              >
                <p>
                  For questions about these Terms and Conditions, contact us at{' '}
                  <a
                    href="mailto:antonio@lightning-revenue.com"
                    className="font-medium text-black underline decoration-black/20 underline-offset-4 hover:decoration-black"
                  >
                    antonio@lightning-revenue.com
                  </a>
                  . Include enough context for us to understand the request, but
                  do not send passwords, private keys, payment card data,
                  regulated records, or unrelated sensitive files.
                </p>
                <p>
                  Communications about terms do not amend these terms unless
                  LightningRevenue expressly agrees to an amendment in a signed
                  written document.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Link
                    href={localizePath('/contact', lang)}
                    className="rounded-full bg-black px-7 py-4 text-center text-sm font-bold text-white transition-colors hover:bg-[#2f5b7c]"
                  >
                    Contact LightningRevenue
                  </Link>
                  <Link
                    href={localizePath('/privacy', lang)}
                    className="rounded-full border border-black/15 px-7 py-4 text-center text-sm font-bold text-black transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    Review Privacy Policy
                  </Link>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
