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
        primary: {
          dark: '#043D37',
          DEFAULT: '#075E54',
          hover: '#086C61',
          medium: '#168A78',
          light: '#DCEFEB',
          'extra-light': '#EFF8F5',
        },
        background: {
          main: '#FBF8F1',
          alt: '#F4F8F6',
        },
        text: {
          heading: '#17211F',
          body: '#5F6E69',
          muted: '#586661',
        },
        border: {
          DEFAULT: '#E1E9E6',
        },
        accent: {
          coral: '#E8753A',
        },
        success: '#127A5A',
        warning: '#E8A23A',
        error: '#D95555',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
