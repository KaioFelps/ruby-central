import { wrap } from "module";
import Image from "next/image";
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

    marginBottom: 80,
})

export const Form = styled("form", {
    display: "flex",
    gap: 12,
    alignItems: "stretch",
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
})

export const Badge = styled(Image, {
    boxSizing: "content-box",
    padding: 12,
    background: "$white",
    boxShadow: "inset 0 0 0 2px rgba(0, 0, 0, 0.15)",
    borderRadius: 6,
})

export const BadgesFooter = styled("footer", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 48,
})