/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        custom_light: "hsl(148, 38%, 91%)",
        custom_green: "hsl(169, 82%, 27%)",
        custom_red: "hsl(0, 66%, 56%)",
        muted_light: "hsl(186, 15%, 59%)",
        muted_dark: "hsl(187, 24%, 22%)",
      },
      fontFamily: {
        sans: ["Karla", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
