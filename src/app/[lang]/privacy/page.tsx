import React from 'react';
import Link from 'next/link';
import ConsentChoicesButton from '@/components/ConsentChoicesButton';
import { localizePath } from '@/lib/i18n';
import { createPageMetadata } from '@/lib/seo-metadata';

const updatedAt = 'May 30, 2026';

const touchpoints = [
  { id: 'overview', label: 'Overview' },
  { id: 'data-we-collect', label: 'Data we collect' },
  { id: 'forms-and-leads', label: 'Forms and leads' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'cookies', label: 'Cookies Policy' },
  { id: 'lawful-basis', label: 'Lawful basis' },
  { id: 'sharing', label: 'Sharing' },
  { id: 'retention', label: 'Retention' },
  { id: 'security', label: 'Security' },
  { id: 'rights', label: 'Your rights' },
  { id: 'international', label: 'International' },
  { id: 'contact', label: 'Contact' },
];

const dataCategories = [
  {
    title: 'Identity and contact data',
    body: 'Name, work email, company name, website, and any contact details you provide when using forms, project inquiries, newsletter signup, or the How Can We Help flow.',
    detail:
      'You are responsible for making sure any contact information you submit is accurate, current, and submitted with authority to represent the relevant company. If you submit information about another person or organization, you confirm that you have a legitimate basis to do so and that the submission does not violate confidentiality, employment, platform, or contractual obligations.',
  },
  {
    title: 'Project and commercial context',
    body: 'Service interest, budget range, timeline, selected engagement model, selected pain points, selected outcomes, technology stack, campaign needs, CRM context, and free-text messages.',
    detail:
      'Project information is treated as business context for evaluation, scoping, qualification, prioritization, and response. You should not submit regulated health data, payment card data, government identifiers, passwords, confidential client records, trade secrets, or any information you are not authorized to disclose unless LightningRevenue has separately agreed in writing to receive and process that type of information.',
  },
  {
    title: 'Technical request data',
    body: 'IP address, user agent, browser information, timestamps, request source, and security metadata generated when your browser communicates with our site.',
    detail:
      'Technical data may be processed automatically as part of ordinary internet communications. We may use this data to detect abuse, troubleshoot outages, prevent fraud, reduce spam, investigate suspicious activity, maintain logs, support auditability, and preserve the integrity of our site and infrastructure.',
  },
  {
    title: 'First-party analytics data',
    body: 'Visitor ID, session ID, landing page, page views, referrer, UTM parameters, event timestamps, and attribution links between tracked sessions and submitted leads.',
    detail:
      'Analytics data is used for aggregate business intelligence, campaign performance, conversion quality, product decisions, and operational review. Analytics data should not be interpreted as a perfect or complete behavioral record. Browser settings, consent choices, blockers, network issues, and device changes can affect completeness and accuracy.',
  },
  {
    title: 'Consent preference data',
    body: 'Your cookie choices, consent version, consent timestamp, and the categories you approved or rejected.',
    detail:
      'Consent records help us respect and evidence your choices. If you clear browser storage, use another device, change browser profiles, or block storage mechanisms, the site may ask for consent again because it may not be able to read your previous preference.',
  },
];

const formTouchpoints = [
  {
    title: 'How Can We Help popup',
    body: 'Captures name, email, company, selected pain points, selected outcomes, selected services, IP address, user agent, and the submission timestamp.',
  },
  {
    title: 'Engagement model selections',
    body: 'Captures Foundation, Momentum, Apex, or Custom Package interest and the fields submitted through that engagement flow.',
  },
  {
    title: 'Service request forms',
    body: 'Captures service-specific data for PPC, SEO, web development, software development, UI/UX, SMM, sales setup, and lead generation forms.',
  },
  {
    title: 'Contact page',
    body: 'Captures your name, email, company, requested service, budget range, timeline, and message.',
  },
  {
    title: 'Newsletter form',
    body: 'Captures the email address submitted to The Insight newsletter and stores it in the newsletter approved database table.',
  },
];

const cookieGroups = [
  {
    title: 'Necessary cookies',
    body: 'Required for security, admin login sessions, form behavior, and basic site functionality. These are always active because the site cannot reliably operate without them.',
    examples:
      'Examples: admin session cookie, consent storage, basic form/session behavior.',
  },
  {
    title: 'Analytics cookies',
    body: 'Used only if you approve analytics. They help us understand page performance, traffic sources, visitor sessions, and which content leads to project inquiries.',
    examples:
      'Examples: LightningRevenue_visitor_id, LightningRevenue_session_id, landing page, referrer, and UTM cookies.',
  },
  {
    title: 'Marketing cookies',
    body: 'Reserved for campaign measurement and future paid acquisition or retargeting use. These are not enabled unless you approve marketing cookies.',
    examples:
      'Examples: campaign source, campaign medium, campaign name, ad content, and keyword attribution.',
  },
  {
    title: 'Preference cookies',
    body: 'Used to remember non-essential interface choices so the site can feel more tailored over time.',
    examples:
      'Examples: saved consent preference and future interface preferences.',
  },
];

const protectiveClauses = [
  {
    title: 'No unrestricted submission of sensitive data',
    body: "Unless separately agreed in a written contract, LightningRevenue does not ask you to submit sensitive personal information through public site forms. This includes protected health information, medical records, precise financial account data, social security numbers, government identifiers, credentials, biometric data, children's data, union membership, political opinions, criminal records, or other highly sensitive information. If you choose to submit such information anyway, you do so at your own risk and you instruct LightningRevenue to process it only as reasonably necessary to receive, review, delete, respond to, secure, or document the submission.",
  },
  {
    title: 'Business inquiry context',
    body: 'The site is designed primarily for business-to-business inquiries. If you contact us on behalf of an organization, you represent that you are authorized to make the inquiry and that the submitted information is relevant to a legitimate commercial, operational, recruitment, vendor, or partnership purpose.',
  },
  {
    title: 'Reasonable security, not absolute security',
    body: 'No website, database, network, transmission method, authentication flow, or operational process can be guaranteed to be completely secure. LightningRevenue uses practical safeguards appropriate to the site and the categories of data processed, but we do not warrant that unauthorized access, disclosure, alteration, loss, interruption, or misuse can never occur.',
  },
  {
    title: 'Accuracy and inference limitations',
    body: 'Analytics, attribution, scoring, campaign source detection, referrer capture, and conversion analysis may rely on technical signals that are incomplete or imprecise. LightningRevenue may use such signals for operational and strategic decisions, but does not represent that analytics records are exhaustive, legally determinative, or suitable as the sole evidence of user intent.',
  },
  {
    title: 'Abusive or unlawful requests',
    body: 'We may refuse, limit, delay, or charge for requests that are manifestly unfounded, excessive, repetitive, fraudulent, technically infeasible, legally prohibited, harmful to others, or impossible to verify. We may also retain limited records needed to demonstrate that a request was handled or denied appropriately.',
  },
];

const rights = [
  'Access the personal data we hold about you.',
  'Ask us to correct inaccurate or incomplete personal data.',
  'Ask us to delete personal data where retention is no longer required.',
  'Object to or restrict certain processing activities.',
  'Withdraw optional cookie consent at any time.',
  'Request a portable copy of data where applicable.',
  'Complain to a data protection authority if you believe your rights were not respected.',
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

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('privacy', lang);
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen bg-[#fafafa] text-black">
      <section className="px-6 pt-40 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
                <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
                  Policy touchpoints
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
                    This page explains how LightningRevenue handles privacy,
                    cookies, lead data, analytics, and consent choices across
                    the site.
                  </p>
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-12">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#2f5b7c]"></span>
                  <span className="text-[13px] font-medium uppercase tracking-wide text-black/50">
                    Privacy Policy
                  </span>
                </div>
                <h1 className="text-[4rem] font-medium leading-[0.86] tracking-[-0.04em] text-[#2f5b7c] sm:text-[6.5rem] lg:text-[8.5rem]">
                  Privacy
                  <span className="block text-[#2f5b7c]/20">and cookies.</span>
                </h1>
                <p className="mt-10 max-w-3xl text-lg font-light leading-relaxed text-black/62">
                  This policy is intentionally detailed. It covers every major
                  touchpoint on the LightningRevenue site, including contact
                  forms, popup flows, newsletter signup, first-party analytics,
                  lead attribution, cookies, consent choices, retention,
                  security, and privacy rights.
                </p>
                <p className="mt-5 max-w-3xl text-sm font-light leading-relaxed text-black/45">
                  This page is written to be transparent and operationally
                  protective. It is not a substitute for formal legal advice,
                  and LightningRevenue may update it as systems, vendors, laws,
                  security practices, or business workflows evolve.
                </p>
              </div>

              <Section
                id="overview"
                eyebrow="01 / Overview"
                title="Who this policy applies to."
              >
                <p>
                  This Privacy Policy applies to visitors, prospects, newsletter
                  subscribers, and people who submit inquiries through
                  LightningRevenue digital properties. It also applies to data
                  collected through our first-party analytics system when
                  optional analytics consent is granted.
                </p>
                <p>
                  LightningRevenue does not use this policy to grant
                  unrestricted rights to collect data. We collect the data
                  needed to operate the site, respond to inquiries, measure
                  performance, improve acquisition quality, and protect our
                  systems.
                </p>
                <p>
                  By using the site, submitting a form, consenting to optional
                  cookies, signing up for the newsletter, or contacting
                  LightningRevenue, you acknowledge that data may be processed
                  according to this policy. If you do not agree with this
                  policy, you should avoid submitting personal data and should
                  adjust cookie choices through the consent controls.
                </p>
                <p>
                  This policy is intended to describe public website processing.
                  Additional contracts, statements of work, data processing
                  agreements, confidentiality agreements, security exhibits, or
                  client-specific terms may apply if you become a client or
                  vendor. If there is a direct conflict between this policy and
                  a signed written agreement with LightningRevenue, the signed
                  agreement controls for that specific engagement.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {protectiveClauses.map(item => (
                    <Disclosure key={item.title} title={item.title}>
                      <p>{item.body}</p>
                    </Disclosure>
                  ))}
                </div>
              </Section>

              <Section
                id="data-we-collect"
                eyebrow="02 / Data categories"
                title="What data we collect."
              >
                <div className="grid grid-cols-1 gap-4">
                  {dataCategories.map(item => (
                    <Disclosure key={item.title} title={item.title}>
                      <p>{item.body}</p>
                      <p className="mt-3">{item.detail}</p>
                    </Disclosure>
                  ))}
                </div>
                <p>
                  We may combine data from multiple site touchpoints where
                  reasonably necessary to understand a single business
                  relationship. For example, a newsletter signup, a later
                  contact form, a consented analytics session, and a service
                  request may be reviewed together so LightningRevenue can
                  respond more intelligently, avoid duplicate outreach, and
                  maintain pipeline context.
                </p>
                <p>
                  We do not intentionally collect more data than needed for the
                  stated purpose. However, free-text fields can contain
                  information that users voluntarily submit. If you include
                  unnecessary, confidential, sensitive, or third-party
                  information in a free-text field, LightningRevenue may receive
                  it despite not requesting it.
                </p>
              </Section>

              <Section
                id="forms-and-leads"
                eyebrow="03 / Lead touchpoints"
                title="How forms and lead flows work."
              >
                <p>
                  When you submit a form, we store the information you provide
                  so we can respond, qualify the request, understand which
                  service or engagement model is relevant, and maintain a record
                  of inbound demand.
                </p>
                <p>
                  Submitting a form does not create a client relationship,
                  agency relationship, fiduciary duty, exclusivity obligation,
                  confidentiality obligation, or obligation for LightningRevenue
                  to accept your project unless a separate written agreement is
                  signed. LightningRevenue may decline, ignore, archive, delete,
                  or deprioritize submissions that are incomplete, irrelevant,
                  abusive, fraudulent, outside our service scope, or
                  inconsistent with our business requirements.
                </p>
                <p>
                  Lead records may be reviewed by internal operators,
                  strategists, designers, engineers, sales personnel, or
                  authorized service providers who need the information to
                  evaluate the request. We may also use aggregated form data to
                  understand demand patterns, common objections, service fit,
                  pricing expectations, and operational load.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {formTouchpoints.map(item => (
                    <Disclosure key={item.title} title={item.title}>
                      <p>{item.body}</p>
                      <p className="mt-3">
                        We may use this record to identify duplicate
                        submissions, route the inquiry internally, evaluate
                        whether the request is commercially viable, prepare
                        follow-up questions, and maintain evidence of what was
                        submitted and when.
                      </p>
                    </Disclosure>
                  ))}
                </div>
              </Section>

              <Section
                id="analytics"
                eyebrow="04 / Analytics"
                title="First-party analytics and lead attribution."
              >
                <p>
                  LightningRevenue uses in-house first-party analytics instead
                  of relying only on third-party analytics platforms. If
                  analytics consent is approved, the site can create a visitor
                  ID and session ID, record page views, store landing page and
                  referrer data, and connect a later form submission to that
                  session.
                </p>
                <p>
                  The purpose of this system is to understand how people move
                  through the site, which pages produce serious inquiries, which
                  campaigns create qualified leads, and where the user
                  experience needs improvement. This data helps LightningRevenue
                  reduce low-quality spend, improve website content, refine
                  service positioning, and make business decisions without
                  depending entirely on third-party analytics platforms.
                </p>
                <p>
                  Analytics records are not used to make legally significant
                  automated decisions about you. They may influence operational
                  decisions such as which content to improve, which campaign to
                  pause, which service page to prioritize, or which source
                  appears to produce better-fit inquiries.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <Disclosure title="What a tracked session can include">
                    <p>
                      A tracked session can include session ID, visitor ID,
                      landing page, referrer, UTM source, UTM medium, UTM
                      campaign, UTM content, UTM term, page path, event name,
                      timestamp, IP address, and user agent.
                    </p>
                  </Disclosure>
                  <Disclosure title="What lead attribution means">
                    <p>
                      Lead attribution connects a submitted lead to the
                      consented analytics session that preceded it. This helps
                      us understand which pages, campaigns, referrers, and
                      messages generated legitimate inquiries.
                    </p>
                  </Disclosure>
                  <Disclosure title="What happens if analytics is rejected">
                    <p>
                      If analytics consent is rejected, optional analytics
                      cookies should not be set and first-party analytics events
                      should not be sent by the browser. Necessary cookies may
                      still be used to operate the site.
                    </p>
                    <p className="mt-3">
                      Some server-side technical logs may still exist for
                      security, debugging, rate limiting, uptime, or abuse
                      prevention. Rejecting analytics cookies does not prevent
                      all technical processing that is necessary for the site to
                      load or for LightningRevenue to protect its systems.
                    </p>
                  </Disclosure>
                  <Disclosure title="Attribution is probabilistic">
                    <p>
                      Attribution can be affected by consent changes, private
                      browsing, ad blockers, browser restrictions, cleared
                      cookies, shared devices, VPNs, network changes, redirects,
                      email clients, and UTM mistakes. LightningRevenue may rely
                      on attribution for internal judgment, but does not
                      guarantee that attribution is complete, exact, or legally
                      conclusive.
                    </p>
                  </Disclosure>
                </div>
              </Section>

              <Section
                id="cookies"
                eyebrow="05 / Cookies Policy"
                title="Cookies, consent, and choices."
              >
                <p>
                  Cookies are small browser storage items used to operate the
                  site, remember consent choices, support admin login, and, only
                  with approval, measure analytics or marketing attribution.
                </p>
                <p>
                  Where required, optional cookies are disabled until you
                  approve them. Necessary cookies may be set without optional
                  consent because they support core site operations, security,
                  preference storage, and administrative access. You can manage
                  optional consent through the cookie banner or the Consent
                  Choices control in the footer.
                </p>
                <p>
                  Browser controls may allow you to block, delete, or restrict
                  cookies. If you do that, some site functions may degrade,
                  consent preferences may need to be selected again, analytics
                  may become incomplete, and admin or form behavior may not work
                  as expected.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {cookieGroups.map(item => (
                    <Disclosure key={item.title} title={item.title}>
                      <p>{item.body}</p>
                      <p className="mt-3 text-black/42">{item.examples}</p>
                      <p className="mt-3">
                        LightningRevenue may update the exact cookie names,
                        duration, or implementation details as the site changes,
                        provided the underlying purpose remains consistent with
                        this policy and applicable consent requirements.
                      </p>
                    </Disclosure>
                  ))}
                </div>
                <div className="mt-6 rounded-3xl border border-black/10 bg-white p-6">
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
                    Manage cookies
                  </div>
                  <p className="mb-5 text-sm font-light leading-relaxed text-black/58">
                    You can reopen the cookie preference panel at any time and
                    update optional consent choices.
                  </p>
                  <ConsentChoicesButton />
                </div>
              </Section>

              <Section
                id="lawful-basis"
                eyebrow="06 / Legal basis"
                title="Why we process data."
              >
                <p>
                  The legal basis for processing depends on the data category,
                  the user interaction, the applicable jurisdiction, and the
                  operational purpose. A single interaction may involve more
                  than one basis. For example, a contact form may involve
                  pre-contractual steps, legitimate interests, security logging,
                  and consent-based attribution if analytics was approved.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <Disclosure title="Consent">
                    <p>
                      We rely on consent for optional analytics, marketing
                      cookies, preference cookies, and newsletter subscription
                      where applicable.
                    </p>
                    <p className="mt-3">
                      You may withdraw optional consent without affecting
                      processing that occurred before withdrawal or processing
                      that LightningRevenue must continue for necessary, legal,
                      security, contractual, or legitimate operational reasons.
                    </p>
                  </Disclosure>
                  <Disclosure title="Legitimate interests">
                    <p>
                      We may process inquiry, analytics, and security data to
                      operate the site, respond to prospects, prevent abuse,
                      improve conversion quality, and understand business
                      performance.
                    </p>
                    <p className="mt-3">
                      These interests include protecting infrastructure,
                      reducing spam, preserving business records, measuring
                      service demand, improving funnels, understanding campaign
                      quality, and avoiding repeated or irrelevant outreach.
                    </p>
                  </Disclosure>
                  <Disclosure title="Contract or pre-contract steps">
                    <p>
                      When you contact us about a project, we process your
                      submitted information to evaluate the request and prepare
                      a response, proposal, or discovery conversation.
                    </p>
                    <p className="mt-3">
                      This does not mean LightningRevenue has agreed to work
                      with you, reserved capacity, accepted confidentiality
                      obligations, or committed to pricing, delivery, timelines,
                      or scope before a written agreement is signed.
                    </p>
                  </Disclosure>
                  <Disclosure title="Legal obligations">
                    <p>
                      We may process or retain limited information where
                      required for compliance, accounting, dispute handling, or
                      lawful requests.
                    </p>
                    <p className="mt-3">
                      Where deletion conflicts with legal, tax, audit, fraud
                      prevention, security, dispute, or evidence-preservation
                      obligations, LightningRevenue may retain the minimum
                      information reasonably necessary for that purpose.
                    </p>
                  </Disclosure>
                </div>
              </Section>

              <Section
                id="sharing"
                eyebrow="07 / Sharing"
                title="Who can receive data."
              >
                <p>
                  We do not sell personal data. We may share data with
                  infrastructure providers, hosting services, database
                  providers, email systems, professional advisors, security
                  providers, and service partners who help us operate
                  LightningRevenue.
                </p>
                <p>
                  Shared data is generally limited to what is reasonably
                  necessary for the recipient to provide infrastructure,
                  operational, professional, security, communication, analytics,
                  or business support services. We do not authorize processors
                  to use personal data for unrelated independent purposes unless
                  separately disclosed or legally permitted.
                </p>
                <Disclosure title="Operational processors">
                  <p>
                    Processors may host databases, provide application
                    infrastructure, route emails, store logs, provide analytics
                    infrastructure, or support internal operations. They should
                    only process data for the relevant service purpose.
                  </p>
                  <p className="mt-3">
                    These processors may operate in different jurisdictions and
                    may maintain their own security, retention, backup, and
                    subprocessors. We select providers based on practical
                    business and security needs, but we cannot control every
                    downstream technical operation of external infrastructure
                    providers.
                  </p>
                </Disclosure>
                <Disclosure title="Legal or safety disclosures">
                  <p>
                    We may disclose information if necessary to comply with
                    legal obligations, enforce rights, protect users, prevent
                    fraud, respond to lawful requests, or protect the security
                    of our systems.
                  </p>
                  <p className="mt-3">
                    We may also disclose limited information to investigate
                    abuse, protect against spam or attacks, respond to disputes,
                    preserve evidence, or prevent harm to LightningRevenue,
                    clients, vendors, users, or the public.
                  </p>
                </Disclosure>
                <Disclosure title="Business transfers">
                  <p>
                    If LightningRevenue is involved in a merger, acquisition,
                    restructuring, financing, asset sale, partnership
                    transition, or similar business transaction, relevant
                    records may be reviewed or transferred as part of due
                    diligence or continuity planning, subject to appropriate
                    confidentiality or legal safeguards where applicable.
                  </p>
                </Disclosure>
              </Section>

              <Section
                id="retention"
                eyebrow="08 / Retention"
                title="How long data is kept."
              >
                <div className="grid grid-cols-1 gap-4">
                  <Disclosure title="Lead and inquiry data">
                    <p>
                      Kept for as long as needed to respond, manage pipeline
                      context, maintain business records, and evaluate whether
                      LightningRevenue can support the request.
                    </p>
                    <p className="mt-3">
                      We may retain declined, inactive, or duplicate inquiries
                      to avoid repeated qualification work, document prior
                      interactions, prevent abuse, and maintain continuity if
                      you contact us again.
                    </p>
                  </Disclosure>
                  <Disclosure title="Newsletter data">
                    <p>
                      Kept until you unsubscribe, request deletion, or we
                      determine the list record is no longer needed.
                    </p>
                    <p className="mt-3">
                      We may keep limited suppression or unsubscribe records
                      where necessary to avoid sending future communications to
                      an address that opted out.
                    </p>
                  </Disclosure>
                  <Disclosure title="Analytics data">
                    <p>
                      Kept for business performance review, attribution
                      analysis, security review, and trend analysis, subject to
                      operational cleanup and deletion requests where
                      applicable.
                    </p>
                    <p className="mt-3">
                      Analytics may be aggregated, transformed, summarized, or
                      separated from direct identifiers over time. Aggregated or
                      de-identified business intelligence may be retained longer
                      because it no longer reasonably identifies a specific
                      person.
                    </p>
                  </Disclosure>
                  <Disclosure title="Admin session data">
                    <p>
                      Kept for authentication, security, and session management.
                      Expired sessions may be removed through maintenance
                      processes.
                    </p>
                    <p className="mt-3">
                      Admin records may be retained for audit, security review,
                      unauthorized access investigation, and internal
                      accountability.
                    </p>
                  </Disclosure>
                  <Disclosure title="Backups and residual copies">
                    <p>
                      Data deleted from active systems may remain for a limited
                      time in backups, logs, caches, archives, or disaster
                      recovery systems until those systems rotate or are
                      overwritten. We may not be able to selectively remove
                      every residual copy immediately if doing so would
                      compromise integrity, security, or continuity.
                    </p>
                  </Disclosure>
                </div>
              </Section>

              <Section
                id="security"
                eyebrow="09 / Security"
                title="How we protect data."
              >
                <p>
                  We use practical security controls for the size and nature of
                  the site, including restricted admin access, hashed admin
                  passwords, server-side session validation, HTTPS-oriented
                  cookie settings, database access controls, and separation
                  between public site behavior and admin functionality.
                </p>
                <p>
                  Security is a shared responsibility. You should avoid
                  submitting unnecessary sensitive data, should not send
                  passwords or secrets through contact forms, should use secure
                  networks, and should notify us if you believe a submission was
                  made in error or if you identify a security concern.
                </p>
                <p>
                  LightningRevenue may suspend access, disable admin sessions,
                  rotate credentials, block traffic, preserve logs, or change
                  functionality without notice if we believe doing so is
                  necessary to protect users, infrastructure, business records,
                  or system integrity.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <Disclosure title="HIPAA Aligned">
                    <p>
                      Where health-related workflows are relevant, our design
                      direction is to minimize unnecessary data collection,
                      restrict access, and avoid casual exposure of sensitive
                      operational records.
                    </p>
                    <p className="mt-3">
                      HIPAA Aligned does not mean this public website is
                      intended for unrestricted submission of protected health
                      information, nor does it create a Business Associate
                      Agreement. Any HIPAA-governed engagement must be handled
                      through separate written terms where required.
                    </p>
                  </Disclosure>
                  <Disclosure title="GDPR Aligned">
                    <p>
                      The site supports consent choices, optional analytics
                      controls, data minimization principles, access/deletion
                      requests, and privacy-first first-party tracking behavior.
                    </p>
                    <p className="mt-3">
                      GDPR Aligned means the site is designed around privacy
                      principles such as transparency, data minimization,
                      purpose limitation, consent controls, and rights handling.
                      It does not waive LightningRevenue's right to rely on
                      legitimate interests, legal obligations, contractual
                      necessity, security needs, or statutory exemptions where
                      available.
                    </p>
                  </Disclosure>
                  <Disclosure title="ISO 27001 Aligned">
                    <p>
                      Our operating direction follows structured access control,
                      least privilege, security review, incident awareness, and
                      documented handling of business-critical data.
                    </p>
                    <p className="mt-3">
                      ISO 27001 Aligned describes the direction of our internal
                      security posture and control thinking. It is not a
                      representation that every LightningRevenue system, vendor,
                      workflow, or engagement is certified unless a current
                      certification is separately published or contractually
                      provided.
                    </p>
                  </Disclosure>
                </div>
              </Section>

              <Section
                id="rights"
                eyebrow="10 / Rights"
                title="Your privacy rights."
              >
                <p>
                  Depending on your location, you may have rights over your
                  personal data. We will respond to valid requests according to
                  applicable law and may need to verify your identity before
                  acting on a request.
                </p>
                <p>
                  Rights are not absolute. We may deny or limit a request where
                  permitted by law, including where the request conflicts with
                  another person's rights, business confidentiality, security,
                  legal privilege, fraud prevention, recordkeeping duties,
                  dispute preservation, tax obligations, or technical
                  feasibility.
                </p>
                <p>
                  If you submit a request, provide enough information for us to
                  identify the relevant records. We may ask for additional
                  verification, especially if the request involves deletion,
                  export, sensitive information, or a record connected to a
                  business or organization.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  {rights.map(right => (
                    <li
                      key={right}
                      className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm text-black/60"
                    >
                      {right}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section
                id="international"
                eyebrow="11 / International"
                title="International data handling."
              >
                <p>
                  LightningRevenue may operate with infrastructure, vendors, and
                  team workflows that cross national borders. Where data is
                  transferred internationally, we aim to use practical
                  safeguards appropriate to the provider, jurisdiction, and
                  processing purpose.
                </p>
                <p>
                  International data handling may occur when cloud
                  infrastructure, databases, monitoring, email routing,
                  professional advisors, remote teams, or operational systems
                  are located outside your region. The laws of those locations
                  may differ from the laws where you live.
                </p>
                <Disclosure title="EU, UK, and international visitors">
                  <p>
                    If you access LightningRevenue from the EU, UK, or another
                    region with privacy transfer rules, your data may be
                    processed in countries with different privacy laws. We aim
                    to limit transfers to legitimate operational needs.
                  </p>
                  <p className="mt-3">
                    Where required and commercially reasonable, LightningRevenue
                    may rely on contractual safeguards, adequacy decisions,
                    standard contractual clauses, vendor commitments, technical
                    safeguards, or other lawful transfer mechanisms.
                  </p>
                </Disclosure>
                <Disclosure title="Regional law differences">
                  <p>
                    Privacy rights and obligations differ by jurisdiction. This
                    policy is designed to provide broad transparency, but it may
                    not list every right, exemption, procedure, deadline, or
                    regulator-specific requirement in every location. We will
                    handle applicable requests based on the facts, the
                    requester's location, the data involved, and the laws that
                    apply.
                  </p>
                </Disclosure>
              </Section>

              <Section
                id="contact"
                eyebrow="12 / Contact"
                title="Questions, deletion, and consent changes."
              >
                <p>
                  For privacy requests, deletion requests, access requests, or
                  questions about cookies and tracking, contact us at{' '}
                  <a
                    href="mailto:antonio@lightning-revenue.com"
                    className="font-medium text-black underline decoration-black/20 underline-offset-4 hover:decoration-black"
                  >
                    antonio@lightning-revenue.com
                  </a>
                  .
                </p>
                <p>
                  Include your name, email address, the nature of the request,
                  the relevant form or interaction, and any information that
                  helps us locate the record. Do not send passwords, private
                  keys, payment card numbers, medical files, or unrelated
                  sensitive documents when making a privacy request.
                </p>
                <p>
                  We may keep a limited record of privacy communications to show
                  how we handled the request, defend our decisions, comply with
                  legal obligations, and prevent repeat abusive requests.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Link
                    href={localizePath('/contact', lang)}
                    className="rounded-full bg-black px-7 py-4 text-center text-sm font-bold text-white transition-colors hover:bg-[#2f5b7c]"
                  >
                    Contact LightningRevenue
                  </Link>
                  <a
                    href="#cookies"
                    className="rounded-full border border-black/15 px-7 py-4 text-center text-sm font-bold text-black transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    Review Cookies Policy
                  </a>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
