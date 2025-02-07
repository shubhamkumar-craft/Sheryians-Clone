

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust this to match your project structure
  theme: {
    screens:{
      min:'320px',
      med:'375px',
    }
  },
    extend: {
      fontFamily: {
        shubham: ['Helvetica', 'Arial', 'sans-serif'],
      
    },
  },
  plugins: [],
};
