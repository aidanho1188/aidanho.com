const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const {default: flattenColorPalette} = require('tailwindcss/lib/util/flattenColorPalette')
const svgToDataUri = require('mini-svg-data-uri')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  images: {
    domains: ['images.unsplash.com'],
  },
  theme: {
    extend: {
      colors: {
        'ui-background': 'var(--ui-background-color)',
        'ui-background-wo': 'var(--ui-background-color-wo)',
        'ui-text': 'var(--ui-text-color)',
        'ui-border': 'var(--ui-border-color)',
        'ui-neutral': 'var(--ui-text-neutral)',
        'background-color': 'var(--bg-color)',
        'background-color-wo': 'var(--bg-color-wo)',
        'meteors-color': 'var(--meteors-color)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'art-background': 'linear-gradient(to bottom, var(--background-start-color), var(--background-end-color));',
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      scrollbar: ['dark'],
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
  plugins: [addVariablesForColors, addColorForGrid, hideScrollbar],
  variants: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
}

function addVariablesForColors({addBase, theme}: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}

function addColorForGrid({matchUtilities, theme}: any) {
  matchUtilities(
    {
      'bg-grid': (value: any) => ({
        backgroundImage: `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" height="50" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`)}")`,
      }),
      'bg-grid-small': (value: any) => ({
        backgroundImage: `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`)}")`,
      }),
      'bg-dot': (value: any) => ({
        backgroundImage: `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`)}")`,
      }),
    },
    {values: flattenColorPalette(theme('backgroundColor')), type: 'color'},
  )
}

function hideScrollbar({addUtilities}) {
  const newUtilities = {
    '.scrollbar-hide': {
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
    },
    '.scrollbar-hide::-webkit-scrollbar': {
      display: 'none',
    },
  }
  addUtilities(newUtilities)
}
