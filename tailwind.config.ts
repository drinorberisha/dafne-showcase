import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        bone: "#F2EDE4",
        white: "#FFFFFF",
        stone: "#B5A88F",
        taupe: "#6B5D4F",
        oxblood: "#4A1F1F",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        'body': ['11pt', { lineHeight: '1.65' }],
        'caption': ['9pt', { lineHeight: '1.5' }],
        'label': ['9pt', { letterSpacing: '0.25em', lineHeight: '1.2' }],
        'display-tight': ['1.0', { lineHeight: '1.15' }],
      },
      letterSpacing: {
        'ultra': '0.25em',
      },
    },
  },
  plugins: [],
};
export default config;
