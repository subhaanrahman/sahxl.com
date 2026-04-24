import type { Config } from "tailwindcss";

/**
 * SAHXL × 506 Global — Editorial Cinema / Poster Noir design tokens.
 * Source: sahxl-website-spec/brand-tokens.md
 * Keep this file in sync with app/globals.css CSS variables.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          0: "var(--ink-0)",
          1: "var(--ink-1)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
          4: "var(--ink-4)"
        },
        bone: {
          100: "var(--bone-100)",
          200: "var(--bone-200)",
          300: "var(--bone-300)",
          400: "var(--bone-400)"
        },
        paper: {
          DEFAULT: "var(--paper)",
          ink: "var(--paper-ink)"
        },
        hairline: {
          DEFAULT: "var(--hairline)",
          strong: "var(--hairline-strong)"
        },
        ember: {
          DEFAULT: "var(--ember)",
          soft: "var(--ember-soft)"
        },
        gold: {
          DEFAULT: "var(--gold)",
          soft: "var(--gold-soft)"
        },
        violet: "var(--violet)",
        ice: "var(--ice)",
        success: "var(--success)",
        danger: "var(--danger)",
        warning: "var(--warning)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Cinzel", "serif"],
        heading: ["var(--font-heading)", "Anton", "Bebas Neue", "sans-serif"],
        body: ["var(--font-body)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        serif506: ["Georgia", "serif"]
      },
      fontSize: {
        "display-xl": ["clamp(72px, 14vw, 168px)", { lineHeight: "0.88", letterSpacing: "-0.02em", fontWeight: "900" }],
        "display-lg": ["clamp(56px, 10vw, 120px)", { lineHeight: "0.9", letterSpacing: "-0.015em", fontWeight: "900" }],
        "display-md": ["clamp(40px, 6.5vw, 72px)", { lineHeight: "0.96", letterSpacing: "-0.005em", fontWeight: "800" }],
        "heading-lg": ["36px", { lineHeight: "1.1", letterSpacing: "0.01em", fontWeight: "700" }],
        "heading-md": ["24px", { lineHeight: "1.2", letterSpacing: "0.01em", fontWeight: "700" }],
        "heading-sm": ["18px", { lineHeight: "1.3", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-lg": ["17px", { lineHeight: "1.6" }],
        "body-md": ["15px", { lineHeight: "1.6" }],
        "body-sm": ["13px", { lineHeight: "1.5" }],
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.14em" }]
      },
      spacing: {
        "0.5": "2px",
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "24": "96px",
        "32": "128px"
      },
      maxWidth: {
        content: "1440px",
        prose506: "640px"
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        pill: "9999px"
      },
      boxShadow: {
        "glow-ember": "var(--glow-ember)",
        "glow-gold": "var(--glow-gold)"
      },
      transitionTimingFunction: {
        "sahxl-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "sahxl-in": "cubic-bezier(0.4, 0, 1, 1)",
        "sahxl-in-out": "cubic-bezier(0.65, 0, 0.35, 1)"
      },
      transitionDuration: {
        "120": "120ms",
        "280": "280ms",
        "480": "480ms",
        "800": "800ms"
      },
      animation: {
        "pulse-hotspot": "pulseHotspot 2s ease-in-out infinite",
        "fade-in": "fadeIn 480ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "marquee": "marquee 40s linear infinite"
      },
      keyframes: {
        pulseHotspot: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%":      { transform: "scale(1.6)", opacity: "0.25" }
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(4px)" },
          to:   { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to:   { transform: "translate3d(-50%,0,0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
