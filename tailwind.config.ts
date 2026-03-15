import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        xAccent: '#39c0ff'
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) scale(1)'
          },
          '50%': {
            transform: 'translateY(-12px) scale(1.04)'
          }
        },
        riseIn: {
          from: {
            opacity: '0',
            transform: 'translateY(14px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        riseIn: 'riseIn 650ms cubic-bezier(0.16,1,0.3,1)'
      }
    }
  },
  plugins: []
}

export default config
