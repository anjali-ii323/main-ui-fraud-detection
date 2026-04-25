import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CircularConfidence from '../components/CircularConfidence'
import RiskBadge from '../components/RiskBadge'
import { demoScenarios } from '../data/mock'

const analysisSteps = [
  'Parsing message...',
  'Extracting signals...',
  'Evaluating sender trust...',
  'Checking risk patterns...',
  'Final decision generated',
]

function generateSignals({ message_text, sender, url }) {
  const lower = message_text.toLowerCase()
  const signals = []

  if (/urgent|immediately|now|asap|confidential/.test(lower)) signals.push('Urgency')
  if (/gift card|wire|verify|blocked|otp|reset/.test(lower)) signals.push('High-value request')
  if (url && !/company|bank|secure\.org/.test(url.toLowerCase())) signals.push('Suspicious link')
  if (sender && /(outlook|gmail|yahoo|support-payments)/.test(sender.toLowerCase())) signals.push('Unknown sender')

  return signals.length ? signals : ['Policy language', 'Known communication pattern']
}

function DetectionPage() {
  const [payload, setPayload] = useState({ message_text: '', url: '', sender: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [result, setResult] = useState(null)

  const canAnalyze = payload.message_text.trim().length > 0

  useEffect(() => {
    if (!isLoading) return undefined

    setActiveStep(1)
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= analysisSteps.length) {
          clearInterval(stepInterval)
          return prev
        }
        return prev + 1
      })
    }, 300)

    return () => clearInterval(stepInterval)
  }, [isLoading])

  const financial = useMemo(() => {
    if (!result) return { saved: 0, atRisk: 0, potentialLoss: 0 }
    return result.financial
  }, [result])

  const runAnalysis = () => {
    if (!canAnalyze) return

    setResult(null)
    setIsLoading(true)

    setTimeout(() => {
      const signals = generateSignals(payload)
      const severeSignals = signals.filter((signal) => ['Urgency', 'High-value request', 'Suspicious link', 'Unknown sender'].includes(signal)).length
      const confidence = Math.min(98, 62 + severeSignals * 9)

      let riskLevel = 'Safe'
      if (severeSignals >= 3) riskLevel = 'Fraud'
      else if (severeSignals >= 1) riskLevel = 'Suspicious'

      const explanation =
        riskLevel === 'Fraud'
          ? [
              'Language pressure and transaction urgency indicate social engineering intent.',
              'Sender/link trust could not be fully validated against known enterprise identity baselines.',
              'Combined signal pattern matches previously confirmed fraud pathways and escalation triggers.',
            ]
          : riskLevel === 'Suspicious'
            ? [
                'One or more risk cues were detected and require secondary verification before action.',
                'Message intent partially aligns with known attack behavior but lacks full fraud certainty.',
                'Human-in-the-loop approval is recommended for payment or credential sensitive steps.',
              ]
            : [
                'Message content aligns with low-risk operational language patterns.',
                'No critical sender or destination anomalies were detected in the provided context.',
                'System confidence indicates normal communication, with monitoring retained for drift.',
              ]

      const financialByRisk = {
        Fraud: { saved: 245000, atRisk: 128000, potentialLoss: 91000 },
        Suspicious: { saved: 82000, atRisk: 41000, potentialLoss: 23000 },
        Safe: { saved: 12000, atRisk: 7000, potentialLoss: 3500 },
      }

      setResult({
        riskLevel,
        confidence,
        signals,
        explanation,
        financial: financialByRisk[riskLevel],
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <section className="glass-card p-6">
        <p className="metric-label">Live Decision Sandbox</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Fraud decision simulation</h2>
        <p className="mt-2 text-sm text-slate-400">Message is required. URL and sender are optional context inputs.</p>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Message *</span>
            <textarea
              rows={5}
              value={payload.message_text}
              onChange={(e) => setPayload((s) => ({ ...s, message_text: e.target.value }))}
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm text-white outline-none ring-accent/30 transition focus:ring"
              placeholder="Paste message or transaction request text"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">URL (optional)</span>
            <input
              value={payload.url}
              onChange={(e) => setPayload((s) => ({ ...s, url: e.target.value }))}
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm text-white outline-none ring-accent/30 transition focus:ring"
              placeholder="https://..."
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Sender (optional)</span>
            <input
              value={payload.sender}
              onChange={(e) => setPayload((s) => ({ ...s, sender: e.target.value }))}
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm text-white outline-none ring-accent/30 transition focus:ring"
              placeholder="alerts@domain.com"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            {demoScenarios.map((scenario) => (
              <button
                key={scenario.name}
                onClick={() => setPayload(scenario)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:scale-[1.02] hover:text-white"
              >
                {scenario.name}
              </button>
            ))}
          </div>

          <button
            disabled={!canAnalyze || isLoading}
            onClick={runAnalysis}
            className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? 'AI is evaluating...' : 'Analyze Decision Chain'}
          </button>
        </div>
      </section>

      <section className="glass-card relative overflow-hidden p-6">
        <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-accentSoft/15 blur-3xl" />
        <p className="metric-label">AI Engine</p>

        <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4">
          {analysisSteps.map((step, idx) => {
            const stepNumber = idx + 1
            const isVisible = isLoading ? stepNumber <= activeStep : Boolean(result)
            const isActive = isLoading && stepNumber === activeStep

            return (
              <motion.div
                key={step}
                initial={{ opacity: 0.35, y: 4 }}
                animate={{
                  opacity: isVisible ? 1 : 0.35,
                  y: isVisible ? 0 : 4,
                }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-3"
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs ${
                    isVisible ? 'border-accent/60 bg-accent/15 text-accent' : 'border-white/15 text-slate-500'
                  }`}
                >
                  {stepNumber}
                </span>
                <p className={`text-sm ${isActive ? 'text-white' : 'text-slate-300'}`}>{step}</p>
              </motion.div>
            )
          })}

          {isLoading && (
            <div className="pt-2">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(activeStep / analysisSteps.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-5 min-h-80 rounded-2xl border border-dashed border-white/15 bg-slate-900/25 p-5 text-sm text-slate-400"
            >
              Run an analysis to generate risk label, confidence score, AI reasoning, and financial impact.
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="mt-5 space-y-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="metric-label">Risk Label</p>
                  <div className="mt-2">
                    <RiskBadge level={result.riskLevel} />
                  </div>
                </div>
                <CircularConfidence score={result.confidence} />
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="metric-label">₹ Saved</p>
                  <p className="mt-2 text-xl font-semibold text-cyan-300">₹{financial.saved.toLocaleString('en-IN')}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="metric-label">₹ At Risk</p>
                  <p className="mt-2 text-xl font-semibold text-amber-300">₹{financial.atRisk.toLocaleString('en-IN')}</p>
                </div>
                <div className="rounded-xl border border-red-300/30 bg-red-400/10 p-4">
                  <p className="metric-label">₹ Potential Loss</p>
                  <p className="mt-2 text-xl font-semibold text-red-200">₹{financial.potentialLoss.toLocaleString('en-IN')}</p>
                </div>
              </div>

              <div>
                <p className="metric-label">Signals detected</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {result.signals.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="metric-label">Explanation</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {result.explanation.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}

export default DetectionPage
