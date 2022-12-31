import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { AnchorHTMLAttributes, ReactNode } from "react"

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & {
    children: ReactNode;
    href: string;
}

export default function NavLink({children, href, className, ...rest}: NavLinkProps) {
    const {asPath} = useRouter()
    return (
        <Link className={asPath === href ? `active ${!!className ? className : ""}` : !!className ? className : ""} href={href} {...rest} >
            {children}
        </Link>
    )
}