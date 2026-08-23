import Link from 'next/link';
import DayRailDemo from '@/components/site/DayRailDemo';
import ThinkingDemo from '@/components/site/ThinkingDemo';
import ReshuffleDemo from '@/components/site/ReshuffleDemo';
import TravelSnapshot from '@/components/site/TravelSnapshot';
import PatternsSnapshot from '@/components/site/PatternsSnapshot';
import Reveal from '@/components/site/Reveal';

const DOKKIT_APP_URL = '#';

export default function Home() {
  return (
    <>
      {/* ── Nav ─────────────────────────────────────────────────── */}
      <header className="site-header">
        <Link
          href="/"
          style={{
            fontSize: 'var(--text-md)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          Dokkit
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
          <a
            href="#how-it-works"
            className="btn-ghost"
            style={{ fontSize: 'var(--text-sm)' }}
          >
            How it works
          </a>
          <a
            href={DOKKIT_APP_URL}
            className="btn btn-steel"
            style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-2) var(--space-4)' }}
          >
            Sign in
          </a>
        </nav>
      </header>

      <main>
        {/* ── 1. Hero ────────────────────────────────────────────── */}
        <section className="site-section" style={{ paddingBottom: 0 }}>
          <div className="site-section-inner" style={{ maxWidth: 720 }}>
            <Reveal>
              <p className="eyebrow">A thinking tool for real work</p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                style={{
                  fontSize: 'var(--text-display-lg)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  marginBottom: 'var(--space-6)',
                }}
              >
                You don&apos;t need to do more.
                <br />
                You need to know what fits.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  fontSize: 'var(--text-md)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.65,
                  maxWidth: 520,
                  marginBottom: 'var(--space-8)',
                }}
              >
                Dokkit is a personal thinking tool that understands time.
                It sees what actually fits in your day — and quietly
                rearranges things when reality changes.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-12)' }}>
                <a href={DOKKIT_APP_URL} className="btn btn-steel">
                  Try Dokkit
                </a>
                <a href="#how-it-works" className="btn btn-ghost">
                  How it works
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={280}>
            <div className="site-section-wide" style={{ marginTop: 'var(--space-4)' }}>
              <div className="demo-card">
                <DayRailDemo />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── 2. The real problem ─────────────────────────────────── */}
        <section className="site-section">
          <div className="site-section-inner">
            <Reveal>
              <p className="eyebrow">The real problem</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  fontSize: 'var(--text-display-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                }}
              >
                Most tools manage tasks.
                <br />
                None of them understand time.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                A list looks manageable until you realise it needs fourteen
                hours and you have six. The real work isn&apos;t organising
                tasks — it&apos;s knowing which ones actually fit into the
                day you have.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                }}
              >
                Most productivity tools are good at collecting things to do.
                None of them tell you whether today&apos;s list matches
                today&apos;s time. That&apos;s the gap Dokkit fills.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 3. What fits ────────────────────────────────────────── */}
        <section className="site-section" id="how-it-works">
          <div className="site-section-inner">
            <Reveal>
              <p className="eyebrow">What fits</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  fontSize: 'var(--text-display-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                }}
              >
                Add something new.
                <br />
                Dokkit checks whether today still works.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                When something new comes in, Dokkit doesn&apos;t just drop it
                at the bottom. It checks what still fits in the time you
                have left, moves things around, and carries forward what
                can&apos;t happen today.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)',
                }}
              >
                Nothing fails. It just moves.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="site-section-wide">
              <div className="demo-card">
                <ReshuffleDemo />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── 4. How it learns ────────────────────────────────────── */}
        <section className="site-section">
          <div className="site-section-inner">
            <Reveal>
              <p className="eyebrow">How it learns</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  fontSize: 'var(--text-display-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                }}
              >
                Dokkit remembers how long
                <br />
                things actually take you.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                Every task teaches Dokkit something. Type something
                you&apos;ve done before — even worded differently — and it
                recognises it and offers what it usually takes. No extra
                step required.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                Confidence builds honestly over time: just noticed →
                fairly confident → well known. Always shown plainly,
                never as a score.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--ink-faint)',
                  fontStyle: 'italic',
                  marginBottom: 'var(--space-8)',
                }}
              >
                Entirely yours — nothing is compared against anyone
                else&apos;s pace.
              </p>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="site-section-wide">
              <div className="demo-card">
                <ThinkingDemo />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── 5. Vocabulary ───────────────────────────────────────── */}
        <section className="site-section">
          <div className="site-section-inner">
            <Reveal>
              <p className="eyebrow">A different kind of tool</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  fontSize: 'var(--text-display-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                }}
              >
                The vocabulary is different on purpose.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)',
                }}
              >
                If a word implied failure, we changed it. The vocabulary
                is different because what the tool expects of you is
                different.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div>
                <div className="reframe-row">
                  <span className="reframe-old">Overdue</span>
                  <span className="reframe-arrow">→</span>
                  <span className="reframe-new">Carrying forward</span>
                </div>
                <div className="reframe-row">
                  <span className="reframe-old">Productivity score</span>
                  <span className="reframe-arrow">→</span>
                  <span className="reframe-new">Capacity awareness</span>
                </div>
                <div className="reframe-row">
                  <span className="reframe-old">Inbox</span>
                  <span className="reframe-arrow">→</span>
                  <span className="reframe-new">Holding space</span>
                </div>
                <div className="reframe-row">
                  <span className="reframe-old">Task management</span>
                  <span className="reframe-arrow">→</span>
                  <span className="reframe-new">Attention management</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 6. Travel ───────────────────────────────────────────── */}
        <section className="site-section">
          <div className="site-section-inner">
            <Reveal>
              <p className="eyebrow">Away or at home</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  fontSize: 'var(--text-display-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                }}
              >
                The same thinking works
                <br />
                when you&apos;re on the road.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                Travel isn&apos;t a separate planner bolted onto Dokkit.
                It&apos;s another application of the same capacity model.
                Block out the days you&apos;re away, and Dokkit works out
                what actually fits around the travel.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)',
                }}
              >
                No separate system. The same thinking, applied to where
                you are.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="site-section-wide">
              <TravelSnapshot />
            </div>
          </Reveal>
        </section>

        {/* ── 7. Patterns ─────────────────────────────────────────── */}
        <section className="site-section">
          <div className="site-section-inner">
            <Reveal>
              <p className="eyebrow">What Dokkit sees</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  fontSize: 'var(--text-display-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                }}
              >
                A quiet look back.
                <br />
                Not a scoreboard.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                Patterns shows you what Dokkit has learned: how your
                estimates compare to reality, where your time tends to go,
                what your rhythm looks like.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-8)',
                }}
              >
                No gamification. No comparisons. Just an honest mirror
                of how you work — expressed as plain observation, not
                dashboards.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="site-section-wide">
              <PatternsSnapshot />
            </div>
          </Reveal>
        </section>

        {/* ── 8. Why Dokkit exists ────────────────────────────────── */}
        <section className="site-section">
          <div className="site-section-inner">
            <Reveal>
              <h2
                style={{
                  fontSize: 'var(--text-display-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-6)',
                }}
              >
                Built because I needed it.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                Dokkit came from trying to manage real-world work where the
                day changes shape by the hour. A paper list works fine for
                remembering things. The list was never the problem.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-4)',
                }}
              >
                The real problem was carrying thoughts — things to
                remember, ideas that aren&apos;t ready yet, problems waiting
                on someone else, tasks that can&apos;t move until something
                else happens first.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                }}
              >
                Dokkit became a place for those to live. Not a faster way
                to check boxes — a tool that understands what fits.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 9. Final CTA ────────────────────────────────────────── */}
        <section className="site-section">
          <div className="site-section-inner" style={{ textAlign: 'center' }}>
            <Reveal>
              <h2
                style={{
                  fontSize: 'var(--text-display-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-3)',
                }}
              >
                You don&apos;t need to do more.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  fontSize: 'var(--text-display-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-8)',
                  color: 'var(--steel)',
                }}
              >
                You need to know what fits.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <a href={DOKKIT_APP_URL} className="btn btn-steel" style={{ fontSize: 'var(--text-base)', padding: 'var(--space-4) var(--space-8)' }}>
                Try Dokkit
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── 10. Footer ──────────────────────────────────────────── */}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="site-footer-brand">Dokkit</div>
            <div className="site-footer-tagline">Understand what fits.</div>
            <div className="site-footer-links">
              <a href={DOKKIT_APP_URL} className="site-footer-link">
                Sign in
              </a>
              <span className="site-footer-link" style={{ cursor: 'default' }}>
                About
              </span>
              <span className="site-footer-link" style={{ cursor: 'default' }}>
                Privacy
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
