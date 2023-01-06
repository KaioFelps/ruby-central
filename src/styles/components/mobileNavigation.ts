import * as PrimitiveDialog from "@radix-ui/react-dialog"
import { keyframes, styled } from ".."

// keyframes

const swipeIn = keyframes({
    from: {
        transform: "translateX(100%)"
    },
    to: {
        transform: "translateX(0)"
    }
})

const swipeOff = keyframes({
    from: {
        transform: "translateX(0)"
    },
    to: {
        transform: "translateX(100%)"
    }
})

// types

type CloseButton = {
    asChild: boolean;
}

// styles

export const DialogRoot = PrimitiveDialog.Root

export const DialogTrigger = PrimitiveDialog.Trigger

export const DialogPortal = PrimitiveDialog.Portal

export const DialogOverlay = styled(PrimitiveDialog.Overlay, {
    position: "fixed",
    top: 0,
    left: 0,

    width: "100%",
    height: "100vh",
})

export const DialogContent = styled(PrimitiveDialog.Content, {
    position: "fixed",
    top: 0,
    left: 0,

    background: "$gray-100",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: "28px 20px",
    animationFillMode: "both",
    // transition: "transform 150ms",

    "&[data-state='open']": {
        animation: `${swipeIn} 350ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    
    "&[data-state='closed']": {
        animation: `${swipeOff} 350ms cubic-bezier(0.16, 1, 0.3, 1)`
    }
})

export const DialogClose = styled(PrimitiveDialog.Close, {
    all: "unset",
    alignSelf: "flex-end",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 999,
    color: "$blue-500",
    background: "$gray-300",
    cursor: "default",

    variants: {
        isLink: {
            true: {
                justifyContent: "unset",
                alignSelf: "unset",
                alignItems: "unset",
                background: "unset",
                color: "unset",
                cursor: "pointer",
                padding: "unset",
                display: "unset",
                borderRadius: "unset",
            }
        }
    }
})

export const MobileNavWrapper = styled("ul", {
    display: "flex",
    flexDirection: "column",
    gap: 12,

    li: {
        listStyle: "none",

        a: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "6px 12px",
            borderRadius: 999,
            boxShadow: `inset 0 0 0 2px var(--colors-gray-300)`,
            fontSize: "$md",
            color: "$black",
            textDecoration: "none",

            "&:hover": {
                background: "$gray-100",
            },

            "&.active": {
                background: "$gray-300",
                color: "$blue-500",
            }
        }
    }
})