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
        e4: "rgba(255, 251, 251, 0.26)",
        e6: "rgba(255, 255, 255, 0.51)",
        boxBorder:"rgba(255, 255, 255, 0.0588)",
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
      },
      blur: {
        "600xl": "200px",
      },
      dropShadow: {
        "box-1": "0px 0px 17px 0px rgba(0, 255, 163, 0.05) inset",
      },
    },
  },
  plugins: [],
};
export default config;
