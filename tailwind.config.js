module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandRed: '#C62828',
        brandGreen: '#2E7D32',
        brandYellow: '#F9A825',
        brandBlack: '#111827',
        brandAccent: '#7C4DFF'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
