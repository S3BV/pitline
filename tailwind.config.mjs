/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        pitline: {
          DEFAULT: "#00387c",
          dark: "#002a5a",
          light: "#1a5cbf"
        },
        ink: "#111827",
        slate: "#4b5563",
        cloud: "#f4f6f8"
      },
      fontFamily: {
        body: ["Exo 2", "ui-sans-serif", "system-ui"],
        display: ["Exo 2", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 18px 40px -30px rgba(0, 56, 124, 0.5)"
      }
    }
  },
  plugins: []
};
