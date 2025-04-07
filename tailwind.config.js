/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--clr-primary-rgb))",
        secondary: "rgb(var(--clr-secondary-rgb))",
        gray: "rgba(var(--clr-gray-rgb), 1)",
        white: "var(--clr-white)",
        black: "var(--clr-black)",
        dark: "var(--clr-dark)",
        success: "var(--clr-success)",
        warning: "var(--clr-warning)",
        danger: "var(--clr-danger)",
        link: "var(--clr-Link)",
        silver: "var(--clr-silver)",
        pearl: "var(--clr-pearl)",
      },
      fontFamily: {
        sans: "var(--font-primary)",
      },
      spacing: {
        "2xl": "var(--space-2xl)",
        xl: "var(--space-xl)",
        lg: "var(--space-lg)",
        md: "var(--space-md)",
        sm: "var(--space-sm)",
        xs: "var(--space-xs)",
      },
      fontSize: {
        "5xl": "var(--text-5xl)",
        "4xl": "var(--text-4xl)",
        "3xl": "var(--text-3xl)",
        "2xl": "var(--text-2xl)",
        xl: "var(--text-xl)",
        lg: "var(--text-lg)",
        sm: "var(--text-sm)",
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
