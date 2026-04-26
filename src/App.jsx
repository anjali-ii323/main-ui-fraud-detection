import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import LandingPage from './pages/LandingPage'
import DetectionPage from './pages/DetectionPage'
import DashboardPage from './pages/DashboardPage'
import InsightsPage from './pages/InsightsPage'
import HowItWorksPage from './pages/HowItWorksPage'

const navItems = [
  { to: '/', label: 'Platform' },
  { to: '/detect', label: 'Detection Engine' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/insights', label: 'Training Insights' },
  { to: '/how-it-works', label: 'How It Works' },
]

function IntroOverlay() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-base"
    >
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(41,211,255,0.16),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(124,140,255,0.15),transparent_42%)]"
      />
      <motion.div
        animate={{ scale: [0.96, 1.03, 0.96], opacity: [0.16, 0.3, 0.16] }}
        transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute h-56 w-56 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.98, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          AI Fraud Decision Intelligence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          className="mt-4 text-sm text-slate-300 md:text-base"
        >
          Real-time reasoning. Not just prediction.
        </motion.p>
      </div>
    </motion.div>
  )
}

function App() {
  const location = useLocation()
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false })
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 1500)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-base bg-mesh-soft text-slate-100"
      onMouseMove={(event) => setCursor({ x: event.clientX, y: event.clientY, active: true })}
      onMouseLeave={() => setCursor((prev) => ({ ...prev, active: false }))}
    >
      <AnimatePresence>{showIntro ? <IntroOverlay /> : null}</AnimatePresence>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        animate={{ opacity: cursor.active ? 1 : 0 }}
        style={{
          background: `radial-gradient(320px circle at ${cursor.x}px ${cursor.y}px, rgba(41,211,255,0.16), rgba(124,140,255,0.10) 30%, rgba(4,7,15,0) 68%)`,
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 lg:px-10">
        <header className="sticky top-4 z-30 mb-10 rounded-2xl border border-white/10 bg-surface/70 p-4 shadow-soft backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">FraudShield AI</p>
              <h1 className="text-lg font-semibold text-slate-100">Decision Intelligence Platform</h1>
            </div>
            <nav className="flex flex-wrap gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2 text-sm transition ${
                      isActive
                        ? 'bg-accent/20 text-accent shadow-glow'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white hover:scale-[1.02]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
            >
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/detect" element={<DetectionPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/insights" element={<InsightsPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default App
