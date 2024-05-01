const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const {default: flattenColorPalette} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  images: {
    domains: ['images.unsplash.com'],
  },
  theme: {
    extend: {
      colors: {
        'ui-background-wo': 'var(--ui-background-color)',
        'ui-background': 'var(--ui-background-color-opacity)',
        'ui-text': 'var(--ui-text-color)',
        'ui-border': 'var(--ui-border-color)',
        'ui-neutral': 'var(--ui-text-neutral)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'meteor-effect': 'meteor 5s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': {transform: 'rotate(215deg) translateX(0)', opacity: '1'},
          '70%': {opacity: '1'},
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({addBase, theme}: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}
