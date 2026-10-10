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
        // Premium Editorial Palette
        ink: {
          50: "#f7f7f5",
          100: "#ebeae6",
          200: "#d6d4cd",
          300: "#bbb7ab",
          400: "#9c9687",
          500: "#817a6b",
          600: "#696356",
          700: "#554f46",
          800: "#48433c",
          900: "#3e3a34",
          950: "#211f1b",
        },
        accent: {
          50: "#fdf4f3",
          100: "#fce8e6",
          200: "#f9d4d1",
          300: "#f4b5af",
          400: "#ec8a81",
          500: "#e06357",
          600: "#cc4538",
          700: "#ab372c",
          800: "#8e3128",
          900: "#762e27",
          950: "#40140f",
        },
        surface: {
          DEFAULT: "#faf9f7",
          elevated: "#ffffff",
          muted: "#f3f2ef",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-geist-serif)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "title": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "caption": ["0.875rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        "sm": "0.375rem",
        "md": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        "soft": "0 2px 8px -2px rgba(33, 31, 27, 0.06), 0 1px 3px -1px rgba(33, 31, 27, 0.04)",
        "elevated": "0 8px 24px -6px rgba(33, 31, 27, 0.08), 0 2px 8px -2px rgba(33, 31, 27, 0.04)",
        "focus": "0 0 0 3px rgba(224, 99, 87, 0.25)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
