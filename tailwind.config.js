/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    colors: {
      'primary': "#108a00",
      'secondary': "#14a800",
      'white': '#ffffff',
      'silver': '#d5e0d5',
      'axolotl': '#5e6d55',
      'red': '#FF0000',
    }
  },
  plugins: [],
}
