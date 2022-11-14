/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./helper/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'voilet': '#450072',
        'voilet-light': '#ece7ef',
        'voilet-light-2': '#9479A5',
        'voilet-light-3': '#C4B0D0',
        'voilet-light-4': '#E3D9EA',
        'voilet-light-5': '#E346D1',
        'voilet-light-6': '#7C5BEE',
        'voilet-light-7': '#6348c4',
        'voilet-light-8': '#EE61C9',
        'gray-color': '#5B5B5B',
        'gray-light-color': '#7B7B7B',
        'gray-light-2': '#E9EEF5',
        'danger': '#ff5724',
        'success': '#53D0A4',
        'black-color': '#000000',
        'dark-blue': '#0C0234',
        'purple-color': '#312757',
        'purple-text': '#907DD3',
        'light-black': "#1E1E1E"
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
