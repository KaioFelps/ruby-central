import { useRouter } from "next/router"

export default function Emblema() {
    const { code: BadgeCode } = useRouter().query
    return (
        <h1>Emblema {BadgeCode}</h1>
    )
}