import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'
import Header from './components/header'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
