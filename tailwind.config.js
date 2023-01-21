const pxrem0to10 = { ...Array.from(Array(11)).map((_, i) => `${i * 0.0625}rem`) };
const pxrem0to100 = { ...Array.from(Array(101)).map((_, i) => `${i * 0.0625}rem`) };
const pxrem0to200 = { ...Array.from(Array(201)).map((_, i) => `${i * 0.0625}rem`) };
const pxrem0to1000 = { ...Array.from(Array(1001)).map((_, i) => `${i * 0.0625}rem`) };
const pxrem0to2000 = { ...Array.from(Array(2001)).map((_, i) => `${i * 0.0625}rem`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      borderWidth: pxrem0to10,
      fontSize: pxrem0to100,
      lineHeight: pxrem0to100,
      minWidth: pxrem0to200,
      minHeight: pxrem0to200,
      spacing: pxrem0to200,
      width: pxrem0to2000,
      height: pxrem0to2000,
      left: pxrem0to1000,
      right: pxrem0to1000,
      top: pxrem0to1000,
      bottom: pxrem0to1000,
      borderRadius: pxrem0to100,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      font: {
        default: '#333333',
      },
      white: '#ffffff',
      black: '#000000',
      grey: {
        default: '#111111',
        100: '#333333',
        200: '#666666',
        300: '#999999',
        400: '#aaaaaa',
        500: '#cccccc',
        600: '#dddddd',
        700: '#eeeeee',
        800: '#f5f5f5',
        900: '#fafafa',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      phone: { max: '480px' },
      tablet: { min: '481px', max: '768px' },
      desktop: { min: '769px' },
    },
  },
  plugins: [],
};
