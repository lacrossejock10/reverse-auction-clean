/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // Look for files in the app directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // Look for files in the components directory
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",  // Look for files in the ui directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#666666",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
}
