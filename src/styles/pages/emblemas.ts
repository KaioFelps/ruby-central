import { styled } from "..";

export const MainContainer = styled("main", {
    width: "calc(100% - 40px)",
    maxWidth: 1264,
    margin: "auto",
})

export const BadgesHeader = styled("header", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
})

export const BinocularsButton = styled("button", {
    all: "unset",
    lineHeight: 0,
    borderRadius: 999,
    padding: 2,
    background: "$white",

    "&:hover": {
        background: "$gray-300",
    },
    
    ":active": {
        filter: "brightness(0.9)",
    },

    "&:focus": {
        outline: "2px solid $blue-100",
    }
})