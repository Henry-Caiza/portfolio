const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors: {
        dark: "#171B44",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        greenLight: '#61EFB3',
        greenDark: '#06AA65'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(97,239,179,0.5) 2px, #171B44 8px, #171B44 100px);',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px);',
        circularDarkLg: 'repeating-radial-gradient(rgba(97,239,179,0.5) 2px, #171B44 8px, #171B44 80px);',
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(97,239,179,0.5) 2px,#171B44 6px,#171B44 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(97,239,179,0.5) 2px,#171B44 4px, #171B44 40px)",
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      // @media(max-width: 1535px)

      xl: { max: "1279px" },
      //  @media (max-width: 1279px) 

      lg: { max: "1023px" },
      //  @media (max-width: 1023px) 

      md: { max: "767px" },
      //  @media (max-width: 767px) 

      sm: { max: "639px" },
      //  @media (max-width: 639px) 

      xs: { max: "479px" },
      //  @media (max-width: 479px) 
    }
  },
  plugins: [],
}

