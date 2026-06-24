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
        // Structural heading colour ΓÇö now theme-driven so it follows ThemeTweaks.
        customBlue: 'var(--heading)',
        brandNavy: {
          950: '#141211',
          900: '#1b1815',
          800: '#241d18',
          700: '#322620',
          600: '#5a3a2a',
        },
        // Warm data accents. Names are kept for compatibility.
        brandBlue: {
          DEFAULT: '#f15a24',
          bright: '#ff6b2a',
          soft: '#ffe3d1',
          pale: '#fff3e8',
        },
        brandOrange: {
          DEFAULT: '#f15a24',
          soft: '#ff6b2a',
        },
        // Verified green — trust cue only.
        brandGreen: {
          DEFAULT: '#16a66a',
          soft: '#22c55e',
        },
        brandWarm: {
          50: '#fff8f2',
          100: '#fff3e8',
        },
        brandPlatinum: {
          50: '#ffffff',
          100: '#fff8f2',
          200: '#fff3e8',
          300: '#f0e2d8',
        },
        brandSteel: {
          DEFAULT: '#f15a24',
          soft: '#ff6b2a',
          100: '#ffe3d1',
        },
      },
      margin: {
        'setMargin-x': '8rem',
      },
      padding: {
        'custom-y': '4rem',
        'custom-x': '8rem',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #1b1815 0%, #141211 100%)',
      },
      backdropBlur: {
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};
