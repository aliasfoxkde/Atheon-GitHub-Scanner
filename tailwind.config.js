/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { 50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8' },
        tier: { s: '#22d3ee', a: '#4ade80', b: '#facc15', c: '#fb923c', d: '#f87171', f: '#94a3b8' },
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /bg-tier-/ },
    { pattern: /text-tier-/ },
    { pattern: /bg-primary-/ },
    { pattern: /text-blue-/ },
    { pattern: /ring-blue-/ },
    { pattern: /border-blue-/ },
    { pattern: /hover:bg-blue-/ },
    { pattern: /focus:ring-blue-/ },
    { pattern: /bg-gray-/ },
    { pattern: /text-gray-/ },
    { pattern: /border-gray-/ },
    { pattern: /hover:bg-gray-/ },
    { pattern: /ring-gray-/ },
  ],
};
