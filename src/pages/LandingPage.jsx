import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';

const features = [
  {
    title: 'Real-time detection',
    description: 'Stream-level inference catches high-risk content in milliseconds before users engage.'
  },
  {
    title: 'Behavioral analysis',
    description: 'Pattern intelligence learns user and sender behavior to detect subtle account takeovers.'
  },
  {
    title: 'Explainable AI',
    description: 'Every prediction includes transparent reason codes for audit and trust workflows.'
  }
];

export default function LandingPage() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-soft md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-teal/40 bg-teal/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-teal">
            Enterprise-grade defense
          </p>
          <h1 className="mb-6 text-5xl font-semibold leading-tight text-white md:text-6xl">AI Fraud Detection System</h1>
          <p className="mb-9 text-lg leading-relaxed text-slate-300">
            Stop phishing, payment fraud, and social engineering before they cause harm. FraudShield combines
            behavioral signals and explainable AI to protect customers, teams, and transactions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/detect"
              className="rounded-xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Try Demo
            </Link>
            <Link
              to="/dashboard"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              View Dashboard
            </Link>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-12 -top-10 h-64 w-64 rounded-full bg-teal/20 blur-3xl"
        />
      </section>

      <section>
        <SectionTitle
          eyebrow="Platform capabilities"
          title="Purpose-built for modern fraud operations"
          subtitle="Designed to plug into product, support, and compliance teams with low-friction workflows."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
            >
              <GlassCard>
                <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-slate-300">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
