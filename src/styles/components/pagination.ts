import { styled } from "..";
import NavLink from "../../components/NavLink";
import { StyledButton } from "../styledComponents";

export const PaginationContainer = styled("div", {
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    height: 39,
    gap: 4,
    borderRadius: 8,
})

export const PaginationLinkWrapper = styled("div", {
    maxHeight: 39,
    display: "flex",
    gap: 4,

    // use this for responsive css

    "@xs": {
        overflowX: "scroll",

        "@supports(overflowX: overlay)": {
            overflowX: "overlay",
        },

        maxWidth: "100%",
    }
})

export const PaginationLink = styled(NavLink, {
    padding: "10px 14.5px",
    maxHeight: 39,
    fontSize: "$md",
    backgroundColor: "transparent",
    color: "$black",
    textDecoration: "none",
    borderRadius: 8,
    
    "&:hover": {
        background: "$gray-100",
        color: "$blue-400",
        boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.15)",
    },

    "&:active": {
        filter: "brightness(0.95)"
    },
    
    "&.active": {
        boxShadow: "inset 0 0 0 1px var(--color-blue-500)",
        background: "$blue-400",
        color: "$white",
        cursor: "default",
    },
})

export const PaginationArrows = styled(StyledButton, {
    "&.MuiButtonBase-root": {
        width: 39,
        height: 39,
        padding: 0,
        lineHeight: 0,
        borderRadius: 8,
        boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.15)",
        color: "$black",
        background: "$gray-200",

        "&:not(:disabled):hover": {
            background: "$blue-500",
            color: "$white",
        },

        "&:not(:disabled) .MuiTouchRipple-ripple": {
            color: "$blue-400"
        }
    }
})

export const PaginationDivisor = styled("span", {
    padding: "10px 14.5px",
    maxHeight: 39,
    fontSize: "$md",
    background: "transparent",
    color: "$black",
    textDecoration: "none",
    borderRadius: 8,
})