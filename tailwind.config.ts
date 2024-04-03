import type { Config } from "tailwindcss";

const px0_100 = {
  ...Array.from(Array(101)).map((_, index) => {
    return index + `px`;
  }),
};
const px0_300 = {
  ...Array.from(Array(301)).map((_, index) => {
    return index + `px`;
  }),
};
const px0_1000 = {
  ...Array.from(Array(1001)).map((_, index) => {
    return index + `px`;
  }),
};

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
      xxl: { max: "1400px" },
      xl: { max: "980px" },
      lg: { max: "800px" },
      md: { max: "680px" },
      sm: { max: "430px" },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      header: "#488BB1",
      footer: "#4AB148",
    },
    fontFamily: {
      sample: ["Spoqa Han Sans Neo", "sans-serif"],
    },
    backgroundImage: {
      // sample: "url(../assets/icons/arrow/ico_arrow_down.svg)",
    },
    boxShadow: {
      sample: "0px 0px 16px 0px rgba(0, 0, 0, 0.10)",
    },
    extend: {
      // width: px0_1000,
      // fontSize: px0_100,
      // lineHeight: px0_100,
      textAlign: px0_100,
      // gap: px0_300,
      // borderRadius: px0_100,
      // padding: px0_300,
      display: ["group-hover"],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
