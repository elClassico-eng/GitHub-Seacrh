/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.slate,
            green: colors.emerald,
            purple: colors.violet,
            yellow: colors.amber,
            pink: colors.fuchsia,
            cyan: colors.cyan,
            blue: colors.blue,
            violet: colors.violet,
            fuchsia: colors.fuchsia,
            slate: colors.slate,
            blueBG: "#0d1117",
        },
    },
    plugins: [],
};
