/** @type {import('tailwindcss').Config} */
import config from './config/config';
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounceLow': {
          ' 0%, 100%': {
            transform: 'translateY(0%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(40px)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          }
        },
        'transport': {
          "0%": {
            transform: "translateX(-200%)",
            opacity: "0"
          },
          "50%": {
            transform: "translateX(0) translateY(-50px) rotate(90deg)",
            opacity: "1"
          },
          "100%": {
            transform: "translateX(200%)  translateY(0px) rotate(180deg)",
            opacity: "0"
          }
        },
      },
      animation: {
        'make-a-trip': 'transport 2s linear infinite',
        'bounce-slow': 'bounceLow 1s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: config.colors,
      fontFamily: config.fontFamily
    },
  },
  plugins: [],
};
