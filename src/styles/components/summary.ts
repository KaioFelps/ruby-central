import { styled } from ".."
import NavLink from "../../components/NavLink"

export const SummariesContainer = styled("div", {
    display: "flex",
    gap: "2rem",

    "@sm": {
        flexDirection: "column",
    }
})

export const SummaryCard = styled("article", {
    "@lg": {
        flexBasis: 292,
        flexShrink: 1,
        flexGrow: 1,
    },

    height: "auto",

    display: "flex",
    flexDirection: "column",
    
    borderRadius: 12,
    background: "$white",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
})

export const SummaryRow = styled("div", {
    width: "auto",
    flex: 1,
    display: "flex",
    gap: "1rem",
    padding: 24,

    img: {
        imageRendering: "pixelated",
    }
})

export const InfosCol = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: 8,

    p: {
        fontSize: "$md",
        color: "$gray-400",
    },

    h2: {
        fontWeight: "bold",
        fontSiez: "$lg",
    }
})

export const SeeMoreAnchor = styled(NavLink, {
    background: "$gray-100",
    boxShadow: "inset 0 1px 0 0 rgba(0, 0, 0, 0.05)",
    outlineOffset: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: 12,
    borderRadius: "0 0 12px 12px",

    color: "$blue-500",
    fontSize: "$md",
    textDecoration: "none",

    "&:hover": {
        filter: "saturate(1.5) brightness(0.98)",
    },

    "&:active": {
        filter: "saturate(2) brightness(0.95)",
    },

    "&:focus": {
        outline: "solid 4px $blue-100",
        boxShadow: "none",
    }
})