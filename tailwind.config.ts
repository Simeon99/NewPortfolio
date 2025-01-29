import type { Config } from "tailwindcss"; 

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['QuicksandBook', 'sans-serif'],
        berghan: ['BerghanRegular', 'sans-serif'],
      },
      colors: {
        'primary': 'black',
        'secundary': '#B0FF92',
        'gray': '#F4F4F4',
        'green': '#B0FF92',
        'green-hover': '#A5E08E'
      },
      screens: {
        sw: "1440px",
        lsw: "1080px",
        msw: "720px",
        ssw: "640px",
        xsw: "480px"
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'hwd-bg-image' : "url('/images/Group 7.svg')",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
