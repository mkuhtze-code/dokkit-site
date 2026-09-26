const questions = [
  [
    'What is Dokkit?',
    'A personal thinking tool. You put work somewhere trustworthy; Dokkit helps you see what fits the day you actually have. It is not a chat bot, not a scoreboard, and not a system you have to perform for.',
  ],
  [
    'Does Dokkit use AI?',
    'No generative AI chat. Dokkit’s thinking engine is deterministic: it uses your task history, time available, and other known information—not an LLM conversation.',
  ],
  [
    'How does Dokkit learn?',
    'From onboarding priors at first, then from what actually happens—especially Reality Check and completed work. Over the first weeks it quietly adjusts estimates and capacity to fit you.',
  ],
  [
    'What if I don’t put times on tasks?',
    'The day still has a shape. Dokkit uses what it has learned from similar work so untimed tasks don’t make the day look empty when it isn’t.',
  ],
  [
    'What happens when I do not finish something?',
    'Work that usually moves can be carried with a clear reason. Work you typically finish the same day stays protected. Nothing is treated as a failure—the plan simply reshapes.',
  ],
  [
    'Does Dokkit force me into a system?',
    'No. Dokkit is designed to conform to how you already work, not the other way around.',
  ],
  [
    'Is Dokkit free?',
    'Yes for the core experience: Today, tasks, Reality Check, and learning. Jobs, Meetings, Travel, and calendar integration are on the Dokkit plan (USD $6/month). You can start without a card.',
  ],
  [
    'What is on the Dokkit plan?',
    'Jobs, Meetings, Travel, and Microsoft Calendar integration—alongside everything in Free. Manage billing from Account → Billing in the app. Cancel anytime; access continues until the end of the paid period.',
  ],
  [
    'Can I cancel or delete my account?',
    'Yes. Cancel the subscription from Account → Billing (Stripe portal). Deleting your account is intended to cancel active Dokkit subscriptions so you are not charged after deletion. Privacy details: /privacy.',
  ],
  [
    'Can I use it with my calendar?',
    'Calendar connection is part of the Dokkit plan. When connected, existing commitments can stay part of the picture (Microsoft Calendar where supported).',
  ],
  [
    'Does Dokkit work on mobile?',
    'Yes. Dokkit works in the browser and is designed to stay useful when you are moving between jobs and locations. You can install it as a web app where your browser allows.',
  ],
  [
    'Who is Dokkit for?',
    'Especially useful for tradespeople, contractors, field workers, service businesses, and independent operators—anyone whose day changes as the work unfolds. Available in English for users in places such as New Zealand, Australia, the United States, and Canada.',
  ],
] as const;

export default function FaqList() {
  return (
    <div className="faq-list">
      {questions.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
