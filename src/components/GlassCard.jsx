export default function GlassCard({ className = '', children }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-soft backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}
