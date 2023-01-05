import Head from "next/head"
import { useRouter } from "next/router"

export default function Emblema() {
    const { code: BadgeCode } = useRouter().query
    return (
        <>
            <Head>
                <title>Scanner de emblemas • Ruby Center Api</title>
                <meta name="description" content="Confira todos os emblemas hospedados no Ruby Hotel." />
                <link rel='canonical' href='/emblemas' />
            </Head>
            <h1>Emblema {BadgeCode}</h1>
            <h2>Página em construção.</h2>
        </>
    )
}