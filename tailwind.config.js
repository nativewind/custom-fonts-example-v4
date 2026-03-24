/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter-Regular'],
        'inter-bold': ['Inter-Bold'],
        'inter-italic': ['Inter-Italic'],
        'inter-bold-italic': ['Inter-BoldItalic'],
        'inter-medium': ['Inter-Medium'],
        'inter-semibold': ['Inter-SemiBold'],
      },
    },
  },
  plugins: [],
};
