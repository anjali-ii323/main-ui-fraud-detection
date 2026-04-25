import { motion } from 'framer-motion';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import { confidenceData, recentChecks, trendData } from '../data/mockData';

const stats = [
  { label: 'Total checks', value: '18,420' },
  { label: 'Fraud detected', value: '12.8%' },
  { label: 'Model accuracy', value: '97.1%' }
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="Operations Dashboard" title="Live fraud intelligence and model confidence" />

      <div className="grid gap-5 md:grid-cols-3">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard>
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-1 text-3xl font-semibold text-white">{item.value}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <GlassCard className="h-[320px]">
          <p className="mb-5 text-lg font-medium text-white">Fraud vs Safe Over Time</p>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="week" stroke="#8ba1c2" />
              <YAxis stroke="#8ba1c2" />
              <Tooltip contentStyle={{ background: '#0a1221', border: '1px solid rgba(255,255,255,0.15)' }} />
              <Legend />
              <Line type="monotone" dataKey="safe" stroke="#5f9dff" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="fraud" stroke="#4fffd1" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="h-[320px]">
          <p className="mb-5 text-lg font-medium text-white">Confidence Distribution</p>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={confidenceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="bucket" stroke="#8ba1c2" />
              <YAxis stroke="#8ba1c2" />
              <Tooltip contentStyle={{ background: '#0a1221', border: '1px solid rgba(255,255,255,0.15)' }} />
              <Bar dataKey="count" fill="#2de3c6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      <GlassCard>
        <p className="mb-4 text-lg font-medium text-white">Recent Activity</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="pb-3 font-medium">Message</th>
                <th className="pb-3 font-medium">Prediction</th>
                <th className="pb-3 font-medium">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {recentChecks.map((item, index) => (
                <tr key={index} className="border-b border-white/5 text-slate-200">
                  <td className="py-3 pr-4">{item.message}</td>
                  <td className="py-3 pr-4">{item.prediction}</td>
                  <td className="py-3">{item.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
