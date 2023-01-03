import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { AnchorHTMLAttributes, ReactNode } from "react"

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & {
    children: ReactNode;
    href: string;
    exact?: boolean
}

export default function NavLink({children, href, className, exact = true, ...rest}: NavLinkProps) {
    const {asPath} = useRouter()
    const isActive = href === asPath || asPath.includes(href)
    const isExactlyActive = href === asPath

    if (exact === false) {
        return (
            <Link className={isActive ? `active ${!!className ? className : ""}` : !!className ? className : ""} href={href} {...rest} >
                {children}
            </Link>
        )
    }

    return (
        <Link className={isExactlyActive ? `active ${!!className ? className : ""}` : !!className ? className : ""} href={href} {...rest} >
            {children}
        </Link>
    )
}