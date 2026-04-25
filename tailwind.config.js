/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050a14',
        panel: '#0a1221',
        mint: '#4fffd1',
        teal: '#2de3c6',
        ink: '#d8e3f4'
      },
      boxShadow: {
        soft: '0 16px 45px rgba(0, 0, 0, 0.32)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(79,255,209,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(45,227,198,0.16), transparent 36%), linear-gradient(180deg, rgba(6,12,25,0.95) 0%, rgba(4,8,15,1) 60%)'
      }
    }
  },
  plugins: []
};
