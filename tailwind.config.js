/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".glass-panel": {
          backdropFilter: "blur(16px)",
          backgroundColor: "hsl(var(--background) / 0.7)",
          borderColor: "hsl(var(--border) / 0.5)",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        },
        ".project-card": {
          position: "relative",
          overflow: "hidden",
          borderRadius: "1rem",
          transition: "all 0.5s ease-out",
        },
        ".project-overlay": {
          position: "absolute",
          inset: "0",
          backgroundColor: "hsl(var(--background) / 0.8)",
          backdropFilter: "blur(8px)",
          opacity: "0",
          transition: "opacity 0.3s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          padding: "1.5rem",
        },
        ".link-underline": {
          position: "relative",
        },
        ".link-underline::after": {
          content: "''",
          position: "absolute",
          bottom: "0",
          left: "0",
          height: "2px",
          width: "0",
          backgroundColor: "hsl(var(--accent))",
          transition: "width 0.3s",
        },
        ".link-underline:hover::after": {
          width: "100%",
        },
      });
    }),
  ],
}



