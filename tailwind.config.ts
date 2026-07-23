import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ChatMitra brand color palette
        primary: {
          dark: '#054238',
          DEFAULT: '#075E54', // ChatMitra green
          hover: '#06483F',
          medium: '#065A4F',
          light: '#C9DDD8',
          'extra-light': '#F0F8F6',
        },
        brand: {
          DEFAULT: '#075E54',
          hover: '#06483F',
          dark: '#053F37',
          accent: '#8DD63F',
          'accent-hover': '#A0E154',
          light: '#F0F8F6',
          soft: '#E5F2EF',
          border: '#C9DDD8',
          text: '#17332D',
        },
        background: {
          main: '#FFFFFF',
          alt: '#F7F7F5', // BambooHR cream
          cream: '#FAF9F7',
        },
        text: {
          heading: '#2C3E2D', // Dark green-gray
          body: '#5A6C5B',
          muted: '#7A8B7C',
        },
        border: {
          DEFAULT: '#E5E7E4',
          light: '#F0F1EE',
        },
        accent: {
          purple: '#8B7FBD', // BambooHR purple for connectors
          coral: '#E87D5A',
          yellow: '#F4C542',
        },
        success: '#075E54',
        warning: '#F4C542',
        error: '#D95555',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Merriweather', 'Cambria', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}

export default config
