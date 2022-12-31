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

export const HeaderContainer = styled("div", {
    width: "100%",
    maxWidth: 1264,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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