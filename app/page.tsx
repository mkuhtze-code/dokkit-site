import Link from 'next/link';
import DayRailDemo from '@/components/site/DayRailDemo';
import ThinkingDemo from '@/components/site/ThinkingDemo';
import ReshuffleDemo from '@/components/site/ReshuffleDemo';
import JobsSnapshot from '@/components/site/JobsSnapshot';
import TravelSnapshot from '@/components/site/TravelSnapshot';
import PatternsSnapshot from '@/components/site/PatternsSnapshot';
import FaqList from '@/components/site/FaqList';
import Reveal from '@/components/site/Reveal';
import DokkitMark from '@/components/site/DokkitMark';
import { AppLink } from '@/components/site/SiteChrome';

const steps = ['Capture what needs doing.', 'Let Dokkit observe what the work is like.', 'Dokkit remembers what matters.', 'Reality changes? Dokkit reshapes the plan.'];

export default function Home() {
  return (
    <main>
      <section className="site-section site-hero">
        <div className="site-section-inner hero-copy">
          <Reveal><p className="eyebrow">A thinking tool for real work</p></Reveal>
          <DokkitMark decorative className="hero-mark" />
          <Reveal delay={80}><h1>You don&apos;t need to do more.<br />You need to know what fits.</h1></Reveal>
          <Reveal delay={160}><p className="section-lead">Dokkit is a personal thinking tool that observes how you work and quietly adapts around you. Your plans change. Your priorities change. Your days change. Dokkit changes with them.</p></Reveal>
          <Reveal delay={220}><div className="cta-row"><AppLink>Try Dokkit</AppLink><a href="#how-it-works" className="btn btn-ghost">How it works</a></div></Reveal>
        </div>
        <Reveal delay={280}><div className="site-section-wide"><div className="demo-card"><DayRailDemo /></div></div></Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner"><Reveal><p className="eyebrow">The problem</p></Reveal><Reveal delay={80}><h2>Most tools manage tasks.<br />None of them understand how work unfolds.</h2></Reveal><Reveal delay={140}><p>A list can look manageable until the day shifts around it. The hard part is not keeping a list. It is having a tool that reflects the work, commitments, changes and decisions that shape the day.</p></Reveal></div>
      </section>

      <section className="site-section section-copy" id="how-it-works">
        <div className="site-section-inner"><Reveal><p className="eyebrow">Adapts</p></Reveal><Reveal delay={80}><h2>Your day changes. Dokkit changes with it.</h2></Reveal><Reveal delay={140}><p>Add something new. Finish something early. Run out of time. Change your priorities. Dokkit adjusts the plan around what actually happened, carrying work forward when the day has moved on.</p></Reveal></div>
        <Reveal delay={200}><div className="site-section-wide"><div className="demo-card"><ReshuffleDemo /></div></div></Reveal><Reveal delay={240}><div className="section-cta"><AppLink>Try Dokkit</AppLink></div></Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner"><Reveal><p className="eyebrow">Remembers</p></Reveal><Reveal delay={80}><h2>Dokkit remembers what your work is actually like.</h2></Reveal><Reveal delay={140}><p>The more you use Dokkit, the less you have to explain. It remembers how long things tend to take, what gets carried forward, and the patterns that emerge in the way you work.</p></Reveal></div>
        <Reveal delay={200}><div className="site-section-wide"><div className="demo-card"><ThinkingDemo /></div></div></Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner"><Reveal><p className="eyebrow eyebrow-with-mark"><DokkitMark decorative />Built differently</p></Reveal><Reveal delay={80}><h2>The tool should fit the work — not the other way around.</h2></Reveal><Reveal delay={140}><p>Dokkit does not judge you against a rigid system. Its language reflects a different relationship: plans can change, work can carry forward, and what happened is useful information.</p></Reveal><Reveal delay={190}><div className="reframe-list"><div className="reframe-row"><span className="reframe-old">Overdue</span><span aria-hidden="true">→</span><span className="reframe-new">Carrying forward</span></div><div className="reframe-row"><span className="reframe-old">Inbox</span><span aria-hidden="true">→</span><span className="reframe-new">Capture</span></div><div className="reframe-row"><span className="reframe-old">Failure</span><span aria-hidden="true">→</span><span className="reframe-new">Information</span></div><div className="reframe-row"><span className="reframe-old">Rigid plan</span><span aria-hidden="true">→</span><span className="reframe-new">Living plan</span></div></div></Reveal></div>
      </section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Jobs</p></Reveal><Reveal delay={80}><h2>Work doesn&apos;t arrive in neat little boxes.</h2></Reveal><Reveal delay={140}><p>Dokkit lets jobs, tasks and the things around them fit together naturally. A site visit, quote revision, installation or follow-up can stay connected to the work it belongs to—without turning your day into a project-management exercise.</p></Reveal></div><Reveal delay={200}><div className="site-section-wide"><JobsSnapshot /></div></Reveal></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Travel</p></Reveal><Reveal delay={80}><h2>The same tool follows you when the day changes shape.</h2></Reveal><Reveal delay={140}><p>When you are on the road, tasks, locations, routes and plans still belong together. Dokkit adapts with the circumstances, so a change of place does not mean starting your thinking again.</p></Reveal></div><Reveal delay={200}><div className="site-section-wide"><TravelSnapshot /></div></Reveal></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Patterns</p></Reveal><Reveal delay={80}><h2>A clearer picture of how you work.</h2></Reveal><Reveal delay={140}><p>Dokkit looks back at what actually happened—not to score you, but to understand you better. Over time, it makes estimates, recurring work and changing patterns easier to see.</p></Reveal></div><Reveal delay={200}><div className="site-section-wide"><PatternsSnapshot /></div></Reveal></section>

      <section className="site-section section-copy split-section"><div className="site-section-inner"><div><p className="eyebrow">Your calendar, alongside Dokkit</p><h2>Your calendar tells you where you have to be. Dokkit helps you understand what can move around it.</h2><p>Keep using the calendar you already rely on. Microsoft Calendar integration can bring existing commitments into view while Dokkit adapts the work around them.</p></div><div className="quiet-card"><span className="mono">09:30</span><strong>Site visit</strong><span className="mono">11:15</span><strong>Client call</strong><p>Work arranged around what is already fixed.</p></div></div></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">How it works</p></Reveal><Reveal delay={80}><h2>It becomes more useful because it reflects you.</h2></Reveal><ol className="steps-list">{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol><Link href="/how-it-works" className="text-link">See how Dokkit adapts around your work</Link></div></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Who it is for</p></Reveal><Reveal delay={80}><h2>Built for days that don&apos;t go to plan.</h2></Reveal><Reveal delay={140}><p>Dokkit is especially useful for tradespeople, contractors, field workers, service businesses and independent operators—anyone whose workday changes constantly. It is for people doing real work in the real world.</p></Reveal></div></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Questions</p></Reveal><Reveal delay={80}><h2>Clear about what Dokkit is for.</h2></Reveal><FaqList /><Link href="/faq" className="text-link">Read all questions about Dokkit</Link></div></section>

      <section className="site-section section-copy origin-section"><div className="site-section-inner"><Reveal><p className="eyebrow">Origin</p></Reveal><Reveal delay={80}><h2>Built because I needed it.</h2></Reveal><Reveal delay={140}><p>Dokkit began with days that changed shape by the hour. A paper list could remember the work, but it could not say what still fit, what needed to wait, or what real experience had already taught.</p></Reveal></div></section>

      <section className="site-section final-cta"><div className="site-section-inner"><DokkitMark decorative className="final-cta-mark" /><Reveal><h2>You don&apos;t need to do more.<br />You need to know what fits.</h2></Reveal><Reveal delay={100}><p>Dokkit adapts to the way you work, so you don&apos;t have to adapt yourself to the tool.</p></Reveal><Reveal delay={160}><AppLink>Try Dokkit</AppLink></Reveal></div></section>
    </main>
  );
}
