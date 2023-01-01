import { AlignBottom } from "phosphor-react";
import { styled } from "..";

export const MainContainer = styled("main", {
    width: "calc(100% - 40px)",
    maxWidth: 1264,
    margin: "auto",

    display: "grid",
    gridTemplateAreas: `"hero hero" "rooms groups"`,
    gridAutoColumns: "1fr",
    columnGap: "2rem",

    "@sm": {
        gridTemplateAreas: `"hero" "rooms" "groups"`
    }
})

export const Hero = styled("section", {
    gridArea: "hero",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "5rem",
})

export const RoomsContainer = styled("section", {
    gridArea: "rooms",

    h2: {
        marginBottom: 16,
    },
})

export const RoomsFlexWrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: 8,
})

export const RoomCard = styled("article", {
    display: "flex",
    flexDirection: "row",
    padding: 12,
    gap: 16,

    background: "$white",
    boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.15)",
    borderRadius: 4,

    "& > img": {
        width: 110,
        height: 110,
        objectFit: "none",
        objectPosition: "center",
        borderRadius: 4,
        boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.15)",
    },
})

export const RoomColumn = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: 12,
})

export const RoomInfos = styled("div", {
    display: "flex",
    flexDirection: "column",
    color: "$black",
    fontSize: "$md",

    p: {
        fontSize: "$sm",
    }
})

export const RoomOwner = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: "$sm",

    img: {
        width: 56,
        height: 56,
        objectFit: "none",
        objectPosition: "-4px -12px",
    },
})

export const GroupsContainer = styled("section", {
    gridArea: "groups",
})