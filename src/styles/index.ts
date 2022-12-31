import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            white: "#ffffff",
            black: "#000000",

            "blue-500": "#0066FF",
            "blue-300": "#E0F0FF",
            
            "gray-700": "#4F5166",
            "gray-500": "#85868F",
            "gray-300": "#F2F2F3",
            "gray-200": "#F7F7FA",
            "gray-100": "#EAEAEA",
        },
        fontSizes: {
            lg: "1.5rem",
            md: "1rem",
            sm: "0.875rem",
        },
    }
})