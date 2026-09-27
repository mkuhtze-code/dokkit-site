import Link from 'next/link';
import DayRailDemo from '@/components/site/DayRailDemo';
import ThinkingDemo from '@/components/site/ThinkingDemo';
import ReshuffleDemo from '@/components/site/ReshuffleDemo';
import JobsSnapshot from '@/components/site/JobsSnapshot';
import MeetingsSnapshot from '@/components/site/MeetingsSnapshot';
import TravelSnapshot from '@/components/site/TravelSnapshot';
import PatternsSnapshot from '@/components/site/PatternsSnapshot';
import FaqList from '@/components/site/FaqList';
import Reveal from '@/components/site/Reveal';
import DokkitMark from '@/components/site/DokkitMark';
import { AppLink } from '@/components/site/SiteChrome';

const steps = [
  'Get the work out of your head.',
  'See what still fits the day you have.',
  'Check reality—not the plan you hoped for.',
  'Dokkit learns, so the next day is more honest.',
];

export default function Home() {
  return (
    <main>
      <section className="site-section site-hero">
        <div className="site-section-inner hero-copy">
          <Reveal>
            <p className="eyebrow">A thinking tool for real work</p>
          </Reveal>
          <DokkitMark decorative className="hero-mark" />
          <Reveal delay={80}>
            <h1>
              You don&apos;t need to do more.
              <br />
              You need to know what fits.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-lead">
              Stop carrying the whole day in your head. Dokkit holds the work, shows what
              still fits, and learns from what actually happened—not a chatbot, not a
              scoreboard, not another system to maintain.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="cta-row">
              <AppLink>Start free</AppLink>
              <a href="#how-it-works" className="btn btn-ghost">
                How it works
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={280}>
          <div className="site-section-wide">
            <div className="demo-card">
              <DayRailDemo />
              <p className="page-note" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                Illustrative—real Today reflects your tasks, work hours, and what Dokkit
                has learned from you.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">The problem</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>
              Most tools manage tasks.
              <br />
              None of them understand how work unfolds.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              A list can look manageable until the day shifts around it. The hard part is
              not keeping a list. It is having a tool that reflects the work, commitments,
              changes and decisions that shape the day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section section-copy" id="how-it-works">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">Adapts</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Your day changes. Dokkit changes with it.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Add something new. Finish something early. Run out of time. Change your
              priorities. Dokkit adjusts the plan around what actually happened—carrying
              forward the work that usually moves, and leaving same-day anchors where they
              belong.
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
        <Reveal delay={240}>
          <div className="section-cta">
            <AppLink>Try Dokkit</AppLink>
          </div>
        </Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">Remembers</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Dokkit remembers what your work is actually like.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              The more you use Dokkit, the less you have to explain. It remembers how long
              things tend to take, what gets carried forward, and the patterns that emerge
              in the way you work—even when you didn’t put a time on every task.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="site-section-wide">
            <div className="demo-card">
              <ThinkingDemo />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow eyebrow-with-mark">
              <DokkitMark decorative />
              Built differently
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2>The tool should fit the work — not the other way around.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Dokkit does not judge you against a rigid system. Its language reflects a
              different relationship: plans can change, work can carry forward, and what
              happened is useful information.
            </p>
          </Reveal>
          <Reveal delay={190}>
            <div className="reframe-list">
              <div className="reframe-row">
                <span className="reframe-old">Overdue</span>
                <span aria-hidden="true">→</span>
                <span className="reframe-new">Carrying forward</span>
              </div>
              <div className="reframe-row">
                <span className="reframe-old">Inbox</span>
                <span aria-hidden="true">→</span>
                <span className="reframe-new">Capture</span>
              </div>
              <div className="reframe-row">
                <span className="reframe-old">Failure</span>
                <span aria-hidden="true">→</span>
                <span className="reframe-new">Information</span>
              </div>
              <div className="reframe-row">
                <span className="reframe-old">Rigid plan</span>
                <span aria-hidden="true">→</span>
                <span className="reframe-new">Living plan</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">Jobs</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Work doesn&apos;t arrive in neat little boxes.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              A job is a lens over the same tasks you already have—what’s open, what’s on
              today, and what still needs time—without turning your day into a
              project-management exercise.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="site-section-wide">
            <JobsSnapshot />
          </div>
        </Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">Meetings</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>The conversation stays with the work.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              A meeting is time with people—often about a job, often at a place. Capture
              what was said, decided and still needs doing, without spinning up another
              system of record.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="site-section-wide">
            <MeetingsSnapshot />
          </div>
        </Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">Travel</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>The same tool follows you when the day changes shape.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              When you are on the road, tasks, locations, routes and plans still belong
              together. Dokkit adapts with the circumstances, so a change of place does not
              mean starting your thinking again.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="site-section-wide">
            <TravelSnapshot />
          </div>
        </Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">Patterns</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>A clearer picture of how you work.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Not a report card. Quiet signals—what tends to carry, how estimates land,
              work that repeats—so the next plan is a little closer to how you actually
              work.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="site-section-wide">
            <PatternsSnapshot />
          </div>
        </Reveal>
      </section>

      <section className="site-section section-copy split-section">
        <div className="site-section-inner">
          <div>
            <p className="eyebrow">Alongside the calendar you already use</p>
            <h2>
              Fixed time is real. The rest of the day still needs a plan that can move.
            </h2>
            <p>
              Dokkit is built to respect commitments you already have—site visits, calls,
              anything that does not slide. Full calendar sync is on the roadmap; until
              then you still get a clear picture of the work that has to fit around what
              is fixed.
            </p>
          </div>
          <div className="quiet-card">
            <span className="mono">09:30</span>
            <strong>Site visit</strong>
            <span className="mono">11:15</span>
            <strong>Client call</strong>
            <p>The work around fixed time—not a second calendar to maintain.</p>
          </div>
        </div>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">How it works</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Less holding. Clearer fit. Quiet learning.</h2>
          </Reveal>
          <ol className="steps-list">
            {steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
          <Link href="/how-it-works" className="text-link">
            See how Dokkit adapts around your work
          </Link>
        </div>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">Who it is for</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Built for days that don&apos;t go to plan.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Dokkit is especially useful for tradespeople, contractors, field workers,
              service businesses and independent operators—anyone whose workday changes
              constantly. It is for people doing real work in the real world.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">Questions</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Straight answers.</h2>
          </Reveal>
          <FaqList />
          <Link href="/faq" className="text-link">
            Read all questions about Dokkit
          </Link>
        </div>
      </section>

      <section className="site-section section-copy origin-section">
        <div className="site-section-inner">
          <Reveal>
            <p className="eyebrow">Origin</p>
          </Reveal>
          <Reveal delay={80}>
            <h2>Built because I needed it.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Dokkit began with days that changed shape by the hour. A paper list could
              remember the work, but it could not say what still fit, what needed to wait,
              or what real experience had already taught.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section final-cta">
        <div className="site-section-inner">
          <DokkitMark decorative className="final-cta-mark" />
          <Reveal>
            <h2>
              You don&apos;t need to do more.
              <br />
              You need to know what fits.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Put the load down. See what fits. Let the tool learn you—not the other way
              around.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <AppLink>Start free</AppLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
