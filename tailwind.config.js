/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(138, 43, 226, 0.25)',
        '4xl': [
          '0 35px 35px rgba(138, 43, 226, 0.25)',
          '0 45px 65px rgba(138, 43, 226, 0.25)'
        ]
      },
      boxShadow: {
        '4xl': [
          '0 35px 35px rgba(138, 43, 226, 0.25)',
          '0 45px 65px rgba(138, 43, 226, 0.25)'
        ]
      }
    },
  },
  plugins: [],
};
