import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(60px)', opacity: '0 '},
          '100%': { transform: 'translateX(0)', opacity:' 1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out forwards',
        slideRight: 'slideRight 0.5s ease-out forwards',
        slideLeft: 'slideLeft 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
