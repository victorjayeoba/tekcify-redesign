/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
      },
      colors: {
        'heading-gray': '#e2e2e2',
        'purple-primary': '#7C3AED',
        'purple-light': '#A78BFA',
      },
    },
  },
  plugins: [],
};