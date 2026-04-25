/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#050812',
        surface: '#090f1d',
        panel: '#111b2f',
        accent: '#38bdf8',
        accentSoft: '#7c3aed',
        alert: '#ef4444',
        caution: '#f59e0b',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'mesh-soft':
          'radial-gradient(circle at 18% 12%, rgba(56, 189, 248, 0.14), transparent 42%), radial-gradient(circle at 78% 8%, rgba(124, 58, 237, 0.12), transparent 38%), radial-gradient(circle at 56% 86%, rgba(14, 165, 233, 0.08), transparent 42%)',
      },
    },
  },
  plugins: [],
}
