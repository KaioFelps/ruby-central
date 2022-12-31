import { styled } from "..";

export const NavigationListWrapper = styled("ul", {
    display: "flex",
    gap: 16,

    li: {
        listStyle: "none",
    },

    a: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "$black",
        padding: 4,
        borderRadius: 999,

        svg: {
            lineHeight: 0,
        },

        "&:hover": {
            background: "$gray-300",
            transition: "background 100ms ease-in",
        },
        
        "&.active": {
            color: "$blue-500",
            background: "$gray-300",
            transition: "all 100ms ease-in",
        },
    },
})

export const MobileMenuTrigger = styled("button", {
    all: "unset",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 999,
    color: "$blue-500",
    background: "$gray-300",

    "@lg": {
        display: "none",
    },
})

export const HeaderContainer = styled("div", {
    width: "calc(100% - 40px)",
    maxWidth: 1264,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@sm": {
        nav: {
            display: "none",
        }
    },

    img: {
        userSelect: "none",
    }
})

export const HeaderWrapper = styled("header", {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0",
    background: "$gray-100",
})