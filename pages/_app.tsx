import '../styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Testing Tailwind</title>
        <meta name="description" content="Testing ground for tailwindcss components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
    </>
  )
}

export default MyApp
