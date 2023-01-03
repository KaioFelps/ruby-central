import { HeaderContainer, HeaderWrapper, MobileMenuTrigger, NavigationListWrapper } from "../styles/components/header";
import { Armchair, House, ImageSquare, User } from "phosphor-react";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import Image from "next/image";
import logo from "../assets/logo.png"
import shortLogo from "../assets/short-logo.png"
import { Bars } from "../assets/icons/bars";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
    const { asPath } = useRouter()
    return (
        <HeaderWrapper>
            <HeaderContainer>

                {/* logo (Changes due to screensize) */}
                <picture>
                    <source media="(max-width: 375px)" srcSet={shortLogo.src} width={shortLogo.width} height={shortLogo.height} />
                    <Image src={logo} alt="Ruby Center" title="Ruby Center" placeholder="blur" quality={100} unoptimized={true} loading="eager" />
                </picture>

                {/* desktop navigation menu */}
                <nav>
                    <NavigationListWrapper>
                        <li>
                            <NavLink href={"/"} aria-label="Página inicial">
                                <House size={32} weight={asPath === "/" ? "fill" : "regular"} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={"/emblemas"} aria-label="Emblemas" exact={false}>
                                <ImageSquare size={32} weight={asPath === "/emblemas" ? "fill" : "regular"} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={"mobis"} aria-label="Mobis">
                                <Armchair size={32} weight={asPath === "/mobis" ? "fill" : "regular"} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={"usuario"} aria-label="Usuários">
                                <User size={32} weight={asPath === "/usuario" ? "fill" : "regular"} />
                            </NavLink>
                        </li>
                    </NavigationListWrapper>
                </nav>

                {/* mobile navigation menu toggle trigger */}
                <MobileNavigation>
                    <MobileMenuTrigger aria-label="abrir menu de navegação mobile"><Bars size={32} /></MobileMenuTrigger>
                </MobileNavigation>
            </HeaderContainer>
        </HeaderWrapper>
    )
}