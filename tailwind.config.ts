import type { Config } from "tailwindcss";

const px0_100: any = {
  ...Array.from(Array(101)).map((_, index) => {
    return index + `px`;
  }),
};
const px0_300: any = {
  ...Array.from(Array(301)).map((_, index) => {
    return index + `px`;
  }),
};
// const px0_1000: any = {
//   ...Array.from(Array(1001)).map((_, index) => {
//     return index + `px`;
//   }),
// };

const config: Config = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxl: { max: "1600px" }, // laptop
      xl: { max: "1024px" }, // pad -
      lg: { max: "834px" }, // pad |
      md: { max: "768px" }, // phone -
      sm: { max: "480px" }, // phone |
    },
    colors: {
      // primary
      main1: "#FDF2DD",
      main2: "#E6842D",
      main3: "#130912",

      // basic
      white: "#FFFFFF",
      black: "#000000",

      // gray
      gray1: "#EEEEEE",
      gray2: "#CBCBCB",

      header: "#488BB1",
      footer: "#4AB148",
    },
    fontFamily: {
      sample: ["Spoqa Han Sans Neo", "sans-serif"],
    },
    backgroundImage: {
      landing: "url(../../public/images/landing_bg.svg)",
      landing_m: "url(../../public/images/landing_bg_m.svg)",
    },
    boxShadow: {
      card: "-20px 30px 20px 10px rgba(0, 0, 0, 0.20)",
      makeCard: "-4px 10px 40px 10px rgba(0, 0, 0, 0.10)",
      makeNav: "4px 0px 14px 0px rgba(0, 0, 0, 0.08)",
      layoutNav: "0px 2px 10px 0px rgba(231, 121, 23, 0.4)",
      optionCard: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
    },
    extend: {
      fontSize: px0_100,
      lineHeight: px0_100,
      textAlign: px0_100,
      gap: px0_300,
      borderRadius: px0_100,
      padding: px0_300,
      display: ["group-hover"],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
