import { globalCss } from ".";

export const GlobalStyles = globalCss({
    "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
    },

    body: {
        "-webkit-font-smoothing": "antialiased",
        fontFamily: "Roboto, system-ui, sans-serif",
        background: "$gray-200",
    },
})