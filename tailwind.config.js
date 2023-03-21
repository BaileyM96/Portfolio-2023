/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
  theme: {
    extend: {
      colors: {
        100: '#f5f5f5'
      }
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}
