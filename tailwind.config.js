export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'gradient-x': 'gradientX 10s ease infinite',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'fadeSlide': 'fadeSlide 0.3s ease-out',
        'slideFadeDown': 'slideFadeDown 0.3s ease-out forwards',
        'slideFadeUp': 'slideFadeUp 0.3s ease-in forwards',      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeSlide: {
          '0%': { opacity: 0, transform: 'scaleY(0)' },
          '100%': { opacity: 1, transform: 'scaleY(1)' },
        },
        slideFadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideFadeUp: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-20px)' },
        },
      },
      backgroundSize: {
        'double': '200% 200%',
      },
    },
  },
  plugins: [],
}
