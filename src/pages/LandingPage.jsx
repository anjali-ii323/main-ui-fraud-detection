import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    title: 'Real-time detection',
    text: 'Continuously score inbound payment and communication events before exposure compounds.',
  },
  {
    title: 'Multi-step reasoning',
    text: 'Trace every model stage from parsing to trust evaluation for operational review.',
  },
  {
    title: 'Explainable AI',
    text: 'Expose decision factors in language compliance, risk, and fraud teams can act on.',
  },
  {
    title: 'Financial impact awareness',
    text: 'Estimate avoided loss, active exposure, and potential downside in the same interface.',
  },
]

function LandingPage() {
  return (
    <div className="space-y-16 pb-10">
      <section className="glass-card relative overflow-hidden px-8 py-16 md:px-12">
        <div className="glow-aura" />
        <motion.div
          animate={{ opacity: [0.2, 0.42, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-accentSoft/10 to-transparent"
        />
        <div className="relative">
          <p className="metric-label">Enterprise Fraud Operations</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            AI Fraud Decision Intelligence
          </h2>
          <p className="mt-5 max-w-2xl text-base text-slate-300 md:text-lg">
            Real-time fraud prevention that simulates AI reasoning, surfaces the decision process, and quantifies
            financial consequences before a payment leaves your perimeter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/detect"
              className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Try Demo
            </Link>
            <Link
              to="/dashboard"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:scale-[1.02]"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Platform Capabilities"
          title="Built for high-stakes fraud decisions"
          description="Purpose-built for fintech and banking operations where response speed, explainability, and capital protection all matter at once."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, idx) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3, scale: 1.01 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default LandingPage
