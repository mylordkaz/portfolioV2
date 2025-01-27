/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        light: {
          surface: {
            header: "#FFFFFF", // Pure white header
            hero: "#F8F9FC", // Very light blue-gray
            main: "#F3F4F8", // Slightly darker background
            footer: "#FFFFFF", // Pure white footer
          },
          text: {
            primary: "#1A1A1A", // Near black for main text
            secondary: "#4B5563", // Medium gray for secondary text
            muted: "#9CA3AF", // Light gray for muted text
            accent: "#FF0054", // Keeping the red accent
          },
          border: {
            light: "#E5E7EB", // Very light gray
            medium: "#D1D5DB", // Light gray
          },
          hover: {
            light: "#F3F4F6", // Very subtle hover
            medium: "#E5E7EB", // Light gray hover
          },
        },
        // Dark Theme Colors
        dark: {
          surface: {
            header: "#141414", // Slightly lighter than hero for distinction
            hero: "#1A1D20", // Main dark background color
            main: "#1C1F22", // Subtle variation for content areas
            footer: "#141414",
          },
          text: {
            primary: "#E5E7EB", // Soft white
            secondary: "#9CA3AF", // Muted gray
            muted: "#6B7280",
            accent: "#FF0054", // Red accent from the reference
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
  },
  plugins: [],
  darkMode: "class",
};
