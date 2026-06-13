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
        brandNavy: {
          950: '#06101d',
          900: '#0a1a2f',
          800: '#0e2238',
          700: '#143150',
        },
        // Cool platinum body surfaces (replaces the old warm-cream values).
        // Token names kept so existing `bg-brandWarm-*` usages cool down site-wide.
        brandWarm: {
          50: '#e9edf3',
          100: '#e0e6ef',
        },
        brandPlatinum: {
          50: '#f5f8fc',
          100: '#e9edf3',
          200: '#e0e6ef',
          300: '#d2dae5',
        },
        brandSteel: {
          DEFAULT: '#3d7ab0',
          soft: '#5fa0d4',
          100: '#8cbade',
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
        'custom-gradient': 'linear-gradient(180deg, #000 0%, #000163 100%)',
      },
      backdropBlur: {
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};
