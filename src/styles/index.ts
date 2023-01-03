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
            "blue-400": "#00B2FF",
            "blue-300": "#E0F0FF",
            "blue-100": "#0066ff2b",

            "red-500": "#FF0000",
            "red-100": "rgba(255, 0, 0, 0.05)",
            
            "gray-700": "#4F5166",
            "gray-400": "#85868F",
            "gray-300": "#EAEAEA",
            "gray-200": "#F2F2F3",
            "gray-100": "#F7F7FA",
        },
        fontSizes: {
            xl: "1.5rem",
            lg: "1.2rem",
            md: "1rem",
            sm: "0.875rem",
        },
    },
    media: {
        lg: "(min-width: 769px)",
        md: "(max-width: 1263px)",
        sm: "(max-width: 768px)",
        xs: "(max-width: 480px)",
    },
})