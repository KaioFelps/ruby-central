import { styled } from "..";

export const FooterContainer = styled("footer", {
    marginTop: "3.5rem",
    width: "100%",
    padding: "24px 20px",
    background: "$gray-100",
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,

    color: "$gray-700",
    fontSize: "$md",

    a: {
        fontWeight: "bold",
        color: "$blue-500",
        textDecoration: "none",
    },

    p: {
        textAlign: "center",
    },
})