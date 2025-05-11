/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem', // Add horizontal padding to prevent edge hugging
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        customBlue: 'rgb(5, 45, 82)',
      },
      margin: {
        'setMargin-x': '8rem',
      },
      padding: {
        'custom-y': '4rem',
        'custom-x': '8rem',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #000 0%, #000163 100%)',
      },
      backdropBlur: {
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};
