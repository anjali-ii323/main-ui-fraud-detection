import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mb-8"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
      <h2 className="mb-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-slate-300">{subtitle}</p>}
    </motion.div>
  );
}
