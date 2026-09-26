import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'How Dokkit collects, uses, and protects personal information for users in New Zealand, Australia, the United States, Canada, and elsewhere.',
};

const updated = '26 September 2026';

export default function PrivacyPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>
          This policy explains what information Dokkit processes, why, and how you can
          exercise your rights. Dokkit is operated from New Zealand and is offered to
          people in English-speaking markets including New Zealand, Australia, the
          United States, and Canada. This notice is written to match how the product
          works today. It is not legal advice. We plan to have it reviewed by a lawyer;
          until then, treat it as our operational description of privacy practices.
        </p>
        <p>
          Dokkit does not claim ISO 27001, SOC 2, or formal certification under any
          privacy regime.
        </p>
      </section>

      <section className="legal-copy">
        <h2>1. Who is responsible</h2>
        <p>
          Dokkit is operated from New Zealand. For privacy questions, access requests,
          corrections, or complaints, contact{' '}
          <a href="mailto:support@dokkit.space">support@dokkit.space</a>. If you need
          the formal legal entity name for a contract or regulator, ask at that address
          and we will provide the operator details on record.
        </p>
        <p>
          Under New Zealand&apos;s Privacy Act 2020, we are the agency responsible for
          personal information we hold in connection with Dokkit. Depending on where you
          live, other privacy laws may also give you rights (see section 10).
        </p>

        <h2>2. What Dokkit is</h2>
        <p>
          Dokkit is a personal thinking and planning service. You put tasks and related
          work context into Dokkit so you do not have to hold everything in your head.
          Dokkit may learn from how you use it (for example estimates versus what
          actually happened) to improve fit for you. It is not an advertising network
          and is not designed as a public social network.
        </p>

        <h2>3. Information we process</h2>
        <h3>Account and authentication</h3>
        <ul>
          <li>Email address and authentication identifiers (including Google sign-in where used).</li>
          <li>Session information needed to keep you signed in securely.</li>
          <li>Account tier and billing status (Free, paid Dokkit plan, or trusted tester).</li>
        </ul>
        <h3>Product content you create</h3>
        <ul>
          <li>Tasks, notes, estimates, completion and Reality Check information.</li>
          <li>Jobs, meetings, travel trips and related structure (when you use those features).</li>
          <li>Optional location text and coordinates you attach to work or travel.</li>
          <li>Uploaded files and media you store against jobs or meetings.</li>
          <li>Onboarding answers used as initial planning priors.</li>
        </ul>
        <h3>Integrations you connect</h3>
        <ul>
          <li>
            Microsoft calendar (when you choose to connect): OAuth tokens, connected
            account identifiers, calendar list, and event timing needed to reflect
            external commitments in planning. We use this to support capacity and
            scheduling context, not to sell calendar content.
          </li>
        </ul>
        <h3>Payments</h3>
        <ul>
          <li>
            Payments are processed by Stripe. Dokkit stores Stripe customer and
            subscription identifiers and status so we can unlock the paid plan and
            update access when billing changes. Payment card details are handled by
            Stripe and are not stored in Dokkit application databases as full card
            numbers.
          </li>
          <li>Billing is configured in United States dollars (USD) for the Dokkit plan (USD $6/month) unless checkout shows otherwise.</li>
        </ul>
        <h3>Device, notifications, and operations</h3>
        <ul>
          <li>Push notification tokens if you enable notifications.</li>
          <li>Technical logs (errors, performance, security) with limited context.</li>
          <li>Storage usage totals for quota on hosted files.</li>
          <li>Preferences such as theme, work hours, and interface defaults.</li>
          <li>Approximate device or browser information typically collected by hosting and security systems.</li>
        </ul>
        <p>
          We do not intentionally collect government ID numbers, health records, or
          similar highly sensitive categories as a product feature. Please do not store
          content you are not comfortable placing with a cloud productivity service.
        </p>

        <h2>4. Why we process it</h2>
        <ul>
          <li>To provide and maintain the service (planning, Reality Check, learning, Pro features).</li>
          <li>To authenticate you and protect accounts.</li>
          <li>To process subscriptions, invoices, and cancellations through Stripe.</li>
          <li>To operate, secure, debug, and improve reliability of the service.</li>
          <li>To respond to support and privacy requests.</li>
          <li>To meet legal obligations where they apply (for example tax or law-enforcement requests that are valid).</li>
        </ul>
        <p>
          We do not sell your personal information for money. We do not use your task
          content to build third-party advertising profiles.
        </p>

        <h2>5. Learning and behavioural information</h2>
        <p>
          Dokkit may derive patterns from your use — for example typical durations, carry
          behaviour, or capacity fit — so the product becomes more realistic for you over
          time. That information is tied to your account to improve your experience. It is
          not sold as marketing data.
        </p>

        <h2>6. Who processes data on our behalf</h2>
        <p>
          We use specialist providers. Depending on configuration, these include:
        </p>
        <ul>
          <li>Supabase — database, authentication, and file storage.</li>
          <li>Vercel — application hosting and delivery.</li>
          <li>Stripe — payments and customer billing portal.</li>
          <li>Firebase or related infrastructure — optional push notifications.</li>
          <li>Microsoft — calendar OAuth and calendar data when you connect it.</li>
          <li>Google — sign-in when you choose Google authentication; Maps/Places where location features are used.</li>
        </ul>
        <p>
          These providers may process data in the United States and other countries. By
          using Dokkit, you understand that personal information may be stored or
          processed outside your home country, including outside New Zealand, Australia,
          Canada, or the United States, subject to the provider&apos;s safeguards and our
          configuration. We limit access to what each feature requires.
        </p>

        <h2>7. Retention</h2>
        <ul>
          <li>Account content is kept while your account exists.</li>
          <li>
            When you delete your account, we cancel active Dokkit subscriptions with
            Stripe where possible, remove or cascade application data associated with
            your user id, and remove hosted media on a best-effort basis. Some
            operational logs and anonymised feedback may remain for security and
            integrity.
          </li>
          <li>
            Billing and accounting records may be retained as needed for financial
            records, disputes, or law.
          </li>
        </ul>

        <h2>8. Security</h2>
        <p>
          Access is protected by authentication and server-side authorisation. User-owned
          database rows are protected with access controls (including row-level security)
          so one customer cannot normally read another customer&apos;s data through the
          application. File storage is private to your account path. Server secrets are
          not embedded in the public client. No system is perfectly secure; report
          concerns to support@dokkit.space.
        </p>

        <h2>9. Children</h2>
        <p>
          Dokkit is aimed at adults managing work and life logistics. It is not directed
          at children under 16. If you believe a child has created an account, contact
          support@dokkit.space.
        </p>

        <h2>10. Your rights by region</h2>
        <p>
          Regardless of where you live, you can contact{' '}
          <a href="mailto:support@dokkit.space">support@dokkit.space</a> to request
          access to personal information we hold about you, ask for a correction, or
          request account deletion. We will respond within a reasonable time.
        </p>

        <h3>New Zealand</h3>
        <p>
          The Privacy Act 2020 applies to us as a New Zealand operator. You may request
          access and correction under that Act. If you are not satisfied with our
          response, you may contact the Office of the Privacy Commissioner
          (privacy.org.nz).
        </p>

        <h3>Australia</h3>
        <p>
          If you are in Australia, the Australian Privacy Principles under the Privacy
          Act 1988 (Cth) may apply to handling of personal information about you. You may
          request access and correction. Unresolved complaints may be taken to the Office
          of the Australian Information Commissioner (OAIC).
        </p>

        <h3>Canada</h3>
        <p>
          If you are in Canada, federal law (PIPEDA) and/or provincial privacy laws may
          apply depending on your province and the context. You may request access and
          correction of personal information we hold. Unresolved concerns may be raised
          with the Office of the Privacy Commissioner of Canada or the relevant
          provincial commissioner.
        </p>

        <h3>United States</h3>
        <p>
          The United States does not have a single federal consumer privacy law covering
          all private-sector services. State laws may apply. In particular, if you are a
          California resident, the California Consumer Privacy Act (CCPA) as amended by
          the CPRA may provide rights to know, delete, and correct personal information,
          and to opt out of certain “sales” or “sharing” of personal information.
        </p>
        <p>
          <strong>Sale / sharing:</strong> We do not sell personal information for money.
          We do not knowingly “share” personal information for cross-context behavioural
          advertising as a product practice. If that changes, we will update this policy
          and provide required notices or controls.
        </p>
        <p>
          California residents may submit requests via support@dokkit.space. We will not
          discriminate against you for exercising privacy rights. We may need to verify
          your request is authentic before acting on it.
        </p>
        <p>
          Other US states (for example those with comprehensive privacy statutes) may
          provide similar rights. Contact support@dokkit.space and we will handle your
          request in good faith consistent with applicable law.
        </p>

        <h2>11. Cookies and local storage</h2>
        <p>
          Dokkit uses cookies or local storage as needed for authentication sessions,
          theme preference, and similar client settings. The marketing site may use
          essential hosting cookies. We do not run third-party advertising trackers as
          part of the core product. If we introduce non-essential analytics cookies in
          the future, we will update this policy and use appropriate controls where
          required.
        </p>

        <h2>12. International users</h2>
        <p>
          If you use Dokkit from outside New Zealand, you are transferring information to
          our systems and providers, which may include processing in the United States
          and other countries. Those countries may have privacy rules different from
          yours. We still apply the practices in this policy and the security measures
          described above.
        </p>

        <h2>13. Changes</h2>
        <p>
          We may update this policy as the product or law changes. The “Last updated”
          date will change when we do. For material changes, we may also notify you in
          the product or by email where appropriate.
        </p>

        <h2>14. Contact</h2>
        <p>
          Privacy and support: <a href="mailto:support@dokkit.space">support@dokkit.space</a>
          <br />
          Website: <a href="https://dokkit.space">https://dokkit.space</a>
        </p>

        <p className="page-note">Last updated: {updated}</p>
      </section>
    </main>
  );
}
