/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
      colors: {
        customBlue: 'rgb(4, 31, 87)',
      },
      margin: {
        'setMargin-x': '8rem', // Custom margin value
      },
      padding: {
        // Custom padding for top and bottom
        'custom-y': '4rem', // Top and bottom padding (py-custom-y)
        // Custom padding for left and right
        'custom-x': '8rem', // Left and right padding (px-custom-x)
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
