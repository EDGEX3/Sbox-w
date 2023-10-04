import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors:{
    //   transparent: 'transparent',
    //   'boxBg':'#050505',
    //   'insideBoxBg':"rgba(255, 251, 251, 0.03)",
    //   'e4':"rgba(255, 251, 251, 0.26)",
    //   'e6':"rgba(255, 255, 255, 0.51)",
    //   'playbtn':"var(--gradiont-green, linear-gradient(180deg, rgba(0, 255, 163, 0.54) 0%, #00FFA3 100%))",

    //   'boxBorder':"rgba(255, 255, 255, 0.0588)",
    // },
    extend: {
      colors: {
        bgElipce:"rgba(0, 255, 163, 0.18)",
        boxBg: "#050505",
        insideBoxBg: "rgba(255, 251, 251, 0.03)",
        e2:"rgba(255, 255, 255, 0.51)",
        e3:"rgba(255, 251, 251, 0.03)",
        e4: "rgba(255, 251, 251, 0.26)",
        e5:"rgba(255, 251, 251, 1)",
        e6: "rgba(255, 255, 255, 0.51)",
        boxBorder:"rgba(255, 255, 255, 0.0588)",
        acent:"rgba(0, 255, 163, 1)",
        "t-text":"rgba(95, 100, 105, 0.6)",
        
      },
      borderWidth: {
        "2": "2px",
      },
      borderRadius: {
        boxRadius: "20px",
      },
      height: {
        "11/12": "98%",
      },
      backgroundImage: {
        "grid-img": 'url("/assets/grid.png")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "lingre":"linear-gradient(217deg, rgba(255, 251, 251, 0.26) 4.49%, rgba(217, 217, 217, 0.16) 98.49%)"
      },
      blur: {
        "600xl": "200px",
      },
      boxShadow: {
        "box-1": "0px 0px 17px 0px rgba(0, 255, 163, 0.05) inset",
      },
    },
  },
  plugins: [],
};
export default config;
