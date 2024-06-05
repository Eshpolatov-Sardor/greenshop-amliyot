/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".git /*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '.5rem',
      },
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#46a358",
        green: "#fbfbfb",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#46a358",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
