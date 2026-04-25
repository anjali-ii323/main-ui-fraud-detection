import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/detect', label: 'Detection' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/training', label: 'Training' },
  { to: '/about', label: 'About' }
];

export default function Shell({ children }) {
  return (
    <div className="min-h-screen bg-bg text-ink antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-gradient" />
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#040913]/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 font-semibold tracking-tight text-white">
            <span className="h-3 w-3 rounded-full bg-mint shadow-[0_0_24px_rgba(79,255,209,0.9)]" />
            FraudShield AI
          </Link>
          <div className="hidden gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2 text-sm transition-all ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto w-full max-w-7xl px-6 py-10">
        {children}
      </motion.main>
      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-slate-400">
          <p>© 2026 FraudShield AI. Protecting digital trust.</p>
          <p>Built for high-trust fraud prevention workflows.</p>
        </div>
      </footer>
    </div>
  );
}
