/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(dark|neon|text)-(primary|secondary|tertiary|violet|cyan|magenta|purple|green)/,
    },
    'glass',
    'glass-light',
    'gradient-text',
    'gradient-text-violet',
    'gradient-bg',
    'glow-violet',
    'glow-cyan',
    'glow-magenta',
    'glow-green',
    'border-gradient',
    'animate-fadeInUp',
    'animate-fadeInLeft',
    'animate-fadeInRight',
    'animate-scaleIn',
    'animate-float',
    'animate-pulse-slow',
    'stagger-1',
    'stagger-2',
    'stagger-3',
    'stagger-4',
    'stagger-5',
    'stagger-6',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0A0A0F',
        'dark-secondary': '#13131A',
        'dark-tertiary': '#1A1A24',
        'neon-violet': '#6C63FF',
        'neon-cyan': '#00F0FF',
        'neon-magenta': '#FF00AA',
        'neon-purple': '#7B2FFF',
        'neon-green': '#00FFA3',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B8B8C8',
        'text-tertiary': '#8B8B9E',
      },
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 15s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(108, 99, 255, 0.5), 0 0 10px rgba(108, 99, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.8), 0 0 30px rgba(108, 99, 255, 0.5)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
