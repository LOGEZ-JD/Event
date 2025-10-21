module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg1: '#0F172A',
        bg2: '#061025'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        slideIn: 'slideIn .6s cubic-bezier(.2,.9,.2,1) both',
        orbit: 'orbit 8s linear infinite',
        pop: 'pop .28s cubic-bezier(.2,.9,.2,1) both'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        slideIn: { '0%': { opacity: 0, transform: 'translateY(12px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        orbit: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
        pop: { '0%': { transform: 'scale(.98)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 } }
      }
    }
  },
  plugins: []
}
