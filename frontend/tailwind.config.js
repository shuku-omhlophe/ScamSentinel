/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A", // Deep blue for branding
          secondary: "#FACC15", // Bright yellow for highlights
          background: "#F8FAFC", // Light background color
          danger: "#DC2626", // Red for warnings
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        boxShadow: {
          card: "0 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  };
  