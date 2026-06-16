/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cores da logo: dourado + branco sobre preto
        canvas: '#0b0a09',
        surface: '#161412',
        surfaceHi: '#221f1a',
        ink: '#f5f0e6',
        inkDim: 'rgba(245, 240, 230, 0.6)',
        accent: {
          DEFAULT: '#e8a82e',
          hi: '#f4bf4d',
          deep: '#c98e1e',
        },
        ghost: '#1c1916',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', '"Hanken Grotesk"', 'sans-serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1200px',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
};
