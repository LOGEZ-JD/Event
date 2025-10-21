module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        softbg: '#FBFCFE',
        primelight: '#7C3AED',
        accentlight: '#F59E0B'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp .6s cubic-bezier(.2,.9,.2,1) both',
        pop: 'pop .28s cubic-bezier(.2,.9,.2,1) both'
      },
      keyframes: {
        float: {'0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' }},
        fadeUp: {'0%': { opacity: 0, transform: 'translateY(12px)' }, '100%': { opacity: 1, transform: 'translateY(0)' }},
        pop: {'0%': { transform: 'scale(.98)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 }}
      }
    }
  },
  plugins: []
}
