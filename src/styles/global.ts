import { globalCss, styled } from ".";
import { Button } from "primereact/button";

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

    h1: {
        fontWeight: "bold",
        fontSize: "$xl",
        color: "$black",
    },

    "h2, h3": {
        fontWeight: "bold",
        fontSize: "$lg",
        color: "$black",
    },
})

export const StyledLabel = styled("label", {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: 12,
    width: "$$width" || "auto",
    background: "$white",
    borderRadius: 8,
    border: "1px solid rgba(0, 0, 0, 0.15)",
    boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.05)",

    input: {
        all: "unset",
        fontSize: "$sm",
        color: "$black",
        flex: 1,

        "&::placeholder": {
            color: "$gray-400",
            fontSize: "$sm",
        },

        "&[type='text']": {
            cursor: "text"
        }
    },

    "&:has(input:focus)": {
        boxShadow: "none",
        outline: "2px solid $blue-100",
    },

    "@sm": {
        width: "auto",

        "@supports(width: -webkit-fill-available)": {
            width: "-webkit-fill-available",
        },
    },
})

export const StyledButton = styled(Button, {
    "&.p-button": {
        border: 0,
        padding: 16,
        background: "$blue-500",
        borderRadius: 8,
        fontSize: "$sm",
        fontWeight: "bold",
        height: "auto",
        position: "relative",
        boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.1)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "&:focus": {
            boxShadow: "0 0 0 0.2rem var(--colors-blue-100)",
        },
    }
})