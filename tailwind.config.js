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
        colors: {
          primary: '#211A49', // main background
  
          // Complementary neutrals
          surface: '#2A225C',
          soft: '#3B3270',
          border: '#4C4583',
  
          // Accent colors
          accent: '#6C5DD3',    // lighter vibrant purple
          accentLight: '#A095E3',
          accentDark: '#1A1340',
  
          // Text colors
          textPrimary: '#EDEBFF',
          textSecondary: '#C3BFE2',
          textMuted: '#9B94C9',
  
          // Alert or secondary highlights
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
      },
  },
  plugins: [],
}