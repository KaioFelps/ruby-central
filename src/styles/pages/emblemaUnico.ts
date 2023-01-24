import { styled } from "..";

export const BadgeMainContainer = styled("main", {
    width: "calc(100% - 40px)",
    maxWidth: 1264,
    margin: "auto",

    display: "flex",
    flexDirection: "column",
})

export const BadgeHeader = styled("header", {
    width: "100%",
    marginBottom: 56,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    "@sm": {
        flexDirection: "column",
        gap: "1.5rem",
    },
})

export const QueryForm = styled("form", {
    display: "flex",
    gap: 12,
    alignItems: "stretch",

    "@xs": {
        flexDirection: "column",
        width: "100%",
    }
})

export const BadgeContainer = styled("div", {
    width: "calc(100vw - 40px)",
    maxWidth: 464,
    marginInline: "auto",
    marginBottom: 56,

    padding: 24,
    borderRadius: 12,
    background: "$white",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",

    display: "flex",
    alignItems: "center",
    gap: 24,

    img: {
        boxSizing: "content-box",
        padding: 16,
        borderRadius: 8,
        border: "2px solid rgba(0, 0, 0, 0.15)",

        imageRendering: "pixelated",
        alignSelf: "flex-start",
    }
})

export const BadgeInfos = styled("div", {
    flex: 1,

    display: "flex",
    flexDirection: "column",
    gap: 8,

    fontSize: "$sm",
    color: "$gray-700",

    strong: {
        color: "$black",
    }
})

export const UsersHeader = styled("header", {
    width: "100%",
    marginBottom: 16,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export const UsersContainer = styled("section", {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
    
    "@md": {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
    
    "@sm": {
        gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@xs": {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
})

export const UserCard = styled("div", {
    padding: 12,
    border: "2px solid rgba(0, 0, 0, 15%)",
    borderRadius: 8,
    background: "$white",

    display: "flex",
    alignItems: "center",

    img: {
        width: 56,
        height: 55,
        marginRight: 12,

        objectFit: "none",
        objectPosition: "center -12px",
        imageRendering: "pixelated",
    },

    a: {
        color: "$blue-500",
        textDecoration: "none",
        justifySelf: "flex-start",
    }
})

export const UserColumn = styled("div", {
    display: "flex",
    flexDirection: "column",
    
    strong: {
        marginBottom: 4,
        wordBreak: "break-word"
    }
})