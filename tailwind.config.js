module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#171923',},
        
  },
  plugins: [],
}
}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        rain: 'rain 2s linear infinite',  // slower animation for clearer falling effect
      },
      keyframes: {
        rain: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 200%' }, // move farther down to simulate falling
        },
      },
    },
  },
  plugins: [],
};
