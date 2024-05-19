/** @type {import('tailwindcss').Config} */
const { keyframes } = require("styled-components");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                move: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-40%)" },
                },
            },
            animation: {
                move: "move 10s linear infinite alternate",
            },
        },
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
            stone: colors.stone,
            blueBG: "#080808",
            cardBG: "#171717",
        },
    },
    plugins: [],
};
