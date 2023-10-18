/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./*.php', './blocks/**/*.php', './blocks/*.php', './blocks/**/*.js', './src/js/**/*.js', './template-parts/*.php', './configure/*.php'],

  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1540px',
      '2xl': '100%',
    },
    fontSize: {
      base: '1rem',
      sm: '0.8rem',
      md: '1rem',
      lg: '1.1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
      },
    },
    extend: {
      colors: {
        // background
        bgPink: '#E2407E',
        bgGreen: '#98c23e',
        bgBlue: '#dceefc',
        bgTextSlider: 'rgba(255, 255, 255, 0.7) ',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        bgBody: "url('/src/images/bg-body.jpg')",
        bgNewsHp: "url('/src/images/bg-news-hp.svg')",
      },
      boxShadow: {
        'table-map':
          '0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.02), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.03), 0px 20px 13px 0px rgba(0, 0, 0, 0.04), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.04), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)',
      },
      fontFamily: {
        sans: ['Montserrat Alternates', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'animate-1': 'fade-in-el 1s ease-out',
        'animate-1-1': 'fade-in-el-scale 1s ease-out',
        'animate-2': 'slide-up-el 1s ease-out',
        'animate-2-2': 'slide-up-el-scale 1s ease-out',
        'animate-3': 'slide-down-el 1s ease-out',
        'animate-3-3': 'slide-down-el-scale 1s ease-out',
        'animate-4': 'slide-left-el 1s ease-out',
        'animate-4-4': 'slide-left-el-scale 1s ease-out',
        'animate-5': 'slide-right-el 1s ease-out',
        'animate-5-5': 'slide-right-el-scale 1s ease-out',
      },
      keyframes: {
        'fade-in-el': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-in-el-scale': {
          '0%': { transform: 'scale(0.3)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'slide-up-el': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-up-el-scale': {
          '0%': { transform: 'translateY(100%) scale(0.3)', opacity: 0 },
          '100%': { transform: 'translateY(0) scale(1)', opacity: 1 },
        },
        'slide-down-el': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down-el-scale': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-left-el': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-left-el-scale': {
          '0%': { transform: 'translateX(30%) scale(0.70)', opacity: 0 },
          '100%': { transform: 'translateX(0) scale(1)', opacity: 1 },
        },
        'slide-right-el': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-right-el-scale': {
          '0%': { transform: 'translateX(-30%) scale(0.70)', opacity: 0 },
          '100%': { transform: 'translateX(0) scale(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
