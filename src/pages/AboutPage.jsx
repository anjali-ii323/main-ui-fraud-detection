import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';

const steps = [
  'Ingest message, sender metadata, and URL context.',
  'Extract semantic and behavioral risk features.',
  'Run ensemble scoring with explainability traces.',
  'Trigger action policy: allow, challenge, or block.'
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="How it works"
        title="Simple workflow, high-impact fraud prevention"
        subtitle="Fraud attempts continue to grow across email, SMS, and social channels. FraudShield converts noisy signals into decisions your team can trust."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <h3 className="mb-3 text-xl font-semibold text-white">The problem</h3>
          <p className="text-slate-300">
            Fraud messages mimic legitimate communication and exploit urgency. Traditional rule systems are brittle and
            hard to maintain.
          </p>
        </GlassCard>
        <GlassCard>
          <h3 className="mb-3 text-xl font-semibold text-white">Our solution</h3>
          <p className="text-slate-300">
            A continuously improving AI agent that blends content intelligence, sender behavior, and explainable
            classification.
          </p>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className="mb-5 text-xl font-semibold text-white">System steps</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <p className="text-sm font-medium text-teal">Step {index + 1}</p>
              <p className="mt-1 text-slate-200">{step}</p>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
