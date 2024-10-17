import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        landingCases: "url('/homebg1.png')",
        footer: "url('/footer.png')"
      },
      boxShadow: {
        contactBtn: '0 20px 50px rgba(8, 112, 184, 0.7)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: {
          DEFAULT: 'rgb(var(--orange-500))',
          100: 'rgb(var(--orange-100))',
          200: 'rgb(var(--orange-200))',
          300: 'rgb(var(--orange-300))',
          400: 'rgb(var(--orange-400))',
          500: 'rgb(var(--orange-500))',
          600: 'rgb(var(--orange-600))',
          700: 'rgb(var(--orange-700))',
          800: 'rgb(var(--orange-800))',
          900: 'rgb(var(--orange-900))'
        },
        blue: {
          DEFAULT: 'rgb(var(--blue-500))',
          100: 'rgb(var(--blue-100))',
          200: 'rgb(var(--blue-200))',
          300: 'rgb(var(--blue-300))',
          400: 'rgb(var(--blue-400))',
          500: 'rgb(var(--blue-500))',
          600: 'rgb(var(--blue-600))',
          700: 'rgb(var(--blue-700))',
          800: 'rgb(var(--blue-800))',
          900: 'rgb(var(--blue-900))'
        },
        pink: {
          DEFAULT: 'rgb(var(--pink-500))',
          100: 'rgb(var(--pink-100))',
          200: 'rgb(var(--pink-200))',
          300: 'rgb(var(--pink-300))',
          400: 'rgb(var(--pink-400))',
          500: 'rgb(var(--pink-500))',
          600: 'rgb(var(--pink-600))',
          700: 'rgb(var(--pink-700))',
          800: 'rgb(var(--pink-800))',
          900: 'rgb(var(--pink-900))'
        }
      }
    },
  },
  plugins: [],
};
export default config;
