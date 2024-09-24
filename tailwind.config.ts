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
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#6E6BFF",
        "purple-shade": "#7000FF",
        "gradient-red": "#EB001B",
        "gradient-blue": "#0042FF",
      },
    },
  },
  plugins: [],
};
export default config;
