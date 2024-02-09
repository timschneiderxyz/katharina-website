/*  ========================================================================
    # Tailwind CSS - Config
    ========================================================================  */

import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./src/app/**/*.{js,jsx,ts,tsx,mdx}', './src/components/**/*.{js,jsx,ts,tsx,mdx}'],
  corePlugins: {
    preflight: false,
    container: false
  },
  plugins: [],
  theme: {
    // Replace the default config.
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    // Extend the default config.
    extend: {}
  }
} satisfies Config;
