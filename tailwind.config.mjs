/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        japanese: ['"Klee One"', "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        serif: ['"Cormorant"', '"Klee One"', "Georgia", "serif"],
      },
      colors: {
        accent: "var(--accent)",
        surface: "var(--bg)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--border-color)",
        card: "var(--card)",
        // Legacy colors (pages not yet redesigned)
        light: {
          surface: {
            header: "#E5E7EB",
            hero: "#F8F9FC",
            main: "#F3F4F8",
            footer: "#E5E7EB",
          },
          text: {
            primary: "#1A1A1A",
            secondary: "#4B5563",
            muted: "#9CA3AF",
            accent: "#FF0054",
          },
          border: {
            light: "#E5E7EB",
            medium: "#D1D5DB",
          },
          hover: {
            light: "#F3F4F6",
            medium: "#E5E7EB",
          },
        },
        dark: {
          surface: {
            header: "#141414",
            hero: "#1A1D20",
            main: "#1C1F22",
            footer: "#141414",
          },
          text: {
            primary: "#E5E7EB",
            secondary: "#9CA3AF",
            muted: "#6B7280",
            accent: "#FF0054",
          },
          border: {
            light: "#2A2D30",
            medium: "#363A3D",
          },
          hover: {
            light: "#22262A",
            medium: "#2A2E32",
          },
        },
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(248, 249, 252, 0) 0%, rgba(248, 249, 252, 0.8) 100%)",
        "dark-card-gradient":
          "linear-gradient(180deg, rgba(26, 29, 32, 0.8) 0%, rgba(26, 29, 32, 0.4) 100%)",
      },
      boxShadow: {
        card: "0 4px 24px -1px rgba(0, 0, 0, 0.05)",
        "card-dark": "0 4px 24px -1px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
