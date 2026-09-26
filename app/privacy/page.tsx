import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'How Dokkit collects, uses, and protects personal information — including tasks, planning data, billing, and optional integrations.',
};

const updated = '26 September 2026';

export default function PrivacyPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>
          This policy explains what Dokkit processes, why, and how you can exercise your rights.
          It reflects how the product works today. Dokkit is not claiming ISO 27001 or SOC 2
          certification; security practices are described honestly below.
        </p>
      </section>

      <section className="legal-copy">
        <h2>1. Who is responsible</h2>
        <p>
          Dokkit is operated from New Zealand. For privacy requests, contact{' '}
          <a href="mailto:support@dokkit.space">support@dokkit.space</a>.
          If you need the formal legal entity name for a contract or regulator, ask at that
          address and we will provide the operator details on record.
        </p>

        <h2>2. What Dokkit is</h2>
        <p>
          Dokkit is a personal thinking and planning service. You put tasks and related work
          context into Dokkit so you do not have to hold everything in your head. Dokkit may
          learn from how you use it (for example estimates versus what actually happened) to
          improve fit for you. It is not an AI chatbot product and does not sell your content
          as advertising profiles.
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
            Microsoft calendar connection (when enabled and you choose to connect): OAuth tokens,
            connected account email, calendar list, and event times needed to reflect external
            commitments in Today. Calendar access is intended to be read-oriented for capacity.
          </li>
        </ul>
        <h3>Payments</h3>
        <ul>
          <li>
            Payments are processed by Stripe. Dokkit stores Stripe customer and subscription
            identifiers and status so we can unlock the paid plan and stop access when billing ends.
            Card numbers are handled by Stripe, not stored in Dokkit application databases.
          </li>
        </ul>
        <h3>Device, notifications, and operations</h3>
        <ul>
          <li>Push notification tokens if you enable notifications.</li>
          <li>Technical logs (errors, performance, security) with limited context.</li>
          <li>Storage usage totals for quota enforcement on hosted files.</li>
          <li>Preferences such as theme, work hours, and sorting defaults.</li>
        </ul>

        <h2>4. Why we process it</h2>
        <ul>
          <li>To provide the service you signed up for (planning, learning from Reality Check, Pro surfaces).</li>
          <li>To authenticate you and protect accounts.</li>
          <li>To process subscriptions and prevent billing after account deletion where applicable.</li>
          <li>To operate, secure, and improve reliability of the service.</li>
          <li>To respond to support requests you send us.</li>
          <li>To meet legal obligations when they apply.</li>
        </ul>

        <h2>5. Learning and behavioural information</h2>
        <p>
          Dokkit may derive patterns from your use — for example typical durations, carry
          behaviour, or capacity fit — so suggestions become more realistic over time. This
          information stays tied to your account to improve your experience. It is not used to
          build advertising profiles for third parties.
        </p>

        <h2>6. Who processes data on our behalf</h2>
        <p>Infrastructure and specialised processors include (depending on configuration):</p>
        <ul>
          <li>Supabase — database, authentication, and file storage.</li>
          <li>Vercel — application hosting.</li>
          <li>Stripe — payments and billing portal.</li>
          <li>Firebase / related push infrastructure — optional notifications.</li>
          <li>Microsoft — calendar OAuth and calendar data when you connect it.</li>
          <li>Google — sign-in when you choose Google authentication; Maps/Places where location features are used.</li>
        </ul>
        <p>
          These providers process data under their terms and our configuration. Data may be
          stored or processed outside New Zealand where those providers operate; we choose
          established suppliers and limit access to what the feature requires.
        </p>

        <h2>7. Retention</h2>
        <ul>
          <li>Account content is kept while your account exists.</li>
          <li>
            When you delete your account, we cancel active Dokkit subscriptions with Stripe where
            possible, remove or cascade application data associated with your user id, and remove
            hosted media on a best-effort basis. Some operational logs and anonymised feedback may
            remain for security and product integrity.
          </li>
          <li>Billing records required for accounting or dispute handling may be retained as required by law.</li>
        </ul>

        <h2>8. Security</h2>
        <p>
          Access to your content is protected by authentication and server-side authorisation.
          User-owned database rows are protected with row-level security policies so one customer
          cannot read another customer&apos;s data through normal application access. File storage
          is private to your account path. Secrets (API keys, webhook secrets, service roles) are
          kept server-side and are not embedded in the public client. No security measure is
          perfect; report concerns to support@dokkit.space.
        </p>

        <h2>9. Your rights (New Zealand Privacy Act 2020)</h2>
        <p>
          Depending on applicable law, you may request access to personal information we hold
          about you, correction of inaccurate information, and deletion of your account. Start
          with in-app account deletion where available, or email support@dokkit.space. You may
          also contact the Office of the Privacy Commissioner (New Zealand) if you have a
          complaint that is not resolved.
        </p>

        <h2>10. Children</h2>
        <p>
          Dokkit is aimed at adults managing work and life logistics. It is not directed at
          children under 16.
        </p>

        <h2>11. Cookies and local storage</h2>
        <p>
          Dokkit uses cookies or local storage as needed for authentication sessions, theme
          preference, and similar client settings. The marketing site may use essential hosting
          cookies. We do not run third-party advertising trackers as part of the core product.
        </p>

        <h2>12. Changes</h2>
        <p>
          We may update this policy as the product changes. The “Last updated” date will change
          when we do. Continued use after material changes means you should review the updated
          policy.
        </p>

        <h2>13. Contact</h2>
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
