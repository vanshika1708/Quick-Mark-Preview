/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    // Add paths to all of the files you want to include in the purge
  ],

  theme: {
    
    extend: {
      fontFamily: {
        baloo: ["Baloo Bhai 2", "sans-serif"],
      },
    },
  },

  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],

}

