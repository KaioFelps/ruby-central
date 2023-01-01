import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'
import { Footer } from './components/Footer'
import Header from './components/Header'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
