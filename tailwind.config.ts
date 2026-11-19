import type { Config } from "tailwindcss";

/**
 * Tokens do design system Dream Lab (tokens.json).
 * As cores vêm de variáveis CSS em src/index.css.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" }, screens: { "2xl": "1360px" } },
    extend: {
      colors: {
        ground: "var(--background)",
        ink: "var(--foreground)",
        surface: "var(--surface)",
        line: "var(--line)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
        olive: {
          50: "#f8f8f3",
          100: "#f1f1e7",
          200: "#dbddc2",
          300: "#bec191",
          400: "#9a9f54",
          500: "#6f760a",
          600: "#5e6409",
          700: "#4e5307",
          800: "#3d4106",
          900: "#2c2f04",
          950: "#1c1e03",
        },
        navy: { 500: "#0f172a", 700: "#0b101d" },
        night: { DEFAULT: "#000000", surface: "#111111", line: "#262626" },
      },
      fontFamily: {
        heading: ['"Raleway"', "sans-serif"],
        body: ['"Urbanist"', "sans-serif"],
      },
      borderRadius: { DEFAULT: "12px", brand: "12px" },
      fontSize: {
        h1: ["3.052rem", { lineHeight: "1.1" }],
        h2: ["2.441rem", { lineHeight: "1.15" }],
        h3: ["1.953rem", { lineHeight: "1.2" }],
        h4: ["1.563rem", { lineHeight: "1.2" }],
        h5: ["1.25rem", { lineHeight: "1.25" }],
        h6: ["1.118rem", { lineHeight: "1.3" }],
      },
      boxShadow: { soft: "0 1px 2px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.06)" },
      transitionTimingFunction: { editorial: "cubic-bezier(.2,.7,.2,1)" },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "none" } },
        spin: { to: { transform: "rotate(360deg)" } },
      },
      animation: { "fade-up": "fade-up .9s cubic-bezier(.2,.7,.2,1) both", "spin-slow": "spin 24s linear infinite" },
    },
  },
  plugins: [],
} satisfies Config;
