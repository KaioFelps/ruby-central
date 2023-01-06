import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { StyledLinearProgress } from '../styles/styledComponents'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { events } = useRouter()
  const [ isLoading, setIsLoading ] = useState(false)

  const handleRouteChangeStart = useCallback(() => {
    setIsLoading(true)
  }, [])

  const handleRouteChangeComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    events.on("routeChangeStart", handleRouteChangeStart)
    events.on("routeChangeComplete", handleRouteChangeComplete)
  }, [events, handleRouteChangeComplete, handleRouteChangeStart])

  return (
    <>
      { isLoading ? <StyledLinearProgress /> : null }
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
