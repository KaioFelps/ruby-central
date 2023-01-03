import { ReactNode } from "react"
import { TooltipArrow, TooltipArrowChild, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from "../styles/components/tooltip";

type TooltipProps = {
    content: string | ReactNode;
    children: ReactNode;
    asChild: boolean;
}

export default function Tooltip({ content, children, asChild = false }: TooltipProps) {
    return (
        <TooltipProvider delayDuration={100}>
            <TooltipRoot>
                <TooltipTrigger asChild={asChild}>
                    { children }
                </TooltipTrigger>
                <TooltipPortal>
                    <TooltipContent sideOffset={10}>
                        { content }
                        <TooltipArrow asChild>
                            <TooltipArrowChild />
                        </TooltipArrow>
                    </TooltipContent>
                </TooltipPortal>
            </TooltipRoot>
        </TooltipProvider>
    )
}