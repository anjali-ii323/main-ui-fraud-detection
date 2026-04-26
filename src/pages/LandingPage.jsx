import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    title: 'Real-time fraud detection',
    text: 'Low-latency scoring continuously evaluates messages, links, and sender context as incidents unfold.',
  },
  {
    title: 'Multi-step reasoning',
    text: 'A deterministic decision chain reveals how the agent parses signals before classifying risk.',
  },
  {
    title: 'Explainable AI',
    text: 'Every output includes auditable evidence and traceable rationale for analyst sign-off.',
  },
  {
    title: 'Financial impact awareness',
    text: 'Capital exposure and potential prevention outcomes are surfaced in the same decision surface.',
  },
]

const liveSystemSteps = ['Parsing…', 'Detecting urgency…', 'Evaluating link…', 'Fraud detected']

function LiveSystemPreview() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (liveSystemSteps.length + 1))
    }, 1100)

    return () => window.clearInterval(interval)
  }, [])

  const completed = activeStep >= liveSystemSteps.length

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="glass-card relative overflow-hidden p-5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accentSoft/10" />
      <div className="relative space-y-4">
        <p className="metric-label">Live System Preview</p>
        <div className="rounded-xl border border-danger/35 bg-danger/10 p-3 text-sm text-slate-100">
          "Your account is blocked. Click link now."
        </div>

        <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-3">
          {liveSystemSteps.map((step, index) => {
            const active = index <= activeStep && !completed
            return (
              <motion.p
                key={step}
                animate={{ opacity: active ? 1 : 0.4, x: active ? 0 : -4 }}
                className="text-sm text-slate-200"
              >
                {step}
              </motion.p>
            )
          })}

          <motion.div
            animate={{ opacity: completed ? 1 : 0.35, scale: completed ? 1 : 0.99 }}
            className="mt-3 rounded-xl border border-accent/25 bg-accent/10 p-3"
          >
            <p className="text-sm font-semibold text-danger">Risk: FRAUD</p>
            <p className="mt-1 text-xs text-slate-200">Confidence: 92%</p>
            <p className="text-xs text-warning">₹ At Risk</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function LandingPage() {
  return (
    <div className="space-y-16 pb-10">
      <section className="gradient-section glass-card hero-signal relative overflow-hidden px-8 py-16 md:px-12">
        <motion.div
          animate={{ opacity: [0.16, 0.3, 0.16] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-accentSoft/10 to-transparent"
        />
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -left-10 top-8 h-44 w-44 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-accentSoft/10 blur-3xl"
        />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <p className="metric-label">Enterprise Fraud Operations</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              AI Fraud Decision Intelligence
            </h2>
            <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
              Real-time reasoning for high-risk digital interactions. See decisions evolve before loss compounds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/detect" className="action-button rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950">
                Try Live Demo
              </Link>
              <Link
                to="/dashboard"
                className="action-button rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100"
              >
                View Dashboard
              </Link>
            </div>
          </motion.div>

          <LiveSystemPreview />
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Core Capabilities"
          title="Designed for precision-led fraud operations"
          description="The product experience mirrors modern fintech and cybersecurity teams where explainability and actionability matter as much as model output."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, idx) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="interactive-card glass-card p-6"
            >
              <motion.div whileHover={{ rotate: 10 }} className="mb-4 h-2 w-12 rounded-full bg-accent/70" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className="gradient-section glass-card p-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4 }}
      >
        <p className="metric-label">Decision Layer</p>
        <p className="mt-3 max-w-3xl text-xl font-medium text-white md:text-2xl">
          Not a static classifier. A reasoning-first intelligence layer that simulates analyst judgment in real time.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45 }}
        className="premium-section glass-card relative overflow-hidden p-8"
      >
        <div className="relative z-10">
          <p className="metric-label">Security Readiness</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Ready to Secure Your Digital Life</h3>
          <p className="mt-2 max-w-2xl text-sm text-slate-200">
            Deploy decision intelligence that pairs speed, explainability, and financial impact awareness.
          </p>
          <Link to="/detect" className="action-button mt-6 inline-flex rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950">
            Start Live Analysis
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

export default LandingPage
