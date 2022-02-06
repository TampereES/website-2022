module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        work: ['"Work Sans"', "sans-serif"]
      },
      colors: {
        'white': '#fffdf3',
        'dark-blue': '#083D77',
        'blue': '#0C3DFF'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px"
          },
          "@screen md": {
            maxWidth: "900px"
          },
          "@screen lg": {
            maxWidth: "960px"
          },
          "@screen xl": {
            maxWidth: "1280px"
          }
        }
      })
    }
  ],
  corePlugins: {
    container: false
  }
}
