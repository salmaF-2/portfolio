/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'hsl(30 33% 97%)',
        foreground: 'hsl(30 16% 24%)',
        card: 'hsl(30 50% 98%)',
        primary: 'hsl(30 35% 66%)',
        muted: 'hsl(30 10% 50%)',
        border: 'hsl(30 15% 88%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}