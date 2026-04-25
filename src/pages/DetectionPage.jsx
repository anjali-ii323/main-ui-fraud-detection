import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';

const resultMap = {
  Fraud: 'High-risk language and unusual sender-domain mismatch indicate likely social engineering.',
  Suspicious: 'Some indicators suggest risk; request second-factor verification before engagement.',
  Safe: 'Content aligns with trusted patterns and known sender behavior with low anomaly score.'
};

export default function DetectionPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({ message: '', url: '', sender: '' });

  const score = useMemo(() => result?.confidence ?? 0, [result]);

  const analyze = () => {
    setLoading(true);
    setTimeout(() => {
      const message = formData.message.toLowerCase();
      const sender = formData.sender.toLowerCase();
      const risky = ['urgent', 'password', 'wire', 'verify', 'click'].some((word) => message.includes(word));
      const suspiciousDomain = sender && !sender.includes('company.com');
      const label = risky && suspiciousDomain ? 'Fraud' : risky || suspiciousDomain ? 'Suspicious' : 'Safe';
      const confidence = label === 'Fraud' ? 93 : label === 'Suspicious' ? 71 : 88;
      setResult({ label, confidence, explanation: resultMap[label] });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Core Detection"
        title="Analyze suspicious messages in seconds"
        subtitle="Provide message context and let the AI agent evaluate fraud likelihood with explainable scoring."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="space-y-5">
          <label className="block text-sm text-slate-300">
            Message text
            <textarea
              className="mt-2 h-36 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-teal/60"
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              placeholder="Enter message content"
            />
          </label>
          <label className="block text-sm text-slate-300">
            URL
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-teal/60"
              value={formData.url}
              onChange={(e) => setFormData((prev) => ({ ...prev, url: e.target.value }))}
              placeholder="https://"
            />
          </label>
          <label className="block text-sm text-slate-300">
            Sender
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-teal/60"
              value={formData.sender}
              onChange={(e) => setFormData((prev) => ({ ...prev, sender: e.target.value }))}
              placeholder="sender@domain.com"
            />
          </label>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={analyze}
            className="inline-flex w-full items-center justify-center rounded-xl bg-teal px-4 py-3 font-semibold text-slate-900"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
                Analyzing...
              </span>
            ) : (
              'Analyze'
            )}
          </motion.button>
        </GlassCard>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <GlassCard className="h-full">
            {!result ? (
              <p className="text-slate-400">Run analysis to see classification and confidence.</p>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Result</h3>
                  <span className="rounded-full border border-white/20 px-4 py-1 text-sm text-teal">{result.label}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div
                    className="relative grid h-28 w-28 place-content-center rounded-full"
                    style={{
                      background: `conic-gradient(#2de3c6 ${score * 3.6}deg, rgba(255,255,255,0.1) 0deg)`
                    }}
                  >
                    <div className="grid h-22 w-22 place-content-center rounded-full bg-panel text-xl font-semibold text-white">
                      {score}%
                    </div>
                  </div>
                  <p className="max-w-sm leading-relaxed text-slate-300">{result.explanation}</p>
                </div>
              </motion.div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
