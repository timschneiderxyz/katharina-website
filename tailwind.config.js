/*  ========================================================================
    # Tailwind CSS - Config
    ========================================================================  */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
    container: false
  },
  plugins: [],
  theme: {
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {}
    }
  }
};
