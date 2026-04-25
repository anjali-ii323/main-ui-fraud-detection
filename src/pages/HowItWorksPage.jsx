import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const steps = [
  {
    title: 'Agent',
    icon: '🧠',
    text: 'The fraud policy agent interprets transaction language and context before making a decision.',
  },
  {
    title: 'Environment',
    icon: '🌐',
    text: 'Signals from message text, sender identity, and link metadata define the operating environment.',
  },
  {
    title: 'Action',
    icon: '⚡',
    text: 'The model flags each event as Safe, Suspicious, or Fraud and routes the correct control response.',
  },
  {
    title: 'Reward',
    icon: '🎯',
    text: 'Correct interventions are rewarded based on loss prevention and reduced false positives.',
  },
  {
    title: 'Learning',
    icon: '📈',
    text: 'Feedback updates policy confidence so future decisions are faster, clearer, and more accurate.',
  },
]

function HowItWorksPage() {
  return (
    <div className="pb-8">
      <SectionHeader
        eyebrow="Workflow"
        title="Agent → Environment → Action → Reward → Learning"
        description="A compact reinforcement loop designed for explainable fraud prevention in modern financial operations."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, idx) => (
          <motion.article
            key={step.title}
            className="glass-card p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: idx * 0.07 }}
            whileHover={{ y: -2, scale: 1.01 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg">
                {step.icon}
              </span>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300">{step.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default HowItWorksPage
