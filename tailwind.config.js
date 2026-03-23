/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ice-white': '#F8FAFC',
        'deep-navy': '#001F3F',
        'atlantic-teal': '#00A8A8',
        'glacier-blue': '#E2E8F0',
        'frost': 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        'frost': '12px',
      },
    },
  },
  plugins: [],
}
