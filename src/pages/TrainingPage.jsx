import { motion } from 'framer-motion';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import { trainingData } from '../data/mockData';

export default function TrainingPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Training Insights"
        title="Agent improved over time"
        subtitle="Reinforcement loops steadily improved reward trajectory, increasing detection precision while reducing false positives."
      />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <GlassCard className="h-[360px]">
          <p className="mb-5 text-lg font-medium text-white">Episode vs Reward</p>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={trainingData}>
              <defs>
                <linearGradient id="rewardGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4fffd1" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#4fffd1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="episode" stroke="#8ba1c2" />
              <YAxis stroke="#8ba1c2" />
              <Tooltip contentStyle={{ background: '#0a1221', border: '1px solid rgba(255,255,255,0.15)' }} />
              <Area
                type="monotone"
                dataKey="reward"
                stroke="#4fffd1"
                strokeWidth={3}
                fill="url(#rewardGradient)"
                animationDuration={1600}
              />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Before optimization</p>
          <p className="mt-4 text-3xl font-semibold text-white">72.4%</p>
          <p className="mt-2 text-slate-300">Detection consistency under adversarial message variants.</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">After optimization</p>
          <p className="mt-4 text-3xl font-semibold text-teal">94.7%</p>
          <p className="mt-2 text-slate-300">Robust detection after policy tuning, reward shaping, and hard-negative mining.</p>
        </GlassCard>
      </div>
    </div>
  );
}
