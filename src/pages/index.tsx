import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ruby Center Api</title>
        <meta name="description" content="Encontre tudo sobre o Ruby Hotel, de emblemas e mobis à informações de usuários!" />
        <link rel='canonical' href='/' />
      </Head>
    </>
  )
}
