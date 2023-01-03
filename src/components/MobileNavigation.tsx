import { ReactNode } from "react";
import { Times } from "../assets/icons/times";
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger, MobileNavWrapper } from "../styles/components/mobileNavigation";
import NavLink from "./NavLink";
import { Armchair, House, ImageSquare, User } from "phosphor-react";

export function MobileNavigation({children}: {children: ReactNode}) {
    return (
        <DialogRoot>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <MobileNavigationContent />
        </DialogRoot>
    )
}

function MobileNavigationContent() {
    return (
        <DialogPortal>
            <DialogOverlay />
            <DialogContent>
                <DialogClose>
                    <Times />
                </DialogClose>

                <MobileNavWrapper>
                    <li><NavLink href={"/"}><House size={32} /> Início</NavLink></li>
                    <li><NavLink exact={false} href={"/emblemas"}><ImageSquare size={32} /> Emblemas</NavLink></li>
                    <li><NavLink href={"/mobis"}><Armchair size={32} /> Mobis</NavLink></li>
                    <li><NavLink href={"/usuario"}><User size={32} /> Usuários</NavLink></li>
                </MobileNavWrapper>
            </DialogContent>
        </DialogPortal>
    )
}