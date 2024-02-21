/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      width: {
        '30vw': '30vw',
      },
      screens: {
        'mid': '768px',
      },
      colors: {
        black: "#000",
        headerTextColor: "#252525",
        secondaryTextColor: "#6E7E91",
        darkSecondaryTextColor: "#fff",
        white: "#fff",
        sectionBackgroundColor: "#fff",
        generalBackground: "#FBFBFE",
        switcherBackground: "#E5E5E5",
        darkSwitcherBackground: "rgba(54, 54, 54, 0.72)",
        switcherBorder: "#6E7E91",
        darkSwitcherBorder: "#FFFF",
        blueElementColor: "#0366D6",
        sunColor: "#FFFF",
        darkSunColor: "#000",
        talesBorder: "rgba(209, 213,218, 0.3)",
        talesBorderHover: "rgba(9,10,51, 0.3)"
      },
    },
  },
  plugins: [],
}

