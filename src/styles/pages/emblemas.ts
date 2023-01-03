import { wrap } from "module";
import Image from "next/image";
import { styled } from "..";
import NavLink from "../../components/NavLink";

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

    marginBottom: 80,

    "@sm": {
        flexDirection: "column",
        gap: "1.5rem",
    }
})

export const Form = styled("form", {
    display: "flex",
    gap: 12,
    alignItems: "stretch",

    "@xs": {
        flexDirection: "column",
        width: "100%",
    }
})

export const ResultWrapper = styled("div", {
    maxWidth: 784,
    margin: "auto",
})

export const BadgesContainer = styled("section", {
    marginTop: 16,
    display: "flex",
    flexWrap: "wrap",
    gap: 16,

    "@sm": {
        button: { flex: "1" },
    }
})

export const BadgeToolTipTrigger = styled("button", {
    all: "unset",

    "@sm": {
        flex: "1",
    },
})

export const Badge = styled(Image, {
    boxSizing: "content-box",
    padding: 12,
    background: "$white",
    boxShadow: "inset 0 0 0 2px rgba(0, 0, 0, 0.15)",
    borderRadius: 6,

    "@sm": {
        width: "-webkit-fill-available",
        objectFit: "none",
    },
})

export const BadgesFooter = styled("footer", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 80,

    "@sm": {
        flexDirection: "column",
        gap: "1.5rem",
    }
})

export const NothingFoundWarning = styled("span", {
    display: "block",
    padding: "1rem 1.5rem",
    borderRadius: 8,
    background: "$red-100",
    border: "1px solid $red-500",
    color: "$red-500",
})

export const BadgeParagraph = styled("p", {
    fontSize: "$sm",
    maxWidth: "100%",

    "&:not(:last-child)": {
        marginBottom: 8,
    }
})

export const BadgeLink = styled(NavLink, {
    fontWeight: "bold",
    fontSize: "$sm",
    color: "$blue-500",
    marginTop: 16,
    textDecoration: "none",
})