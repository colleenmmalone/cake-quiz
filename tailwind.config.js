/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /(bg|text|border|from|via|to)-(bee|candy|desert|lavender|lucky|tetra)-(light|med|dark|nav|navlink|special)/,
      variants: ['dark', 'hover', 'active', 'focus', 'peer-checked', 'after', 'peer-checked:after'],
    }
  ],
  theme: {
    extend: {
      colors:{
        bee: {
          light: "#FFF8EB",
          med: "#FECF72",
          dark: "#00161D",
          nav: "#521400",
          navlink: "#FECF72",
          special: "#FF4242"    
        },
        candy: {
          light: "#F9F0F8",
          med: "#F6CFDB",
          dark: "#051D32",
          nav: "#016E86",
          navlink: "#F6CFDB",
          special: "#2FAFCB"    
        },
        desert: {
          light: "#FFF7EA",
          med: "#F9B895",
          dark: "#002935",
          nav: "#D2632D",
          navlink: "#FFC4A5",
          special: "#C21C58"    
        },
        lavender: {
          light: "#FFF8FA",
          med: "#F6CFDB",
          dark: "#323033",
          nav: "#73528C",
          navlink: "#F6CFDB",
          special: "#BF6FFF"    
        },
        lucky: {
          light: "#F0F3E8",
          med: "#D0E37F",
          dark: "#002935",
          nav: "#0C6976",
          navlink: "#EBF9B2",
          special: "#00D8E5"    
        },
        tetra: {
          light: "#F7EFFF",
          med: "#81E4DA",
          dark: "#191120",
          nav: "#E35A7A",
          navlink: "#1E00D7",
          special: "#5F00BA"    
        },
      },
      animation: {
        'slide': 'slide 3s ease-out',
      },
      keyframes: {
        slide: {
          
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
        }
      },

    },
  },
  variants: {},
  plugins: [],
  darkMode: 'class'
};