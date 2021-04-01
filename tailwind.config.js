module.exports = {
  purge: {
    // Specify the paths to all of the template files in your project
    content: ['src/**/*.vue'],
  
    // Whitelist selectors by using regular expression
    whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/, // transitions
        /data-v-.*/, // scoped css
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
