import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background1': 'var(--background1)',
        'background2': 'var(--background2)',
        'background3': 'var(--background3)',
        'background4': 'var(--background4)',
      },
    },
  },
  plugins: [],
} satisfies Config;
