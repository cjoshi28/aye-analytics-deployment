/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'voilet': '#450072',
        'voilet-light': '#ece7ef',
        'voilet-light-2': '#9479A5',
        'voilet-light-3': '#C4B0D0',
        'voilet-light-4': '#E3D9EA',
        'gray-color': '#5B5B5B',
        'gray-light-color': '#7B7B7B'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        'mid-xl': '1440px',
        // => @media (min-width: 1440px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      backgroundImage: {
        'md': "url('/images/MicrosoftTeams-image.png')",
        // 'sm': "url('/images/mobileResponsive.png')",
      }
    },
  },
  plugins: [],
}
