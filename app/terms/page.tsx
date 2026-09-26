import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms',
  description:
    'Terms of use for Dokkit — accounts, acceptable use, the USD $6/month Dokkit plan, cancellation, and liability.',
};

const updated = '26 September 2026';

export default function TermsPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">Terms</p>
        <h1>Terms of Service</h1>
        <p>
          These terms govern use of Dokkit (the website at dokkit.space and the application).
          By creating an account or using the service, you agree to them. This is not legal advice;
          if you need formal counsel for your situation, obtain it independently.
        </p>
      </section>

      <section className="legal-copy">
        <h2>1. The service</h2>
        <p>
          Dokkit is a personal thinking and planning tool. Free access includes core Today
          planning, tasks, Reality Check, and related learning features. The paid Dokkit plan
          adds Jobs, Meetings, Travel, and calendar integration as described on the pricing page
          and in the application.
        </p>

        <h2>2. Accounts</h2>
        <ul>
          <li>You must provide accurate sign-up information and keep credentials secure.</li>
          <li>You are responsible for activity under your account.</li>
          <li>One person should not deliberately evade plan limits through multiple abusive accounts.</li>
        </ul>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Break the law or infringe others’ rights using Dokkit.</li>
          <li>Attempt unauthorised access to other users’ data, Admin areas, or infrastructure.</li>
          <li>Probe, overload, or disrupt the service except through coordinated security research disclosed to us.</li>
          <li>Upload malware or content you do not have rights to store.</li>
          <li>Resell Dokkit as a service without written permission.</li>
        </ul>

        <h2>4. Your content</h2>
        <p>
          You retain ownership of content you enter into Dokkit. You grant us a limited licence
          to host, process, and display that content solely to operate and improve the service
          for you. You are responsible for the legality of content you store.
        </p>

        <h2>5. Subscription and billing</h2>
        <ul>
          <li>
            The Dokkit plan is offered at <strong>USD $6 per month</strong>, charged through Stripe.
            Tax may apply where required.
          </li>
          <li>Price is confirmed at checkout. Currency is United States dollars unless Stripe shows otherwise for your session.</li>
          <li>Subscriptions renew automatically until cancelled.</li>
          <li>You can manage payment method, invoices, and cancellation through Account → Billing (Stripe Customer Portal).</li>
          <li>
            Cancellation stops future renewal. Access to paid features continues until the end of
            the paid period unless we state otherwise for a specific promotion.
          </li>
          <li>
            Failed payments may result in past-due status and loss of paid features until resolved.
          </li>
          <li>
            Refunds are handled case by case. Contact support@dokkit.space promptly if you believe
            a charge was made in error.
          </li>
          <li>Deleting your account is intended to cancel active Dokkit subscriptions so you are not charged after deletion.</li>
        </ul>

        <h2>6. Free plan</h2>
        <p>
          Free access is provided so you can experience real Dokkit. Features, limits, and
          availability of Free may change; we will not use dark patterns to force a paid plan.
        </p>

        <h2>7. Third-party services</h2>
        <p>
          Optional connections (for example Microsoft calendar or Google sign-in) are subject to
          those providers’ terms. We are not responsible for outages or policy changes at those
          providers.
        </p>

        <h2>8. Availability</h2>
        <p>
          We aim for reliable service but do not guarantee uninterrupted availability. Maintenance,
          dependency outages, or force majeure may affect access.
        </p>

        <h2>9. Intellectual property</h2>
        <p>
          Dokkit branding, product design, and software remain owned by the operator. Feedback you
          send may be used to improve the product without obligation to you.
        </p>

        <h2>10. Disclaimer and liability</h2>
        <p>
          Dokkit is provided “as is” to the extent permitted by New Zealand law. We do not warrant
          that estimates, capacity suggestions, or learned behaviour will be error-free. Nothing in
          these terms excludes rights you cannot waive under the Consumer Guarantees Act or other
          mandatory law. Where liability can be limited, our total liability for claims arising from
          the service is limited to the greater of (a) fees you paid to us for the Dokkit plan in
          the three months before the claim, or (b) USD $50.
        </p>

        <h2>11. Suspension and termination</h2>
        <p>
          We may suspend or terminate accounts that abuse the service, threaten security, or
          remain unpaid. You may stop using Dokkit and delete your account at any time.
        </p>

        <h2>12. Changes</h2>
        <p>
          We may update these terms. Material changes will be reflected by the “Last updated”
          date. Continued use after changes constitutes acceptance of the updated terms where
          permitted by law.
        </p>

        <h2>13. Governing law</h2>
        <p>
          These terms are governed by the laws of New Zealand. Courts of New Zealand have
          non-exclusive jurisdiction, without limiting mandatory consumer protections that apply
          where you live.
        </p>

        <h2>14. Contact</h2>
        <p>
          Support and legal notices: <a href="mailto:support@dokkit.space">support@dokkit.space</a>
          <br />
          Website: <a href="https://dokkit.space">https://dokkit.space</a>
        </p>

        <p className="page-note">Last updated: {updated}</p>
      </section>
    </main>
  );
}
