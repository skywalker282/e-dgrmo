/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0571CC', // New primary color as requested
        },
        secondary: {
          blue: '#0055A4', // French blue for accents
        },
        accent: {
          gold: '#FFD700', // Gold for highlights
        },
        dark: {
          navy: '#0A1E3F', // Deeper navy for backgrounds
          charcoal: '#2C3E50', // Charcoal for text
        },
        light: {
          blue: '#E6F0FA', // Lighter blue for backgrounds
          gray: '#F8F9FA', // Light gray for sections
        },
        success: {
          green: '#28A745', // Corporate green
        },
        warning: {
          orange: '#FFA500', // Corporate orange
        },
        error: {
          red: '#DC3545', // Corporate red
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
}