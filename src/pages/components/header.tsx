import { HeaderContainer, HeaderWrapper, NavigationListWrapper } from "../../styles/components/header";
import { Armchair, House, ImageSquare, User } from "phosphor-react";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import Image from "next/image";
import logo from "../../assets/logo.png"

export default function Header() {
    const { asPath } = useRouter()
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Image src={logo} alt="Ruby Center" placeholder="blur" quality={100} unoptimized={true}/>

                <nav>
                    <NavigationListWrapper>
                        <li>
                            <NavLink href={"/"}>
                                <House size={32} weight={asPath === "/" ? "fill" : "regular"} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={"/emblemas"}>
                                <ImageSquare size={32} weight={asPath === "/emblemas" ? "fill" : "regular"} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={"mobis"}>
                                <Armchair size={32} weight={asPath === "/mobis" ? "fill" : "regular"} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={"usuario"}>
                                <User size={32} weight={asPath === "/usuario" ? "fill" : "regular"} />
                            </NavLink>
                        </li>
                    </NavigationListWrapper>
                </nav>
            </HeaderContainer>
        </HeaderWrapper>
    )
}