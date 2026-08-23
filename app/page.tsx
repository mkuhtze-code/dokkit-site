import Link from 'next/link';
import DayRailDemo from '@/components/site/DayRailDemo';
import ThinkingDemo from '@/components/site/ThinkingDemo';
import ReshuffleDemo from '@/components/site/ReshuffleDemo';
import JobsSnapshot from '@/components/site/JobsSnapshot';
import TravelSnapshot from '@/components/site/TravelSnapshot';
import PatternsSnapshot from '@/components/site/PatternsSnapshot';
import FaqList from '@/components/site/FaqList';
import Reveal from '@/components/site/Reveal';
import { AppLink } from '@/components/site/SiteChrome';

const steps = ['Capture what needs doing.', 'Give it a sense of time.', 'Dokkit checks what fits.', 'Reality changes? Dokkit reshapes the day.'];

export default function Home() {
  return (
    <main>
      <section className="site-section site-hero">
        <div className="site-section-inner hero-copy">
          <Reveal><p className="eyebrow">A thinking tool for real work</p></Reveal>
          <Reveal delay={80}><h1>You don&apos;t need to do more.<br />You need to know what fits.</h1></Reveal>
          <Reveal delay={160}><p className="section-lead">Dokkit is a personal thinking tool that understands time. It sees what actually fits in your day — and quietly rearranges things when reality changes.</p></Reveal>
          <Reveal delay={220}><div className="cta-row"><AppLink>Try Dokkit</AppLink><a href="#how-it-works" className="btn btn-ghost">How it works</a></div></Reveal>
        </div>
        <Reveal delay={280}><div className="site-section-wide"><div className="demo-card"><DayRailDemo /></div></div></Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner"><Reveal><p className="eyebrow">The problem</p></Reveal><Reveal delay={80}><h2>Most tools manage tasks.<br />None of them understand time.</h2></Reveal><Reveal delay={140}><p>A list can look manageable until the work inside it exceeds the time actually available. The hard part is not keeping a list. It is knowing what belongs in the day you have.</p></Reveal></div>
      </section>

      <section className="site-section section-copy" id="how-it-works">
        <div className="site-section-inner"><Reveal><p className="eyebrow">What fits</p></Reveal><Reveal delay={80}><h2>Add something new. Dokkit checks whether today still works.</h2></Reveal><Reveal delay={140}><p>When something new comes in, Dokkit checks the time you have left, orders what fits, and carries forward what does not. The work stays with you; the day simply changes shape.</p></Reveal></div>
        <Reveal delay={200}><div className="site-section-wide"><div className="demo-card"><ReshuffleDemo /></div></div></Reveal><Reveal delay={240}><div className="section-cta"><AppLink>Try Dokkit</AppLink></div></Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner"><Reveal><p className="eyebrow">Remembers</p></Reveal><Reveal delay={80}><h2>Dokkit remembers how long things actually take you.</h2></Reveal><Reveal delay={140}><p>As you work, Dokkit builds an understanding from your own history. For familiar work, it can show what it has observed before and how confident that observation is. It remains your pace, in plain view.</p></Reveal></div>
        <Reveal delay={200}><div className="site-section-wide"><div className="demo-card"><ThinkingDemo /></div></div></Reveal>
      </section>

      <section className="site-section section-copy">
        <div className="site-section-inner"><Reveal><p className="eyebrow">Built differently</p></Reveal><Reveal delay={80}><h2>Built differently on purpose.</h2></Reveal><Reveal delay={140}><p>Dokkit does not treat an unfinished task as a personal failing. Its words reflect that: work is carried forward, and new thoughts start in Capture.</p></Reveal><Reveal delay={190}><div className="reframe-list"><div className="reframe-row"><span className="reframe-old">Overdue</span><span aria-hidden="true">→</span><span className="reframe-new">Carrying forward</span></div><div className="reframe-row"><span className="reframe-old">Inbox</span><span aria-hidden="true">→</span><span className="reframe-new">Capture</span></div><div className="reframe-row"><span className="reframe-old">Failure</span><span aria-hidden="true">→</span><span className="reframe-new">Information</span></div><div className="reframe-row"><span className="reframe-old">Rigid plan</span><span aria-hidden="true">→</span><span className="reframe-new">Living plan</span></div></div></Reveal></div>
      </section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Jobs</p></Reveal><Reveal delay={80}><h2>Your jobs. Your tasks. One thinking tool.</h2></Reveal><Reveal delay={140}><p>Keep a site visit, a client call, a quote revision, an installation, or a material order connected to the work they belong to. Dokkit gives each job its place without losing sight of the day around it.</p></Reveal></div><Reveal delay={200}><div className="site-section-wide"><JobsSnapshot /></div></Reveal></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Travel</p></Reveal><Reveal delay={80}><h2>The same thinking works when you&apos;re on the road.</h2></Reveal><Reveal delay={140}><p>Travel, routes, and changing locations affect what fits too. Dokkit keeps practical details together, including route awareness when planning a visit, so time and place stay part of the same plan.</p></Reveal></div><Reveal delay={200}><div className="site-section-wide"><TravelSnapshot /></div></Reveal></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Patterns</p></Reveal><Reveal delay={80}><h2>A quiet look back. Not a scoreboard.</h2></Reveal><Reveal delay={140}><p>Patterns makes room to notice how estimates compare with actual time, what work recurs, and where confidence has built. It is a simple record of what has happened, so tomorrow can be planned with more understanding.</p></Reveal></div><Reveal delay={200}><div className="site-section-wide"><PatternsSnapshot /></div></Reveal></section>

      <section className="site-section section-copy split-section"><div className="site-section-inner"><div><p className="eyebrow">Your calendar, alongside Dokkit</p><h2>Your calendar tells you where you have to be. Dokkit helps you understand what fits around it.</h2><p>Keep using the calendar you already rely on. Microsoft Calendar integration can bring existing commitments into view while Dokkit considers the work around them.</p></div><div className="quiet-card"><span className="mono">09:30</span><strong>Site visit</strong><span className="mono">11:15</span><strong>Client call</strong><p>Work arranged around what is already fixed.</p></div></div></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">How it works</p></Reveal><Reveal delay={80}><h2>Simple enough to use when the day is moving.</h2></Reveal><ol className="steps-list">{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol><Link href="/how-it-works" className="text-link">See how Dokkit thinks about time</Link></div></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Who it is for</p></Reveal><Reveal delay={80}><h2>Built for days that don&apos;t go to plan.</h2></Reveal><Reveal delay={140}><p>Dokkit is especially useful for tradespeople, contractors, field workers, service businesses and independent operators—anyone whose workday changes constantly. It is for people doing real work in the real world.</p></Reveal></div></section>

      <section className="site-section section-copy"><div className="site-section-inner"><Reveal><p className="eyebrow">Questions</p></Reveal><Reveal delay={80}><h2>Clear about what Dokkit is for.</h2></Reveal><FaqList /><Link href="/faq" className="text-link">Read all questions about Dokkit</Link></div></section>

      <section className="site-section section-copy origin-section"><div className="site-section-inner"><Reveal><p className="eyebrow">Origin</p></Reveal><Reveal delay={80}><h2>Built because I needed it.</h2></Reveal><Reveal delay={140}><p>Dokkit began with days that changed shape by the hour. A paper list could remember the work, but it could not say what still fit, what needed to wait, or what real experience had already taught.</p></Reveal></div></section>

      <section className="site-section final-cta"><div className="site-section-inner"><Reveal><h2>You don&apos;t need to do more.<br />You need to know what fits.</h2></Reveal><Reveal delay={100}><p>Dokkit is free. No credit card. No trial period. Just a tool that understands time.</p></Reveal><Reveal delay={160}><AppLink>Try Dokkit</AppLink></Reveal></div></section>
    </main>
  );
}
