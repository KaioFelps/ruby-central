import { styled } from ".";
import ButtonBase from "@mui/material/ButtonBase";
import LinearProgress from "@mui/material/LinearProgress"
import { ButtonGroup } from "@mui/material";

export const StyledButtonGroup = styled(ButtonGroup, {
    "&.MuiButtonGroup-root": {
        boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.1)",
        borderRadius: 8,

        "&:has(button:focus)": {
            boxShadow: "none",
        },
    }
})

export const StyledButton = styled(ButtonBase, {
    "&.MuiButtonBase-root": {
        fontSize: "$sm",
        fontWeight: "bold",
        fontFamily: "Lato, sans-serif",
        color: "$white",
        background: "$blue-500",
        border: 0,
        padding: "14px 16px",
        borderRadius: 8,
        height: "auto",
        position: "relative",
        boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.1)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "outline 150ms",

        "&:focus": {
            boxShadow: "none",
            outline: "4px solid $blue-100",
        },

        "&:disabled": {
            transition: "filter 150ms",
            filter: "opacity(0.5)",
        }
    },

    ".MuiButtonGroup-root &.MuiButtonBase-root": {
        padding: 14,
        borderRadius: 0,
        boxShadow: "none",
        outlineColor: "$blue-100",

        "&:first-child": {
            borderRadius: "8px 0 0 8px",
        },
        
        "&:last-child": {
            borderRadius: "0 8px 8px 0",
        },

        "&:not(:last-child)": {
            boxShadow: "inset -1px 0 0 0 rgba(0, 0, 0, 0.15)",
        },

        "&:focus": {
            zIndex: 1,
        }
    }
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
    transition: "outline-width 150ms",

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
        outline: "4px solid $blue-100",
    },

    "@sm": {
        width: "auto",

        "@supports(width: -webkit-fill-available)": {
            width: "-webkit-fill-available",
        },
    },
})

export const StyledLinearProgress = styled(LinearProgress, {
    "&.MuiLinearProgress-bar": {
        backgroundColor: "$blue-300",
        boxShadow: "0 0 0 1px var(--colors-blue-100)",
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        height: 4,

        ".MuiLinearProgress-bar": {
            backgroundColor: "$blue-500"
        }
    }
})