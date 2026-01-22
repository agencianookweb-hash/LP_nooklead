/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nook-blue-light': '#099BEE',
        'nook-blue-dark': '#00008B',
        'nook-blue-mid': '#0066CC',
        'nook-navy': '#0A1628',
        'nook-slate': '#1E293B',
        'nook-gray': '#64748B',
        'nook-light': '#F1F5F9',
        'nook-success': '#22C55E',
        'nook-warning': '#EAB308',
        'nook-error': '#EF4444',
        'nook-info': '#8B5CF6',
      },
      fontFamily: {
        'heading': ['Outfit', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A1628 0%, #0A1628 40%, #00008B 100%)',
        'gradient-cta': 'linear-gradient(135deg, #0A1628 0%, #00008B 50%, #099BEE 100%)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { 'background-position': '200% 0' },
          '100%': { 'background-position': '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(9, 155, 238, 0.2)' },
          '50%': { 'box-shadow': '0 0 40px rgba(9, 155, 238, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
