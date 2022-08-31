/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-default': 'var(--color-default)',
        'background-default': 'var(--background-default)',
        'border-color-default': 'var(--border-color-default)',
      },
    },
  },
  plugins: [],
};
