const questions = [
  ['What is Dokkit?', 'Dokkit is a personal thinking tool that observes how you work, remembers what it learns, and adapts when plans change.'],
  ['Is Dokkit a to-do list?', 'It can hold tasks, but its purpose is different: it helps the shape of your work emerge instead of asking you to keep everything in a rigid list.'],
  ['Is Dokkit a calendar?', 'No. Dokkit can sit alongside your calendar and help you understand the work around commitments already there.'],
  ['Does Dokkit use AI?', 'No. Dokkit’s thinking engine is deterministic. It uses your actual task history, time available and other known information rather than generative AI.'],
  ['How does Dokkit learn my estimates?', 'As work is tracked and completed, Dokkit remembers observed durations, carry-forward and other patterns in familiar work.'],
  ['What happens when I do not finish something?', 'It is carried forward. The work is still there; Dokkit simply reshapes the plan around what happened.'],
  ['Does Dokkit work on mobile?', 'Yes. Dokkit works on the web and is designed to remain useful when you are moving between jobs and locations.'],
  ['Is Dokkit free?', 'Yes. The current Dokkit experience is free, with no credit card and no trial period.'],
  ['Can I use it with my calendar?', 'Yes. Dokkit supports Microsoft Calendar integration where available, so existing commitments can stay part of the picture.'],
  ['Who is Dokkit for?', 'It is especially useful for tradespeople, contractors, field workers, service businesses and independent operators—anyone whose day changes as the work unfolds.'],
] as const;

export default function FaqList() {
  return <div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>;
}
