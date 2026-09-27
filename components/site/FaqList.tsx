const questions = [
  [
    'What problem does Dokkit solve?',
    'Most people are not short of lists. They are carrying too much in their head—what still fits today, what can wait, and what the last few weeks actually taught them. Dokkit is a place to put that load down and see a plan that matches the day you have, not the day you hoped for.',
  ],
  [
    'What is Dokkit?',
    'A personal thinking tool. You capture work once. Dokkit helps you see capacity, what belongs today, and what can move—then learns from what actually happened. It is not a chatbot, not a scoreboard, and not another system you have to perform for.',
  ],
  [
    'Who is it for?',
    'People whose days change as the work unfolds: trades, contractors, field and service work, independent operators, and anyone juggling real-world interruptions. If a rigid planner never survives contact with your afternoon, Dokkit is built for that.',
  ],
  [
    'How is this different from a to-do list or calendar?',
    'A list remembers items. A calendar remembers fixed times. Dokkit sits in the middle: it holds the work and helps you judge what still fits around reality—including travel, jobs, and meetings when you use those parts of the product.',
  ],
  [
    'Does Dokkit use AI?',
    'Not generative AI chat. There is no assistant to prompt. Dokkit’s engine is deterministic: it uses your history, time available, and patterns in your own work—not an LLM conversation.',
  ],
  [
    'How does Dokkit learn?',
    'You start with simple onboarding so the first day is not blank. Then Reality Check and completed work teach it—typical durations, what tends to carry, what usually finishes same day. Over the first weeks it quietly gets closer to how you actually work.',
  ],
  [
    'What if I don’t estimate times?',
    'You do not have to. Untimed work still has a soft cost so the day does not look empty when it is not. As Dokkit sees similar work finish, those guesses improve without you training a model by hand.',
  ],
  [
    'What if I don’t finish everything?',
    'That is normal. Work that usually moves can carry with a clear reason. Work you typically finish the same day stays protected. Nothing is scored as failure—the plan reshapes.',
  ],
  [
    'What is Free and what is paid?',
    'Free includes Today, tasks, Reality Check, and learning—the core of Dokkit. The Dokkit plan (USD $6/month) adds Jobs, Meetings, and Travel for people who need those surfaces. Start without a card. Cancel anytime from Account → Billing.',
  ],
  [
    'What about calendar sync?',
    'Calendar connection (Microsoft) is on the roadmap and not fully available yet. Dokkit is designed to sit alongside the calendar you already use; when sync ships, commitments can feed capacity more automatically. Until then, you can still plan the work that moves around fixed time.',
  ],
  [
    'Does it work on my phone?',
    'Yes. Dokkit runs in the browser and is built for use between sites and jobs. You can install it as a web app where your browser allows.',
  ],
  [
    'Can I cancel or delete my account?',
    'Yes. Manage or cancel the subscription under Account → Billing. Deleting your account is intended to cancel active Dokkit subscriptions so you are not charged afterward. See Privacy for how data is handled.',
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
