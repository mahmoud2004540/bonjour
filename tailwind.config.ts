import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          25: "#fbfbfa",
          50: "#f6f5f2",
          100: "#ebe9e4",
          200: "#d8d4cb",
          300: "#c0baad",
          400: "#a49c8c",
          500: "#8a8170",
          600: "#71695c",
          700: "#5c564b",
          800: "#4e493f",
          900: "#433f37",
          950: "#24221d",
        },
        accent: {
          50: "#fdf5f3",
          100: "#fce8e4",
          200: "#fad5ce",
          300: "#f5b5a9",
          400: "#ed8a78",
          500: "#e06a54",
          600: "#cc4d36",
          700: "#ab3d2b",
          800: "#8e3527",
          900: "#763126",
          950: "#40160f",
        },
        surface: {
          DEFAULT: "#faf9f7",
          elevated: "#ffffff",
          muted: "#f3f1ed",
          inverse: "#24221d",
        },
        success: {
          50: "#f2f9f4",
          100: "#e0f2e6",
          600: "#2d7a4a",
          700: "#25633c",
        },
        warning: {
          50: "#fef9ee",
          100: "#fdf0d3",
          600: "#b45309",
          700: "#92400e",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "var(--font-arabic-sans)",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "var(--font-arabic-serif)",
          "Georgia",
          "serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "3.75rem",
          { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "500" },
        ],
        display: [
          "2.75rem",
          { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "500" },
        ],
        "display-sm": [
          "2.25rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        title: [
          "1.625rem",
          { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "500" },
        ],
        "title-sm": [
          "1.25rem",
          { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.65", fontWeight: "400" }],
        caption: ["0.8125rem", { lineHeight: "1.5", fontWeight: "500" }],
        overline: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.06em", fontWeight: "600" },
        ],
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(36, 34, 29, 0.04), 0 1px 2px rgba(36, 34, 29, 0.03)",
        card: "0 2px 8px -2px rgba(36, 34, 29, 0.05), 0 1px 3px rgba(36, 34, 29, 0.03)",
        elevated:
          "0 8px 30px -8px rgba(36, 34, 29, 0.08), 0 2px 8px -2px rgba(36, 34, 29, 0.04)",
        focus: "0 0 0 3px rgba(224, 106, 84, 0.28)",
        "focus-ink": "0 0 0 3px rgba(36, 34, 29, 0.12)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-soft": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        content: "42rem",
        wide: "64rem",
      },
    },
  },
  plugins: [],
};

export default config;
