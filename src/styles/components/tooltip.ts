import * as PrimitiveTooltip from "@radix-ui/react-tooltip"
import { styled } from ".."

export const TooltipProvider = PrimitiveTooltip.Provider

export const TooltipRoot = PrimitiveTooltip.Root

export const TooltipTrigger = styled(PrimitiveTooltip.Trigger, {
    all: "unset",
})

export const TooltipPortal = PrimitiveTooltip.Portal

export const TooltipArrow = PrimitiveTooltip.Arrow

export const TooltipArrowChild = styled("div", {
    width: 15,
    height: 15,
    borderStyle: "solid",
    borderColor: "$gray-400",
    borderWidth: "0 1px 1px 0",
    background: "$white",
    filter: "drop-shadow(1px 1px 0 #0000000d)",
    transform: "rotate(45deg)",
    marginTop: "-50%",
})

export const TooltipContent = styled(PrimitiveTooltip.Content, {
    padding: 12,
    background: "$white",
    border: "1px solid $gray-400",
    borderRadius: 8,
    boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.05)",

    width: "calc(100vw - 20px)",
    maxWidth: 400,
})